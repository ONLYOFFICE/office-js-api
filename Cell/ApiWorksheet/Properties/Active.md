# Active

Makes the current sheet active. **Set-only**

## Syntax

expression.Active = true;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Returns

This propertie doesn't return any data.

## Example

This example makes the sheet active.

```javascript
builder.CreateFile("xlsx");
Api.AddSheet("New_sheet");
var oSheet = Api.GetSheet("New_sheet");
oSheet.Active = true;
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("The current sheet is active.");
builder.SaveFile("xlsx", "Active.xlsx");
builder.CloseFile();
```