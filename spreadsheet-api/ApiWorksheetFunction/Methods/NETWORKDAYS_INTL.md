# NETWORKDAYS_INTL

Returns the number of whole workdays between two dates with custom weekend parameters.

## Syntax

```javascript
expression.NETWORKDAYS_INTL(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the start date. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the end date. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | A number or string specifying when weekends occur. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | An optional range or array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.NETWORKDAYS_INTL("8/1/2017", "9/1/2017", "0000011", "8/16/2017"));
```
