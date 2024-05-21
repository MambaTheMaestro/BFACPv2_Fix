var spans = document.getElementsByTagName('span');
var l = spans.length;
for (var i=0;i<l;i++) {
    if (spans[i].hasAttribute('popover')) {
        //Replaces existing text with full text available in popover otherwise the data is cut off from view.
        spans[i].innerHTML=spans[i].getAttribute('popover');
    }
}

document.body.innerHTML = document.body.innerHTML.replace(/popover/g, 'tooltip');