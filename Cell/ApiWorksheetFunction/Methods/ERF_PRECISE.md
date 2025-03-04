# ERF_PRECISE

Returns the error function integrated between 0 and the specified lower limit.

## Syntax

```javascript
expression.ERF_PRECISE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The lower bound for integrating the error function. |

## Returns

number

## Example

This example shows how to return the error function integrated between 0 and the specified lower limit.

```javascript editor-xlsx
// How to get an error function (from 0 to lower).

// Use function to get an error function set between 0 and lower limits.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ERF_PRECISE(0.745));
```
