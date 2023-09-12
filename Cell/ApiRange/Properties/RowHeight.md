# RowHeight

Returns or sets the height of the first row in the specified range measured in points.

## Syntax

expression.RowHeight; &#124; expression.RowHeight = nHeight;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nHeight | Required | [pt](../../../Enumerations/pt.md) | The row height in the current range measured in points. |

## Returns

[pt](../../../Enumerations/pt.md)

## Example

This example sets the row height value.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").RowHeight = 32;
builder.SaveFile("xlsx", "RowHeight.xlsx");
builder.CloseFile();
```