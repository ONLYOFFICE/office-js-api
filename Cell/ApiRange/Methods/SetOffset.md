# SetOffset

Sets the cell offset.

## Syntax

```javascript
expression.SetOffset(nRow, nCol);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Required | number |  | The row number. |
| nCol | Required | number |  | The column number. |

## Returns

This method doesn't return any data.

## Example

This example sets the cell offset.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B3").SetValue("Old Range");
var oRange = oWorksheet.GetRange("B3");
oRange.SetOffset(2, 2);
oRange.SetValue("New Range");
```
