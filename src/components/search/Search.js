import React from "react";
import { createGlobalState } from "react-hooks-global-state";
import "./Search.css";
import Loupe from "../../images/Loupe.svg";

const initialState = { inputValue: "" };
const { useGlobalState } = createGlobalState(initialState);

function Search() {
  const [inputValue, setInputValue] = useGlobalState("inputValue");

  let changeFunction = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="Input">
      <div>
        <img src={Loupe} alt="" />
      </div>
      <div>
        <input
          type="search"
          onChange={changeFunction}
          value={inputValue}
          placeholder="Search!"
        ></input>
      </div>
    </div>
  );
}

export default Search;
export const useGlobalInput = useGlobalState;
