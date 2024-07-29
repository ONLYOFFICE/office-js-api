# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current paragraph.

## Syntax

expression.SetHighlight(sColor);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | Required | [highlightColor](../../Enumeration/highlightColor.md) |  | Available highlight color. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example sets hiighlight color "lightGray" for the paragraph.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text highlighted with light gray color.");
oParagraph.SetHighlight("lightGray");
```
