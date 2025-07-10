//

const doc = Api.GetDocument();

const textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetOutLine(Api.CreateStroke(0, Api.CreateNoFill()));
textPr.SetTextFill(Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
textPr.SetFontFamily('Comic Sans MS');

const textArt = Api.CreateWordArt(textPr, 'ONLYOFFICE', 'textArchUp', null, null, 0, 200 * 36000, 100 * 36000);
const paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);

const textArtFill = textPr.GetTextFill();
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 130 * 36000, 30 * 36000, textArtFill, stroke);
drawing.GetDocContent().GetElement(0).AddText('This is a rectangle with the same fill as the WordArt text.');
paragraph.AddDrawing(drawing);
