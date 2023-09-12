# SetUserId

Sets the user ID to the comment author.

## Syntax

expression.SetUserId(sUserId);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sUserId | Required | String | The user ID of the comment author. |

## Returns

This method doesn't return any data.

## Example

This example sets the user ID to the comment author.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Comment's user Id: ");
oComment.SetUserId("uid-2");
oWorksheet.GetRange("B3").SetValue(oComment.GetUserId());
builder.SaveFile("xlsx", "SetUserId.xlsx");
builder.CloseFile();
```