# CreateShape

Creates a shape with the parameters specified.

## Syntax

expression.CreateShape(sType, nWidth, nHeight, oFill, oStroke);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | ShapeType | "rect" | The shape type which specifies the preset shape geometry. |
| nWidth | Optional | EMU | 914400 | The shape width in English measure units. |
| nHeight | Optional | EMU | 914400 | The shape height in English measure units. |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | The color or pattern used to fill the shape. |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | The stroke used to create the element shadow. |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)