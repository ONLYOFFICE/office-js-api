# GetNextShape

Returns the next inline shape if exists.

## Syntax

```javascript
expression.GetNextShape();
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md) | null

## Example

This example shows how to get the next inline shape.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape1);
let shape2 = Api.CreateShape("wave", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape2);
let nextShape = shape1.GetNextShape();
fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
nextShape.Fill(fill);
```
