# GetDocument

Returns the main document.

## Syntax

```javascript
expression.GetDocument();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocument](../../ApiDocument/ApiDocument.md)

## Example

This example shows how to get a document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
