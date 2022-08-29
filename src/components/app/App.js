//import logo from "./logo.svg";
import "./App.css";

import { Navigation } from "../navigation";

const App = () => {
  return (
    <div className="App">
      <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky top-0 p-4 w-full">
          <Navigation />
        </div>
      </div>
      <main role="main" className="w-full h-full flex-grow p-3 overflow-auto bg-red-100">
        Content
      </main>
    </div>
  );
};

export default App;
export { App };
