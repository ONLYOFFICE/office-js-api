// This example shows how get outline of the existing run.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetFontFamily("Comic Sans MS");
const textArt = Api.CreateWordArt(textPr, "<DEFAULT_COLOR />", "textWave1", null, null, 0, 1550 * 36000, 50 * 36000);
paragraph.AddDrawing(textArt);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 221));
const outline = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 175, 204)));

const firstRun = Api.CreateRun();
firstRun.AddText("<PINK_COLOR />");
firstRun.SetTextFill(fill);
firstRun.SetOutLine(outline);

const secondRun = Api.CreateRun();
secondRun.AddText('<SAME_COLOR />');
secondRun.SetTextFill(firstRun.GetTextFill());
secondRun.SetOutLine(firstRun.GetOutLine());

paragraph = Api.CreateParagraph();
paragraph.Push(firstRun);
paragraph.Push(secondRun);
textArt.GetContent().Push(paragraph);
