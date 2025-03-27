# GetSections

Returns a collection of section objects in the document.

## Syntax

```javascript
expression.GetSections();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSection](../../ApiSection/ApiSection.md)[]

## Example

This example shows how to get a collection of section objects in the document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section1 = doc.CreateSection(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph in a new section");
doc.Push(paragraph);
let sections = doc.GetSections();
paragraph = Api.CreateParagraph();
let classType = sections[1].GetClassType();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
