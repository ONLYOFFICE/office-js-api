# CreateShape

Creates a shape with the parameters specified.

## Syntax

expression.CreateShape(sType?, nWidth?, nHeight?, oFill?, oStroke?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [ShapeType](../../../Enumerations/ShapeType.md) | The shape type which specifies the preset shape geometry. Default value is "rect". |
| nWidth | Optional | [EMU](../../../Enumerations/Emu.md) | The shape width in English measure units. Default value is "914400". |
| nHeight | Optional | [EMU](../../../Enumerations/Emu.md) | The shape height in English measure units. Default value is "914400". |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the shape. Default value is "Api.CreateNoFill()". |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | The stroke used to create the element shadow. Default value is "Api.CreateStroke(0, Api.CreateNoFill())". |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

This example creates a shape using the 'rect' preset.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "CreateShape.docx");
builder.CloseFile();
```