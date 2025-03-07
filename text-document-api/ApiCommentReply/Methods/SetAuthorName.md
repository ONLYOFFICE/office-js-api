# SetAuthorName

Sets the comment reply author's name.

## Syntax

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | Required | string |  | The comment reply author's name. |

## Returns

[ApiCommentReply](../../ApiCommentReply/ApiCommentReply.md)

## Example

This example sets the comment reply author's name.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "John Smith", "uid-1", 0);
let commentReply = comments[0].GetReply(0);
commentReply.SetAuthorName("Mark Potato");
let authorName = commentReply.GetAuthorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply author name: " + authorName);
doc.Push(paragraph);
```
