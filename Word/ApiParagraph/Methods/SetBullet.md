# SetBullet

Sets the bullet or numbering to the current paragraph.
<br>Inherited From: [ApiParaPr#SetBullet](../../ApiParaPr/Methods/SetBullet.md)

## Syntax

expression.SetBullet(oBullet?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oBullet | Optional | [ApiBullet](../../ApiBullet/ApiBullet.md) | The bullet object created with the [Api#CreateBullet](../../Api/Methods/CreateBullet.md) or [Api#CreateNumbering](../../Api/Methods/CreateNumbering.md) method. Default value is "null". |

## Returns

This method doesn't return any data.

## Example

This example sets the bullet or numbering to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oBullet = Api.CreateBullet("-");
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
builder.SaveFile("docx", "SetBullet.docx");
builder.CloseFile();
```