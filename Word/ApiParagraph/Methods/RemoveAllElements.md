# RemoveAllElements

Removes all the elements from the current paragraph.
<br>When all the elements are removed from the paragraph, a new empty run is automatically created. If you want to add content to this run, use the [ApiParagraph#GetElement](./GetElement.md) method.

## Syntax

expression.RemoveAllElements();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example removes all the elements from the current paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is the first text run in the current paragraph.");
oParagraph.AddElement(oRun);
oParagraph.RemoveAllElements();
oRun = Api.CreateRun();
oRun.AddText("We removed all the paragraph elements and added a new text run inside it.");
oParagraph.AddElement(oRun);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "RemoveAllElements.docx");
builder.CloseFile();
```