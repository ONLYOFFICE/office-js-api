// Apply custom text formatting to the watermark in a document.

// How do I change the font style and color of a watermark in a document?

// Style the watermark label with a specific font, size, and highlight in a document.

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