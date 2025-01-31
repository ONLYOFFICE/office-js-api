# ConvertDocument

Converts a document to Markdown or HTML text.

## Syntax

```javascript
expression.ConvertDocument(sConvertType, bHtmlHeadings, bBase64img, bDemoteHeadings, bRenderHTMLTags);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sConvertType | Optional | "markdown" | "html" | "markdown" | Conversion type ("markdown" or "html"). |
| bHtmlHeadings | Optional | boolean | false | Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs. |
| bBase64img | Optional | boolean | false | Defines if the images will be created in the base64 format. |
| bDemoteHeadings | Optional | boolean | false | Defines if all heading levels in your document will be demoted to conform with the following standard: single H1 as title, H2 as top-level heading in the text body. |
| bRenderHTMLTags | Optional | boolean | false | Defines if HTML tags will be preserved in your Markdown. If you just want to use an occasional HTML tag, you can avoid using the opening angle bracket in the following way: \&lt;tag&gt;text\&lt;/tag&gt;. By default, the opening angle brackets will be replaced with the special characters. |

## Returns

string

## Example

```javascript
let info = "";
window.Asc.plugin.executeMethod ("ConvertDocument", ["markdown", false, false, true, false], function (output) {
    document.getElementById ("text-area").value = info + output;
});
```
