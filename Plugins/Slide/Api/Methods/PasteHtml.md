# PasteHtml

Pastes text in the HTML format into the document.

## Syntax

```javascript
expression.PasteHtml(htmlText);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| htmlText | Required | string |  | A string value that specifies the text in the *HTML* format to be pasted into the document. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-pptx
window.Asc.plugin.executeMethod ("PasteHtml", ["&lt;p&gt;&lt;b&gt;Plugin methods for OLE objects&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;AddOleObject&lt;/li&gt;&lt;li&gt;EditOleObject&lt;/li&gt;&lt;/ul&gt;"]);
```
