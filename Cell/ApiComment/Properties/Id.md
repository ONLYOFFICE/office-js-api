# Id

Returns the current comment ID. **Read-only**

## Syntax

expression.Id;

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Returns

String

## Example

This example shows how to get the comment ID.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment: ");
oWorksheet.GetRange("B3").SetValue(oRange.GetComment().Id);
builder.SaveFile("xlsx", "tId.xlsx");
builder.CloseFile();
```