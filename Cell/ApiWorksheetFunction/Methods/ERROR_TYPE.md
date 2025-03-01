# ERROR_TYPE

Returns a number matching an error value.

## Syntax

```javascript
expression.ERROR_TYPE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ErrorValue](../../Enumeration/ErrorValue.md) \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The error value for which the identifying number will be returned. It can be an actual error value or a reference to a cell containing an error value. |

## Returns

number

## Example

This example shows how to return a number matching an error value.

```javascript editor-xlsx
// How to get the error type code from the value.

// Use function to get a error type.

const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var nonPositiveNum = 0;
var logResult = oFunction.LOG(nonPositiveNum);
oWorksheet.GetRange("B3").SetValue(logResult);
oWorksheet.GetRange("C3").SetValue(oFunction.ERROR_TYPE(logResult));

```
