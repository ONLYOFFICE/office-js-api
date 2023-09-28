# GetWatermarkSettings

Returns the current settings of watermark in the document.

## Syntax

expression.GetWatermarkSettings();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiWatermarkSettings](../../ApiWatermarkSettings/ApiWatermarkSettings.md)

## Example

This example sets the parameters of the watermark settings and apply them to the document.

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
builder.SaveFile("docx", "GetWatermarkSettings.docx");
builder.CloseFile();
```