# GetFreezePanesType

Returns the freeze panes type.

## Syntax

expression.GetFreezePanesType();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FreezePaneType](../../Enumeration/FreezePaneType.md)

## Example

This example freezes first column and get pastes a freezed type into the table.

```javascript
Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Type: ");
oWorksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());
```
