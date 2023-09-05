# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current run.

## Syntax

expression.SetHighlight(sColor);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sColor | Required | [highlightColor](../../../Enumerations/highlightColor.md) | Available highlight color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies a highlighting color which is applied as a background to the contents of the run.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetHighlight("lightGray");
oRun.AddText("This is a text run with the text highlighted with light gray color.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetHighlight.xlsx");
builder.CloseFile();
```