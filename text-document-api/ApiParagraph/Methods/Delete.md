# Delete

Deletes the current paragraph.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example deletes the paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample paragraph №1.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is just a sample paragraph №2.");
doc.Push(paragraph2);
paragraph1.Delete();
paragraph2.AddLineBreak();
paragraph2.AddText("The sample paragraph №1 was removed.");
```
