# SetFontSize

Sets the font size to the characters of the current text Range.

## Syntax

```javascript
expression.SetFontSize(FontSize);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| FontSize | Required | [hps](../../Enumeration/hps.md) |  | The text size value measured in half-points (1/144 of an inch). |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example sets the font size to the characters of the text Range.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetFontSize(14);
```
