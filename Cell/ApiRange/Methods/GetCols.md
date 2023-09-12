# GetCols

Returns a Range object that represents the columns in the specified range.

## Syntax

expression.GetCols(nCol);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nCol | Required | Number | The column number. |

## Returns

[ApiRange](../ApiRange.md) | &#124; null

## Example

This example shows how to get a Range object that represents the columns in the specified range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C3");
oRange.GetCols(2).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetCols.xlsx");
builder.CloseFile();
```