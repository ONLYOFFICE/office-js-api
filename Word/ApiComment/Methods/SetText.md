# SetText

Sets the comment text.

## Syntax

```javascript
expression.SetText(sText);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example sets the comment text.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetText("new comment's text");
```
