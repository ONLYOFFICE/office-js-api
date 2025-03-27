# Select

Sets the selection to the specified range.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example sets the selection to the specified range.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
range.Select();
paragraph = Api.CreateParagraph();
paragraph.AddText("The word 'ONLYOFFICE' was just selected.");
doc.Push(paragraph);
```
