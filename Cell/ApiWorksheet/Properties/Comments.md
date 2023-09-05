# Comments

Returns an array of the ApiComment objects. **Read-only**

## Syntax

expression.Comments;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Returns

Array<[ApiComment](../../ApiComment/ApiComment.md)>

## Example

This example shows how to get an array of ApiComment objects.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
var aComments = oWorksheet.Comments;
oWorksheet.GetRange("A4").SetValue("Comment: " + aComments[0].GetText());
builder.SaveFile("xlsx", "Comments.xlsx");
builder.CloseFile();
```