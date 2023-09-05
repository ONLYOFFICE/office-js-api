# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

expression.SetFontFamily(sFontFamily);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

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
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetFontFamily("Comic Sans MS");
oParagraph.SetJc("left");
oRun.AddText("This is a sample text inside the shape with the font family set to 'Comic Sans MS' using the text properties.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetFontFamily.xlsx");
builder.CloseFile();
```