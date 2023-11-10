# SetColumnWidth

Sets the width of the specified column. One unit of column width is equal to the width of one character in the Normal style. For proportional fonts, the width of the character 0 (zero) is used.

## Syntax

expression.SetColumnWidth(nColumn, nWidth);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nColumn | Required | Number | The number of the column to set the width to. |
| nWidth | Required | Number | The width of the column divided by 7 pixels. |
| bWithotPaddings | Optional | Boolean | Specifies whether the nWidth will be set witout standart padding. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example sets the width of the specified column.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 10);
oWorksheet.SetColumnWidth(1, 20);
builder.SaveFile("xlsx", "SetColumnWidth.xlsx");
builder.CloseFile();
```