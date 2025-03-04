# UNICODE

Returns the number (code point) corresponding to the first character of the text.

## Syntax

```javascript
expression.UNICODE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The character for which the Unicode value will be returned. |

## Returns

number

## Example

This example shows how to return the number (code point) corresponding to the first character of the text.

```javascript editor-xlsx
// How to get a Unicode of a character.

// Use a function to return the character's Unicode.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.UNICODE("example"));
```
