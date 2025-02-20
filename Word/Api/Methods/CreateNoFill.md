# CreateNoFill

Creates no fill and removes the fill from the element.

## Syntax

```javascript
expression.CreateNoFill();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates no fill and removes the fill from the element.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
