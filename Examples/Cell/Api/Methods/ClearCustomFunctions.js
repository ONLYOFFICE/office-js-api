// Remove all registered custom functions at once in a spreadsheet.

// How do I unregister every custom function that was added in a spreadsheet?

// Clean up previously defined calculation functions to reset the formula environment in a spreadsheet.

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
Api.ClearCustomFunctions();
worksheet.GetRange("A3").SetValue("All the custom functions were removed.");