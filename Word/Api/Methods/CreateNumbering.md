# CreateNumbering

Creates a bullet for a paragraph with the numbering character or symbol specified with the numType parameter.

## Syntax

```javascript
expression.CreateNumbering(numType, startAt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| numType | Required | BulletType |  | The numbering type the paragraphs will be numbered with. |
| startAt | Required | number |  | The number the first numbered paragraph will start with. |

## Returns

ApiBullet

## Example

This example creates a bullet for a paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 2; ++lvl) 
{
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is an example of the bulleted paragraph № " + (lvl + 1));
	paragraph.SetNumbering(numbering.GetLevel(lvl));
	doc.Push(paragraph);
}
```
