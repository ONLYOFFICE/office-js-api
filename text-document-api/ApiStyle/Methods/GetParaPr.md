# GetParaPr

Returns the paragraph properties of the current style.

## Syntax

```javascript
expression.GetParaPr();
```

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## Example

This example shows how ot get the paragraph properties of the current style.

```javascript editor-docx
let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
paraPr.SetIndFirstLine(720);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");
```
