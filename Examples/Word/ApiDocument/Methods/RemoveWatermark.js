// This example sets the parameters of the watermark settings and apply them to the document.

// How to remove the watermark.

// Add the watermark with settings and then delete it.

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
textPr.SetHighlight("blue");
watermarkSettings.SetTextPr(textPr);
doc.SetWatermarkSettings(watermarkSettings);
let watermarkSettings2 = doc.GetWatermarkSettings();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("Watermark Type = " + watermarkSettings2.GetType());
doc.Push(paragraph1);
doc.RemoveWatermark();
let watermarkSettings3 = doc.GetWatermarkSettings();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Watermark Type = " + watermarkSettings3.GetType());
doc.Push(paragraph2);