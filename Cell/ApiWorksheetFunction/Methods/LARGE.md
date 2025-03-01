# LARGE

Returns the k-th largest value in a data set. For example, the fifth largest number.

## Syntax

```javascript
expression.LARGE(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | The array or range of data for which the k-th largest value will be determined. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The position (from the largest) in the array or cell range of data to return. |

## Returns

number

## Example

This example shows how to return the k-th largest value in a data set. For example, the fifth largest number.

```javascript editor-xlsx
// How to find the k-th largest value in a data set.

// Use a function to find out the largest value in a data set specifying its order number.

const oWorksheet = Api.GetActiveSheet();

let numbersArr = [4, 13, 27, 56, 46, 79, 22, 12];

// Place the numbers in cells

for (let i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

let oFunction = Api.GetWorksheetFunction();
let oRange = oWorksheet.GetRange("A1:A8");
let largePostion = 4;
let kLargest = oFunction.LARGE(oRange, largePostion);
oWorksheet.GetRange("C1").SetValue(kLargest);

```
