# ISLOGICAL

Checks whether a value is a logical value (TRUE or FALSE), and returns TRUE or FALSE.

## Syntax

expression.ISLOGICAL(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B3").SetValue("66");

var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISLOGICAL(oWorksheet.GetRange("B3"));
oWorksheet.GetRange("C3").SetValue(result);

```
