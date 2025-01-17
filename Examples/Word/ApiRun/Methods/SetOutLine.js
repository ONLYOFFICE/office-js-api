// In this example, add the text with a text outline to the WordArt.
var oDocument = Api.GetDocument();
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oTextPr.SetCaps(true);
oTextPr.SetFontFamily("Comic Sans MS");
var oTextArt = Api.CreateWordArt(oTextPr, "onlyoffice", "textWave1", null, null, 0, 1550 * 36000, 50 * 36000);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oTextArt);

oParagraph = Api.CreateParagraph();
let oRun = Api.CreateRun();
oRun.AddText("is the best office suite");
oRun.SetOutLine(Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51))));
oRun.SetTextFill(Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oParagraph.Push(oRun);
oParagraph.SetJc("center");
oTextArt.GetContent().Push(oParagraph);