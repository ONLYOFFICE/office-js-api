# GetCols

Returns a Range object that represents the columns in the specified range.

## Syntax

```javascript
expression.GetCols(nCol);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCol | Required | number |  | The column number. * |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example shows how to get a Range object that represents the columns in the specified range.

```javascript editor-xlsx
// How to get columns from a range.

// Get a range, get its first two columns and fill them with a color.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C3");
oRange.GetCols(2).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
