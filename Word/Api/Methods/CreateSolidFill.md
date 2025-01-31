# CreateSolidFill

Creates a solid fill to apply to the object using a selected solid color as the object background.

## Syntax

```javascript
expression.CreateSolidFill(uniColor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| uniColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) |  | The color used for the element fill. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example shows how to create a solid fill.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
