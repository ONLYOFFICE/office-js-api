# SetStrikethrough

Sets the strikethrough property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetStrikethrough(isStrikethrough);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikethrough | Required | boolean |  | Specifies that the text characters are displayed strikethrough. |

## Returns

This method doesn't return any data.

## Example

This example sets the strikethrough property to the specified font.

```javascript editor-xlsx
// How to make a text strikethrough.

// Get a font object of characters and make it strikethrough.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetStrikethrough(true);
```
