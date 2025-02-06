// This example pastes data from clipboard(if it possible) with options.
// How to paste copied or cut data from clipboard using special paste options.
// Create a range copy its value and paste it into another one with properties.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("test");
oWorksheet.GetRange("A1").Copy();
oWorksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);