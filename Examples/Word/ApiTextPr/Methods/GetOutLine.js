//

const doc = Api.GetDocument();

const textPr = Api.CreateTextPr();
textPr.SetFontSize(100);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetOutLine(Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 175, 204))));
textPr.SetTextFill(Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 221)));
textPr.SetFontFamily('Comic Sans MS');

const textArt = Api.CreateWordArt(textPr, 'ONLYOFFICE', 'textArchUp', null, null, 0, 200 * 36000, 100 * 36000);
const paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);

const fill = textPr.GetTextFill();
const stroke = textPr.GetOutLine();
const drawing = Api.CreateShape('rect', 100 * 36000, 20 * 36000, fill, stroke);
drawing.GetDocContent().GetElement(0).AddText('This is a rectangle with the same fill and outline as the WordArt text.');
paragraph.AddDrawing(drawing);
