# GetDirection

Returns the direction of the watermark.

## Syntax

expression.GetDirection();

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[WatermarkDirection](../../../Enumerations/WatermarkDirection.md)

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
oWatermarkSettings.SetTextPr(oTextPr);
oWatermarkSettings.SetOpacity(127);
oWatermarkSettings.SetDirection("clockwise45");
oDocument.SetWatermarkSettings(oWatermarkSettings);
const oWatermarkSettings2 = oDocument.GetWatermarkSettings();
const oParagraph = Api.CreateParagraph();
oParagraph.AddText("Watermark Direction = " + oWatermarkSettings2.GetDirection());
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetDirection.docx");
builder.CloseFile();
```