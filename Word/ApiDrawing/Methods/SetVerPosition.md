# SetVerPosition

Sets the absolute measurement for the vertical positioning of the floating object.

## Syntax

```javascript
expression.SetVerPosition(sRelativeFrom, nDistance);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | Required | [RelFromV](../../Enumeration/RelFromV.md) |  | The document element which will be taken as a countdown point for the object vertical alignment. |
| nDistance | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the bottom part of the document element to the floating object measured in English measure units. |

## Returns

boolean

## Example

This example sets the absolute measurement for the vertical positioning of the floating object.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text (horizontally) is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetVerPosition("page", 914400);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned to the top of the page, and outstands from the page top 1 inch.");
doc.Push(paragraph);
```
