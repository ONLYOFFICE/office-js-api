# FormatAsTable

Formats the selected range of cells from the current sheet as a table (with the first row formatted as a header).
<br>As the first row is always formatted as a table header, you need to select at least two rows for the table to be formed correctly.

## Syntax

expression.FormatAsTable(sRange);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sRange | Required | String | The range of cells from the current sheet which will be formatted as a table. |

## Returns

This method doesn't return any data.

## Example

This example formats the selected range of cells from the sheet as a table.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.FormatAsTable("A1:E10");
builder.SaveFile("xlsx", "FormatAsTable.xlsx");
builder.CloseFile();
```