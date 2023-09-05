# SetSmallCaps

Specifies that all the small letter characters in this text run are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

expression.SetSmallCaps(isSmallCaps);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | Boolean | Specifies if the contents of the current run are displayed capitalized two points smaller or not. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies that all the small letter characters in this text run are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

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
oRun.SetSmallCaps(true);
oRun.AddText("This is a text run with the font set to small capitalized letters.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetSmallCaps.xlsx");
builder.CloseFile();
```