// This example saves changes to the specified document.

// How to save changes of the spreadsheets.

// Save all applied changes.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();