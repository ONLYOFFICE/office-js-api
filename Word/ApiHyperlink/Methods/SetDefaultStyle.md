# SetDefaultStyle

Sets the default hyperlink style.

## Syntax

```javascript
expression.SetDefaultStyle();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example sets the default hyperlink style.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api Document Builder");
paragraph.SetColor(255, 111, 61);
let copyParagraph = paragraph.Copy();
doc.Push(copyParagraph);
let hyperlink = paragraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
let copyHyperlink = copyParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
copyHyperlink.SetDefaultStyle();
```
