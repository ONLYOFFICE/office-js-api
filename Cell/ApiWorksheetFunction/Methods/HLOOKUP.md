# HLOOKUP

Looks for a value in the top row of a table or array of values and returns the value in the same column from a row you specify.

## Syntax

expression.HLOOKUP(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the value to be found in the first row of the table and can be a value, a reference, or a text string. |
| arg2 | Required | number |  | Is a table of text, numbers, or logical values in which data is looked up. Table_array can be a reference to a range or a range name. |
| arg3 | Required | number |  | Is the row number in table_array from which the matching value should be returned. The first row of values in the table is row 1. |
| arg4 | Required | boolean |  | Is a logical value: to find the closest match in the top row (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ids = ["ID", 1, 2, 3, 4, 5];
var clients = ["Client", "John Smith", "Ella Tompson", "Mary Shinoda", "Lily-Ann Bates", "Clara Ray"];
var phones = ["Phone number", "12054097166", "13343943678", "12568542099", "12057032298", "12052914781"];

for (var i = 0; i < ids.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(ids[i]);
}
for (var j = 0; j < clients.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(clients[j]);
}
for (var n = 0; n < phones.length; n++) {
    oWorksheet.GetRange("C" + (n + 1)).SetValue(phones[n]);
}

oWorksheet.GetRange("E1").SetValue("ID");
oWorksheet.GetRange("E2").SetValue(3);
oWorksheet.GetRange("F1").SetValue("Phone number");
var oRange = oWorksheet.GetRange("A1:C5");
oWorksheet.GetRange("F2").SetValue(oFunction.HLOOKUP("Phone number", oRange, 3+1));
```
