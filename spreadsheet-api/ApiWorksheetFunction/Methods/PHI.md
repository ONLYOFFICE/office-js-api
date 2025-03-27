# PHI

Returns the value of the density function for a standard normal distribution.

## Syntax

```javascript
expression.PHI(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number for which the density of the standard normal distribution will be returned. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

//method params
let number = 5;

worksheet.GetRange("A1").SetValue(number);

let func = Api.GetWorksheetFunction();
let ans = func.PHI(number);

worksheet.GetRange("C1").SetValue(ans);

```
