# ISREF

Checks whether a value is a reference, and returns **true** or **false**.

## Syntax

```javascript
expression.ISREF(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISREF("A3"));
worksheet.GetRange("A2").SetValue(func.ISREF(worksheet.GetRange("A3")));
```
