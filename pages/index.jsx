import { useRef } from "react";

// const jsxs = [
//   <div>a</div>,
//   <div>b</div>,
//   <div>c</div>,
//   <div>d</div>,
//   <div>e</div>,
// ];

function useJsx() {
  return useRef([
    <div>a</div>,
    <div>b</div>,
    <div>c</div>,
    <div>d</div>,
    <div>e</div>,
  ]).current;
}

export default function HomePage() {
  const jsxs = useJsx();
  return <div>Hello World! {jsxs}</div>;
}
