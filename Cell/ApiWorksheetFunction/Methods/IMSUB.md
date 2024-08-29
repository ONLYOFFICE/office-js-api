# IMSUB

Returns the difference of two complex numbers.

## Syntax

expression.IMSUB(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the complex number from which to subtract inumber2. |
| arg2 | Required | any |  | Is the complex number to subtract from inumber1. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSUB("1+3i", "-2+2.5i"));
```
