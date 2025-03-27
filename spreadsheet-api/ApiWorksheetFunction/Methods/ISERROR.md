# ISERROR

Checks whether a value is an error, and returns -**true** or -**false**.

## Syntax

```javascript
expression.ISERROR(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The value to test.\ The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("B3").SetValue("#N/A")
let result = func.ISERR("B3");
worksheet.GetRange("C3").SetValue(result)

```
