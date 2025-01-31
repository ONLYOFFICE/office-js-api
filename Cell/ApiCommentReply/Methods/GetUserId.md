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

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oWorksheet.GetRange("A3").SetValue("Comment's reply user Id: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetUserId());
```
