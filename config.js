api.unmapAllExcept(['r']);

api.mapkey('j', 'scroll down', function() {
    api.Normal.scroll('down');
});

api.mapkey('k', 'scroll up', function() {
    api.Normal.scroll('up');
});

api.mapkey('h', 'scroll left', function() {
    api.Normal.scroll('left');
});

api.mapkey('l', 'scroll right', function() {
    api.Normal.scroll('right');
});

api.mapkey('sf', 'test', function() {
    api.Front.openOmnibar({type: 'Bookmarks'});
});
