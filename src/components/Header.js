import React from "react";
const Header = ({onDarkModeClick, isDarkMode}) => {
    function handleClick(e){ 
        e.preventDefault();
    }
    return(
        <>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </>
    )
}
export default Header;