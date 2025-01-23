# PERMUTATIONA

Returns the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects.

## Syntax

expression.PERMUTATIONA(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The total number of objects. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The number of objects in each permutation. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

//method params
var number = 32;
var number_chosen = 2;

oWorksheet.GetRange("A1").SetValue(number);
oWorksheet.GetRange("B1").SetValue(number_chosen);

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PERMUTATIONA(number, number_chosen);

oWorksheet.GetRange("C1").SetValue(ans);

```
