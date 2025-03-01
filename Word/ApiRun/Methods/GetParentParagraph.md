# GetParentParagraph

Returns a parent paragraph of this run.

## Syntax

```javascript
expression.GetParentParagraph();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example shows how to get a parent paragraph of run for further manipulation.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph with example run: ");
let run = Api.CreateRun();
run.AddText('EXAMPLE RUN');
run.SetBold(true);
paragraph.AddElement(run);
let parentParagraph = run.GetParentParagraph();
parentParagraph.SetItalic(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("The parent paragraph of run was set to Italic");
doc.Push(paragraph);
```
