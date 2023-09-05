# CreateGradientStop

Creates a gradient stop used for different types of gradients.

## Syntax

expression.CreateGradientStop(oUniColor, nPos);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oUniColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) | The color used for the gradient stop. |
| nPos | Required | [PositivePercentage](../../../Enumerations/PositivePercentage.md) | The position of the gradient stop measured in 1000th of percent. |

## Returns

[ApiGradientStop](../../ApiGradientStop/ApiGradientStop.md)

## Example

This example shows how to create a gradient stop used for different types of gradients.

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
builder.SaveFile("docx", "CreateGradientStop.docx");
builder.CloseFile();
```