# BITAND

Returns a bitwise "AND" of two numbers.

## Syntax

```javascript
expression.BITAND(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The first decimal representation of the binary number to evaluate. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The second decimal representation of the binary number to evaluate. |

## Returns

number

## Example

This example shows how to return a bitwise "AND" of two numbers.

```javascript editor-xlsx
// How to get a two numbers bitwise AND.

// Use function to calculate bitwise AND opertation.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BITAND(13, 25));
```
