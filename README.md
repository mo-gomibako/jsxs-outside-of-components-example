### .next-with-variable-archive

```jsx
import { useRef } from "react"; // 実際にはこれもバンドルされていることが多い

export const jsxs = [
  <div>a</div>,
  <div>b</div>,
  <div>c</div>,
  <div>d</div>,
  <div>e</div>,
];
```

```jsx
// Hello.jsx, World.jsx
import { jsxs } from "./helper";

export default function Hello() {
  return (
    <div>
      <div>Hello!</div>
      <div>{jsxs}</div>
    </div>
  );
}
```

```bash
Route (pages)                              Size     First Load JS
┌ λ /                                      362 B            78 kB
└ ○ /404                                   194 B          77.8 kB
+ First Load JS shared by all              77.6 kB
  ├ chunks/framework-7dc8a65f4a0cda33.js   45.2 kB
  ├ chunks/main-b5a644155a23712d.js        31.4 kB
  ├ chunks/pages/_app-dc14f8483464b560.js  201 B
  └ chunks/webpack-fd82975a6094609f.js     727 B
```

### .next-with-hook-archive

```jsx
// helper.jsx
import { useRef } from "react";

export function useJsx() {
  return useRef([
    <div>a</div>,
    <div>b</div>,
    <div>c</div>,
    <div>d</div>,
    <div>e</div>,
  ]).current;
}
```

```jsx
// Hello.jsx, World.jsx
import { useJsx } from "./helper";

export default function Hello() {
  return (
    <div>
      <div>Hello!</div>
      <div>{useJsx()}</div>
    </div>
  );
}
```

```bash
Route (pages)                              Size     First Load JS
┌ λ /                                      381 B            78 kB
└ ○ /404                                   194 B          77.8 kB
+ First Load JS shared by all              77.6 kB
  ├ chunks/framework-7dc8a65f4a0cda33.js   45.2 kB
  ├ chunks/main-b5a644155a23712d.js        31.4 kB
  ├ chunks/pages/_app-dc14f8483464b560.js  201 B
  └ chunks/webpack-fd82975a6094609f.js     727 B
```
