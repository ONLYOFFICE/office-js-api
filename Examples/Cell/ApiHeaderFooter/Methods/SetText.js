// Set the text of a header or footer section when printing in a spreadsheet.

// How do I put the page number in the even-pages center header in a spreadsheet?

// Give a header/footer section its own text (with formatting codes) when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let centerHeader = pageSetup.GetEvenPage().GetCenterHeader();
centerHeader.SetText("Even page &P");
