# SetSize

Sets the font size property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetSize(Size);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Size | Required | number |  | Font size. |

## Returns

This method doesn't return any data.

## Example

This example sets the font size property to the specified font.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSize(18);
```
