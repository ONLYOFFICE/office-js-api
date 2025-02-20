# GetFootnotesFirstParagraphs

Returns the first paragraphs from all footnotes in the current document.

## Syntax

```javascript
expression.GetFootnotesFirstParagraphs();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph[]](../../ApiParagraph/ApiParagraph.md)

## Example

This example showh how to get the first paragraphs from all footnotes in the document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);
```
