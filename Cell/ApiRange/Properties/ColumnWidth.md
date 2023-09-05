# ColumnWidth

Returns or sets the width of all the columns in the specified range measured in points.

## Syntax

expression.ColumnWidth &#124; expression.ColumnWidth = nWidth;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | Number | The width of the column divided by 7 pixels. |

## Returns

Number

## Example

This example sets the width of all the columns in the range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").ColumnWidth = 20;
builder.SaveFile("xlsx", "ColumnWidth.xlsx");
builder.CloseFile();
```