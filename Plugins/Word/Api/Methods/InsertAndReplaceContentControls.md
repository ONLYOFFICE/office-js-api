# InsertAndReplaceContentControls

Inserts the content control containing data. The data is specified by the JS code for [Document](https://api.onlyoffice.com/docs/office-api/usage-api/text-document-api/), or by a link to the shared document.

## Syntax

```javascript
expression.InsertAndReplaceContentControls(arrDocuments);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrDocuments | Required | [ContentControlPropertiesAndContent](../../Enumeration/ContentControlPropertiesAndContent.md)[] |  | An array of properties and contents of the content control. |

## Returns

[ContentControlProperties](../../Enumeration/ContentControlProperties.md)[]

## Example

```javascript
let documents = [{
    "Props": {
        "Id": 100,
        "Tag": "CC_Tag",
        "Lock": 3
    },
    "Script": "var oParagraph = Api.CreateParagraph();oParagraph.AddText('Hello world!');Api.GetDocument().InsertContent([oParagraph]);"
}];
window.Asc.plugin.executeMethod ("InsertAndReplaceContentControls", [documents]);
```
