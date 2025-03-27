# GetLinkedText

Returns the hyperlink address.

## Syntax

```javascript
expression.GetLinkedText();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the hyperlink address.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetLink("https://api.onlyoffice.com/");
let linkedText = hyperlink.GetLinkedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Linked text: " + linkedText);
doc.Push(paragraph);
```
