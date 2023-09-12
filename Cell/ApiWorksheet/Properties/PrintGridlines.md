# PrintGridlines

Returns or sets the page PrintGridlines property.

## Syntax

expression.PrintGridlines; &#124; expression.PrintGridlines = bPrint;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | Boolean | Defines if cell gridlines are printed on this page or not. |

## Returns

Boolean

## Example

This example specifies whether the sheet gridlines must be printed or not.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.PrintGridlines = true;
oWorksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + oWorksheet.PrintGridlines);
builder.SaveFile("xlsx", "PrintGridlines.xlsx");
builder.CloseFile();
```