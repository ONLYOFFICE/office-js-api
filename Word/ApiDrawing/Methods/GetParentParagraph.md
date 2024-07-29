# GetParentParagraph

Returns a parent paragraph that contains the graphic object.

## Syntax

expression.GetParentParagraph();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiParagraph, null

## Example

This example shows how to get a parent paragraph that contains the graphic object.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oParentParagraph = oDrawing.GetParentParagraph();
oParentParagraph.AddLineBreak();
oParentParagraph.AddText("This is a parent paragraph");
```
