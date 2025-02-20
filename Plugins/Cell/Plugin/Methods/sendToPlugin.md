# sendToPlugin

Sends a message from the modal window to the plugin.

## Syntax

```javascript
expression.sendToPlugin(name, data);
```

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The event name. |
| data | Required | object |  | The event data. |

## Returns

boolean

## Example

```javascript editor-xlsx
function makeConvetration() {
    if (window.Asc.plugin.windowID) {
        window.Asc.plugin.sendToPlugin("onWindowMessage", {config: oConfig});
    } else {
        window.Asc.plugin.executeMethod('ConvertDocument', [oConfig.convertType, oConfig.htmlHeadings, oConfig.base64img, oConfig.demoteHeadings, oConfig.renderHTMLTags], function(sOutput) {
            document.getElementById("text-area").value = sOutput;
        });
    }
};
```
