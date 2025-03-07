# Last

Returns the last document element.

## Syntax

```javascript
expression.Last();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[DocumentElement](../../Enumeration/DocumentElement.md)

## Example

This example shows how to get the last document element.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text №2.");
doc.Push(paragraph);
let element = doc.Last();
element.SetBold(true);
```
