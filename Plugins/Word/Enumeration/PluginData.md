# PluginData

The plugin object.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| url | string | The URL to plugin config. |
| guid | string | The plugin identifier. It must be of the *asc.&#123;UUID&#125;* type. |
| canRemoved | boolean | Specifies if the plugin can be removed (**true**) or not (**false**). |
| obj | object | The &#123;@link /plugin/config config&#125; of the installed plugin. The version is taken from the config and compared with the current one to check for updates. |
## Type

Object



## Example

```javascript
let plugin = {
    "url": "https://example.com/plugin/config.json",
    "guid": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
    "canRemoved": true,
    "obj": {
        "baseUrl": "",
        "guid": "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
        "version": "1.0",
        "minVersion": "6.3.0",
        ...
    }
};
```
