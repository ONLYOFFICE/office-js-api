# SetProperties

Sets the properties to the document.

## Syntax

expression.SetProperties(obj, obj.copyoutenabled, obj.hideContentControlTrack, obj.watermark_on_draw, obj.disableAutostartMacros, obj.fillForms);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | Required | object |  | The document properties. |
| obj.copyoutenabled | Required | boolean |  | Disables copying from the editor if it is set to **false**. |
| obj.hideContentControlTrack | Required | boolean |  | Disables tracking the content control if it is set to **true**. |
| obj.watermark_on_draw | Required | string |  | A string value for &#123;@link global#watermark_on_draw watermark properties&#125; in JSON format. |
| obj.disableAutostartMacros | Required | boolean |  | Sets a flag that specifies that macros are started automatically when the editor opens. |
| obj.fillForms | Required | string |  | Sets rules in JSON format for filling document &#123;@link global#fillForms forms&#125; by tags. |

## Returns

This method doesn't return any data.

## Example

```javascript
var initSettings = &#123;
    "copyoutenabled" : false,
    "hideContentControlTrack" : false,
    "watermark_on_draw" : JSON.stringify ( &#123;
        "transparent" : 0.3,
        "type" : "rect",
        "width" : 100,
        "height" : 100,
        "rotate" : -45,
        "margins" : [ 10, 10, 10, 10 ],
        "fill" : [255, 0, 0],
        "stroke-width" : 1,
        "stroke" : [0, 0, 255],
        "align" : 1,

        "paragraphs" : [ &#123;
            "align" : 2,
            "fill" : [255, 0, 0],
            "linespacing" : 1,

            "runs" : [
                        &#123;
                            "text" : "Do not steal, %user_name%!",
                            "fill" : [0, 0, 0],
                            "font-family" : "Arial",
                            "font-size" : 40,
                            "bold" : true,
                            "italic" : false,
                            "strikeout" : false,
                            "underline" : false
                        &#125;,
                        &#123;
                            "text" : "&lt;%br%&gt;"
                        &#125;
                    ]
            &#125;
        ]
    &#125;),
    "disableAutostartMacros" : true,
    "fillForms" : JSON.stringify ( &#123;
        "tags" : &#123;
            "111" : &#123;
                "text" : "Text in form with tag 111",
                "checkBox" : "true",
                "picture" : "https://upload.wikimedia.org/wikipedia/commons/9/91/ONLYOFFICE_logo.png",
                "comboBox" : "item1"
            &#125;,
            "222" : &#123;
                "text" : "Text in form with tag 222",
                "checkBox" : "false",
                "comboBox" : "item2"
            &#125;,
            "333" : &#123;
                "text" : "OnlyOffice"
            &#125;
        &#125;
    &#125;)
&#125;;
window.Asc.plugin.executeMethod ("SetProperties", [initSettings], function () &#123;
    window.Asc.plugin.executeCommand ("close", "");
&#125;);
