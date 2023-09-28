# GetText

Returns the texts of the watermark in the document.

## Syntax

expression.GetText();

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String; null

## Example

This example gets a watermark text and pastes it into the document.

```javascript
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
const oWatermarkSettings2 = oDocument.GetWatermarkSettings();
const oParagraph = Api.CreateParagraph();
oParagraph.AddText("Watermark Text = " + oWatermarkSettings2.GetText());
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetText.docx");
builder.CloseFile();
```