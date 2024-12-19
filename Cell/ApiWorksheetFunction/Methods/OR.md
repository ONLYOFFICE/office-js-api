# OR

Checks whether any of the arguments are **true**. Returns **false** only if all arguments are **false**.

## Syntax

expression.OR(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; [ApiRange](../../ApiRange/ApiRange.md) &#124; [ApiName](../../ApiName/ApiName.md) &#124; boolean |  | A condition to check. |

## Returns

boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(12);

var logical1 = oWorksheet.GetRange("A1") < 10;
var logical2 = 34 < 10;
var logical3 = 50 < 10;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.OR(logical1, logical2, logical3);
oWorksheet.GetRange("C1").SetValue(ans);

```
