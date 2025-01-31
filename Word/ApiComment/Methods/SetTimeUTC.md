# SetTimeUTC

Sets the timestamp of the comment creation in UTC format.

## Syntax

```javascript
expression.SetTimeUTC(nTimeStamp);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number | String |  | The timestamp of the comment creation in UTC format. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example sets the timestamp of the comment creation in UTC format.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetTimeUTC("1672247153658");
let timeUTC = comments[0].GetTimeUTC();
paragraph = Api.CreateParagraph();
paragraph.AddText("The timestamp of comment creation in UTC format: " + timeUTC);
doc.Push(paragraph);
```
