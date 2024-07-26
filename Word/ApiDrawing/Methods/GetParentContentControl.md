# GetParentContentControl

Returns a parent content control that contains the graphic object.

## Syntax

expression.GetParentContentControl();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiBlockLvlSdt, null

## Example

This example shows how to get a parent content control that contains the graphic object.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
var oParentContentControl = oDrawing.GetParentContentControl();
oParentContentControl.AddText("This is a parent content control.");
```
