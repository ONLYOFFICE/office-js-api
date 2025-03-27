# CHITEST

Returns the test for independence: the value from the chi-squared distribution for the statistic and the appropriate degrees of freedom.

## Syntax

```javascript
expression.CHITEST(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | The range of data that contains observations to test against expected values. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | The range of data that contains the ratio of the product of row totals and column totals to the grand total. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let actual1 = ["Actual", 58, 11, 10];
let actual2 = ["Actual", 35, 25, 23];
let expected1 = ["Expected", 45.35, 17.56, 16.09];
let expected2 = ["Expected", 47.65, 18.44, 16.91];

for (let i = 0; i < actual1.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(actual1[i]);
}
for (let j = 0; j < actual2.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(actual2[j]);
}
for (let n = 0; n < expected1.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(expected1[n]);
}
for (let m = 0; m < expected2.length; m++) {
    worksheet.GetRange("D" + (m + 1)).SetValue(expected2[m]);
}

let range1 = worksheet.GetRange("A2:B4");
let range2 = worksheet.GetRange("C2:D4");
worksheet.GetRange("D6").SetValue(func.CHITEST(range1, range2));
```
