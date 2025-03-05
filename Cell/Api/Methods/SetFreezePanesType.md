# SetFreezePanesType

Sets a type to the freeze panes.

## Syntax

```javascript
expression.SetFreezePanesType(FreezePaneType);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| FreezePaneType | Required | [FreezePaneType](../../Enumeration/FreezePaneType.md) |  | The freeze panes type ("null" to unfreeze). |

## Returns

This method doesn't return any data.

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
