# SetFontSize

Sets the font size to the characters of the current text Range.

## Syntax

expression.SetFontSize(FontSize);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| FontSize | Required | [hps](../../Enumeration/hps.md) |  | The text size value measured in half-points (1/144 of an inch). |

## Returns

ApiRange, null

## Example

This example sets the font size to the characters of the text Range.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetFontSize(14);
```
