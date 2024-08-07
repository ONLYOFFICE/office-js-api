# SetItalic

Sets the italic property to the text character.

## Syntax

expression.SetItalic(isItalic);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies that the contents of the current run are displayed italicized. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the italic property to the text character.

```javascript
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetItalic(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font set to italicized letters using the text properties.");
```
