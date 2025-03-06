# STDEV_S

Estimates standard deviation based on a sample (ignores logical values and text in the sample).

## Syntax

```javascript
expression.STDEV_S(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number[] \| number \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 numeric values for which the standard deviation will be calculated.\ The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let valueArr = [3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.GetWorksheetFunction();
let ans = func.STDEV_S(3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14); //ignores logical values and text

worksheet.GetRange("C1").SetValue(ans);

```
