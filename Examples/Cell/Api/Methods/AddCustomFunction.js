// This example calculates custom function result.
// How to add custom function library.
// How to use custom function.
// How to add cell values using custom function library.
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

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange('A1').SetValue('=ADD(1,2)');