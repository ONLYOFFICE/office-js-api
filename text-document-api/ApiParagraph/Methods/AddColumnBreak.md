# AddColumnBreak

Adds a column break to the current position and starts the next element from a new column.

## Syntax

```javascript
expression.AddColumnBreak();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example adds a column break to the current position and starts the next element from a new column.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetEqualColumns(2, 720);
paragraph.AddText("This is the text for the first column. It is written all in one text run. Nothing special.");
paragraph.AddColumnBreak();
paragraph.AddText("This is the text which starts from the beginning of the second column. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
```
