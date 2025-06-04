// This example sets the parameters of the watermark settings and apply them to the document.

// How to set the image opacity of the watermark.

// Indicate the image opacity in watermark settings.

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