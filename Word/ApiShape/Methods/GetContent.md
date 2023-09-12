# GetContent

Returns the shape inner contents where a paragraph or text runs can be inserted.

## Syntax

expression.GetContent();

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) &#124; null

## Example

This example shows how to get the shape inner contents where a paragraph or text runs can be inserted.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetContent();
var sClassType = oDrawing.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + sClassType);
oDocContent.AddElement(0, oParagraph);
builder.SaveFile("docx", "GetContent.docx");
builder.CloseFile();
```