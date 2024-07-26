// This example calculates custom function result.
builder.CreateFile("xlsx");
Api.AddCustomFunction(function ADD(first, second) {
    return first + second;
})
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange('A1').SetValue('=ADD(1,2)');
builder.SaveFile("xlsx", "AddCustomFunction.xlsx");
builder.CloseFile();