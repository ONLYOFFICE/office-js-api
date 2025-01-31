# AND

Checks whether all conditions in a test are **true**.

## Syntax

```javascript
expression.AND(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number | string | [ApiRange](../../ApiRange/ApiRange.md) | boolean | [ApiName](../../ApiName/ApiName.md) |  | A condition to check. |

## Returns

boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

oWorksheet.GetRange("C1").SetValue(ans);

```
