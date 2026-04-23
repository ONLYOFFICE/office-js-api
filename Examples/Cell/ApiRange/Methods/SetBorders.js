// Add a border to a cell in a spreadsheet.

// How do I draw a border on a specific side of a cell in a spreadsheet?

// Define which edge of a cell gets a border, its thickness, and its color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
worksheet.GetRange("A2").SetValue("This is a cell with a bottom border");