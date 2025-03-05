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
Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.Unfreeze();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range + "");
```
