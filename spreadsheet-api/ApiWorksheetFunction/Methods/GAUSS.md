# GAUSS

Calculates the probability that a member of a standard normal population will fall between the mean and arg1 standard deviations from the mean.

## Syntax

```javascript
expression.GAUSS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which the distribution will be calculated. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAUSS(2);
worksheet.GetRange("B2").SetValue(ans);


```
