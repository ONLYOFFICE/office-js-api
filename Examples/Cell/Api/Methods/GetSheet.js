// Open a specific sheet by name and write content into one of its cells in a spreadsheet.

// How do I navigate to a particular sheet using its tab name in a spreadsheet?

// Target a named sheet directly and place a value into it without switching tabs in a spreadsheet.

let worksheet = Api.GetSheet("Sheet1");
worksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");