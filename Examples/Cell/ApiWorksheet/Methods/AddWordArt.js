// This example adds a Text Art object to the sheet with the parameters specified.

// How to add a word art to the worksheet specifying its properties, color, size, etc.

// Insert a word art to the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(72);
oTextPr.SetBold(true);
oTextPr.SetCaps(true);
oTextPr.SetColor(51, 51, 51, false);
oTextPr.SetFontFamily("Comic Sans MS");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oWorksheet.AddWordArt(oTextPr, "onlyoffice", "textArchUp", oFill, oStroke, 0, 100 * 36000, 20 * 36000, 0, 2, 2 * 36000, 3 * 36000);