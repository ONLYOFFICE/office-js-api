# GetFreezePanesType

Returns the freeze panes type.

## Syntax

```javascript
expression.GetFreezePanesType();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FreezePaneType](../../Enumeration/FreezePaneType.md)

## Example

This example freezes first column and get pastes a freezed type into the table.

```javascript editor-xlsx
Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Type: ");
worksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());
```
