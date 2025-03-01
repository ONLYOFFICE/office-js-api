# ISEVEN

Returns **true** if a number is even.

## Syntax

```javascript
expression.ISEVEN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to test. |

## Returns

boolean

## Example

This example shows how to return true if a number is even.

```javascript editor-xlsx
// How to check if the number is even.

// Use a function to check whether a number is even or not.

const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISEVEN("66");
oWorksheet.GetRange("C3").SetValue(result)

```
