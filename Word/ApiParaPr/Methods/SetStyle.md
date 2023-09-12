# SetStyle

The paragraph style base method.
<br>This method is not used by itself, as it only forms the basis for the [ApiParagraph#SetStyle](../../ApiParagraph/Methods/SetStyle.md) method which sets the selected or created style for the paragraph.

## Syntax

expression.SetStyle(oStyle);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) | The style of the paragraph to be set. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example sets a style for the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oHeading6Style = oDocument.GetStyle("Heading 6");
var oParaPr = oHeading6Style.GetParaPr();
oParaPr.SetJc("center");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oHeading6Style);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
builder.SaveFile("docx", "SetStyle.docx");
builder.CloseFile();
```