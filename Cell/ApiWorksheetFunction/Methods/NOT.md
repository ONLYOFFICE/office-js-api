# NOT

Checks if the specified logical value is **true** or **false**. The function returns **true** if the argument is **false** and **false** if the argument is **true**.

## Syntax

```javascript
expression.NOT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | A value or expression that can be evaluated to **true** or **false**. |

## Returns

boolean

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let condition = 12 < 100;
let func = Api.GetWorksheetFunction();
let ans = func.NOT(condition);

worksheet.GetRange("C1").SetValue(ans);

```
