# SetRightBorder

Specifies the border which will be displayed at the right side of the page around the specified paragraph.<br>Inherited From: [ApiParaPr#SetRightBorder](../../ApiParaPr/Methods/SetRightBorder.md)

## Syntax

expression.SetRightBorder(sType, nSize, nSpace, r, g, b);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../../Enumerations/BorderType.md) | The border style. |
| nSize | Required | [pt_8](../../../Enumerations/pt_8.md) | The width of the current right border measured in eighths of a point. |
| nSpace | Required | [pt](../../../Enumerations/pt.md) | The spacing offset to the right of the paragraph measured in points used to place this border. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example specifies the border which will be displayed at the right side of the page around the specified paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first paragraph. We will add a two point orange border at its right side. ");
oParagraph.AddText("The space between the right side of the paragraph and the border is 8 points. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetRightBorder("single", 16, 8, 255, 111, 61);
builder.SaveFile("docx", "SetRightBorder.docx");
builder.CloseFile();
```