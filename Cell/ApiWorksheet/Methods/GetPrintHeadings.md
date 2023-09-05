# GetPrintHeadings

Returns the page PrintHeadings property which specifies whether the current sheet row/column headings must be printed or not.

## Syntax

expression.GetPrintHeadings();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example shows how to get the page PrintHeadings property which specifies whether the sheet row/column headings must be printed or not.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintHeadings(true);
oWorksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + oWorksheet.GetPrintHeadings());
builder.SaveFile("xlsx", "GetPrintHeadings.xlsx");
builder.CloseFile();
```