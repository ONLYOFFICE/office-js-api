# SetAuthorName

Sets the comment author's name.

## Syntax

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | Required | string |  | The comment author's name. |

## Returns

This method doesn't return any data.

## Example

This example sets the comment author's name.

```javascript editor-xlsx
// How to add author's name to the comment.

// Add a comment and author name to it, then show author name in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Comment's author: ");
oComment.SetAuthorName("Mark Potato");
oWorksheet.GetRange("B3").SetValue(oComment.GetAuthorName());
```
