# GetScreenTipText

Returns the screen tip text of the hyperlink.

## Syntax

```javascript
expression.GetScreenTipText();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the screen tip text of the hyperlink.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetScreenTipText("ONLYOFFICE for developers");
let screenTipText = hyperlink.GetScreenTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Screen tip text: " + screenTipText);
doc.Push(paragraph);
```
