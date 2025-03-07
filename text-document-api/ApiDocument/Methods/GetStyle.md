# GetStyle

Returns a style by its name.

## Syntax

```javascript
expression.GetStyle(sStyleName);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleName | Required | string |  | The style name. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example shows how to get a style by its name.

```javascript editor-docx
let doc = Api.GetDocument();
let noSpacingStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(noSpacingStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
