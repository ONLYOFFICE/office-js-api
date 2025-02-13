# SUMIF

Adds the cells specified by a given condition or criteria.

## Syntax

```javascript
expression.SUMIF(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | The range of cells to be evaluated. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string |  | The condition or criteria in the form of a number, expression, or text that defines which cells will be added. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | The range to sum. If omitted, the cells in range are used. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var product = ["Product", "Apple", "Orange", "Banana"]
var totalValue = ["Total Value", "$736.00", "$924.00", "$888.00"];

for (var i = 0; i < product.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(product[i]);
}
for (var n = 0; n < totalValue.length; n++) {
    oWorksheet.GetRange("B" + (n + 1)).SetValue(totalValue[n]);
}

var oFunction = Api.GetWorksheetFunction();
var oRange = oWorksheet.GetRange("B2:B4");
oWorksheet.GetRange("C4").SetValue(oFunction.SUMIF(oRange, ">800"));
```
