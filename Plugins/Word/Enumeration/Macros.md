# Macros

An object containing the data about all the macros from the document.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| macrosArray | string[] | An array of macros codes (*[&#123;"name": "Macros1", "value": "&#123;macrosCode&#125;"&#125;]*). |
| current | number | A current macro index. |
## Type

Object



## Example

```javascript
var oMacros = &#123;
    "macrosArray": [
        &#123;
            "name": "Macros 1",
            "value": "(function()\n&#123;oDocument = Api.GetDocument();\noParagraph = Api.CreateParagraph();\noParagraph.AddText(\"This is a new paragraph\");\noDocument.Push(oParagraph);\n&#125;)();"
        &#125;,
        &#123;
            "name": "Macros 2",
            "value": "(function()\n&#123;oDocument = Api.GetDocument();\noParagraph = oDocument.GetElement(0);\noParagraph.AddText(\"ONLYOFFICE Document Builder\");\noRange = oDocument.GetRange(0, 24);\noRange.SetBold(true);\n&#125;)();"
        &#125;
    ],
    "current": 1
&#125;;
window.Asc.plugin.executeMethod("SetMacros", [oMacros]);
