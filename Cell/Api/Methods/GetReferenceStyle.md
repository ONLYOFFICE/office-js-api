# GetReferenceStyle

Returns the cell reference style.

## Syntax

expression.GetReferenceStyle();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ReferenceStyle](../../../Enumerations/ReferenceStyle.md)

## Example

This example gets reference style.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue(Api.GetRefereceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();
```