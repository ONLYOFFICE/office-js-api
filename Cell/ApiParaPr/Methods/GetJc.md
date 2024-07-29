# GetJc

Returns the paragraph contents justification.

## Syntax

expression.GetJc();

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"left", "right", "both", "center", undefined

## Example

This example shows how to get the paragraph contents justification.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParagraph.AddText("This is a paragraph with the text in it aligned by the center. ");
oParagraph.AddText("The justification is specified in the paragraph style. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParaPr.SetJc("center");
var sJc = oParaPr.GetJc();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Justification: " + sJc);
oDocument.Push(oParagraph);
```
