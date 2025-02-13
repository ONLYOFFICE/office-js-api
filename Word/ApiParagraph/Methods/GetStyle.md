# GetStyle

Returns the paragraph style method.

## Syntax

```javascript
expression.GetStyle();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example shows how to get the paragraph style.

```javascript
let doc = Api.GetDocument();
let heading6Style = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("center");
paraPr.SetStyle(heading6Style);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
let style = paraPr.GetStyle();
paragraph.AddLineBreak();
paragraph.AddText("Style: " + style.GetName());
```
