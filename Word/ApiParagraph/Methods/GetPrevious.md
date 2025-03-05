# GetPrevious

Returns the previous paragraph.

## Syntax

```javascript
expression.GetPrevious();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example shows how to get the previous paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample paragraph №1.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is just a sample paragraph №2.");
doc.Push(paragraph2);
let previousParagraph = paragraph2.GetPrevious();
previousParagraph.SetBold(true);
```
