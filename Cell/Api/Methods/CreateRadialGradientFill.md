# CreateRadialGradientFill

Creates a radial gradient fill to apply to the object using the selected radial gradient as the object background.

## Syntax

expression.CreateRadialGradientFill(aGradientStop);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aGradientStop | Required | Array |  | The array of gradient color stops measured in 1000th of percent. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example shows how to create a radial gradient fill.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
```
