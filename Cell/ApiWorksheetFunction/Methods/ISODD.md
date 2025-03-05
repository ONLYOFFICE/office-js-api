# ISODD

Returns **true** if a number is odd.

## Syntax

```javascript
expression.ISODD(arg1);
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
let result = func.ISODD("94");
worksheet.GetRange("C3").SetValue(result);

```
