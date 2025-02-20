# CreateLinearGradientFill

Creates a linear gradient fill to apply to the object using the selected linear gradient as the object background.

## Syntax

```javascript
expression.CreateLinearGradientFill(gradientStops, angle);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| gradientStops | Required | Array |  | The array of gradient color stops measured in 1000th of percent. |
| angle | Required | [PositiveFixedAngle](../../Enumeration/PositiveFixedAngle.md) |  | The angle measured in 60000th of a degree that will define the gradient direction. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates a linear gradient fill to apply to the object using the selected linear gradient as the object background.

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
