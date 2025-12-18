# Assets

Place static files used by the app here.

## Recommended structure

- `src/assets/images/`
  - App images (logos, banners, illustrations)

- `src/assets/icons/`
  - Icon images (if you use image-based icons)

## Example usage (image)

1) Put a file at:
- `src/assets/images/logo.png`

2) Use in code:

```ts
import { Image } from "react-native";

export function Example() {
  return (
    <Image
      source={require("../assets/images/logo.png")}
      style={{ width: 64, height: 64 }}
    />
  );
}
```
