# Last

Returns the last element of the paragraph which is not empty.

## Syntax

```javascript
expression.Last();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## Example

This example shows how to get the last element of the paragraph which is not empty.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is an Run with text. ");
paragraph.Push(run1);
let run2 = Api.CreateRun();
run2.AddText("And this is the last Run in the paragraph.");
paragraph.Push(run2);
let lastRun = paragraph.Last();
lastRun.SetBold(true);
```
