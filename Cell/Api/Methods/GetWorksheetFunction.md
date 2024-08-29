# GetWorksheetFunction

Returns the ApiWorksheetFunction object.

## Syntax

expression.GetWorksheetFunction();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheetFunction](../../ApiWorksheetFunction/ApiWorksheetFunction.md)

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ASC("text"));
```
