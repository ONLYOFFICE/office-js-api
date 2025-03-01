# LOG

Returns the logarithm of a number to the specified base.

## Syntax

```javascript
expression.LOG(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The positive real number for which the logarithm will be returned. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The logarithm base. If omitted, it is equal to 10. |

## Returns

number

## Example

This example shows how to return the logarithm of a number to the specified base.

```javascript editor-xlsx
// How to get the logarithm to the specified base.

// Use a function to return the logarithm.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LOG(56, 5));
```
