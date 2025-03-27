# GetClassType

Returns a type of the ApiCommentReply class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"commentReply"

## Example

This example gets a class type and inserts it into the table.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
let type = reply.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);
```
