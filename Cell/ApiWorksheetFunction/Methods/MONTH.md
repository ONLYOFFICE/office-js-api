# MONTH

Returns the month, a number from 1 (January) to 12 (December).

## Syntax

```javascript
expression.MONTH(arg1-);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1- | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number in the date-time code. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.MONTH("3/16/2018"); 

worksheet.GetRange("C1").SetValue(ans);

```
