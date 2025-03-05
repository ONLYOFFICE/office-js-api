# GetUserId

Returns the user ID of the comment reply author.

## Syntax

```javascript
expression.GetUserId();
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the user ID of the comment reply author.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply user Id: ");
worksheet.GetRange("B3").SetValue(reply.GetUserId());
```
