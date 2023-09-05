# SetCaps

Specifies that any lowercase characters in the current text run are formatted for display only as their capital letter character equivalents.

## Syntax

expression.SetCaps(isCaps);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | Boolean | Specifies that the contents of the current run are displayed capitalized. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies that any lowercase characters in the current text run are formatted for display only as their capital letter character equivalents.

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
oRun.SetCaps(true);
oRun.AddText("This is a text run with the font set to capitalized letters.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetCaps.xlsx");
builder.CloseFile();
```