# GetOpacity

Returns the opacity of the watermark in the document.

## Syntax

```javascript
expression.GetOpacity();
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example sets the parameters of the watermark settings and apply them to the document.

```javascript
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
watermarkSettings.SetTextPr(textPr);
watermarkSettings.SetOpacity(127);
doc.SetWatermarkSettings(watermarkSettings);
let watermarkSettings2 = doc.GetWatermarkSettings();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Opacity = " + watermarkSettings2.GetOpacity());
doc.Push(paragraph);
```
