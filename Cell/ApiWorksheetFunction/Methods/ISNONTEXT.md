# ISNONTEXT

Checks whether a value is not text (blank cells are not text), and returns TRUE or FALSE.

## Syntax

expression.ISNONTEXT(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the value you want tested: a cell; a formula; or a name referring to a cell, formula, or value. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISNONTEXT("#N/A"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISNONTEXT(255));
oWorksheet.GetRange("A3").SetValue(oFunction.ISNONTEXT("Online Office"));
```
