export function Component1() {
  return <h1>I am heading one... From first component</h1>;
}

export function Component2() {
  return <h2>I am heading two... From second component</h2>;
}

export function Component3() {
  return <h3>I am heading three... From third component</h3>;
}

export function Button1() {
  return <button type="button">Click Me!!</button>;
}

export function Fun() {
  return <h1>Sandesh</h1>;
}

export function Age(props) {
  return <h1>Sandesh age={props.age} </h1>;
}

export function Fun3(props) {
  return (
    <div>
      <h1>name={props.name} </h1>
      <Age age={props.age} />
    </div>
  );
}
