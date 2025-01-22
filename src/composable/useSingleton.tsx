import React, {
  createRef,
  ComponentType,
  createElement,
  useEffect,
  RefObject,
} from 'react'
import { createRoot } from 'react-dom/client'
import PQueue from 'p-queue'

// Types
type Component = ComponentType<any>
type ComponentInstance<C extends Component> = InstanceType<C>
interface GlobalInstance<C extends Component> {
  component: C
  ref: RefObject<ComponentInstance<C>>
}

// Global state
const instances = new Map<symbol, GlobalInstance<any>>()
let container: HTMLDivElement | null = null
let root: ReturnType<typeof createRoot> | null = null
const queue = new PQueue()

// Container component that renders all singleton instances
const GlobalContainer = () => {
  return (
    <React.Fragment>
      {Array.from(instances.values()).map((instance, index) =>
        createElement(instance.component, {
          key: index,
          ref: instance.ref,
        })
      )}
    </React.Fragment>
  )
}

/**
 * Initialize the container if it doesn't exist
 */
function initializeContainer() {
  if (!container) {
    container = document.createElement('div')
    container.id = 'global-singleton-container'
    document.body.appendChild(container)
    root = createRoot(container)
    root.render(<GlobalContainer />)
  }
}

/**
 * Create or return existing instance of a component
 */
async function createInstance<C extends Component>(
  id: symbol,
  component: C
): Promise<ComponentInstance<C>> {
  initializeContainer()

  let instance = instances.get(id)

  if (!instance) {
    instance = {
      component,
      ref: createRef<ComponentInstance<C>>(),
    }
    instances.set(id, instance)

    // Force re-render of container
    root?.render(<GlobalContainer />)

    // Wait for next render cycle
    await new Promise((resolve) => setTimeout(resolve, 0))
  }

  return instance.ref.current!
}

/**
 * Remove component instance
 */
async function removeInstance(id: symbol) {
  if (instances.has(id)) {
    instances.delete(id)
    root?.render(<GlobalContainer />)
    await new Promise((resolve) => setTimeout(resolve, 0))
  }
}

/**
 * Reset all instances
 */
export async function resetInstance() {
  instances.clear()
  if (root) {
    root.render(<GlobalContainer />)
    await new Promise((resolve) => setTimeout(resolve, 0))
  }
}

/**
 * Create or get singleton instance of a component
 */
export async function useSingleton<C extends Component>(
  component: C
): Promise<ComponentInstance<C>> {
  return queue.add(() => createInstance(Symbol.for(component.name), component))
}

/**
 * Remove singleton instance of a component
 */
export async function removeSingleton<C extends Component>(
  component: C
): Promise<void> {
  return queue.add(() => removeInstance(Symbol.for(component.name)))
}

// Custom hook for using singleton components
export function useSingletonComponent<C extends Component>(component: C) {
  useEffect(() => {
    let instance: ComponentInstance<C>

    useSingleton(component).then((comp) => {
      instance = comp
    })

    return () => {
      if (instance) {
        removeSingleton(component).catch(console.error)
      }
    }
  }, [component])
}
