# AddEndnote

Adds an endnote for the selected text (or the current position if the selection doesn't exist).

## Syntax

expression.AddEndnote();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example adds an for the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddEndnote();
var aEndNotesFirstParagraphs = oDocument.GetEndNotesFirstParagraphs();
aEndNotesFirstParagraphs[0].AddText("Endnote 1");
aEndNotesFirstParagraphs[0].SetBold(true);
```
