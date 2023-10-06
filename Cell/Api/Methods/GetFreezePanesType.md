# GetFreezePanesType

Returns freeze panes type.

## Syntax

expression.GetFreezePanesType();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[FreezePaneType](../../../Enumerations/FreezePaneType.md)

## Example

This example freezes first column and get pastes a freezed type into the table.

```javascript
builder.CreateFile("xlsx");
Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Type: ");
oWorksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());
builder.SaveFile("xlsx", "GetFreezePanesType.xlsx");
builder.CloseFile();
```