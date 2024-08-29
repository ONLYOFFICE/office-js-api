# INDEX

Returns a value or reference of the cell at the intersection of a particular row and column, in a given range.

## Syntax

expression.INDEX(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is a range of cells or an array constant.. |
| arg2 | Required | number |  | Selects the row in Array or Reference from which to return a value. If omitted, Column_num is required. |
| arg3 | Required | number |  | Selects the column in Array or Reference from which to return a value. If omitted, Row_num is required. |
| arg4 | Required | any |  | Is a reference to one or more cell ranges. |

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

var oRange = oWorksheet.GetRange("A1:C5");
oWorksheet.GetRange("E2").SetValue(oFunction.INDEX(oRange, 3, 2));
```
