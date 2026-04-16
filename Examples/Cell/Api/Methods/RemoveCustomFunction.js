// Clear current custom function in a spreadsheet.

// How to delete custom created function from the library in a spreadsheet.

// Remove custom function library in a spreadsheet.

Api.AddCustomFunctionLibrary("LibraryName", function(){
    /**
     * Function that returns the argument
     * @customfunction
     * @param {any} first First argument.
     * @returns {any} second Second argument.
     */
    Api.AddCustomFunction(function ADD(first, second) {
        return first + second;
    });
});
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("=ADD(1, 2)");
Api.RemoveCustomFunction("add");
worksheet.GetRange("A3").SetValue("The ADD custom function was removed.");