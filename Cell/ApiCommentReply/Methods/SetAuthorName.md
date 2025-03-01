# SetAuthorName

Sets the comment reply author's name.

## Syntax

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | Required | string |  | The comment reply author's name. |

## Returns

This method doesn't return any data.

## Example

This example sets the comment reply author's name.

```javascript editor-xlsx
// How to add author's name to the reply.

// Add a reply to the comment and set author name, then show author name in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetAuthorName("Mark Potato");
oWorksheet.GetRange("A3").SetValue("Comment's reply author: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetAuthorName());
```
