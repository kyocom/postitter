postitter
===============

## Description

JavaScript Library to display your tweets like a Post-it.

see example : <http://www.kyo.com/postitter/>

Doesn't need jQuery but Twitter API.

## How to use

Just put 1 line code in html body like below.

`<script type="text/javascript" src="js/postitter.js?user=username"></script>`


### option

- user : your twitter ID

- count : quantity of tweets. default 25

- width : default 16%

- height : default 8em

- css : `"css=0"` to disable default CSS

#### Example

`<script type="text/javascript" src="js/postitter.js?user=abcjpn&count=15&height=12em"></script>`

Twitter's decision to discontinue their unauthenticated v1.0 API means that this library will stop working at some time in 2013
https://dev.twitter.com/docs/api/1.1/overview
