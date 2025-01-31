# ERF

Returns the error function integrated between the specified lower and upper limits.

## Syntax

```javascript
expression.ERF(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The lower bound for integrating the error function. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The upper bound for integrating the error function. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ERF(-2));
```
