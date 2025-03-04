# MOD

Returns the remainder after a number is divided by a divisor.

## Syntax

```javascript
expression.MOD(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number to divide and find the remainder. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number to divide by. |

## Returns

number

## Example

This example shows how to return the remainder after a number is divided by a divisor.

```javascript editor-xlsx
// How to get the modulo from the division.

// Use a function to calculate the remainder from the division operation.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MOD(65, 7));
```
