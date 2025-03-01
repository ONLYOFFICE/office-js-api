# SetText

Sets the comment text.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | New text for comment. |

## Returns

This method doesn't return any data.

## Example

This example sets the comment text.

```javascript editor-xlsx
// How to change a comment text.

// Replace a comment text with a new text.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.SetText("New comment text");
```
