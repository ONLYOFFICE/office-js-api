# SetText

Sets the text of the watermark in the document.

## Syntax

```javascript
expression.SetText(sText);
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The watermark text. |

## Returns

This method doesn't return any data.

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
textPr.SetHighlight("blue");
watermarkSettings.SetTextPr(textPr);
doc.SetWatermarkSettings(watermarkSettings);
```
