# EXACT

Checks whether two text strings are exactly the same, and returns **true** or **false**. This function is case-sensitive.

## Syntax

```javascript
expression.EXACT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The first text string. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The second text string. |

## Returns

boolean

## Example

This example shows how to check whether two text strings are exactly the same, and returns true or false. This function is case-sensitive.

```javascript editor-xlsx
// How to compare strings.

// Use function to compare two texts (case-sensitive).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.EXACT("MyPassword", "mypassword"));
```
