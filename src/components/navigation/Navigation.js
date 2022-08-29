import * as React from "react";
import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <ul className="flex sm:flex-col overflow-hidden content-center justify-between bg-slate-400">
        <li className="py-2 hover:bg-indigo-300 rounded">
          <a className="truncate" href="./">
            {/* <img
              src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg"
              className="w-7 sm:mx-2 mx-4 inline"
            /> */}
            <span className="hidden sm:inline">Color Tools</span>
          </a>
        </li>
        <li className="py-2 hover:bg-indigo-300 rounded">
          <a className="truncate" href="./">
            {/* <img
              src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg"
              className="w-7 sm:mx-2 mx-4 inline"
            /> */}
            <span className="hidden sm:inline">Music Tools</span>
          </a>
        </li>
      </ul>
    );
  }
}

export { Navigation };
