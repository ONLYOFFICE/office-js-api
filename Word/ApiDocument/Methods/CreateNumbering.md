# CreateNumbering

Creates an abstract multilevel numbering with a specified type.

## Syntax

expression.CreateNumbering(sType?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [DocumentNumberingType](../../../Enumerations/DocumentNumberingType.md) | The type of the numbering which will be created. Default value is "bullet". |

## Returns

[ApiNumbering](../../ApiNumbering/ApiNumbering.md)

## Example

This example creates an abstract multilevel numbering with a "bullet" type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Default numbered lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
builder.SaveFile("docx", "CreateNumbering.docx");
builder.CloseFile();
```