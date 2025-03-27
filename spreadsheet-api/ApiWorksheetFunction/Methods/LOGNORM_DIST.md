# LOGNORM_DIST

Returns the lognormal distribution of x, where ln(x) is normally distributed with the specified parameters.

## Syntax

```javascript
expression.LOGNORM_DIST(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which to evaluate the function, a positive number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The mean of ln(x). |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The standard deviation of ln(x), a positive number. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value (-**true** or -**false**) that determines the function form.\ If it is -**true**, the function returns the cumulative distribution function.\ If it is -**false**, the function returns the probability density function. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

//configure function parameters
let numbersArr = [4, 3.5, 1.2];

//set values in cells
for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
let xValue = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let standardDeviation = worksheet.GetRange("A3");
let cummulative = true;

//invoke LOGNORM.DIST method
let func = Api.GetWorksheetFunction();
let ans = func.LOGNORM_DIST(xValue, mean, standardDeviation, cummulative);

//print answer
worksheet.GetRange("C1").SetValue(ans);

```
