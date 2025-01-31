# CreateNewHistoryPoint

Creates a new history point.

## Syntax

```javascript
expression.CreateNewHistoryPoint();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example creates a new history point.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text.");
doc.CreateNewHistoryPoint();
paragraph = Api.CreateParagraph();
paragraph.AddText("New history point was just created.");
doc.Push(paragraph);
```
