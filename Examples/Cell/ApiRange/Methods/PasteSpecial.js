// This example pastes data from clipboard(if it possible) with options.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("test");
oWorksheet.GetRange("A1").Copy();
oWorksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);