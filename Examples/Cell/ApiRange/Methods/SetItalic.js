// This example sets the italic property to the text characters in the cell.

// How to make a text value of cells italic.

// Get a range and make specified cells font style italic.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Italicized text");
worksheet.GetRange("A2").SetItalic(true);
worksheet.GetRange("A3").SetValue("Normal text");