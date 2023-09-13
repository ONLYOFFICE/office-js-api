# SetStyle

Sets a style to the current run.

## Syntax

expression.SetStyle(oStyle);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../../Word/ApiStyle/ApiStyle.md) | The style which must be applied to the text run. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets a style to the run.

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
oRun.AddText("The text properties are changed and the style is added to the paragraph. ");
oParagraph.AddElement(oRun);
// todo_example in cells we don't have ability to create a style
// var oMyNewRunStyle = oDocument.CreateStyle("My New Run Style", "run");
var oTextPr = oMyNewRunStyle.GetTextPr();
oRun = Api.CreateRun();
// oRun.SetStyle(oMyNewRunStyle);
oRun.AddText("This is a text run with its own style.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetStyle.xlsx");
builder.CloseFile();
```