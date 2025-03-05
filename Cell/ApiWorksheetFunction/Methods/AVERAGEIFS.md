# AVERAGEIFS

Finds the average (arithmetic mean) for the cells specified by a given set of conditions or criteria.

## Syntax

```javascript
expression.AVERAGEIFS(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The range of cells which will be evaluated. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | The first condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The actual cells to be used to find the average. If omitted, the cells in the range are used. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | Up to 127 additional conditions or criteria in the form of a number, expression, or text that defines which cells will be used to find the average. These arguments are optional. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 127 actual ranges to be used to find the average. If omitted, the cells in the range are used. These arguments are optional. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let year = [2016, 2016, 2016, 2017, 2017, 2017];
let products = ["Apples", "Red apples", "ranges", "Green apples", "Apples", "Bananas"];
let income = ["$100.00", "$150.00", "$250.00", "$50.00", "$150.00", "$200.00"];

for (let i = 0; i < year.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(year[i]);
}
for (let j = 0; j < products.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(products[j]);
}
for (let n = 0; n < income.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(income[n]);
}

let range1 = worksheet.GetRange("C1:C6");
let range2 = worksheet.GetRange("B1:B6");
let range3 = worksheet.GetRange("A1:A6");
worksheet.GetRange("E6").SetValue(func.AVERAGEIFS(range1, range2, "*Apples", range3, 2016));
```
