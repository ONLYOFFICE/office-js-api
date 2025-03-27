# GetAuthorName

Returns the comment author's name.

## Syntax

```javascript
expression.GetAuthorName();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the comment author's name.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let authorName = comments[0].GetAuthorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Author name: " + authorName);
doc.Push(paragraph);
```
