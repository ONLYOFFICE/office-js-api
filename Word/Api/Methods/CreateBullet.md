# CreateBullet

Creates a bullet for a paragraph with the character or symbol specified with the sSymbol parameter.

## Syntax

expression.CreateBullet(sSymbol);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sSymbol | Optional | String | The character or symbol which will be used to create the bullet for the paragraph. |

## Returns

[ApiBullet](../../ApiBullet/ApiBullet.md)

## Example

description

```javascript
let oBullet = Api.CreateBullet('*');
let oDocument = Api.GetDocument();
let oParagraph = Api.CreateParagraph();
oParagraph.AddText('The first paragraph.');
let oPr = oParagraph.GetParaPr();
oPr.SetBullet(oBullet);
oParagraph.OnChangeParaPr(oPr);
oDocument.AddElement(0, oParagraph);
```