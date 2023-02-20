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
      <img src={Loupe} alt="" />
      <input
        className="Search"
        type="search"
        onChange={changeFunction}
        value={inputValue}
        placeholder="Search!"
      ></input>
    </div>
  );
}

export default Search;
export const useGlobalInput = useGlobalState;
