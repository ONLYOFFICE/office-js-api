// Read the first page number used when printing a spreadsheet.

// How do I find out what number the printed pages start from in a spreadsheet?

// Check the starting page number before printing a spreadsheet (null means automatic).

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFirstPageNumber(5);
let firstPageNumber = pageSetup.GetFirstPageNumber();
worksheet.GetRange("A1").SetValue("First page number: " + firstPageNumber);
