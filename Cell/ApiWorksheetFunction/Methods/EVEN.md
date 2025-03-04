# EVEN

Rounds a positive number up and negative number down to the nearest even integer.

## Syntax

```javascript
expression.EVEN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round up. |

## Returns

number

## Example

This example shows how to round a positive number up and negative number down to the nearest even integer.

```javascript editor-xlsx
// How to round up a number.

// Use function to round up positive/negative numbers.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.EVEN(15.67));
```
