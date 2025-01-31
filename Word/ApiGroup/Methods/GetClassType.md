# GetClassType

Returns a type of the ApiGroup class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiGroup](../ApiGroup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"group"

## Example

This example gets a class type and inserts it into the document.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.CreateRGBColor(111, 255, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 3212465, 963295, fill1, stroke);
let shape2 = Api.CreateShape("rect", 1606232, 481647, fill2, stroke);
shape1.SetWrappingStyle("inFront");
shape2.SetWrappingStyle("inFront");
shape2.SetHorPosition("page", 1606232);
paragraph.AddDrawing(shape1);
paragraph.AddDrawing(shape2);
let group = doc.GroupDrawings([shape1, shape2]);
let classType = group.GetClassType();
let docContent1 = shape1.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
docContent1.AddElement(0, paragraph);
let docContent2 = shape2.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
docContent2.AddElement(0, paragraph);

```
