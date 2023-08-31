# InsertInContentControl

Wraps the paragraph object with a rich text content control.

## Syntax

expression.InsertInContentControl(nType);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nType | Required | Number | Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiParagraph (any value except 1) object. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) &#124; [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

This example wraps the paragraph object with a rich text content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph inserted into the content control.");
var oBlockLvlSdt = oParagraph.InsertInContentControl(1);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "InsertInContentControl.docx");
builder.CloseFile();
```