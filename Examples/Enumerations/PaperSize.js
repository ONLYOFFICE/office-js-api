// The paper size, specified as an Excel xlPaperSize constant name.

// Common values: "xlPaperLetter", "xlPaperLegal", "xlPaperA3", "xlPaperA4".

// How to set the print paper size of a worksheet.

let pageSetup = Api.GetActiveSheet().GetPageSetup();
pageSetup.SetPaperSize("xlPaperA4");
