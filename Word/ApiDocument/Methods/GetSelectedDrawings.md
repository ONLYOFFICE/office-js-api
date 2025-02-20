# GetSelectedDrawings

Returns all the selected drawings in the current document.

## Syntax

```javascript
expression.GetSelectedDrawings();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape[]](../../ApiShape/ApiShape.md) \| [ApiImage[]](../../ApiImage/ApiImage.md) \| [ApiChart[]](../../ApiChart/ApiChart.md) \| [ApiDrawing[]](../../ApiDrawing/ApiDrawing.md)

## Example

This example shows how to get all the selected drawings in the current document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.Select();
let drawings = doc.GetSelectedDrawings();
drawings[0].SetSize(2 * 914400, 2 * 914400);
```
