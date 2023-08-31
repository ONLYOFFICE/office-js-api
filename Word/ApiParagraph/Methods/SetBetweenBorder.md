# SetBetweenBorder

Specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings.<br>Inherited From: [ApiParaPr#SetBetweenBorder](../../ApiParaPr/Methods/SetBetweenBorder.md)

## Syntax

expression.SetBetweenBorder(sType, nSize, nSpace, r, g, b);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../../Enumerations/BorderType.md) | The border style. |
| nSize | Required | [pt_8](../../../Enumerations/pt_8.md) | The width of the current border measured in eighths of a point. |
| nSpace | Required | [pt](../../../Enumerations/pt.md) | The spacing offset between the paragraphs measured in points used to place this border. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first paragraph. We will add a thick orange border between it and the next paragraph. ");
oParagraph.AddText("No additional spacing between the border and the paragraphs is added.");
oParagraph.SetBetweenBorder("single", 24, 0, 255, 111, 61);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph. We will add a thin black border between it and the next paragraph. ");
oParagraph.AddText("We added additional spacing between the border and the paragraphs.");
oParagraph.SetBetweenBorder("single", 12, 10, 51, 51, 51);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the third paragraph. The border can be displayed above it only, as there are no new paragraphs after it.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetBetweenBorder.docx");
builder.CloseFile();
```