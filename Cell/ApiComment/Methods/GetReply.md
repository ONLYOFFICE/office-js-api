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

```javascript editor-xlsx
// How to get a reply to the comment.

// Add a cooment reply text to a range of the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oWorksheet.GetRange("A3").SetValue("Comment's reply text: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetText());
```
