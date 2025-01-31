# IFNA

Checks if there is an error in the formula in the first argument. The function returns the specified value if the formula returns the &lt;em&gt;#N/A&lt;/em&gt; error value, otherwise returns the result of the formula.

## Syntax

```javascript
expression.IFNA(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string | boolean |  | The value, expression, or reference that is checked for an error. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string | boolean |  | The value to return if the formula evaluates to the &lt;em&gt;#N/A&lt;/em&gt; error value. |

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

var oRange = oWorksheet.GetRange("B1:B5");
oWorksheet.GetRange("D6").SetValue(oFunction.IFNA(oFunction.MATCH("Mark Potato", oRange, 0), "Not found"));
```
