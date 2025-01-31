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

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetText("New reply text.");
oWorksheet.GetRange("A3").SetValue("Comment's reply text: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetText());
```
