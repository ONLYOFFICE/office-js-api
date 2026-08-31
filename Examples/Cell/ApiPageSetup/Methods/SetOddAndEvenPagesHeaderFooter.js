// Use different headers and footers on odd and even pages in a spreadsheet.

// How do I set separate headers/footers for odd and even pages when printing in a spreadsheet?

// Enable distinct odd and even page headers and footers for printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
pageSetup.GetEvenPage().GetCenterHeader().SetText("Even page &P");
