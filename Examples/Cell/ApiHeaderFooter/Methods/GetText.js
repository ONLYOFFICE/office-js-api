// Read the text of a header or footer section in a spreadsheet.

// How do I find out what text is in the even-pages center header in a spreadsheet?

// Check the current text (including formatting codes) of a header/footer section in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let centerHeader = pageSetup.GetEvenPage().GetCenterHeader();
centerHeader.SetText("Even page &P");
let text = centerHeader.GetText();
worksheet.GetRange("A1").SetValue("Even center header: " + text);
