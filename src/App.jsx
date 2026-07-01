import "./App.css";
import Wolf from "./components/Wolf";

function App() {
  return (
    <>
      <div className="divFather">
        <div className="divContent">
          {/* <h1>Curte e Comenta</h1> */}
        </div>

        <div className="divModel3D">
          <Wolf />
        </div>
      </div>
    </>
  );
}

export default App;