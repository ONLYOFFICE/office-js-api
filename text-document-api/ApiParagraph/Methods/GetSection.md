# GetSection

Returns the paragraph section.

## Syntax

```javascript
expression.GetSection();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSection](../../ApiSection/ApiSection.md)

## Example

This example shows how to get the paragraph section.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
let section = paragraph.GetSection();
section.SetPageSize(7200, 4320);
```
