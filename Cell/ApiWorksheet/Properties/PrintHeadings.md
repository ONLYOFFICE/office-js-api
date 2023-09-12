# PrintHeadings

Returns or sets the page PrintHeadings property.

## Syntax

expression.PrintHeadings; &#124; expression.PrintHeadings = bPrint;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | boolean | Specifies whether the current sheet row/column headers must be printed or not. |

## Returns

Boolean

## Example

This example specifies whether the current sheet row/column headers must be printed or not.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.PrintHeadings = true;
oWorksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + oWorksheet.PrintHeadings);
builder.SaveFile("xlsx", "PrintHeadings.xlsx");
builder.CloseFile();
```