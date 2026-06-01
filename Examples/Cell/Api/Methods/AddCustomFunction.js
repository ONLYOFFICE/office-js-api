// Register a custom function and call it from a cell formula in a spreadsheet.

// How do I define my own calculation function for use in cells in a spreadsheet?

// Extend built-in formulas with a user-written function that sums two numbers in a spreadsheet.

/**
 * Function that returns the argument
 * @customfunction
 * @param {number} first First argument.
 * @param {number} second Second argument.
 * @returns {number} The sum of the numbers.
 */
Api.AddCustomFunction(function ADD(first, second) {
    return first + second;
});

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('=ADD(1,2)');