# OR

Checks whether any of the arguments are **true**. Returns **false** only if all arguments are **false**.

## Syntax

```javascript
expression.OR(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A condition to check. |

## Returns

boolean

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(12);

let logical1 = worksheet.GetRange("A1") < 10;
let logical2 = 34 < 10;
let logical3 = 50 < 10;

let func = Api.GetWorksheetFunction();
let ans = func.OR(logical1, logical2, logical3);
worksheet.GetRange("C1").SetValue(ans);

```
