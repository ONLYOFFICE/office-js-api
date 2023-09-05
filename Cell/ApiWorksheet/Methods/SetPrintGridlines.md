# SetPrintGridlines

Specifies whether the current sheet gridlines must be printed or not.

## Syntax

expression.SetPrintGridlines(bPrint);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | Boolean | Defines if cell gridlines are printed on this page or not. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the sheet gridlines must be printed or not.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintGridlines(true);
oWorksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + oWorksheet.GetPrintGridlines());
builder.SaveFile("xlsx", "SetPrintGridlines.xlsx");
builder.CloseFile();
```