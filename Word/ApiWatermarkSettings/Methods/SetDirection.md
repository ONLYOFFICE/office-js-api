# SetDirection

Sets the direction of the watermark.

## Syntax

expression.SetDirection(sDirection);

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parametrs
| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sDirection | Required | [WatermarkDirection](../../../Enumerations/WatermarkDirection.md) | The direction of the watermark. |


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
oWatermarkSettings.SetTextPr(oTextPr);
oWatermarkSettings.SetOpacity(127);
oWatermarkSettings.SetDirection("clockwise45");
oDocument.SetWatermarkSettings(oWatermarkSettings);
builder.SaveFile("docx", "SetDirection.docx");
builder.CloseFile();
```