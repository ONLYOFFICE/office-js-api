# SetColor

Sets the font color property to the specified font.\
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetColor(Color);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | Font color. |

## Returns

This method doesn't return any data.

## Example

This example sets the font color property to the specified font.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
let color = Api.CreateColorFromRGB(255, 111, 61);
font.SetColor(color);
```
