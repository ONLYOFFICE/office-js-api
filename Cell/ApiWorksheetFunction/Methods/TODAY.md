# TODAY

Returns the current date in the &lt;em&gt;MM/dd/yy&lt;/em&gt; format.

## Syntax

expression.TODAY();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TODAY());
```
