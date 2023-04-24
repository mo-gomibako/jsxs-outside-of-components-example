import { useRef } from "react";

export const jsxs = [
  <div>a</div>,
  <div>b</div>,
  <div>c</div>,
  <div>d</div>,
  <div>e</div>,
];

export function useJsx() {
  return useRef([
    <div>a</div>,
    <div>b</div>,
    <div>c</div>,
    <div>d</div>,
    <div>e</div>,
  ]).current;
}
