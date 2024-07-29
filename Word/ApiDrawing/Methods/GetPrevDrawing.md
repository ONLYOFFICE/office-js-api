# GetPrevDrawing

Returns the previous inline drawing object if exists.

## Syntax

expression.GetPrevDrawing();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiDrawing, null

## Example

This example shows how to get the previous inline drawing object if exists.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oCopyDrawing = oDrawing.Copy();
oParagraph.AddDrawing(oCopyDrawing);
var oNextDrawing = oCopyDrawing.GetPrevDrawing();
oNextDrawing.SetHorFlip(true);
```
