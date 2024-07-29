// This example sets the parameters of the watermark settings and apply them to the document.
const oDocument = Api.GetDocument();
const oWatermarkSettings = oDocument.GetWatermarkSettings();
oWatermarkSettings.SetType("text");
oWatermarkSettings.SetText("Example");
const oTextPr = oWatermarkSettings.GetTextPr();
oTextPr.SetFontFamily("Calibri");
oTextPr.SetFontSize(-1);
oTextPr.SetDoubleStrikeout(true);
oTextPr.SetItalic(true);
oTextPr.SetBold(true);
oTextPr.SetUnderline(true);
oTextPr.SetColor(0, 255, 0);
oWatermarkSettings.SetTextPr(oTextPr);
oWatermarkSettings.SetOpacity(127);
oDocument.SetWatermarkSettings(oWatermarkSettings);