# AND

Checks whether all conditions in a test are **true**.

## Syntax

expression.AND(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; [ApiRange](../../ApiRange/ApiRange.md) &#124; boolean &#124; [ApiName](../../ApiName/ApiName.md) |  | A condition to check. |

## Returns

boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

oWorksheet.GetRange("C1").SetValue(ans);

```
