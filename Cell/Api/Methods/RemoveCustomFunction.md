# RemoveCustomFunction

Removes a custom function.

## Syntax

expression.RemoveCustomFunction(sName);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The name of a custom function. |

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
Api.RemoveCustomFunction("add");
oWorksheet.GetRange("A3").SetValue("The ADD custom function was removed.");

```
