# AddComment

Adds a comment to the current range.

## Syntax

expression.AddComment(sText, sAuthor?);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The comment text. |
| sText | Optional | String | The comment text. Default value is username. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null (returns null if comment can't be added)

## Example

This example adds a comment to the range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("The comment was added to the cell A1.");
oWorksheet.GetRange("A4").SetValue("Comment: " + oRange.GetComment().GetText());
builder.SaveFile("xlsx", "AddComment.xlsx");
builder.CloseFile();
```