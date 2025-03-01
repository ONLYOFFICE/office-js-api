# GAMMA

Returns the gamma function value.

## Syntax

```javascript
expression.GAMMA(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which the gamma function will be calculated. |

## Returns

number

## Example

This example shows how to return the gamma function value.

```javascript editor-xlsx
// How to calculate the gamma function value.

// Use a function to get the result from a gamma function value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAMMA(2.7);
oWorksheet.GetRange("B2").SetValue(ans);


```
