# SetSuperscript

Sets the superscript property to the specified font.\n💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetSuperscript(isSuperscript);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSuperscript | Required | boolean |  | Specifies that the text characters are displayed superscript. |

## Returns

This method doesn't return any data.

## Example

This example sets the superscript property to the specified font.

```javascript editor-xlsx
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSuperscript(true);
```
