import { render } from 'solid-js/web';
import type { Component } from 'solid-js';

const click = () => {
  console.log("Click!");
};

const App: Component = () => {
  return (
    <div>
      <div>Hello World!!!</div>
      <button onClick={click}>Test</button>
    </div>
  );
};

render(() => <App />, document.getElementById('root') as HTMLElement);
