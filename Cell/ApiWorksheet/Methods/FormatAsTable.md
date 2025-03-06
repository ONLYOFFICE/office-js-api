# FormatAsTable

Formats the selected range of cells from the current sheet as a table (with the first row formatted as a header).\n💡 As the first row is always formatted as a table header, you need to select at least two rows for the table to be formed correctly.

## Syntax

```javascript
expression.FormatAsTable(sRange);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | The range of cells from the current sheet which will be formatted as a table. |

## Returns

This method doesn't return any data.

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.FormatAsTable("A1:E10");
```
