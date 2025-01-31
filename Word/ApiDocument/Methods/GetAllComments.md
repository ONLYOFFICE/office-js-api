# GetAllComments

Returns all comments from the current document.

## Syntax

```javascript
expression.GetAllComments();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiComment[]](../../ApiComment/ApiComment.md)

## Example

This example shows how to get all comments from the current document.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let type = comments[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
doc.Push(paragraph);
```
