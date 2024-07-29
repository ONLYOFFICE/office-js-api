// This example calculates custom function result.
Api.AddCustomFunction(function ADD(first, second) {
    return first + second;
})
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange('A1').SetValue('=ADD(1,2)');