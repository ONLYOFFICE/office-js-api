# SetNumPr

Specifies that the current paragraph references a numbering definition instance in the current document.

## Syntax

```javascript
expression.SetNumPr(oNumPr, nLvl);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oNumPr | Required | [ApiNumbering](../../ApiNumbering/ApiNumbering.md) |  | Specifies a numbering definition. |
| nLvl | Optional | number | 0 | Specifies a numbering level reference. If the current instance of the ApiParaPr class is direct formatting of a paragraph, then this parameter MUST BE specified. Otherwise, if the current instance of the ApiParaPr class is the part of ApiStyle properties, this parameter will be ignored. |

## Returns

This method doesn't return any data.

## Example

This example specifies that the current paragraph references a numbering definition instance in the current document.

```javascript editor-docx
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
let numbering = doc.CreateNumbering("bullet");
paraPr.SetNumPr(numbering);
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph styled as a bulleted list.");
doc.Push(paragraph);
```
