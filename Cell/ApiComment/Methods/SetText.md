# SetText

Sets the comment text.

## Syntax

expression.SetText(text);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| text | Required | String | New text for comment. |

## Returns

This method doesn't return any data.

## Example

This example sets the comment text.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.SetText("New comment text");
builder.SaveFile("xlsx", "SetText.xlsx");
builder.CloseFile();
```