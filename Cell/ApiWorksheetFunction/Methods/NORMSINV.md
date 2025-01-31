# NORMSINV

Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).

## Syntax

```javascript
expression.NORMSINV(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A probability corresponding to the normal distribution, a number between 0 and 1 inclusive. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(0.25);

//method params
var value = oWorksheet.GetRange("A1").GetValue();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NORMSINV(value);

oWorksheet.GetRange("C1").SetValue(ans);

```
