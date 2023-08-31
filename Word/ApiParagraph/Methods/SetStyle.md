# SetStyle

The paragraph style base method.
<br>This method is not used by itself, as it only forms the basis for the [ApiParagraph#SetStyle](./SetStyle.md) method which sets the selected or created style for the paragraph.<br>Inherited From: [ApiParaPr#SetStyle](../../ApiParaPr/Methods/SetStyle.md)

## Syntax

expression.SetStyle(oStyle);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) | The style of the paragraph to be set. |

## Returns

This method doesn't return any data.

## Example

This example sets a style for the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 6");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
builder.SaveFile("docx", "SetStyle.docx");
builder.CloseFile();
```