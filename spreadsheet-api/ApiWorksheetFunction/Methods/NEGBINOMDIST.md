# NEGBINOMDIST

Returns the negative binomial distribution, the probability that there will be the specified number of failures before the last success, with the specified probability of a success.

## Syntax

```javascript
expression.NEGBINOMDIST(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of failures. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The threshold number of successes. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The probability of a success; a number between 0 and 1. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let valueArr = [6, 32, 0.7];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let numberF = worksheet.GetRange("A1").GetValue();
let numberS = worksheet.GetRange("A2").GetValue();
let probabilityS = worksheet.GetRange("A3").GetValue();

let func = Api.GetWorksheetFunction();
let ans = func.NEGBINOMDIST(numberF, numberS, probabilityS);

worksheet.GetRange("C1").SetValue(ans);

```
