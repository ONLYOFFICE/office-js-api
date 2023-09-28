# SetOpacity

Sets the opacity of the watermark in the document.

## Syntax

expression.SetOpacity(nOpacity);

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parametrs
| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nOpacity | Required | Number | The value of opacity of the watermark. Value must be from 0 to 255. |


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
oDocument.SetWatermarkSettings(oWatermarkSettings);
builder.SaveFile("docx", "SetOpacity.docx");
builder.CloseFile();
```