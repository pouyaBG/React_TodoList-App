/** @format */
import React from "react";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Complated", label: "Complated" },
  { value: "Uncomlplated", label: "Uncomlplated" },
];

const Navbar = ({ unComplatedTodos, onChange, selectedOption }) => {
  if (!unComplatedTodos) return <h2>Set your today todos!</h2>;
  return (
    <header>
      <span>{unComplatedTodos}</span> <h2>are not Complated</h2>
      {/* select part */}
      <Select
        onChange={onChange}
        value={selectedOption}
        options={options}
        className="select-part"
      />
    </header>
  );
};

export default Navbar;
