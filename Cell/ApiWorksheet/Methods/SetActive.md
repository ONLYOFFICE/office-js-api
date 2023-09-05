# SetActive

Makes the current sheet active.

## Syntax

expression.SetActive();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example makes the sheet active.

```javascript
builder.CreateFile("xlsx");
Api.AddSheet("New_sheet");
var oSheet = Api.GetSheet("New_sheet");
oSheet.SetActive();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("The current sheet is active.");
builder.SaveFile("xlsx", "SetActive.xlsx");
builder.CloseFile();
```