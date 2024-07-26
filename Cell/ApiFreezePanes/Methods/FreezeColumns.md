# FreezeColumns

Freezes the first column or columns of the current worksheet.

## Syntax

expression.FreezeColumns(count);

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | Number | false | Optional number of columns to freeze, or zero to unfreeze all columns. |

## Returns

This method doesn't return any data.

## Example

This example freezes the the first column.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.FreezeColumns(1);
```
