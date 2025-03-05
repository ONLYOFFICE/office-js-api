# GetAllNumberedParagraphs

Returns all numbered paragraphs from the current document.

## Syntax

```javascript
expression.GetAllNumberedParagraphs();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

This example shows how to get all numbered paragraphs from the current document.

```javascript editor-docx
let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let formatString = "";
	for (let tempLvl = 0; tempLvl <= lvl; ++tempLvl) formatString += "%" + tempLvl + ".";
	numLvl.SetCustomType("lowerRoman", formatString, "left");
	numLvl.SetStart(lvl + 1);
	numLvl.SetSuff("space");
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Custom numbered lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let numberedParagraphs = doc.GetAllNumberedParagraphs();
numberedParagraphs[0].SetBold(true);
```
