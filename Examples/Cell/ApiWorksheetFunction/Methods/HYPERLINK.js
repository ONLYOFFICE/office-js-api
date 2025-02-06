// This example shows how create a shortcut that jumps to another location in the current workbook, or opens a document stored on your hard drive, a network server, or on the Internet.
// How to create a hyperlink.
// Use a function to add url to the text.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.HYPERLINK("https://example.com/files/example.xlsx", "Click here"));