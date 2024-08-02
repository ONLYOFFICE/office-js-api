# CreateNumbering

Creates a bullet for a paragraph with the numbering character or symbol specified with the sType parameter.

## Syntax

expression.CreateNumbering(sType, nStartAt);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | BulletType |  | The numbering type the paragraphs will be numbered with. |
| nStartAt | Required | number |  | The number the first numbered paragraph will start with. |

## Returns

ApiBullet

## Example

This example creates a bullet for a paragraph.

```javascript
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 2; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("This is an example of the bulleted paragraph № " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oDocument.Push(oParagraph);
}
```
