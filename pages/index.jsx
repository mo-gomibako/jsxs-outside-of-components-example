// import { jsxs } from "../helper";
// import { useJsx } from "../helper";

export default function HomePage() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

function HelloWorld() {
  const jsxs = [];
  return (
    <div>
      <div>Hello World!</div>
      <div>{jsxs}</div>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {},
  };
}
