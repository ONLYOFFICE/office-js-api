// This example sets the parameters of the watermark settings and apply them to the document.
builder.CreateFile("docx");
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
oTextPr.SetHighlight("blue");
oWatermarkSettings.SetTextPr(oTextPr);
oDocument.SetWatermarkSettings(oWatermarkSettings);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();