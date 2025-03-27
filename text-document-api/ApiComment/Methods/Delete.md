# Delete

Deletes the current comment from the document.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example delets the comment from the document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].Delete();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment to the first paragraph was deleted");
doc.Push(paragraph);
```
