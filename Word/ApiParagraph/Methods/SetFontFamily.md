# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

expression.SetFontFamily(sFontFamily);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | string |  | The font family or families used for the current paragraph. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example sets all 4 font slots with the specified font family.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
oParagraph.SetFontFamily("Consolas");
```
