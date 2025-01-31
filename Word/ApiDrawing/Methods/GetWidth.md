# GetWidth

Returns the width of the current drawing.

## Syntax

```javascript
expression.GetWidth();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EMU](../../Enumeration/EMU.md)

## Example

This example shows how to get the width of the drawing.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 100 * 36000, 10 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);
let width = drawing.GetWidth();
let docContent = drawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing width: " + width / 36000 + " mm");
docContent.AddElement(0, paragraph);
```
