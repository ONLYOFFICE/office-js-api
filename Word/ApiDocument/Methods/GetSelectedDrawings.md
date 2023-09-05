# GetSelectedDrawings

Returns all the selected drawings in the current document.

## Syntax

expression.GetSelectedDrawings();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiShape](../../ApiShape/ApiShape.md)> &#124; Array<[ApiImage](../../ApiImage/ApiImage.md)> &#124; Array<[ApiChart](../../ApiChart/ApiChart.md)> &#124; Array<[ApiDrawing](../../ApiDrawing/ApiDrawing.md)>

## Example

This example shows how to get all the selected drawings in the current document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDrawing.Select();
var aDrawings = oDocument.GetSelectedDrawings();
aDrawings[0].SetSize(2 * 914400, 2 * 914400);
builder.SaveFile("docx", "GetSelectedDrawings.docx");
builder.CloseFile();
```