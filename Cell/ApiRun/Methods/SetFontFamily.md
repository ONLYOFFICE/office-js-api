# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

expression.SetFontFamily(sFontFamily);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | String | The font family or families used for the current text run. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets all 4 font slots with the specified font family.

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
oRun.SetFontFamily("Comic Sans MS");
oRun.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetFontFamily.xlsx");
builder.CloseFile();
```