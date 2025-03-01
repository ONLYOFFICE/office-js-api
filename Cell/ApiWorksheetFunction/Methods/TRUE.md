# TRUE

Returns the **true** logical value.

## Syntax

```javascript
expression.TRUE();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to return the true logical value.

```javascript editor-xlsx
// How to get a true value.

// Use a function to return true value.

const oWorksheet = Api.GetActiveSheet();

var logical1 = 1 > 0;
var logical2 = 2 > 0;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.XOR(logical1, logical2); //Works on XOR gate logic

oWorksheet.GetRange("C1").SetValue(ans);

```
