# SetBold

Sets the bold property to the text character.

## Syntax

expression.SetBold(isBold);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isBold | Required | Boolean | Specifies that the contents of the current run are displayed bold. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the bold property to the text character.

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
oTextPr.SetBold(true);
oParagraph.SetJc("left");
oRun.AddText("This is a sample text inside the shape with the font weight set to bold using the text properties.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetBold.xlsx");
builder.CloseFile();
```