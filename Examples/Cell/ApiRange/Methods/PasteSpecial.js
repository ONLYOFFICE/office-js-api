// This example pastes data from theclipboard (if it is possible) with the specified options.
// How to paste the copied or cut data from the clipboard using the special paste options.
// Create a range, copy its value and paste it into another one with the specified properties.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("test");
oWorksheet.GetRange("A1").Copy();
oWorksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);