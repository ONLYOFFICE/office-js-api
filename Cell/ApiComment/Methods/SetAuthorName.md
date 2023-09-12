# SetAuthorName

Sets the comment author's name.

## Syntax

expression.SetAuthorName(sAuthorName);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAuthorName | Required | String | The comment author's name. |

## Returns

This method doesn't return any data.

## Example

This example sets the comment author's name.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Comment's author: ");
oComment.SetAuthorName("Mark Potato");
oWorksheet.GetRange("B3").SetValue(oComment.GetAuthorName());
builder.SaveFile("xlsx", "SetAuthorName.xlsx");
builder.CloseFile();
```