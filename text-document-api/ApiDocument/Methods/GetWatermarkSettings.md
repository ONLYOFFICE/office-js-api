# GetWatermarkSettings

Returns the watermark settings in the current document.

## Syntax

```javascript
expression.GetWatermarkSettings();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWatermarkSettings](../../ApiWatermarkSettings/ApiWatermarkSettings.md)

## Example

This example sets the parameters of the watermark settings and apply them to the document.

```javascript editor-docx
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
textPr.SetHighlight("blue");
watermarkSettings.SetTextPr(textPr);
doc.SetWatermarkSettings(watermarkSettings);
```
