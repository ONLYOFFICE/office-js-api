# SetColumnWidth

Sets the width of all the columns in the current range. One unit of column width is equal to the width of one character in the Normal style. For proportional fonts, the width of the character 0 (zero) is used.

## Syntax

expression.SetColumnWidth(nWidth);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | Number | The width of the column divided by 7 pixels. |

## Returns

This method doesn't return any data.

## Example

This example sets the width of all the columns in the range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetColumnWidth(20);
builder.SaveFile("xlsx", "SetColumnWidth.xlsx");
builder.CloseFile();
```