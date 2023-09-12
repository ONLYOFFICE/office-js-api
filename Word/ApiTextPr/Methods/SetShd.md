# SetShd

Specifies the shading applied to the contents of the current text run.

## Syntax

expression.SetShd(sType, r, g, b);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../../Enumerations/ShdType.md) | The shading type applied to the contents of the current text run. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example specifies the shading applied to the contents of the current text run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetShd("clear", 255, 111, 61);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the shading set to orange.");
builder.SaveFile("docx", "SetShd.docx");
builder.CloseFile();
```