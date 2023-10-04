# FreezeRows

Freeze the top row or rows of the worksheet in place.

## Syntax

expression.FreezeRows(count?);

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| count | Optional | Number | Optional number of rows to freeze, or zero to unfreeze all rows. Default value is "0". |

## Returns

This method doesn't return any data.

## Example

This example freezes the the top row.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.FreezeRows(1);
builder.SaveFile("xlsx", "FreezeRows.xlsx");
builder.CloseFile();
```