# WORKDAY_INTL

Returns the serial number of the date before or after a specified number of workdays with custom weekend parameters.

## Syntax

```javascript
expression.WORKDAY_INTL(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the start date. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of nonweekend and non-holiday days before or after the start date. A positive value for days yields a future date; a negative value yields a past date. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | A number or string specifying when weekends occur. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An optional range or array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.WORKDAY_INTL("9/8/2017", "-20", "0000011", "8/15/2017");

worksheet.GetRange("C1").SetValue(ans);

```
