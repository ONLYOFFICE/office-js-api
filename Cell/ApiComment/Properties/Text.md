# Text

The string value representing the text of the comment text.

## Syntax

expression.Text; &#124; expression.Text = Text;

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Text | Required | String | The text to be set. |

## Returns

String

## Example

This example sets a text for the comment.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("Comment text");
oWorksheet.GetRange("A3").SetValue("Comment: ");
var oComment = oRange.GetComment();
oComment.Text = "This is just a number."
oWorksheet.GetRange("B3").SetValue(oComment.Text);
builder.SaveFile("xlsx", "Text.xlsx");
builder.CloseFile();
```