# SetTime

Sets the timestamp of the comment creation in the current time zone format.

## Syntax

```javascript
expression.SetTime(nTimeStamp);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number | String |  | The timestamp of the comment creation in the current time zone format. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example sets the timestamp of the comment creation in the current time zone format.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetTime("1672247153658");
let time = comments[0].GetTime();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment creation timestamp: " + time);
doc.Push(paragraph);
```
