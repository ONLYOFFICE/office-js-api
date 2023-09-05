# Select

Selects the current range.

## Syntax

expression.Select();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example selects the current range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C1");
oRange.SetValue("1");
oRange.Select();
Api.GetSelection().SetValue("selected");
builder.SaveFile("xlsx", "Select.xlsx");
builder.CloseFile();
```