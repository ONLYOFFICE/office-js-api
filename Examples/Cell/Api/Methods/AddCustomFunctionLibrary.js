// Bundle related custom functions into a named library and use them in cells in a spreadsheet.

// How do I group custom functions under a shared library name in a spreadsheet?

// Organize reusable calculation logic inside a function library in a spreadsheet.

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