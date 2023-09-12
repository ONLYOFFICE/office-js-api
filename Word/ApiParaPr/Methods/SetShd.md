# SetShd

Specifies the shading applied to the contents of the paragraph.

## Syntax

expression.SetShd(sType, r, g, b, isAuto?);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../../Enumerations/ShdType.md) | The shading type which will be applied to the contents of the current paragraph. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| isAuto | Optional | Boolean | The true value disables paragraph contents shading. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example specifies the shading applied to the contents of the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetShd("clear", 255, 111, 61, false);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a shading to a paragraph.");
oParagraph.SetStyle(oMyStyle);
builder.SaveFile("docx", "SetShd.docx");
builder.CloseFile();
```