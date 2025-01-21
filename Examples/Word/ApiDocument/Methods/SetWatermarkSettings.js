// This example sets the parameters of the watermark settings and apply them to the document.
let document = Api.GetDocument();
let watermarkSettings = document.GetWatermarkSettings();
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
document.SetWatermarkSettings(watermarkSettings);