# Delete

Deletes the current worksheet.

## Syntax

expression.Delete();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example deletes the worksheet.

```javascript
builder.CreateFile("xlsx");
Api.AddSheet("New sheet");
var oSheet = Api.GetActiveSheet();
oSheet.Delete();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3").SetValue("This method just deleted the second sheet from this spreadsheet.");
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();
```