# GAMMA

Returns the gamma function value.

## Syntax

```javascript
expression.GAMMA(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The value for which the gamma function will be calculated. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAMMA(2.7);
oWorksheet.GetRange("B2").SetValue(ans);


```
