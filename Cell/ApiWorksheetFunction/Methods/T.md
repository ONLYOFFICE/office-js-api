# T

Checks whether a value is text, and returns the text if it is, or returns double quotes (empty text) if it is not.

## Syntax

```javascript
expression.T(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string | boolean |  | The value to test. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | string

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.T("date and time"));
```
