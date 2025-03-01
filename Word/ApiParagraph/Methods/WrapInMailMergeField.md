# WrapInMailMergeField

Wraps the paragraph content in a mail merge field.

## Syntax

```javascript
expression.WrapInMailMergeField();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example wraps the paragraph content in a mail merge field.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
paragraph.WrapInMailMergeField();
```
