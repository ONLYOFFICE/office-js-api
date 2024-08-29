
Api.AddCustomFunction (function add (first, second) {
    if (second === null) {
        second = 0;
    }
    return first + second;
})
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("=ADD(1, 2)");
Api.ClearCustomFunctions();
oWorksheet.GetRange("A3").SetValue("All the custom functions were removed.");