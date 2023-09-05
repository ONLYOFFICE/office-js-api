# GetAllDrawingObjects

Returns a collection of drawing objects in the current content control.

## Syntax

expression.GetAllDrawingObjects();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiDrawing](../../ApiDrawing/ApiDrawing.md)>

## Example

This example shows how to get a collection of drawing objects in the content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing2 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing1);
oParagraph.AddDrawing(oDrawing2);
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
var arrAllDrawingObjects = oBlockLvlSdt.GetAllDrawingObjects();
arrAllDrawingObjects[0].Delete();
builder.SaveFile("docx", "GetAllDrawingObjects.docx");
builder.CloseFile();
```