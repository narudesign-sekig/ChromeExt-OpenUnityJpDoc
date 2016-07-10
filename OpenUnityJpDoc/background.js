chrome.browserAction.onClicked.addListener(function()
{
	chrome.tabs.getSelected(null, function(tab) {
		if (tab.url.match(/^file.*unity/i)) {
			var newurl = tab.url.replace(/^file.*unity.*\/en\//i, 'http://docs.unity3d.com/ja/current/');
			chrome.tabs.update({
				url: newurl
			});
		}
	});
});

