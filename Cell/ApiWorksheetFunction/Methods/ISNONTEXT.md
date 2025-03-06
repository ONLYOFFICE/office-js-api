# ISNONTEXT

Checks whether a value is not text (blank cells are not text), and returns -**true** or -**false**.

## Syntax

```javascript
expression.ISNONTEXT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test.\nThe value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISNONTEXT("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNONTEXT(255));
worksheet.GetRange("A3").SetValue(func.ISNONTEXT("Online Office"));
```
