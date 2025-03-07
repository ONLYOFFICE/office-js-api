# PERCENTRANK

Returns the rank of a value in a data set as a percentage of the data set.

## Syntax

```javascript
expression.PERCENTRANK(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | The array or range of data with numeric values that defines relative standing. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which the rank will be returned. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%). |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let column1 = [1, 0, 7, 10];
let column2 = [3, 2, 5, 8];
let column3 = [5, 4, 3, 6];
let column4 = [7, 6, 5, 4];

for (let i = 0; i < column1.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (let j = 0; j < column2.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}
for (let n = 0; n < column3.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(column3[n]);
}
for (let m = 0; m < column4.length; m++) {
    worksheet.GetRange("D" + (m + 1)).SetValue(column4[m]);
}

let range = worksheet.GetRange("A1:D4");
worksheet.GetRange("D5").SetValue(func.PERCENTRANK(range, 2, 4));
```
