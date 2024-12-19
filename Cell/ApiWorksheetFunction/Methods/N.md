# N

Converts a value to a number, dates to serial numbers, **true** to 1, error to {@link global#ErrorValue ErrorValue}, anything else to 0 (zero).

## Syntax

expression.N(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; number &#124; string &#124; boolean |  | The value to be converted. The value can be a logical value, text, or number. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.N(false));
```
