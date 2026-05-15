let variation = {
    url : location.href.replace(file, 'modal.html'),
    description : window.Asc.plugin.tr('Warning'),
    isVisual : true,
    isModal : true,
    EditorsSupport : ['word', 'cell', 'slide'],
    size : [350, 100],
    buttons : [
        {
            'text': window.Asc.plugin.tr('Yes'),
            'primary': true
        },
        {
            'text': window.Asc.plugin.tr('No'),
            'primary': false
        }
    ]
};
window.Asc.plugin.executeMethod ("ShowWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", variation]);