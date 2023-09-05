# Delete

Deletes the current paragraph.

## Syntax

expression.Delete();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example deletes the paragraph.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
oDocContent.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oDocContent.Push(oParagraph);
oParagraph.Delete();
oWorksheet.GetRange("A9").SetValue("The paragraph from the shape content was removed.");
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();
```