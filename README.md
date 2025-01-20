# @msa_cli/react-composable

Welcome to **@msa_cli/react-composable**, a utility library designed to simplify your React projects by providing reusable and helpful React functions.

## Features

This package offers easy-to-use React hooks and utilities to streamline your development process. Currently, the package includes:

## features currently available

### `useBase64`

### `useDebounce`

### `useDraggable`

### `useDropZone`

### `useFetch`

### `useDateFormat`

### `useStorage`

### `useNetwork`

### `useElementBounding`

### `useScreenlock`

### `useBreakPoints`

## Installation

Install the package using npm or yarn:

```bash
npm install @msa_cli/react-composable
```

## Usage

Import the desired hook into your React component:

```javascript
import { useBase64 } from '@msa_cli/react-composable'

function App() {
  const { encode, decode } = useBase64()

  const encodedString = encode('Hello, World!')
  const decodedString = decode(encodedString)

  return (
    <div>
      <p>Encoded: {encodedString}</p>
      <p>Decoded: {decodedString}</p>
    </div>
  )
}

export default App
```

## Documentation

### `useBase64`

#### Usage

```javascript
const { encode, decode } = useBase64()
```

#### Methods

- **`encode(input: string): string`**  
  Encodes the given string into Base64 format.

- **`decode(input: string): string`**  
  Decodes the given Base64-encoded string back into its original format.

## Contributions

Contributions are welcome! Feel free to submit issues or pull requests on our [GitHub repository](https://github.com/msa_cli/react-composable).

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Start building faster and more efficiently with **@msa_cli/react-composable**!
