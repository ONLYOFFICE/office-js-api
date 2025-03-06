# COUNTA

Counts a number of cells in a range that are not empty.

## Syntax

```javascript
expression.COUNTA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | string \| number \| boolean \| (string \| number \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 items, or ranges to count values.\nThe first argument is required, subsequent arguments are optional. Arguments can be numbers, logical values, text strings, ranges, names, or arrays. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let numbersArr = [45, 6, 8];
let stringsArr = ["Apples", "ranges", "Bananas"]

// Place the numbers in cells
for (let i = 0; i < numbersArr.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

// Place the strings in cells
for (let n = 0; n < stringsArr.length; n++) {
    worksheet.GetRange("B" + (n + 1)).SetValue(stringsArr[n]);
}

let func = Api.GetWorksheetFunction();
let ans = func.COUNTA(worksheet.GetRange("A1:C3"));
worksheet.GetRange("D3").SetValue(ans);
```
