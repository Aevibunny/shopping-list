// Function to save checkbox state in localStorage
export const saveCheckboxState = (index, isChecked) => {
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
    checkboxStates[index] = isChecked;
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
}

// Function to get checkbox state from localStorage
export const getCheckboxState = (index) => {
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
    return checkboxStates[index] || false; // Default to unchecked if no state is saved
}
