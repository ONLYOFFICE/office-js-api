# GetOpacity

Returns the opacity of the watermark in the document.

## Syntax

expression.GetOpacity();

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

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
oWatermarkSettings.SetTextPr(oTextPr);
oWatermarkSettings.SetOpacity(127);
oDocument.SetWatermarkSettings(oWatermarkSettings);
const oWatermarkSettings2 = oDocument.GetWatermarkSettings();
const oParagraph = Api.CreateParagraph();
oParagraph.AddText("Watermark Opacity = " + oWatermarkSettings2.GetOpacity());
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetOpacity.docx");
builder.CloseFile();
```