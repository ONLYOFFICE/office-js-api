# GetAllContentControls

Returns a list of all the content controls from the document.

## Syntax

expression.GetAllContentControls();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt[]](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | [ApiInlineLvlSdt[]](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example shows how to get a list of all the content controls from the document.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let contentControls = doc.GetAllContentControls();
contentControls[0].GetElement(0).SetBold(true);
let classType = contentControls[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
