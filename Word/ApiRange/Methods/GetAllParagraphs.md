# GetAllParagraphs

Returns a collection of paragraphs that represents all the paragraphs in the specified range.

## Syntax

```javascript
expression.GetAllParagraphs();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

This example shows how to get a collection of paragraphs that represents all the paragraphs in the specified range.

```javascript editor-docx
let doc = editor.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = editor.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let paragraphs = range.GetAllParagraphs();
paragraphs[0].SetBold("true");
```
