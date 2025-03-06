# GetParagraphMarkTextPr

Returns the text properties of the paragraph mark which is used to mark the paragraph end. The mark can also acquire\ncommon text properties like bold, italic, underline, etc.

## Syntax

```javascript
expression.GetParagraphMarkTextPr();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to get the text properties of the paragraph mark which is used to mark the paragraph end.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the font size, font color and spacing for the paragraph mark. ");
paragraph.AddText("You can see it if you download the document, open it and enable the invisible symbols display.");
let paragraphMarkTextPr = paragraph.GetParagraphMarkTextPr();
paragraphMarkTextPr.SetFontSize(52);
paragraphMarkTextPr.SetColor(255, 255, 0, false);
paragraphMarkTextPr.SetSpacing(5);
```
