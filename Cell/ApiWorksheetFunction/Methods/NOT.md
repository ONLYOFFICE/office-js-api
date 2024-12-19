# NOT

Checks if the specified logical value is **true** or **false**. The function returns **true** if the argument is **false** and **false** if the argument is **true**.

## Syntax

expression.NOT(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; number &#124; string &#124; boolean |  | A value or expression that can be evaluated to **true** or **false**. |

## Returns

boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var condition = 12 < 100;
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NOT(condition);

oWorksheet.GetRange("C1").SetValue(ans);

```
