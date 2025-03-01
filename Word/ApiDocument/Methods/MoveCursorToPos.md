# MoveCursorToPos

Moves a cursor to a specified position of the document.
If there is any selection in the document, it will be removed.

## Syntax

```javascript
expression.MoveCursorToPos(nPos);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | false | Desired cursor position. |

## Returns

boolean

## Example

This example moves cursor to a specified position inside the range object.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of the document");
doc.Push(paragraph);
let range = doc.GetRange();
doc.MoveCursorToPos(range.GetEndPos());

```
