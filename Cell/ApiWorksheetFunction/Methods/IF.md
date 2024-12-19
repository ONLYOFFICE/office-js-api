# IF

Checks whether a condition is met, and returns one value if **true**, and another value if **false**.

## Syntax

expression.IF(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number &#124; string &#124; [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; boolean |  | Any value or expression that can be evaluated to **true** or **false**. |
| arg2 | Required | number &#124; string &#124; [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; boolean |  | The value that is returned if the condition is **true**. If omitted, **true** is returned. You can nest up to seven IF functions. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; number &#124; string &#124; boolean |  | The value that is returned if the condition is **false**. If omitted, **false** is returned. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IF("12<100", 0, 1));
```
