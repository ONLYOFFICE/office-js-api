// In this example, the WordArt text has a text fill.
var oDocument = Api.GetDocument();
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oTextPr.SetCaps(true);
oTextPr.SetOutLine(Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51))));
oTextPr.SetTextFill(Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oTextPr.SetFontFamily("Comic Sans MS");
var oTextArt = Api.CreateWordArt(oTextPr, "onlyoffice", "textArchUp", null, null, 0, 150 * 36000, 50 * 36000);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oTextArt);