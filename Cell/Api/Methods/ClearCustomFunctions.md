# ClearCustomFunctions

Clears all custom functions.

## Syntax

expression.ClearCustomFunctions();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example



```javascript
Api.AddCustomFunction (function add (first, second) {
    if (second === null) {
        second = 0;
    }
    return first + second;
})
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("=ADD(1, 2)");
Api.ClearCustomFunctions();
oWorksheet.GetRange("A3").SetValue("All the custom functions were removed.");
```
