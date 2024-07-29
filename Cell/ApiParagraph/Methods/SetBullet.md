# SetBullet

Sets the bullet or numbering to the current paragraph.

## Syntax

expression.SetBullet(oBullet);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oBullet | Required | [ApiBullet](../../ApiBullet/ApiBullet.md) |  | The bullet object created with the {@link Api#CreateBullet} or {@link Api#CreateNumbering} method. |

## Returns

This method doesn't return any data.

## Example

This example sets the bullet or numbering to the current paragraph.

```javascript
var oDocument = oShape.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
var oBullet = Api.CreateBullet("-");
oParaPr.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
```
