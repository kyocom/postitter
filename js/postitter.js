/*
	postitter 0.1
	by Kyo ICHIDA
	http://www.kyo.com/postitter/
	Dual licensed under MIT and GPL.
*/
var body = document.getElementsByTagName("body")[0];
var scripts = body.getElementsByTagName("script");

for(var i = 0; i < scripts.length; i++){
	var query = scripts[i].src;
}

var params = getQueryParams();
var user = params.user;
var count = params.count;
var css = params.css;
var width = params.width;
var height = params.height;

if((!count)||(count > 25)) count = 25; else count = parseInt(count);

if(user) PosTWIT(user,count,css,width,height);

function getQueryParams(){
	var qs = query.slice(query.indexOf("?"));
	if(qs){
		var qsa = qs.substring(1).split('&');
		var params = {};
		for(var i = 0; i<qsa.length; i++){
			var pair = qsa[i].split('=');
			if(pair[0]){
				params[pair[0]] = pair[1];
			}
		}
		return params;
	}
	return null;
}

function PosTWIT(user,count,css,width,height){
	if(!user.match(/^[a-zA-Z0-9_\-]+$/)){
		return;
	}
	if(css != '0'){
		css = '<style type="text/css"><!--\
#twitter_div{\
	z-index:90;\
	position:absolute;\
	top:24px;\
	left:0px;\
	margin:0 20px 0 30px;\
	padding:0;\
	color:#000;\
	text-align:left;\
	font-size:small;\
	font-family:serif;\
}\
#twitter_div *{\
	margin:0;\
	padding:0;\
}\
#twitter_div h2{\
	display:none;\
	margin-left:1%;\
	color:#ffffaa;\
	zoom:1;\
	filter:alpha(opacity=75);\
	opacity:0.75;\
	-moz-opacity:0.75;\
}\
#twitter_div h2 a{\
	color:#fff;\
}\
#twitter_div a{\
	color:#ff335e;\
}\
.widget-content{\
	/*display:none;*/\
}\
#twitter_update_list{\
	display:block;}#twitter_update_list li{\
	background-color:#ffffaa;\
	float:left;\
	display:block;\
	padding:1%;\
	margin:1%;';

	if(!width){
		css += 'width:16%;';
	}else{
		css += 'width:'+width+';';
	}
	if(!height){
		css += 'height:6em;';
	}else{
		css += 'height:'+height+';';
	}

	css += 'overflow:hidden;\
	font-family:Courier;\
	zoom:1;\
	filter:alpha(opacity=50);\
	opacity:0.5;\
	-moz-opacity:0.5;\
	-webkit-box-shadow:#555 1px 1px 4px;\
	-moz-box-shadow:#555 1px 1px 4px;\
	box-shadow:#555 1px 1px 4px;\
}\
#twitter_update_list li{\
	z-index:2;\
	-moz-transform:rotate(-3deg);\
	-webkit-transform:rotate(-3deg);\
	-o-transform:rotate(-3deg);\
	transform:rotate(-3deg);\
}';

// SORT FUNCTION
	Array.prototype.shuffle = function(){
		var i = this.length;
		while(i){
			var j=Math.floor(Math.random()*i);
			var t=this[--i];
			this[i]=this[j];
			this[j]=t;
		}
		return this;
	}
	var a = new Array(count);
	var n = Math.floor(count*0.5);
	for(i = 0; i < a.length; i++){
		a[i] = i-n;
	}
	a.shuffle();
	for(i = 0; i < a.length; i++){
	css += '#twitter_update_list li:nth-child('+(i+1)+'){';
	css += '-moz-transform:rotate('+a[i]+'deg);';
	css += '-webkit-transform:rotate('+a[i]+'deg);';
	css += '-o-transform:rotate('+a[i]+'deg);';
	css += 'transform:rotate('+a[i]+'deg);}';
	}
	css += '#twitter_update_list li:hover{\
	zoom:1;\
	filter:alpha(opacity=90);\
	opacity:0.9;\
	-moz-opacity:0.9;\
	-moz-transform:rotate(0deg);\
	-webkit-transform:rotate(0deg);\
	-o-transform:rotate(0deg);\
	transform:rotate(0deg);\
}';
//alert(css);

	css += '--></style>';
	}else{
		css='';
	}

	var html = css + '<div id="twitter_div" class="widget"><h2 class="sidebar-title widget-header"><a href="http://twitter.com/'
	+user
	+ '" id="twitter-link" rel="external">'
	+ user
	+ '<'
	+ '/a> update<'
	+ '/h2><div class="widget-content">'
	+ '<ul id="twitter_update_list" class="widget-list"><li>Loading...</li></ul>&nbsp;</div>'
	+ '</div>'
	+ '<script type="text/javascript" src="http://twitter.com/javascripts/blogger.js"><'
	+ '/script><script type="text/javascript" src="http://twitter.com/statuses/user_timeline/'
	+ user
	+ '.json?callback=twitterCallback2&amp;count='
	+ count
	+ '"><'
	+ '/script>';
	document.write(html);
}

function flipostitter(id){
	if(document.getElementById){
		if(document.getElementById(id).style.display!="block"){
			document.getElementById(id).style.display="block";
		}else{
			document.getElementById(id).style.display="none";
		}
	}
}
