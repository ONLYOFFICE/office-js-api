# SetNumbering

Specifies that the current paragraph references the numbering definition instance in the current document.<br>Same as [ApiParagraph#SetNumPr](./SetNumPr.md)

## Syntax

expression.SetNumbering(oNumberingLevel);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oNumberingLevel | Required | [ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md) | The numbering level which will be used for assigning the numbers to the paragraph. |

## Returns

This method doesn't return any data.

## Example

This example specifies that the current paragraph references the numbering definition instance in the current document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Default bullet lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
builder.SaveFile("docx", "SetNumbering.docx");
builder.CloseFile();
```