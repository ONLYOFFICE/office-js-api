# GetEndNotesFirstParagraphs

Returns the first paragraphs from all endnotes in the current document.

## Syntax

```javascript
expression.GetEndNotesFirstParagraphs();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

This example shows how to get the first paragraphs from all endnotes in the document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddEndnote();
let endNotesFirstParagraphs = doc.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
endNotesFirstParagraphs[0].SetBold(true);
```
