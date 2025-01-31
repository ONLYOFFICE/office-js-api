# GetUserId

Returns the user ID of the comment author.

## Syntax

```javascript
expression.GetUserId();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the user ID of the comment author.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetUserId("uid-1");
let userId = comments[0].GetUserId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment user ID: " + userId);
doc.Push(paragraph);
```
