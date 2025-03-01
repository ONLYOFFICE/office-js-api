# RejectAllRevisionChanges

Rejects all changes made in review mode.

## Syntax

```javascript
expression.RejectAllRevisionChanges();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example rejects all changes made in review mode.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
doc.SetTrackRevisions(true);
paragraph1.AddText("Reviewing documents");
paragraph1.SetJc("center");
paragraph1.SetFontSize(24);
paragraph1.SetBold(true);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("If you need to get review report, you can use Document Builder. The steps below will show how to do it.");
doc.Push(paragraph2);
doc.RejectAllRevisionChanges();
doc.SetTrackRevisions(false);
let paragraph = Api.CreateParagraph();
paragraph.AddText("All revision changes in this document were rejected.");
doc.Push(paragraph);
```
