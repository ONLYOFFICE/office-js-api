# FreezeColumns

Freeze the first column or columns of the worksheet in place.

## Syntax

expression.FreezeColumns(count?);

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| count | Optional | Number | Optional number of columns to freeze, or zero to unfreeze all columns. Default value is "0". |

## Returns

This method doesn't return any data.

## Example

This example freezes the the first column.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.FreezeColumns(1);
builder.SaveFile("xlsx", "FreezeColumns.xlsx");
builder.CloseFile();
```