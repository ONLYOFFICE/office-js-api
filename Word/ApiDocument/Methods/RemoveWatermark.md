# RemoveWatermark

Removes the watermark in the document.

## Syntax

expression.RemoveWatermark();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters. 

## Returns

This method doesn't return any data.

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
const oWatermarkSettings2 = oDocument.GetWatermarkSettings();
const oParagraph1 = Api.CreateParagraph();
oParagraph1.AddText("Watermark Type = " + oWatermarkSettings2.GetType());
oDocument.Push(oParagraph1);
oDocument.RemoveWatermark();
const oWatermarkSettings3 = oDocument.GetWatermarkSettings();
const oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("Watermark Type = " + oWatermarkSettings3.GetType());
oDocument.Push(oParagraph2);
builder.SaveFile("docx", "RemoveWatermark.docx");
builder.CloseFile();
```