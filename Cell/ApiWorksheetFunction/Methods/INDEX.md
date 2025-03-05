# INDEX

Returns a value or reference of the cell at the intersection of a particular row and column, in a given range.

## Syntax

```javascript
expression.INDEX(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | A range of cells or an array constant. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The row in the range from which to return a value. If omitted, the column number is required. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The column in the range from which to return a value. If omitted, the row number is required. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An area to use in case the range contains several ranges. If it is omitted, the function will assume argument to be 1. |

## Returns

number \| string

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ids = ["ID", 1, 2, 3, 4, 5];
let clients = ["Client", "John Smith", "Ella Tompson", "Mary Shinoda", "Lily-Ann Bates", "Clara Ray"];
let phones = ["Phone number", "12054097166", "13343943678", "12568542099", "12057032298", "12052914781"];

for (let i = 0; i < ids.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(ids[i]);
}
for (let j = 0; j < clients.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(clients[j]);
}
for (let n = 0; n < phones.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(phones[n]);
}

let range = worksheet.GetRange("A1:C5");
worksheet.GetRange("E2").SetValue(func.INDEX(range, 3, 2));
```
