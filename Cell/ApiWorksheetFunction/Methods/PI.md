# PI

Returns the mathematical constant **pi**, equal to **3.14159265358979**, accurate to 15 digits.

## Syntax

```javascript
expression.PI();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to return the mathematical constant pi, equal to 3.14159265358979, accurate to 15 digits.

```javascript editor-xlsx
// How to return the mathematical constant pi.

// Use a function to return a constant pi.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PI());
```
