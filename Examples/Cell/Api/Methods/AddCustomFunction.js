// This example calculates custom function result.

// How to add custom function.

// How to use custom function.

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