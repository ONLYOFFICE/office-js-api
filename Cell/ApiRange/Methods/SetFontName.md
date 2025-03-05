# SetFontName

Sets the specified font family as the font name for the current cell range.

## Syntax

```javascript
expression.SetFontName(sName);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The font family name used for the current cell range. |

## Returns

This method doesn't return any data.

## Example

This example sets the specified font family as the font name for the cell range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontName("Arial");
```
