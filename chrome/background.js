chrome.webRequest.onBeforeRequest.addListener(function(details) { 
	chrome.tabs.update({
 url: "blocked.html"
});
	return {cancel: true};

},
{urls: ["*://grabify.link/*", "*://stopify.co/*", "*://fortnight.space/*", "*://fortnitechat.site/*","*://joinmy.site/*", "*://iplogger.org/*", "*://2no.co/*", "*://iplogger.com/*", "*://iplogger.ru/*", "*://yip.su/*", "*://catsnthing.com/*", "*://catsnthings.fun/*", "*://www.ps3cfw.com/*", "*://iplis.org/*","*://02ip.ru/*", "*://iplogger.co/*","*://iplogger.info/*", "*://ipgraber.ru/*", "*://lovebird.guru/*", "*://trulove.guru/*", "*://dateing.club/*", "*://shrekis.life/*",  "*://headshot.monster/*", "*://gaming-at-my.best/*", "*://progaming.monster/*",  "*://gamingfun.me/*", "*://ipgrabber.ru/*", "*://iplist.ru/*", "*://ezstat.ru/*", "*://yourmy.monster/*", "*://screenshot.best/*", "*://grabify.world/*","*://grabify.icu/*", "*://iplis.ru/*", "*://partpicker.shop/*","*://sportshub.bar/*","*://locations.quest/*","*://screenshare.pics/*", "*://noodshare.pics/*", "*://cheapcinema.club/*", "*://shhh.lol/*", "*://maper.info/*","*://tracker.iplocation.net/*","*://grabifyicu.com/*","*://yȯutube.com/*","*://gyazo.nl/*","*://myprivate.pics/*","*://toldyouso.pics/*","*://toldyouso.lol/*","*://imagehost.pics/*","*://imghost.pics/*","*://gamertag.shop/*","*://pichost.pics/*","*://picshost.pics/*","*://gamergirl.pro/*","*://thisdomainislong.lol/*","*://foot.wiki/*","*://photovault.pics/*","*://iplis.ru/*","*://wl.gl/*","*://ed.tc/*","*://bc.ax/*","*://bonzi.lol/*","*://uranohoshi.in/*" ]},
["blocking"]);
chrome.browserAction.setTitle({
    title:'Anti-Grabify is active.'
});
