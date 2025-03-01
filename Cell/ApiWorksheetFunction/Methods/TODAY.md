# TODAY

Returns the current date in the &lt;em&gt;MM/dd/yy&lt;/em&gt; format.

## Syntax

```javascript
expression.TODAY();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to return the current date in the MM/dd/yy format.

```javascript editor-xlsx
// How to get a current date.

// Use a function to get current date in MM/dd/yy format.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TODAY());
```
