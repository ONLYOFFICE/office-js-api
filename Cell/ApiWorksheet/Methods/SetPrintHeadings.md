# SetPrintHeadings

Specifies whether the current sheet row/column headers must be printed or not.

## Syntax

expression.SetPrintHeadings(bPrint);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | boolean |  | Specifies whether the current sheet row/column headers must be printed or not. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the current sheet row/column headers must be printed or not.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintHeadings(true);
oWorksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + oWorksheet.GetPrintHeadings());
```
