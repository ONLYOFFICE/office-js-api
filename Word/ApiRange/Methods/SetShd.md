# SetShd

Specifies the shading applied to the contents of the current text Range.

## Syntax

expression.SetShd(sType, r, g, b);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../../Enumerations/ShdType.md) | The shading type applied to the contents of the current text Range. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply shadow)

## Example

This example specifies the shading applied to the contents of the current text Range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetShd("clear", 255, 111, 61);
builder.SaveFile("docx", "SetShd.docx");
builder.CloseFile();
```