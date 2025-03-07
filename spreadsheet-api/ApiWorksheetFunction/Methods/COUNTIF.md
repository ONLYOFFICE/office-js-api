# COUNTIF

Counts a number of cells within a range that meet the given condition.

## Syntax

```javascript
expression.COUNTIF(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The range of cells to count nonblank cells. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | The condition in the form of a number, expression, or text that defines which cells will be counted. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let fruits = ["Apples", "ranges", "Bananas"];
let numbers = [45, 6, 8];

for (let i = 0; i < fruits.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(fruits[i]);
}
for (let j = 0; j < numbers.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(numbers[j]);
}

let range = worksheet.GetRange("A1:B3");
worksheet.GetRange("D3").SetValue(func.COUNTIF(range, "*es"));
```
