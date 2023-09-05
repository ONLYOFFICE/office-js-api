# SetColor

Sets the text color for the current text run in the RGB format.

## Syntax

expression.SetColor(r, g, b, isAuto?);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| isAuto | Optional | Boolean | If this parameter is set to "true", then r,g,b parameters will be ignored. Default values is "false". |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text color for the current text run in the RGB format.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run with the font color set to gray.");
oParagraph.AddElement(oRun);
oRun.SetColor(128, 128, 128);
builder.SaveFile("xlsx", "SetColor.xlsx");
builder.CloseFile();
```