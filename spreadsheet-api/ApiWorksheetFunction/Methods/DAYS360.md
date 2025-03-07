# DAYS360

Returns the number of days between two dates based on a 360-day year (twelve 30-day months).

## Syntax

```javascript
expression.DAYS360(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Start date from which days will be counted. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | End date until which days will be counted. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value that specifies whether to use the U.S. (NASD) (false or omitted) or European (true) method in the calculation.\ According to the European method, the start and end dates that occur on the 31st of a month become equal to the 30th of the same month.\ According to the U.S. method, the start date is the last day of a month, it becomes equal to the 30th of the same month.\ If the end date is the last day of a month and the start date is earlier than the 30th of a month, the end date becomes equal to the 1st of the next month.\ Otherwise the end date becomes equal to the 30th of the same month. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.DAYS360("3/31/2018", "4/30/2019", false); 

worksheet.GetRange("C1").SetValue(ans);

```
