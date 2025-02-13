# SetBetweenBorder

Specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings.

## Syntax

```javascript
expression.SetBetweenBorder(sType, nSize, nSpace, r, g, b);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../Enumeration/BorderType.md) |  | The border style. |
| nSize | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current border measured in eighths of a point. |
| nSpace | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset between the paragraphs measured in points used to place this border. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings.

```javascript
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetBetweenBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border between paragraphs.");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the second paragraph. ");
paragraph.AddText("No need to add anything additionally to it. ");
paragraph.AddText("The borders between the paragraphs have already been set.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the third paragraph. ");
paragraph.AddText("No need to add anything additionally to it. ");
paragraph.AddText("The borders between the paragraphs have already been set.");
doc.Push(paragraph);
```
