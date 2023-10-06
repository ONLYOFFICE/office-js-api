# FreezePanes

Returns or sets a freeze panes type.

## Syntax

expression.FreezePanes; &#124; expression.FreezePanes = FreezePaneType;

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| FreezePaneType | Required | [FreezePaneType](../../../Enumerations/FreezePaneType.md) | The type of freezing ('null' to unfreeze). |

## Returns

[FreezePaneType](../../../Enumerations/FreezePaneType.md)

## Example

This example freezes first column and get pastes a freezed type into the table.

```javascript
builder.CreateFile("xlsx");
Api.FreezePanes = 'column';
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Type: ");
oWorksheet.GetRange("B1").SetValue(Api.FreezePanes);
builder.SaveFile("xlsx", "FreezePanes.xlsx");
builder.CloseFile();
```