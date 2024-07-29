# GetClassType

Returns a type of the ApiInlineLvlSdt class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"inlineLvlSdt"

## Example

This example gets a class type and inserts it into the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun, 0);
var sClassType = oInlineLvlSdt.GetClassType();
oParagraph.AddLineBreak();
oParagraph.AddText("Class Type = " + sClassType);
```
