# Select

Selects the current graphic object.

## Syntax

expression.Select();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example selects the current graphic object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDrawing.InsertParagraph("The Select property is applied to the drawing object", "before", false);
oDrawing.Select();
builder.SaveFile("docx", "Select.docx");
builder.CloseFile();
```