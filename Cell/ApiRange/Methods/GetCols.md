# GetCols

Returns a Range object that represents the columns in the specified range.

## Syntax

expression.GetCols(nCol);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCol | Required | number |  | The column number. * |

## Returns

ApiRange, null

## Example

This example shows how to get a Range object that represents the columns in the specified range.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C3");
oRange.GetCols(2).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
