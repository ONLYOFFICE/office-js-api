# T_DIST_RT

Returns the right-tailed Student's t-distribution.

## Syntax

```javascript
expression.T_DIST_RT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The numeric value at which to evaluate the distribution. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | An integer indicating the number of degrees of freedom that characterize the distribution. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.T_DIST_RT(1.5, 10));
```
