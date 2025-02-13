# LOGINV

Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with the specified parameters.

## Syntax

```javascript
expression.LOGINV(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A probability associated with the lognormal distribution, a number between 0 and 1, inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The mean of ln(x). |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The standard deviation of ln(x), a positive number. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

//configure function parameters
var numbersArr = [0.5, 4, 7];

//set values in cells
for (var i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
var probability = oWorksheet.GetRange("A1");
var mean = oWorksheet.GetRange("A2");
var standardDeviation = oWorksheet.GetRange("A3");

//invoke LOGINV method
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.LOGINV(probability, mean, standardDeviation);

//print answer
oWorksheet.GetRange("C1").SetValue(ans);

```
