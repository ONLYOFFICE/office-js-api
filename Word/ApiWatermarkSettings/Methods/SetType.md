# SetType

Sets the type of the watermark in the document.

## Syntax

expression.SetType(sType);

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [WatermarkType](../../Enumeration/WatermarkType.md) |  | The watermark type. |

## Returns

This method doesn't return any data.

## Example

This example sets the parameters of the watermark settings and apply them to the document.

```javascript
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
```
