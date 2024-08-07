# GetPlaceholderText

Returns the placeholder text from the current inline content control.

## Syntax

expression.GetPlaceholderText();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the placeholder text from the content control.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.SetPlaceholderText("Enter your text here");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var sText = oInlineLvlSdt.GetPlaceholderText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Placeholder text: " + sText);
oDocument.Push(oParagraph);
```
