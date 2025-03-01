# ClearCustomFunctions

Clears all custom functions.

## Syntax

```javascript
expression.ClearCustomFunctions();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example clear all added custom functions.

```javascript editor-xlsx
// How to delete custom function library.

// Remove unused custom function library.

Api.AddCustomFunctionLibrary("LibraryName", function(){
    /**
     * Function that returns the argument
     * @customfunction
     * @param {any} first First argument.
     * @returns {any} second Second argument.
     */
    Api.AddCustomFunction(function ADD(first, second) {
        return first + second;
    });
});

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("=ADD(1, 2)");
Api.ClearCustomFunctions();
oWorksheet.GetRange("A3").SetValue("All the custom functions were removed.");

```
