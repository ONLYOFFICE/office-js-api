# GetAllShapes

Returns a collection of shape objects from the document content.

## Syntax

```javascript
expression.GetAllShapes();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape[]](../../ApiShape/ApiShape.md)

## Example

This example shows how to get a collection of shape objects from the document content.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 95 * 36000, 85 * 36000, fill, stroke);
paragraph.AddDrawing(shape1);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape2 = Api.CreateShape("ellipse", 90 * 36000, 80 * 36000, fill, stroke);
paragraph = Api.CreateParagraph();
paragraph.AddDrawing(shape2);
let docContent = shape1.GetDocContent();
docContent.AddElement(0, paragraph);
let shapes = docContent.GetAllShapes();
docContent = shapes[0].GetDocContent();
let classType = shapes[0].GetClassType();
paragraph = docContent.GetElement(0);
paragraph.AddText("Class Type = " + classType);
paragraph.SetColor(51, 51, 51);
shapes[0].SetVerticalTextAlign("bottom");
```
