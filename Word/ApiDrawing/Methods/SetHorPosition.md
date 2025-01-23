# SetHorPosition

Sets the absolute measurement for the horizontal positioning of the floating object.

## Syntax

expression.SetHorPosition(sRelativeFrom, nDistance);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | Required | [RelFromH](../../Enumeration/RelFromH.md) |  | The document element which will be taken as a countdown point for the object horizontal alignment. |
| nDistance | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the right side of the document element to the floating object measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the absolute measurement for the horizontal positioning of the floating object.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetHorPosition("rightMargin", 0);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another paragraph.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned next to the right margin horizontally.");
doc.Push(paragraph);
```
