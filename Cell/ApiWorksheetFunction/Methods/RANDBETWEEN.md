# RANDBETWEEN

Returns a random number between the numbers specified.

## Syntax

```javascript
expression.RANDBETWEEN(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The smallest integer value. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The largest integer value. |

## Returns

number

## Example

This example shows how to return a random number between the numbers specified.

```javascript editor-xlsx
// How to get a number between indicated values.

// Use a function to return a random value between specified limits.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RANDBETWEEN(-1, 10));
```
