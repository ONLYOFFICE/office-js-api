// Insert decorative arched text into a paragraph in a document.

// How do I add stylized curved text to a document?

// Place bold capitalized text shaped into an upward arch with a colored fill and outline in a document.

let doc = Api.GetDocument();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetColor(Api.HexColor('#333333'));
textPr.SetFontFamily("Comic Sans MS");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
let textArt = Api.CreateWordArt(textPr, "onlyoffice", "textArchUp", fill, stroke, 0, 150 * 36000, 50 * 36000);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);