# ISNUMBER

Checks whether a value is a number, and returns -**true** or -**false**.

## Syntax

```javascript
expression.ISNUMBER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test.\ The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISNUMBER("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNUMBER(255));
worksheet.GetRange("A3").SetValue(func.ISNUMBER("Online Office"));
```
