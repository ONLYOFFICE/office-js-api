# Copy

Creates a paragraph copy. Ingnore comments, footnote references, complex fields.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiParagraph](../ApiParagraph.md)

## Example

This example creates a paragraph copy.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("This is a text inside the shape aligned left.");
oParagraph.AddLineBreak();
oParagraph.AddText("This is a text after the line break.");
var oParagraph2 = oParagraph.Copy();
oDocContent.Push(oParagraph2);
builder.SaveFile("xlsx", "Copy.xlsx");
builder.CloseFile();
```