# Comments

Returns an array of ApiComment objects. **Read-only**

## Syntax

expression.Comments;

`expression` - A variable that represents a [Api](../Api.md) class.

## Returns

Array<[ApiComment](../../ApiComment/ApiComment.md)>

## Example

This example shows how to get an array of ApiComment objects.

```javascript
builder.CreateFile("xlsx");
Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2", "Bob" );
var arrComments = Api.Comments;
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", arrComments[0].GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", arrComments[0].GetAuthorName());
builder.SaveFile("xlsx", "Comments.xlsx");
builder.CloseFile();
```