# PERMUT

Returns the number of permutations for a given number of objects that can be selected from the total objects.

## Syntax

```javascript
expression.PERMUT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The total number of objects. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of objects in each permutation. |

## Returns

number

## Example

This example shows how to return the number of permutations for a given number of objects that can be selected from the total objects.

```javascript editor-xlsx
// How to return the number of permutations for a given number of objects.

// Use a function to claculate the number of permutations.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PERMUT(32, 2));
```
