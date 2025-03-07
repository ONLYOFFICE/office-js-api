# STANDARDIZE

Returns a normalised value from a distribution characterised by a mean and standard deviation.

## Syntax

```javascript
expression.STANDARDIZE(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to normalize. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The arithmetic mean of the distribution. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The standard deviation of the distribution, a positive number. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let valueArr = [5, -2, 10];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params
let x = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let stdDev = worksheet.GetRange("A3");

let func = Api.GetWorksheetFunction();
let ans = func.STANDARDIZE(x, mean, stdDev);

worksheet.GetRange("C1").SetValue(ans);

```
