# GetFreezePanes

Returns the freeze panes from the current worksheet.

## Syntax

```javascript
expression.GetFreezePanes();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFreezePanes](../../ApiFreezePanes/ApiFreezePanes.md)

## Example

This example freezes first column and get pastes a freezed range address into the table.

```javascript editor-xlsx
Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
```
