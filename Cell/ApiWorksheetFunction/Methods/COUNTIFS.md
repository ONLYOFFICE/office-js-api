# COUNTIFS

Counts a number of cells specified by a given set of conditions or criteria.

## Syntax

```javascript
expression.COUNTIFS(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The first range of cells to count nonblank cells. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | The first condition in the form of a number, expression, or text that defines which cells will be counted. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 127 additional ranges of cells to count nonblank cells. This argument is optional. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | Up to 127 additional conditions in the form of a number, expression, or text that define which cells will be counted. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let buyer = ["Buyer", "Tom", "Bob", "Ann", "Kate", "John"];
let product = ["Product", "Apples", "Red apples", "ranges", "Green apples", "ranges"];
let quantity = ["Quantity", 12, 45, 18, 26, 10];

for (let i = 0; i < buyer.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(buyer[i]);
}
for (let j = 0; j < product.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(product[j]);
}
for (let n = 0; n < quantity.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(quantity[n]);
}

let range1 = worksheet.GetRange("B2:B6");
let range2 = worksheet.GetRange("C2:C6");
worksheet.GetRange("E6").SetValue(func.COUNTIFS(range1, "*apples", range2, "45"));
```
