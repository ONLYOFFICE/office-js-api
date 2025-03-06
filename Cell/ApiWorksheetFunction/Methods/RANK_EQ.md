# RANK_EQ

Returns the rank of a number in a list of numbers: its size relative to other values in the list. If more than one value has the same rank, the top rank of that set of values is returned.

## Syntax

```javascript
expression.RANK_EQ(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number for which the rank will be returned. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An array or range of numbers. Nonnumeric values are ignored. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | The numeric value that specifyes how to order the numbers. If it is 0 or omitted, the rank in the list will be sorted in descending order.\ Any other numeric value means that the rank in the list will be sorted in ascending order. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let valueArr = [7, 6, 5, 5];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let number = worksheet.GetRange("A3");
let range = worksheet.GetRange("A1:A4");
let order = 0;

let func = Api.GetWorksheetFunction();
let ans = func.RANK_EQ(number, range, order);

worksheet.GetRange("C1").SetValue(ans);

```
