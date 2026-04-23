// Check whether a formatted table is currently selected in a spreadsheet.

// How do I tell if the user's cursor is inside a particular table in a spreadsheet?

// Confirm a table is active before running table-specific operations to avoid acting on the wrong range in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("A3").SetValue("Bob");

let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

worksheet.GetRange("C1").SetValue("Is table active:");
worksheet.GetRange("D1").SetValue(table.GetActive());