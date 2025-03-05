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



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let nonPositiveNum = 0;
let logResult = func.LOG(nonPositiveNum);
worksheet.GetRange("B3").SetValue(logResult);
worksheet.GetRange("C3").SetValue(func.ERROR_TYPE(logResult));

```
