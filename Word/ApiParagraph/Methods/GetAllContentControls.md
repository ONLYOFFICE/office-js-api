# GetAllContentControls

Returns a collection of content control objects in the paragraph.

## Syntax

```javascript
expression.GetAllContentControls();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiInlineLvlSdt[]](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example shows how to get a collection of content control objects in the paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run);
let contentControls = paragraph.GetAllContentControls();
contentControls[0].GetElement(0).SetBold(true);
let classType = contentControls[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
