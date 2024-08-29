# BASE

Converts a number into a text representation with the given radix (base).

## Syntax

expression.BASE(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the number that you want to convert. |
| arg2 | Required | number |  | Is the base Radix that you want to convert the number into. |
| arg3 | Required | number |  | Is the minimum length of the returned string.  If omitted leading zeros are not added. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BASE(5, 2, 5));
```
