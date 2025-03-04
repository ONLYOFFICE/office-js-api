# FACT

Returns the factorial of a number, which is equal to &lt;em&gt;1*2*3*...*&lt;/em&gt; number.

## Syntax

```javascript
expression.FACT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The nonnegative number for which the factorial will be calculated. |

## Returns

number

## Example

This example shows how to return the factorial of a number, which is equal to 123 *...* number.

```javascript editor-xlsx
// How to calculate a number factorial.

// Use function to calculate the factorial of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FACT(123));
```
