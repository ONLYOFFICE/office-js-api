# RemoveAllElements

Removes all the elements from the current inline text content control.

## Syntax

expression.RemoveAllElements();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example clears the contents from the content control.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.AddText("This is an inline text content control.");
oInlineLvlSdt.RemoveAllElements();
oInlineLvlSdt.AddText("We removed all the inline content control elements.");
```
