# STDEVA

Estimates standard deviation based on a sample, including logical values and text. Text and the -**false** logical value have the value 0; the -**true** logical value has the value 1.

## Syntax

```javascript
expression.STDEVA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number[] \| number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 values for which the standard deviation will be calculated.\nThe first argument is required, subsequent arguments are optional. Arguments can be numbers, logical values, text strings, names, ranges, or arrays. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, "text", 1, 0, 0, 2, 3, true, false, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.GetWorksheetFunction();
let ans = func.STDEVA(
  1,
  0,
  0,
  0,
  "text",
  1,
  0,
  0,
  2,
  3,
  true,
  false,
  6,
  8,
  10,
  12
); //includes logical values

worksheet.GetRange("C1").SetValue(ans);

```
