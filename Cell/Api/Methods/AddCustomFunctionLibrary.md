# AddCustomFunctionLibrary

Register a new custom functions library (see SetCustomFunctions plugin method).The description of the function parameters and result is specified using JSDoc. The <em>@customfunction</em> tag is required in JSDoc.Parameters and results can be specified as the <em>number / string / bool / any / number[][] / string[][] / bool[][] / any[][]</em> types.Parameters can be required or optional. A user can also set a default value.

## Syntax

expression.AddCustomFunctionLibrary(sName, Func);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | A name of library |
| Func | Required | function |  | A custom functions library code. |

## Returns

This method doesn't return any data.

## Example

This example calculates custom function result.

```javascript
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
oWorksheet.GetRange('A1').SetValue('=ADD(1,2)');
```
