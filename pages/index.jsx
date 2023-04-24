import Hello from "../Hello";
import World from "../World";

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
  return (
    <div>
      <Hello></Hello>
      <World></World>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {},
  };
}
