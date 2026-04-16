// Set the bold property to the text characters in the current cell or cell range.

// How to change the font style properties of a range making it bold in a spreadsheet.

// Make characters of the cell range object bold.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Bold text");
worksheet.GetRange("A2").SetBold(true);
worksheet.GetRange("A3").SetValue("Normal text");