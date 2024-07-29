// This example saves changes to the specified document.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();