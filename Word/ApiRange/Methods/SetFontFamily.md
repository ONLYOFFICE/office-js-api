# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

expression.SetFontFamily(sFontFamily);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | string |  | The font family or families used for the current text Range. |

## Returns

ApiRange, null

## Example

This example sets all 4 font slots with the specified font family.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. ");
oParagraph.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
var oRange = oDocument.GetRange(22, 71);
oRange.SetFontFamily("Consolas");
```
