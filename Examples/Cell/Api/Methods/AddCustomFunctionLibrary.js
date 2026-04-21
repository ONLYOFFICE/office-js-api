// Calculate custom function result in a spreadsheet.

// A custom function library groups related functions under a single namespace.

// Add cell values using a custom function library.

Api.AddCustomFunctionLibrary("LibraryName", function(){
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
});

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('=ADD(1,2)');