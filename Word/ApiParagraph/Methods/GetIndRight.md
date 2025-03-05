# GetIndRight

Returns the paragraph right side indentation.

## Syntax

```javascript
expression.GetIndRight();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| undefined

## Example

This example shows how to get the paragraph right side indentation.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("right");
paraPr.SetIndRight(2880);
paragraph.AddText("This is the first paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let indRight = paraPr.GetIndRight();
paragraph = Api.CreateParagraph();
paragraph.AddText("Right indent: " + indRight);
doc.Push(paragraph);
```
