# GetDefaultTextPr

Returns a set of default properties for the text run in the current document.

## Syntax

```javascript
expression.GetDefaultTextPr();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to get a set of default properties for the text run in the current document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Comic Sans MS");
paragraph.AddText("This is just a text.");
```
