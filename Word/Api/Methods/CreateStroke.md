# CreateStroke

Creates a stroke adding shadows to the element.

## Syntax

expression.CreateStroke(nWidth, oFill);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The width of the shadow measured in English measure units. |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The fill type used to create the shadow. |

## Returns

[ApiStroke](../../ApiStroke/ApiStroke.md)

## Example

This example shows how to crate a stroke.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRGBColor = Api.CreateRGBColor(51, 51, 51);
var oFill = Api.CreateSolidFill(oRGBColor);
var oStroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
var oDrawing = Api.CreateShape("roundRect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "CreateStroke.docx");
builder.CloseFile();
```