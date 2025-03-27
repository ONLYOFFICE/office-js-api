# SECOND

Returns the second, a number from 0 to 59.

## Syntax

```javascript
expression.SECOND(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | A number in the date-time code, or text in the time format, such as "16:48:00" or "4:48:00 PM", or a result of other formulas or functions. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.SECOND("16:39:35"); 

worksheet.GetRange("C1").SetValue(ans);

```
