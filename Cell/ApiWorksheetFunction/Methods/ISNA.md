# ISNA

Checks whether a value is #N/A, and returns TRUE or FALSE.

## Syntax

expression.ISNA(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISNA("#N/A"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISNA(255));
oWorksheet.GetRange("A3").SetValue(oFunction.ISNA("www.example.com"));
```
