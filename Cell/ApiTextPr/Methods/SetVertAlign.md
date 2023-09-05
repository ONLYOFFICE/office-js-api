# SetVertAlign

Specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run.

## Syntax

expression.SetVertAlign(sType);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [VertAlign](../../../Enumerations/VertAlign.md) | The vertical alignment type applied to the text contents. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run.

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
oTextPr.SetVertAlign("superscript");
oParagraph.SetJc("left");
oRun.AddText("This is a text inside the shape with vertical alignment set to 'superscript'.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetVertAlign.xlsx");
builder.CloseFile();
```