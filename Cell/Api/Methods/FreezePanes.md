# FreezePanes

Freeze and unfeeze Panes.

## Syntax

expression.FreezePanes(FreezePaneType);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| FreezePaneType | Required | [FreezePaneType](../../../Enumerations/FreezePaneType.md) | The type of freezing ('null' to unfreeze). |

## Returns

This method doesn't return any data.

## Example

This example freezes first column and get pastes a freezed range address into the table.

```javascript
builder.CreateFile("xlsx");
Api.FreezePanes('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange.GetAddress());
builder.SaveFile("xlsx", "FreezePanes.xlsx");
builder.CloseFile();
```