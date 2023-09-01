# GetComments

Returns an array of ApiComment objects.

## Syntax

expression.GetComments();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiComment](../../ApiComment/ApiComment.md)>

## Example

This example shows how to get an array of ApiComment objects.

```javascript
builder.CreateFile("xlsx");
Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2", "Bob" );
var arrComments = Api.GetComments();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", arrComments[0].GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", arrComments[0].GetAuthorName());
builder.SaveFile("xlsx", "GetComments.xlsx");
builder.CloseFile();
```