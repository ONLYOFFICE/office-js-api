# SetTextPr

Sets the text properties to the current run.

## Syntax

expression.SetTextPr(oTextPr);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | The text properties that will be set to the current run. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text properties to the current run.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a sample text with the font size set to 15 points and the font weight set to bold.");
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oRun.SetTextPr(oTextPr);
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetTextPr.xlsx");
builder.CloseFile();
```