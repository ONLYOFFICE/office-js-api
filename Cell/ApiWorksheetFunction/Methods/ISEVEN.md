# ISEVEN

Returns TRUE if the number is even.

## Syntax

expression.ISEVEN(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the value to test. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISEVEN("66");
oWorksheet.GetRange("C3").SetValue(result)

```
