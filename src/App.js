import { main_file } from "./db-config";
import { initializeApp } from "firebase/app";
import "./components/style.scss";
import Typography from "./components/Typography";
import Page from "./components/Page/Page";
const app = initializeApp(main_file);

function App() {
  return (
    <div className="App">
      <div>
        <Page />
      </div>
      <div></div>
    </div>
  );
}

export default App;
