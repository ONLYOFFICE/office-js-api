# AddFootnote

Adds a footnote for the selected text (or the current position if the selection doesn't exist).

## Syntax

expression.AddFootnote();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example adds footnote fot the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddFootnote();
var aFootnotesFirstParagraphs = oDocument.GetFootnotesFirstParagraphs();
aFootnotesFirstParagraphs[0].AddText("Footnote 1");
aFootnotesFirstParagraphs[0].SetBold(true);
```
