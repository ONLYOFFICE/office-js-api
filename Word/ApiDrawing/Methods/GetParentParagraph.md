# GetParentParagraph

Returns a parent paragraph that contains the graphic object.

## Syntax

```javascript
expression.GetParentParagraph();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) | null

## Example

This example shows how to get a parent paragraph that contains the graphic object.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let parentParagraph = drawing.GetParentParagraph();
parentParagraph.AddLineBreak();
parentParagraph.AddText("This is a parent paragraph");
```
