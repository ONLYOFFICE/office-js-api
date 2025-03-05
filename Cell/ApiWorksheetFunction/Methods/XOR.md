# XOR

Returns the logical **Exclusive Or** value of all arguments. The function returns **true** when the number of **true** inputs is odd and **false** when the number of **true** inputs is even.

## Syntax

```javascript
expression.XOR(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean \| boolean[] |  | The conditions to check. |

## Returns

boolean

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.TRUE(); //returns TRUE, doesnt require arguments

worksheet.GetRange("A1").SetValue(ans);

```
