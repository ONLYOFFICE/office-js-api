# SetBold

Sets the bold property to the text character.

## Syntax

expression.SetBold(isBold);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean |  | Specifies that the contents of this paragraph are displayed bold. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example sets the bold property to the text character.

```javascript
var oDocument = editor.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font set to bold.");
oParagraph.SetBold(true);
```
