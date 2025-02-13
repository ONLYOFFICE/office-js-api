# SetDistances

Specifies the minimum distance which will be maintained between the edges of the current drawing object and any
subsequent text.

## Syntax

```javascript
expression.SetDistances(nLeft, nTop, nRight, nBottom);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the left side of the current object and the subsequent text run measured in English measure units. |
| nTop | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the top side of the current object and the preceding text run measured in English measure units. |
| nRight | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the right side of the current object and the subsequent text run measured in English measure units. |
| nBottom | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the bottom side of the current object and the subsequent text run measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example specifies the minimum distance which will be maintained between the edges of the drawing object and any subsequent text.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is 1 inch (914400 English measure units).");
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(914400, 0, 914400, 0);
drawing.SetWrappingStyle("square");
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another paragraph.");
doc.Push(paragraph);
```
