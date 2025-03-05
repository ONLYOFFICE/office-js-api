# RemoveSelection

Removes the current selection.

## Syntax

```javascript
expression.RemoveSelection();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example removes the current selection.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api ONLYOFFICE");
let range = doc.GetRange(0, 2);
range.Select();
doc.RemoveSelection();
paragraph = Api.CreateParagraph();
paragraph.AddText("The selection from the word 'Api' was removed.");
doc.Push(paragraph);
```
