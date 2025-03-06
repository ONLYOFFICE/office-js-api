# SetDrawingPrFromDrawing

Sets the properties from another drawing to the current drawing.\
The following properties will be copied: horizontal and vertical alignment, distance between the edges of the current drawing object and any subsequent text, wrapping style, drawing name, title and description.

## Syntax

```javascript
expression.SetDrawingPrFromDrawing(oAnotherDrawing);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oAnotherDrawing | Required | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | The drawing which properties will be set to the current drawing. |

## Returns

boolean

## Example

This example sets the properties from another drawing to the drawing.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke);
drawing1.SetDistances(457200, 457200, 457200, 0);
drawing1.SetWrappingStyle("square");
drawing1.SetHorAlign("page", "center");
paragraph.AddDrawing(drawing1);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another paragraph.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned at the center of the page horizontally.");
doc.Push(paragraph);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing2 = Api.CreateShape("roundRect", 50 * 36000, 30 * 36000, fill, stroke);
drawing2.SetDrawingPrFromDrawing(drawing1);
paragraph.AddDrawing(drawing2);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another shape.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("It has the same properties (alignment type, distances and wrapping type) as the shape above.");
doc.Push(paragraph);
```
