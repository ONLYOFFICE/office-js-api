// This example creates a Text Art object with the "textArchUp" text transform type.

// How to create word art indicating its text properties.

// Add arch up text word art.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(72);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetColor(51, 51, 51, false);
textPr.SetFontFamily("Comic Sans MS");
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
const textArt = Api.CreateWordArt(textPr, "onlyoffice", "textArchUp", fill, stroke, 0, 100 * 36000, 30 * 36000);
slide.AddObject(textArt);
