// Assign a new text label to a selected range of characters within a cell in a spreadsheet.

// How do I update the visible text of a specific character range inside a cell in a spreadsheet?

// Relabel a portion of cell content without affecting the rest of the cell's text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
characters.SetCaption("string");