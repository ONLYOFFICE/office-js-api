# GetAllShapes

Returns a collection of shape objects from the document content.

## Syntax

expression.GetAllShapes();

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiShape](../../ApiShape/ApiShape.md)>

## Example

This example shows how to get a collection of shape objects from the document content.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape1 = Api.CreateShape("rect", 95 * 36000, 85 * 36000, oFill, oStroke);
oParagraph.AddDrawing(oShape1);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape2 = Api.CreateShape("ellipse", 90 * 36000, 80 * 36000, oFill, oStroke);
oParagraph = Api.CreateParagraph();
oParagraph.AddDrawing(oShape2);
var oDocContent = oShape1.GetDocContent();
oDocContent.AddElement(0, oParagraph);
var aShapes = oDocContent.GetAllShapes();
oDocContent = aShapes[0].GetDocContent();
var sClassType = aShapes[0].GetClassType();
oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Class Type = " + sClassType);
oParagraph.SetColor(51, 51, 51);
aShapes[0].SetVerticalTextAlign("bottom");
builder.SaveFile("docx", "GetAllShapes.docx");
builder.CloseFile();
```