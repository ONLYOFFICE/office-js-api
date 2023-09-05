# Value

Returns a value from the first cell of the specified range or sets it to this cell.

## Syntax

expression.Value; &#124; expression.Value = data;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| data | Required | String &#124; Boolean &#124; Number &#124; Array<String &#124; Boolean &#124; Number> &#124; Array<Array<String &#124; Boolean &#124; Number>> | The general value for the cell or cell range. |

## Returns

String &#124; Array<Array<String>>

## Example

This example sets a value to cells.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").Value = "2";
oWorksheet.GetRange("B2").Value = "2";
oWorksheet.GetRange("A3").Value = "2x2=";
oWorksheet.GetRange("B3").Value = "=B1*B2";
builder.SaveFile("xlsx", "Value.xlsx");
builder.CloseFile();
```