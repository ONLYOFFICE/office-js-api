// Select a substring of text inside a cell and format it separately in a spreadsheet.

// How do I bold just a few characters within a cell's text in a spreadsheet?

// Extract a slice of text by position and apply bold formatting to those characters only.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);