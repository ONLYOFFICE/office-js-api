# GetDisplayedText

Returns the hyperlink display text.

## Syntax

```javascript
expression.GetDisplayedText();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the hyperlink display text.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let displayedText = hyperlink.GetDisplayedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Displayed text: " + displayedText);
doc.Push(paragraph);
```
