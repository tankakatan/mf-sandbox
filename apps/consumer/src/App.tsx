import "./App.css";
import Button from "remote/Button";
import Button2 from "remote_lib/Button";

const App = () => {
  return (
    <div className="content">
      <h1>Consumer App</h1>
      <p>Rsbuild with React</p>
      <Button />
      <Button2 />
    </div>
  );
};

export default App;
