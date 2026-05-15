// Remove a watermark after applying it with custom settings in a document.

// How do I add and then delete a watermark in a document?

// Verify that a watermark can be cleared by checking the type before and after removal in a document.

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
textPr.SetColor(Api.RGB(0, 255, 0));
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