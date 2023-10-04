# Unfreeze

Removes all frozen panes in the worksheet.

## Syntax

expression.Unfreeze();

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parametrs

This method doesn't have any parameters.


## Returns

This method doesn't return any data.

## Example

This example freezes first column then unfreeze all panes in the worksheet.

```javascript
builder.CreateFile("xlsx");
Api.FreezePanes('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.Unfreeze();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange + "");
builder.SaveFile("xlsx", "Unfreeze.xlsx");
builder.CloseFile();
```