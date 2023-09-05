# SetSpacing

Sets the text spacing measured in twentieths of a point.

## Syntax

expression.SetSpacing(nSpacing);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nSpacing | Required | [twips](../../../Enumerations/twips.md) | The value of the text spacing measured in twentieths of a point (1/1440 of an inch). |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text spacing measured in twentieths of a point.

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
oRun.SetSpacing(80);
oRun.AddText("This is a text run with the text spacing set to 4 points (20 twentieths of a point).");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetSpacing.xlsx");
builder.CloseFile();
```