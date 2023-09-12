# Comments

Returns the ApiComment collection that represents all the comments from the specified worksheet. **Read-only**

## Syntax

expression.Comments;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null (returns null if range does not consist of one cell)

## Example

This example shows how to get the ApiComment object of the range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment: " + oRange.Comments.GetText());
builder.SaveFile("xlsx", "Comments.xlsx");
builder.CloseFile();
```