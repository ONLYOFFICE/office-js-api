# sendToPlugin

Sends a message from the modal window to the plugin.

## Syntax

expression.sendToPlugin(name, data);

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The event name. |
| data | Required | object |  | The event data. |

## Returns

boolean

## Example

```javascript
function makeConvetration() &#123;
    if (window.Asc.plugin.windowID) &#123;
        window.Asc.plugin.sendToPlugin("onWindowMessage", &#123;config: oConfig&#125;);
    &#125; else &#123;
        window.Asc.plugin.executeMethod('ConvertDocument', [oConfig.convertType, oConfig.htmlHeadings, oConfig.base64img, oConfig.demoteHeadings, oConfig.renderHTMLTags], function(sOutput) &#123;
            document.getElementById("text-area").value = sOutput;
        &#125;);
    &#125;
&#125;;
