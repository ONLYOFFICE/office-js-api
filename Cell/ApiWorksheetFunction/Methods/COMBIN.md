# COMBIN

Returns the number of combinations for a given number of items.

## Syntax

```javascript
expression.COMBIN(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The total number of items, a numeric value greater than or equal to 0. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of items in each combination, a numeric value greater than or equal to 0 but less than the total number of items. |

## Returns

number

## Example

This example shows how to return the number of combinations for a given number of items.

```javascript editor-xlsx
// How to find a number of combinations.

// Use function to count possible combinations for a given number of items.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COMBIN(67, 7));
```
