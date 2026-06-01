// Replace the text of a targeted group of characters inside a cell in a spreadsheet.

// How do I change the actual text stored in a specific character selection within a cell in a spreadsheet?

// Rewrite a defined portion of cell content to reflect updated information in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetText