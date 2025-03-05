# SMALL

Returns the k-th smallest value in a data set. For example, the fifth smallest number.

## Syntax

```javascript
expression.SMALL(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An array or range of numerical data for which the k-th smallest value will be determined. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The position (from the smallest) in the range of the value to return. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params
let range = worksheet.GetRange("A1:A16");
let position = 8;

let func = Api.GetWorksheetFunction();
let ans = func.SMALL(range, position);

worksheet.GetRange("C1").SetValue(ans);

```
