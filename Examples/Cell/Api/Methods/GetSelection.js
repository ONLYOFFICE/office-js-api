// This example shows how to get an object that represents the selected range.
// How to get selected range object.
// Update the value of the selected range.
var oWorksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");