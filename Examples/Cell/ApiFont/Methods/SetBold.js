// Make selected text characters appear bold in a spreadsheet.

// How do I apply bold formatting to specific characters in a spreadsheet?

// Turn on bold weight for a portion of cell text to make it stand out in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);