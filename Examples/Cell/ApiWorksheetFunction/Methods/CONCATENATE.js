// Merge several text strings into a single string in a spreadsheet.

// What happens when you join different text values together in a spreadsheet?

// Link multiple pieces of text to form one combined string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONCATENATE("John", " ", "Adams"));