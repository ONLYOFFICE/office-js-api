# AddCustomFunctionLibrary

Registers a new custom functions library (see the -**SetCustomFunctions** plugin method).\
The description of the function parameters and result is specified using JSDoc. The &lt;em&gt;@customfunction&lt;/em&gt; tag is required in JSDoc.\
Parameters and results can be specified as the &lt;em&gt;number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]&lt;/em&gt; types.\
Parameters can be required or optional. A user can also set a default value.

## Syntax

```javascript
expression.AddCustomFunctionLibrary(sName, Func);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The library name. |
| Func | Required | function |  | The custom functions library code. |

## Returns

This method doesn't return any data.

## Example

This example calculates custom function result.

```javascript editor-xlsx
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

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('=ADD(1,2)');
```
