# GetContentControlsByTag

Returns a list of all content controls in the document with the specified tag name.

## Syntax

```javascript
expression.GetContentControlsByTag(sTag);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTag | Required | string |  | Content control tag. |

## Returns

[ApiBlockLvlSdt[]](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt[]](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example shows how to get a list of all content controls in the document with the specified tag name.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("Inline content control");
inlineLvlSdt.SetTag("Tag 1");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("Block text content control");
blockLvlSdt.SetTag("Tag 2");
doc.AddElement(0, blockLvlSdt);
let contentControls = doc.GetContentControlsByTag("Tag 1");
contentControls[0].SetAlias("№1");
```
