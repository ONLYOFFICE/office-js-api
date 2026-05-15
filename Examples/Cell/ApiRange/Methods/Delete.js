// Remove a range of cells and shift the remaining data to fill the gap in a spreadsheet.

// How do I delete a group of cells and choose which direction the surrounding data moves in a spreadsheet?

// Erase selected cells while controlling whether neighboring content slides up or across in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Delete("up");