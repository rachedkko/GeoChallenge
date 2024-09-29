const gameViewStyles = {
    indicatorsContainer: (provided) => ({
      ...provided,
      border: "none", // Remove border inside the select
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Hide the vertical border separator
    }),
    singleValue: (provided) => ({
      ...provided,
      fontWeight: "bold", // Set the selected value font to bold
    }),
    option: (provided) => ({
      ...provided,
      fontWeight: "bold", // Set the option text to bold
    }),
    placeholder: (provided) => ({
      ...provided,
      fontWeight: "bold", // Set the placeholder text to bold
    }),
    control: (provided, state) => ({
      ...provided,
      height: "3.25rem", // Adjust the height as needed
      "&:hover": {
        cursor: "pointer", // Change the cursor on hover
      },
    }),
  };

  export default gameViewStyles