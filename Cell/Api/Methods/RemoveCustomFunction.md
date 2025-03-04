# RemoveCustomFunction

Removes a custom function.

## Syntax

```javascript
expression.RemoveCustomFunction(sName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The name of a custom function. |

## Returns

boolean

## Example

This example clear current custom function.

```javascript editor-xlsx
// How to delete custom created function from the library.

// Remove custom function library.

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
Api.RemoveCustomFunction("add");
oWorksheet.GetRange("A3").SetValue("The ADD custom function was removed.");

```
