# GetSpacingLineValue

Returns the paragraph line spacing value.

## Syntax

expression.GetSpacingLineValue();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

twips, line240, undefined

## Example

This example shows how to get the paragraph line spacing value.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddLineBreak();
var nSpacingLineValue = oParaPr.GetSpacingLineValue();
oParagraph.AddText("Spacing line value: " + nSpacingLineValue);
```
