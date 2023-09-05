# Formula

Returns a formula from the first cell of the specified range or sets it to this cell.

## Syntax

expression.Formula; &#124; expression.Formula = data;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| data | Required | String &#124; Boolean &#124; Number &#124; Array<String &#124; Boolean &#124; Number> &#124; Array<Array<String &#124; Boolean &#124; Number>> | The general value for the cell or cell range. |

## Returns

String &#124; Array<Array<String>>

## Example

This example sets a formula to cells.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").Formula = "2";
oWorksheet.GetRange("B2").Formula = "2";
oWorksheet.GetRange("A3").Formula = "2x2=";
oWorksheet.GetRange("B3").Formula = "=B1*B2";
builder.SaveFile("xlsx", "Formula.xlsx");
builder.CloseFile();
```