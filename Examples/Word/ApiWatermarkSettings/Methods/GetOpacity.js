// This example sets the parameters of the watermark settings and apply them to the document.

// How to get the opacity of the watermark. 

// Get the percent of the watermark opacity from its settings.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("text");
watermarkSettings.SetText("Example");
let textPr = watermarkSettings.GetTextPr();
textPr.SetFontFamily("Calibri");
textPr.SetFontSize(-1);
textPr.SetDoubleStrikeout(true);
textPr.SetItalic(true);
textPr.SetBold(true);
textPr.SetUnderline(true);
textPr.SetColor(0, 255, 0);
watermarkSettings.SetTextPr(textPr);
watermarkSettings.SetOpacity(127);
doc.SetWatermarkSettings(watermarkSettings);
let watermarkSettings2 = doc.GetWatermarkSettings();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Opacity = " + watermarkSettings2.GetOpacity());
doc.Push(paragraph);