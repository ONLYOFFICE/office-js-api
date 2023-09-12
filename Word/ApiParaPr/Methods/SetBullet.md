# SetBullet

Sets the bullet or numbering to the current paragraph.

## Syntax

expression.SetBullet(oBullet);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oBullet | Required | [ApiBullet](../../ApiBullet/ApiBullet.md) &#124; null | The bullet object created with the [Api#CreateBullet](../../Api/Methods/CreateBullet.md) or [Api#CreateNumbering](../../Api/Methods/CreateNumbering.md) method. |

## Returns

This method doesn't return any data.

## Example

This example sets the bullet or numbering to the current paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = oShape.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
var oBullet = Api.CreateBullet("-");
oParaPr.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
builder.SaveFile("docx", "SetBullet.docx");
builder.CloseFile();
```