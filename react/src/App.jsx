import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setShowModal(true)}>modal</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div class={`backdrop ${showModal ? "" : "hidden"}`}>
        <div class="modal">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            sunt fuga magnam a, id rerum tempora nam quibusdam repellendus,
            mollitia laudantium? Recusandae dolorem voluptatum vitae?
            Reprehenderit nisi vel veniam voluptates.
          </p>
          <button class="btn" onClick={() => setShowModal(false)}>
            close
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
