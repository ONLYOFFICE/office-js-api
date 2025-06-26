# onExternalPluginMessage

The function called to show the editor integrator message.

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| data | Object | Defines the editor integrator message:\ -**type** - the message type,  \ -**type**: string,  \ -**example**: "close";\ -**text** - the message text,  \ -**type**: string,  \ -**example**: "text". |

```javascript
window.Asc.plugin.onExternalPluginMessage = function(data) {
    switch (data.type) {
        case "close": {
            this.executeCommand("close", "");
            break;
        }
        case "insertText": {
            Asc.scope.text = data.text;
            this.callCommand(function() {
                var oDocument = Api.GetDocument();
                var oParagraph = Api.CreateParagraph();
                oParagraph.AddText(Asc.scope.text);
                oDocument.InsertContent([oParagraph]);
            }, false);
            break;
        }
    }
};
```

