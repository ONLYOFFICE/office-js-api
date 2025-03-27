# SetText

Sets the comment reply text.

## Syntax

```javascript
expression.SetText(sText);
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment reply text. |

## Returns

This method doesn't return any data.

## Example

This example sets the comment reply text.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetText("New reply text.");
worksheet.GetRange("A3").SetValue("Comment's reply text: ");
worksheet.GetRange("B3").SetValue(reply.GetText());
```
