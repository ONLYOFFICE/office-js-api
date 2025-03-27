# FISHERINV

Returns the inverse of the Fisher transformation: if y = FISHER(x), then FISHERINV(y) = x.

## Syntax

```javascript
expression.FISHERINV(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to perform the inverse of the transformation. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.FISHERINV(0.56);
worksheet.GetRange("B2").SetValue(ans);



```
