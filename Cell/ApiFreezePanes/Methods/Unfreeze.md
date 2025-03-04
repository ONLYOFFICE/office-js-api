# Unfreeze

Removes all frozen panes in the current worksheet.

## Syntax

```javascript
expression.Unfreeze();
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example freezes first column then unfreeze all panes in the worksheet.

```javascript editor-xlsx
// How to unfreeze columns from freezed panes.

// Add freezed panes then unfreeze the first column and show all freezed ones' location to prove it.

Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.Unfreeze();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange + "");
```
