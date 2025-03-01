# MATCH

Returns the relative position of an item in a range that matches the specified value in the specified order.

## Syntax

```javascript
expression.MATCH(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The value to be matched in the range. It can be a number, text, or logical value, or a reference to one of these. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| array |  | A contiguous range of cells or an array containing possible lookup values. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number 1, 0, or -1 indicating which value to return. |

## Returns

number

## Example

This example shows how to return the relative position of an item in a range that matches the specified value in the specified order.

```javascript editor-xlsx
// How to get an index of an element that matches a condition.

// Use a function to find an item in a range.

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

var oRange = oWorksheet.GetRange("B1:B5");
oWorksheet.GetRange("D6").SetValue(oFunction.MATCH("Ella Tompson", oRange, 0));
```
