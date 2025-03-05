# ISEVEN

Returns **true** if a number is even.

## Syntax

```javascript
expression.ISEVEN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to test. |

## Returns

boolean

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.ISEVEN("66");
worksheet.GetRange("C3").SetValue(result)

```
