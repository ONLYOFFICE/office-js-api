# SetTextFill

Sets the text fill to the current text run.
<br>Inherited From: [ApiTextPr#SetTextFill](../../ApiTextPr/Methods/SetTextFill.md)

## Syntax

expression.SetTextFill(oApiFill);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text fill to the current text run.

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
oFill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
oRun.SetTextFill(oFill);
oRun.AddText("This is a text run with the gray text.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetTextFill.xlsx");
builder.CloseFile();
```