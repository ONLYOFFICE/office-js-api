# SetColumnWidth

Sets the width of the specified column.
One unit of column width is equal to the width of one character in the Normal style.
For proportional fonts, the width of the character 0 (zero) is used.

## Syntax

```javascript
expression.SetColumnWidth(nColumn, nWidth, bWithotPaddings);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nColumn | Required | number |  | The number of the column to set the width to. |
| nWidth | Required | number |  | The width of the column divided by 7 pixels. |
| bWithotPaddings | Optional | boolean | false | Specifies whether nWidth will be set without standard paddings. |

## Returns

This method doesn't return any data.

## Example

This example sets the width of the specified column.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 10);
oWorksheet.SetColumnWidth(1, 20);
```
