# NORM_S_INV

Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).

## Syntax

```javascript
expression.NORM_S_INV(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A probability corresponding to the normal distribution, a number between 0 and 1 inclusive. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NORM_S_INV(0.908));
```
