# LOOKUP

Looks up a value either from a one-row or one-column range. Provided for backwards compatibility.

## Syntax

```javascript
expression.LOOKUP(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number | string | boolean | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | A value that is searched for in the first vector. It can be a number, text, a logical value, or a name or reference to a value. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | A range that contains only one row or one column of text, numbers, or logical values, placed in ascending order. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | A range that contains only one row or column. It must be the same size as the first vector. |

## Returns

number | string | boolean

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

oWorksheet.GetRange("E1").SetValue("Name");
oWorksheet.GetRange("E2").SetValue("Ella Tompson");
oWorksheet.GetRange("F1").SetValue("Phone number");
var oRange1 = oWorksheet.GetRange("B2:B5");
var oRange2 = oWorksheet.GetRange("C2:C5");
oWorksheet.GetRange("F2").SetValue(oFunction.LOOKUP("Ella Tompson", oRange1, oRange2));
```
