# SetOutLine

Sets the text outline to the current text run.

## Syntax

expression.SetOutLine(oStroke);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) | The stroke used to create the text outline. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text outline to the current text run

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oStroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128)));
oTextPr.SetOutLine(oStroke);
oParagraph.SetJc("left");
oRun.AddText("This is a text run with the gray text outline set using the text properties.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetOutLine.xlsx");
builder.CloseFile();
```