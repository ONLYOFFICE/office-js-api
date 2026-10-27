// Set the number printed on the first page of a spreadsheet.

// How do I make page numbering start from a specific number when printing a spreadsheet?

// Begin the printed page numbers at a custom value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFirstPageNumber(5);
