# Copy

Creates a paragraph copy. Ingnore comments, footnote references, complex fields.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example creates a paragraph copy.

```javascript
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample text that was copied.");
var oParagraph2 = oParagraph1.Copy();
oDocument.Push(oParagraph2);
```
