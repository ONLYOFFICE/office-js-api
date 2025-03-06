# WEEKDAY

Returns a number from 1 to 7 identifying the day of the week of the specified date.

## Syntax

```javascript
expression.WEEKDAY(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number that represents a date, or a result of other formulas or functions. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number that determines the type of return value: -**1** - returns a number from 1 (Sunday) to 7 (Saturday);\n-**2** - returns a number from 1 (Monday) to 7 (Sunday); -**3** - returns a number from 0 (Monday) to 6 (Sunday). |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.WEEKDAY("11/5/2018", 2); 

worksheet.GetRange("C1").SetValue(ans);

```
