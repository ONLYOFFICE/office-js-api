# SetValue

Sets a value to the current cell or cell range.

## Syntax

expression.SetValue(data);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| data | Required | String &#124; Boolean &#124; Number &#124; Array<String &#124; Boolean &#124; Number> &#124; Array<Array<String &#124; Boolean &#124; Number>> | The general value for the cell or cell range. |

## Returns

Boolean (returns false if such a range does not exist)

## Example

This example sets a value to cells.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("B2").SetValue("2");
oWorksheet.GetRange("A3").SetValue("2x2=");
oWorksheet.GetRange("B3").SetValue("=B1*B2");
builder.SaveFile("xlsx", "SetValue.xlsx");
builder.CloseFile();
```