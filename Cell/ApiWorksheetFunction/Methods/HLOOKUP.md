# HLOOKUP

Looks for a value in the top row of a table or array of values and returns the value in the same column from the specified row.

## Syntax

```javascript
expression.HLOOKUP(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The value to be found in the first row of the table and can be a value, a reference, or a text string. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A table of text, numbers, or logical values in which data is looked up. The data is sorted in ascending order.\ This argument can be a range of cells or a range name. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The row number in data table from which the matching value should be returned. The first row of values in the table is row 1. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value which specifies whether to find the closest match in the top row (sorted in ascending order) (-**true** or omitted)\ or find an exact match (-**false**). |

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

worksheet.GetRange("E1").SetValue("ID");
worksheet.GetRange("E2").SetValue(3);
worksheet.GetRange("F1").SetValue("Phone number");
let range = worksheet.GetRange("A1:C5");
worksheet.GetRange("F2").SetValue(func.HLOOKUP("Phone number", range, 3+1));
```
