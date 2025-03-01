# SetTimeUTC

Sets the timestamp of the comment reply creation in UTC format.

## Syntax

```javascript
expression.SetTimeUTC(nTimeStamp);
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number \| String |  | The timestamp of the comment reply creation in UTC format. |

## Returns

This method doesn't return any data.

## Example

This example sets the timestamp of the comment reply creation in UTC format.

```javascript editor-xlsx
// How to change a timestamp in UTC when a reply was created.

// Add a reply then update its creation time in UTC format and show it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetTimeUTC(Date.now());
oWorksheet.GetRange("A3").SetValue("Comment's reply timestamp UTC: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetTimeUTC());
```
