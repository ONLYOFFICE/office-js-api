# AVERAGEIF

Finds the average (arithmetic mean) for the cells specified by a given condition or criteria.

## Syntax

```javascript
expression.AVERAGEIF(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The range of cells which will be evaluated. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | The condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The actual cells to be used to find the average. If omitted, the cells in the range are used. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let numbers = [67, 87, 98, 45];

for (let i = 0; i < numbers.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(numbers[i]);
}

let range = worksheet.GetRange("A1:A4");
worksheet.GetRange("C1").SetValue(func.AVERAGEIF(range, ">45"));
```
