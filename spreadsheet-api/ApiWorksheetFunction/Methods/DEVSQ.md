# DEVSQ

Returns the sum of squares of deviations of data points from their sample mean.

## Syntax

```javascript
expression.DEVSQ(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| number[] |  | Up to 255 numerical values for which to find the sum of squares of deviations.\ The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, or arrays of numbers. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let argumentsArrA = [34, 244];
let argumentsArrB = [769, 445];
let argumentsArrC = [76, 677];
let argumentsArrD = [89, 56];
let argumentsArrE = [98, 13];

// Place the numbers in cells
for (let a = 0; a < argumentsArrA.length; a++) {
    worksheet.GetRange("A" + (a + 1)).SetValue(argumentsArrA[a]);
}
for (let b = 0; b < argumentsArrB.length; b++) {
    worksheet.GetRange("B" + (b + 1)).SetValue(argumentsArrB[b]);
}
for (let c = 0; c < argumentsArrC.length; c++) {
    worksheet.GetRange("C" + (c + 1)).SetValue(argumentsArrC[c]);
}
for (let d = 0; d < argumentsArrD.length; d++) {
    worksheet.GetRange("D" + (d + 1)).SetValue(argumentsArrD[d]);
}
for (let e = 0; e < argumentsArrE.length; e++) {
    worksheet.GetRange("E" + (e + 1)).SetValue(argumentsArrE[e]);
}

// Analyze the range of data 
let func = Api.GetWorksheetFunction();
let ans = func.DEVSQ(worksheet.GetRange("A1:E2"));
worksheet.GetRange("E3").SetValue(ans);
```
