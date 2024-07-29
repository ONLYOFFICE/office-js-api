# GetClassType

Returns a type of the ApiSchemeColor class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiSchemeColor](../ApiSchemeColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"schemeColor"

## Example

This example gets a class type and inserts it into the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSchemeColor = Api.CreateSchemeColor("dk1");
var oFill = Api.CreateSolidFill(oSchemeColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var sClassType = oSchemeColor.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + sClassType);
oDocument.Push(oParagraph);
```
