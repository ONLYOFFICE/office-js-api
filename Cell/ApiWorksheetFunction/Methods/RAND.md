# RAND

Returns a random number greater than or equal to 0 and less than 1, evenly distributed (changes on recalculation).

## Syntax

```javascript
expression.RAND();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to return a random number greater than or equal to 0 and less than 1, evenly distributed (changes on recalculation).

```javascript editor-xlsx
// How to get a number between 0 and 1.

// Use a function to return a random value more or equal to zero and less than one.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RAND());
```
