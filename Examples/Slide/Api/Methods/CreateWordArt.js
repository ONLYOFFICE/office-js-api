// Create stylized text with an arch-shaped curve in a presentation.

// How do I add decorative curved text to a presentation in a presentation?

// Insert text art with custom formatting and text effects in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(72);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetColor(Api.HexColor('#333333'));
textPr.SetFontFamily("Comic Sans MS");
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
const textArt = Api.CreateWordArt(textPr, "onlyoffice", "textArchUp", fill, stroke, 0, 100 * 36000, 30 * 36000);
slide.AddObject(textArt);