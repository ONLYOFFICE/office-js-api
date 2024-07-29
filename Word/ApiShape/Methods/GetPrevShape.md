# GetPrevShape

Returns the previous inline shape if exists.

## Syntax

expression.GetPrevShape();

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiShape, null

## Example

This example shows how to get the previous inline shape.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oShape1);
var oShape2 = Api.CreateShape("wave", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oShape2);
var oPrevShape = oShape2.GetPrevShape();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oPrevShape.Fill(oFill);
```
