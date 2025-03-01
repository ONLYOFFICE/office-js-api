# GetTimeUTC

Returns the timestamp of the comment reply creation in UTC format.

## Syntax

```javascript
expression.GetTimeUTC();
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the timestamp of the comment reply creation in UTC format.

```javascript editor-xlsx
// How to get a time in UTC when a reply was created.

// Add a comment reply creation timestamp UTC to a range of the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oWorksheet.GetRange("A3").SetValue("Comment's reply timestamp UTC: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetTimeUTC());
```
