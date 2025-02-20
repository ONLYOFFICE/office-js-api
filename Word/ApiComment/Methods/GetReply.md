# GetReply

Returns the specified comment reply.

## Syntax

```javascript
expression.GetReply(nIndex);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Optional | Number | false | The comment reply index. |

## Returns

[ApiCommentReply](../../ApiCommentReply/ApiCommentReply.md)

## Example

This example shows how to get the specified comment reply.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("First comment reply: " + commentReply.GetText());
doc.Push(paragraph);
```
