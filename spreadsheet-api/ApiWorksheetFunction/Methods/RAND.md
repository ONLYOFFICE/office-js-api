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



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.RAND());
```
