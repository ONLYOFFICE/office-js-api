# CreateShape

Creates a shape with the parameters specified.

## Syntax

```javascript
expression.CreateShape(shapeType, width, height, fill, stroke);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shapeType | Optional | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | The shape type which specifies the preset shape geometry. |
| width | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape width in English measure units. |
| height | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape height in English measure units. |
| fill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | The color or pattern used to fill the shape. |
| stroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | The stroke used to create the element shadow. |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

This example creates a shape using the 'rect' preset.

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
