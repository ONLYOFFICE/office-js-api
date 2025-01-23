# GetParaPr

Returns the paragraph properties.

## Syntax

expression.GetParaPr();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## Example

This example shows how to get the paragraph properties.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraStyle = doc.GetDefaultStyle("paragraph");
paragraph = doc.GetElement(0);
paragraph.SetStyle(paraStyle);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
paraPr.SetIndFirstLine(720);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");
```
