# BINOMDIST

Returns the individual term binomial distribution probability.

## Syntax

expression.BINOMDIST(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The number of successes in trials. |
| arg2 | Required | number |  | The number of independent trials. |
| arg3 | Required | number |  | The probability of success on each trial. |
| arg4 | Required | boolean |  | Specifies if this is the cumulative distribution function (**true**) or the probability mass function (**false**). |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BINOMDIST(50, 67, 0.45, false));
```
