// This example checks whether a formatted table is currently active (selected).

// How to determine if a table cell is selected.

// The active cell being inside the table range means any table operation will target that table.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("A3").SetValue("Bob");

let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

worksheet.GetRange("C1").SetValue("Is table active:");
worksheet.GetRange("D1").SetValue(table.GetActive());
