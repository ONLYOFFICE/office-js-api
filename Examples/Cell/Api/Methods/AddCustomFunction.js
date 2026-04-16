// Calculate custom function result in a spreadsheet.

// How to add custom function in a spreadsheet.

// How to use custom function in a spreadsheet.

// How to add cell values using custom function.

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