// Make text bold in a cell or cell range in a spreadsheet.

// How do I apply bold formatting to a group of cells in a spreadsheet?

// Emphasize cell content by switching its weight to bold in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Bold text");
worksheet.GetRange("A2").SetBold(true);
worksheet.GetRange("A3").SetValue("Normal text");