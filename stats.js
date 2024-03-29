/*
Copyright 2011 Newcastle University

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/* Below is a list of all functions defined in this extension, because they're automatically wrapped from jStat so there'd otherwise be no explicit list of them all
sum
sumsqrd
sumsqerr
product
min
max
mean
meansqerr
geomean
median
cumsum
diff
mode
range
variance
stdev
meandev
meddev
coeffvar
quartiles
covariance
corrcoeff
betapdf
betacdf
betainv
betamean
betamedian
betamode
betasample
betavariance
centralfpdf
centralfcdf
centralfinv
centralfmean
centralfmode
centralfsample
centralfvariance
cauchypdf
cauchycdf
cauchyinv
cauchymedian
cauchymode
cauchysample
chisquarepdf
chisquarecdf
chisquareinv
chisquaremean
chisquaremedian
chisquaremode
chisquaresample
chisquarevariance
exponentialpdf
exponentialcdf
exponentialinv
exponentialmean
exponentialmedian
exponentialmode
exponentialsample
exponentialvariance
gammapdf
gammacdf
gammainv
gammamean
gammamode
gammasample
gammavariance
invgammapdf
invgammacdf
invgammainv
invgammamean
invgammamode
invgammasample
invgammavariance
kumaraswamypdf
kumaraswamycdf
kumaraswamymean
kumaraswamymedian
kumaraswamymode
kumaraswamyvariance
lognormalpdf
lognormalcdf
lognormalinv
lognormalmean
lognormalmedian
lognormalmode
lognormalsample
lognormalvariance
normalpdf
normalcdf
normalinv
normalmean
normalmedian
normalmode
normalsample
normalvariance
paretopdf
paretocdf
paretomean
paretomedian
paretomode
paretovariance
studenttpdf
studenttcdf
studenttinv
studenttmean
studenttmedian
studenttmode
studenttsample
studenttvariance
weibullpdf
weibullcdf
weibullinv
weibullmean
weibullmedian
weibullmode
weibullsample
weibullvariance
uniformpdf
uniformcdf
uniformmean
uniformmedian
uniformmode
uniformsample
uniformvariance
binomialpdf
binomialcdf
geometricpdf
geometriccdf
geometricmean
geometricmedian
geometricmode
geometricsample
geometricvariance
negbinpdf
negbincdf
hypgeompdf
hypgeomcdf
poissonpdf
poissoncdf
poissonmean
poissonsample
poissonvariance
triangularpdf
triangularcdf
triangularmean
triangularmedian
triangularmode
triangularsample
triangularvariance
zscore
ztest
tscore
ttest
anovafscore
anovaftest
ftest
normalci
tci
betafn
betaln
betacf
ibetainv
ibeta
gammaln
gammafn
gammap
factorialln
factorial
combination
permutation
gammapinv
erf
erfc
erfcinv
randn
randg
*/


Numbas.queueScript('jStat',[],function(module) {
    /**
     * jStat - JavaScript Statistical Library
     * Copyright (c) 2013
     * This document is licensed as free software under the terms of the
     * MIT License: http://www.opensource.org/licenses/mit-license.php */
    (function(a,b){a.jStat=b()})(window,function(){var a=function(a,b){function f(b,c){var d=b>c?b:c;return a.pow(10,17-~~(a.log(d>0?d:-d)*a.LOG10E))}function h(a){return e.call(a)==="[object Function]"}function j(a){return typeof a=="number"&&a===a}function k(a){return c.apply([],a)}function l(){return new l._init(arguments)}function m(){return 0}function n(){return 1}function o(a,b){return a===b?1:0}var c=Array.prototype.concat,d=Array.prototype.slice,e=Object.prototype.toString,g=Array.isArray||function(b){return e.call(b)==="[object Array]"};l.fn=l.prototype,l._init=function(b){var c;if(g(b[0]))if(g(b[0][0])){h(b[1])&&(b[0]=l.map(b[0],b[1]));for(var c=0;c<b[0].length;c++)this[c]=b[0][c];this.length=b[0].length}else this[0]=h(b[1])?l.map(b[0],b[1]):b[0],this.length=1;else if(j(b[0]))this[0]=l.seq.apply(null,b),this.length=1;else{if(b[0]instanceof l)return l(b[0].toArray());this[0]=[],this.length=1}return this},l._init.prototype=l.prototype,l._init.constructor=l,l.utils={calcRdx:f,isArray:g,isFunction:h,isNumber:j,toVector:k},l.extend=function(b){var c,d;if(arguments.length===1){for(d in b)l[d]=b[d];return this}for(var c=1;c<arguments.length;c++)for(d in arguments[c])b[d]=arguments[c][d];return b},l.rows=function(b){return b.length||1},l.cols=function(b){return b[0].length||1},l.dimensions=function(b){return{rows:l.rows(b),cols:l.cols(b)}},l.row=function(b,c){return g(c)?c.map(function(a){return l.row(b,a)}):b[c]},l.rowa=function(b,c){return l.row(b,c)},l.col=function(b,c){if(g(c)){var d=l.arange(b.length).map(function(a){return new Array(c.length)});return c.forEach(function(a,c){l.arange(b.length).forEach(function(e){d[e][c]=b[e][a]})}),d}var e=new Array(b.length);for(var f=0;f<b.length;f++)e[f]=[b[f][c]];return e},l.cola=function(b,c){return l.col(b,c).map(function(a){return a[0]})},l.diag=function(b){var c=l.rows(b),d=new Array(c);for(var e=0;e<c;e++)d[e]=[b[e][e]];return d},l.antidiag=function(b){var c=l.rows(b)-1,d=new Array(c);for(var e=0;c>=0;c--,e++)d[e]=[b[e][c]];return d},l.transpose=function(b){var c=[],d,e,f,h,i;g(b[0])||(b=[b]),e=b.length,f=b[0].length;for(var i=0;i<f;i++){d=new Array(e);for(h=0;h<e;h++)d[h]=b[h][i];c.push(d)}return c.length===1?c[0]:c},l.map=function(b,c,d){var e,f,h,i,j;g(b[0])||(b=[b]),f=b.length,h=b[0].length,i=d?b:new Array(f);for(e=0;e<f;e++){i[e]||(i[e]=new Array(h));for(j=0;j<h;j++)i[e][j]=c(b[e][j],e,j)}return i.length===1?i[0]:i},l.cumreduce=function(b,c,d){var e,f,h,i,j;g(b[0])||(b=[b]),f=b.length,h=b[0].length,i=d?b:new Array(f);for(e=0;e<f;e++){i[e]||(i[e]=new Array(h)),h>0&&(i[e][0]=b[e][0]);for(j=1;j<h;j++)i[e][j]=c(i[e][j-1],b[e][j])}return i.length===1?i[0]:i},l.alter=function(b,c){return l.map(b,c,!0)},l.create=function(b,c,d){var e=new Array(b),f,g;h(c)&&(d=c,c=b);for(var f=0;f<b;f++){e[f]=new Array(c);for(g=0;g<c;g++)e[f][g]=d(f,g)}return e},l.zeros=function(b,c){return j(c)||(c=b),l.create(b,c,m)},l.ones=function(b,c){return j(c)||(c=b),l.create(b,c,n)},l.rand=function(c,d){return j(d)||(d=c),l.create(c,d,a.random)},l.identity=function(b,c){return j(c)||(c=b),l.create(b,c,o)},l.symmetric=function(b){var c=!0,d=b.length,e,f;if(b.length!==b[0].length)return!1;for(e=0;e<d;e++)for(f=0;f<d;f++)if(b[f][e]!==b[e][f])return!1;return!0},l.clear=function(b){return l.alter(b,m)},l.seq=function(b,c,d,e){h(e)||(e=!1);var g=[],i=f(b,c),j=(c*i-b*i)/((d-1)*i),k=b,l;for(l=0;k<=c&&l<d;l++,k=(b*i+j*i*l)/i)g.push(e?e(k,l):k);return g},l.arange=function(c,d,e){var f=[];e=e||1,d===b&&(d=c,c=0);if(c===d||e===0)return[];if(c<d&&e<0)return[];if(c>d&&e>0)return[];if(e>0)for(i=c;i<d;i+=e)f.push(i);else for(i=c;i>d;i+=e)f.push(i);return f},l.slice=function(){function a(a,c,d,e){var f,g=[],h=a.length;if(c===b&&d===b&&e===b)return l.copy(a);c=c||0,d=d||a.length,c=c>=0?c:h+c,d=d>=0?d:h+d,e=e||1;if(c===d||e===0)return[];if(c<d&&e<0)return[];if(c>d&&e>0)return[];if(e>0)for(f=c;f<d;f+=e)g.push(a[f]);else for(f=c;f>d;f+=e)g.push(a[f]);return g}function c(b,c){c=c||{};if(j(c.row)){if(j(c.col))return b[c.row][c.col];var d=l.rowa(b,c.row),e=c.col||{};return a(d,e.start,e.end,e.step)}if(j(c.col)){var f=l.cola(b,c.col),g=c.row||{};return a(f,g.start,g.end,g.step)}var g=c.row||{},e=c.col||{},h=a(b,g.start,g.end,g.step);return h.map(function(b){return a(b,e.start,e.end,e.step)})}return c}(),l.sliceAssign=function(d,e,f){if(j(e.row)){if(j(e.col))return d[e.row][e.col]=f;e.col=e.col||{},e.col.start=e.col.start||0,e.col.end=e.col.end||d[0].length,e.col.step=e.col.step||1;var g=l.arange(e.col.start,a.min(d.length,e.col.end),e.col.step),h=e.row;return g.forEach(function(a,b){d[h][a]=f[b]}),d}if(j(e.col)){e.row=e.row||{},e.row.start=e.row.start||0,e.row.end=e.row.end||d.length,e.row.step=e.row.step||1;var i=l.arange(e.row.start,a.min(d[0].length,e.row.end),e.row.step),k=e.col;return i.forEach(function(a,b){d[a][k]=f[b]}),d}f[0].length===b&&(f=[f]),e.row.start=e.row.start||0,e.row.end=e.row.end||d.length,e.row.step=e.row.step||1,e.col.start=e.col.start||0,e.col.end=e.col.end||d[0].length,e.col.step=e.col.step||1;var i=l.arange(e.row.start,a.min(d.length,e.row.end),e.row.step),g=l.arange(e.col.start,a.min(d[0].length,e.col.end),e.col.step);return i.forEach(function(a,b){g.forEach(function(c,e){d[a][c]=f[b][e]})}),d},l.diagonal=function(b){var c=l.zeros(b.length,b.length);return b.forEach(function(a,b){c[b][b]=a}),c},l.copy=function(b){return b.map(function(a){return j(a)?a:a.map(function(a){return a})})};var p=l.prototype;return p.length=0,p.push=Array.prototype.push,p.sort=Array.prototype.sort,p.splice=Array.prototype.splice,p.slice=Array.prototype.slice,p.toArray=function(){return this.length>1?d.call(this):d.call(this)[0]},p.map=function(b,c){return l(l.map(this,b,c))},p.cumreduce=function(b,c){return l(l.cumreduce(this,b,c))},p.alter=function(b){return l.alter(this,b),this},function(a){for(var b=0;b<a.length;b++)(function(a){p[a]=function(b){var c=this,d;return b?(setTimeout(function(){b.call(c,p[a].call(c))}),this):(d=l[a](this),g(d)?l(d):d)}})(a[b])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(a){for(var b=0;b<a.length;b++)(function(a){p[a]=function(b,c){var d=this;return c?(setTimeout(function(){c.call(d,p[a].call(d,b))}),this):l(l[a](this,b))}})(a[b])}("row col".split(" ")),function(a){for(var b=0;b<a.length;b++)(function(a){p[a]=new Function("return jStat(jStat."+a+".apply(null, arguments));")})(a[b])}("create zeros ones rand identity".split(" ")),l}(Math);return function(a,b){function d(a,b){return a-b}function e(a,c,d){return b.max(c,b.min(a,d))}var c=a.utils.isFunction;a.sum=function g(a){var g=0,b=a.length;while(--b>=0)g+=a[b];return g},a.sumsqrd=function(b){var c=0,d=b.length;while(--d>=0)c+=b[d]*b[d];return c},a.sumsqerr=function(c){var d=a.mean(c),e=0,f=c.length,g;while(--f>=0)g=c[f]-d,e+=g*g;return e},a.sumrow=function(b){var c=0,d=b.length;while(--d>=0)c+=b[d];return c},a.product=function(b){var c=1,d=b.length;while(--d>=0)c*=b[d];return c},a.min=function(b){var c=b[0],d=0;while(++d<b.length)b[d]<c&&(c=b[d]);return c},a.max=function(b){var c=b[0],d=0;while(++d<b.length)b[d]>c&&(c=b[d]);return c},a.unique=function(b){var c={},d=[];for(var e=0;e<b.length;e++)c[b[e]]||(c[b[e]]=!0,d.push(b[e]));return d},a.mean=function(c){return a.sum(c)/c.length},a.meansqerr=function(c){return a.sumsqerr(c)/c.length},a.geomean=function(d){return b.pow(a.product(d),1/d.length)},a.median=function(b){var c=b.length,e=b.slice().sort(d);return c&1?e[c/2|0]:(e[c/2-1]+e[c/2])/2},a.cumsum=function(c){return a.cumreduce(c,function(a,b){return a+b})},a.cumprod=function(c){return a.cumreduce(c,function(a,b){return a*b})},a.diff=function(b){var c=[],d=b.length,e;for(var e=1;e<d;e++)c.push(b[e]-b[e-1]);return c},a.rank=function(a){var b=a.length,c=a.slice().sort(d),e=new Array(b);for(var f=0;f<b;f++){var g=c.indexOf(a[f]),h=c.lastIndexOf(a[f]);if(g===h)var i=g;else var i=(g+h)/2;e[f]=i+1}return e},a.mode=function(b){var c=b.length,e=b.slice().sort(d),f=1,g=0,h=0,i=[],j;for(var j=0;j<c;j++)e[j]===e[j+1]?f++:(f>g?(i=[e[j]],g=f,h=0):f===g&&(i.push(e[j]),h++),f=1);return h===0?i[0]:i},a.range=function(c){return a.max(c)-a.min(c)},a.variance=function(c,d){return a.sumsqerr(c)/(c.length-(d?1:0))},a.pooledvariance=function(c){var d=c.reduce(function(b,c){return b+a.sumsqerr(c)},0),e=c.reduce(function(a,b){return a+b.length},0);return d/(e-c.length)},a.deviation=function(b){var c=a.mean(b),d=b.length,e=new Array(d);for(var f=0;f<d;f++)e[f]=b[f]-c;return e},a.stdev=function(d,e){return b.sqrt(a.variance(d,e))},a.pooledstdev=function(d){return b.sqrt(a.pooledvariance(d))},a.meandev=function(d){var e=a.mean(d),f=[];for(var g=d.length-1;g>=0;g--)f.push(b.abs(d[g]-e));return a.mean(f)},a.meddev=function(d){var e=a.median(d),f=[];for(var g=d.length-1;g>=0;g--)f.push(b.abs(d[g]-e));return a.median(f)},a.coeffvar=function(c){return a.stdev(c)/a.mean(c)},a.quartiles=function(c){var e=c.length,f=c.slice().sort(d);return[f[b.round(e/4)-1],f[b.round(e/2)-1],f[b.round(e*3/4)-1]]},a.quantiles=function(c,f,g,h){var i=c.slice().sort(d),j=[f.length],k=c.length,l,m,n,o,p,q;typeof g=="undefined"&&(g=3/8),typeof h=="undefined"&&(h=3/8);for(var l=0;l<f.length;l++)m=f[l],n=g+m*(1-g-h),o=k*m+n,p=b.floor(e(o,1,k-1)),q=e(o-p,0,1),j[l]=(1-q)*i[p-1]+q*i[p];return j},a.percentile=function(b,c){var e=b.slice().sort(d),f=c*(e.length-1),g=parseInt(f),h=f-g;return g+1<e.length?e[g]*(1-h)+e[g+1]*h:e[g]},a.percentileOfScore=function(b,c,d){var e=0,f=b.length,g=!1,h,i;d==="strict"&&(g=!0);for(var i=0;i<f;i++)h=b[i],(g&&h<c||!g&&h<=c)&&e++;return e/f},a.histogram=function(d,e){var f=a.min(d),g=e||4,h=(a.max(d)-f)/g,i=d.length,e=[],j;for(var j=0;j<g;j++)e[j]=0;for(var j=0;j<i;j++)e[b.min(b.floor((d[j]-f)/h),g-1)]+=1;return e},a.covariance=function(c,d){var e=a.mean(c),f=a.mean(d),g=c.length,h=new Array(g),i;for(var i=0;i<g;i++)h[i]=(c[i]-e)*(d[i]-f);return a.sum(h)/(g-1)},a.corrcoeff=function(c,d){return a.covariance(c,d)/a.stdev(c,1)/a.stdev(d,1)},a.spearmancoeff=function(b,c){return b=a.rank(b),c=a.rank(c),a.corrcoeff(b,c)},a.stanMoment=function(d,e){var f=a.mean(d),g=a.stdev(d),h=d.length,i=0;for(var j=0;j<h;j++)i+=b.pow((d[j]-f)/g,e);return i/d.length},a.skewness=function(c){return a.stanMoment(c,3)},a.kurtosis=function(c){return a.stanMoment(c,4)-3};var f=a.prototype;(function(b){for(var d=0;d<b.length;d++)(function(b){f[b]=function(d,e){var g=[],h=0,i=this;c(d)&&(e=d,d=!1);if(e)return setTimeout(function(){e.call(i,f[b].call(i,d))}),this;if(this.length>1){i=d===!0?this:this.transpose();for(;h<i.length;h++)g[h]=a[b](i[h]);return g}return a[b](this[0],d)}})(b[d])})("cumsum cumprod".split(" ")),function(b){for(var d=0;d<b.length;d++)(function(b){f[b]=function(d,e){var g=[],h=0,i=this;c(d)&&(e=d,d=!1);if(e)return setTimeout(function(){e.call(i,f[b].call(i,d))}),this;if(this.length>1){b!=="sumrow"&&(i=d===!0?this:this.transpose());for(;h<i.length;h++)g[h]=a[b](i[h]);return d===!0?a[b](a.utils.toVector(g)):g}return a[b](this[0],d)}})(b[d])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(b){for(var d=0;d<b.length;d++)(function(b){f[b]=function(){var d=[],e=0,g=this,h=Array.prototype.slice.call(arguments);if(c(h[h.length-1])){var i=h[h.length-1],j=h.slice(0,h.length-1);return setTimeout(function(){i.call(g,f[b].apply(g,j))}),this}var i=undefined,k=function(d){return a[b].apply(g,[d].concat(h))};if(this.length>1){g=g.transpose();for(;e<g.length;e++)d[e]=k(g[e]);return d}return k(this[0])}})(b[d])}("quantiles percentileOfScore".split(" "))}(a,Math),function(a,b){a.gammaln=function(c){var d=0,e=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-0.000005395239384953],f=1.000000000190015,g,h,i;i=(h=g=c)+5.5,i-=(g+.5)*b.log(i);for(;d<6;d++)f+=e[d]/++h;return b.log(2.5066282746310007*f/g)-i},a.gammafn=function(c){var d=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],e=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],f=!1,g=0,h=0,i=0,j=c,k,l,m,n,o,p;if(j<=0){n=j%1+3.6e-16;if(n)f=(j&1?-1:1)*b.PI/b.sin(b.PI*n),j=1-j;else return Infinity}m=j,j<1?l=j++:l=(j-=g=(j|0)-1)-1;for(var k=0;k<8;++k)i=(i+d[k])*l,h=h*l+e[k];n=i/h+1;if(m<j)n/=m;else if(m>j)for(var k=0;k<g;++k)n*=j,j++;return f&&(n=f/n),n},a.gammap=function(c,d){return a.lowRegGamma(c,d)*a.gammafn(c)},a.lowRegGamma=function(d,e){var f=a.gammaln(d),g=d,h=1/d,i=h,j=e+1-d,k=1/1e-30,l=1/j,m=l,n=1,o=-~(b.log(d>=1?d:1/d)*8.5+d*.4+17),p,q;if(e<0||d<=0)return NaN;if(e<d+1){for(;n<=o;n++)h+=i*=e/++g;return h*b.exp(-e+d*b.log(e)-f)}for(;n<=o;n++)p=-n*(n-d),j+=2,l=p*l+j,k=j+p/k,l=1/l,m*=l*k;return 1-m*b.exp(-e+d*b.log(e)-f)},a.factorialln=function(c){return c<0?NaN:a.gammaln(c+1)},a.factorial=function(c){return c<0?NaN:a.gammafn(c+1)},a.combination=function(d,e){return d>170||e>170?b.exp(a.combinationln(d,e)):a.factorial(d)/a.factorial(e)/a.factorial(d-e)},a.combinationln=function(c,d){return a.factorialln(c)-a.factorialln(d)-a.factorialln(c-d)},a.permutation=function(c,d){return a.factorial(c)/a.factorial(c-d)},a.betafn=function(d,e){return d<=0||e<=0?undefined:d+e>170?b.exp(a.betaln(d,e)):a.gammafn(d)*a.gammafn(e)/a.gammafn(d+e)},a.betaln=function(c,d){return a.gammaln(c)+a.gammaln(d)-a.gammaln(c+d)},a.betacf=function(c,d,e){var f=1e-30,g=1,h=d+e,i=d+1,j=d-1,k=1,l=1-h*c/i,m,n,o,p;b.abs(l)<f&&(l=f),l=1/l,p=l;for(;g<=100;g++){m=2*g,n=g*(e-g)*c/((j+m)*(d+m)),l=1+n*l,b.abs(l)<f&&(l=f),k=1+n/k,b.abs(k)<f&&(k=f),l=1/l,p*=l*k,n=-(d+g)*(h+g)*c/((d+m)*(i+m)),l=1+n*l,b.abs(l)<f&&(l=f),k=1+n/k,b.abs(k)<f&&(k=f),l=1/l,o=l*k,p*=o;if(b.abs(o-1)<3e-7)break}return p},a.gammapinv=function(d,e){var f=0,g=e-1,h=1e-8,i=a.gammaln(e),j,k,l,m,n,o,p;if(d>=1)return b.max(100,e+100*b.sqrt(e));if(d<=0)return 0;e>1?(o=b.log(g),p=b.exp(g*(o-1)-i),n=d<.5?d:1-d,l=b.sqrt(-2*b.log(n)),j=(2.30753+l*.27061)/(1+l*(.99229+l*.04481))-l,d<.5&&(j=-j),j=b.max(.001,e*b.pow(1-1/(9*e)-j/(3*b.sqrt(e)),3))):(l=1-e*(.253+e*.12),d<l?j=b.pow(d/l,1/e):j=1-b.log(1-(d-l)/(1-l)));for(;f<12;f++){if(j<=0)return 0;k=a.lowRegGamma(e,j)-d,e>1?l=p*b.exp(-(j-g)+g*(b.log(j)-o)):l=b.exp(-j+g*b.log(j)-i),m=k/l,j-=l=m/(1-.5*b.min(1,m*((e-1)/j-1))),j<=0&&(j=.5*(j+l));if(b.abs(l)<h*j)break}return j},a.erf=function(c){var d=[-1.3026537197817094,.6419697923564902,.019476473204185836,-0.00956151478680863,-0.000946595344482036,.000366839497852761,42523324806907e-18,-0.000020278578112534,-0.000001624290004647,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,9.6467911e-11,2.394038e-12,-6.886027e-12,8.94487e-13,3.13092e-13,-1.12708e-13,3.81e-16,7.106e-15,-1.523e-15,-9.4e-17,1.21e-16,-2.8e-17],e=d.length-1,f=!1,g=0,h=0,i,j,k,l;c<0&&(c=-c,f=!0),i=2/(2+c),j=4*i-2;for(;e>0;e--)k=g,g=j*g-h+d[e],h=k;return l=i*b.exp(-c*c+.5*(d[0]+j*g)-h),f?l-1:1-l},a.erfc=function(c){return 1-a.erf(c)},a.erfcinv=function(d){var e=0,f,g,h,i;if(d>=2)return-100;if(d<=0)return 100;i=d<1?d:2-d,h=b.sqrt(-2*b.log(i/2)),f=-0.70711*((2.30753+h*.27061)/(1+h*(.99229+h*.04481))-h);for(;e<2;e++)g=a.erfc(f)-i,f+=g/(1.1283791670955126*b.exp(-f*f)-f*g);return d<1?f:-f},a.ibetainv=function(d,e,f){var g=1e-8,h=e-1,i=f-1,j=0,k,l,m,n,o,p,q,r,s,t,u;if(d<=0)return 0;if(d>=1)return 1;e>=1&&f>=1?(m=d<.5?d:1-d,n=b.sqrt(-2*b.log(m)),q=(2.30753+n*.27061)/(1+n*(.99229+n*.04481))-n,d<.5&&(q=-q),r=(q*q-3)/6,s=2/(1/(2*e-1)+1/(2*f-1)),t=q*b.sqrt(r+s)/s-(1/(2*f-1)-1/(2*e-1))*(r+5/6-2/(3*s)),q=e/(e+f*b.exp(2*t))):(k=b.log(e/(e+f)),l=b.log(f/(e+f)),n=b.exp(e*k)/e,o=b.exp(f*l)/f,t=n+o,d<n/t?q=b.pow(e*t*d,1/e):q=1-b.pow(f*t*(1-d),1/f)),u=-a.gammaln(e)-a.gammaln(f)+a.gammaln(e+f);for(;j<10;j++){if(q===0||q===1)return q;p=a.ibeta(q,e,f)-d,n=b.exp(h*b.log(q)+i*b.log(1-q)+u),o=p/n,q-=n=o/(1-.5*b.min(1,o*(h/q-i/(1-q)))),q<=0&&(q=.5*(q+n)),q>=1&&(q=.5*(q+n+1));if(b.abs(n)<g*q&&j>0)break}return q},a.ibeta=function(d,e,f){var g=d===0||d===1?0:b.exp(a.gammaln(e+f)-a.gammaln(e)-a.gammaln(f)+e*b.log(d)+f*b.log(1-d));return d<0||d>1?!1:d<(e+1)/(e+f+2)?g*a.betacf(d,e,f)/e:1-g*a.betacf(1-d,f,e)/f},a.randn=function(d,e){var f,g,h,i,j,k;e||(e=d);if(d)return a.create(d,e,function(){return a.randn()});do f=b.random(),g=1.7156*(b.random()-.5),h=f-.449871,i=b.abs(g)+.386595,j=h*h+i*(.196*i-.25472*h);while(j>.27597&&(j>.27846||g*g>-4*b.log(f)*f*f));return g/f},a.randg=function(d,e,f){var g=d,h,i,j,k,l,m;f||(f=e),d||(d=1);if(e)return m=a.zeros(e,f),m.alter(function(){return a.randg(d)}),m;d<1&&(d+=1),h=d-1/3,i=1/b.sqrt(9*h);do{do l=a.randn(),k=1+i*l;while(k<=0);k=k*k*k,j=b.random()}while(j>1-.331*b.pow(l,4)&&b.log(j)>.5*l*l+h*(1-k+b.log(k)));if(d==g)return h*k;do j=b.random();while(j===0);return b.pow(j,1/g)*h*k},function(b){for(var c=0;c<b.length;c++)(function(b){a.fn[b]=function(){return a(a.map(this,function(c){return a[b](c)}))}})(b[c])}("gammaln gammafn factorial factorialln".split(" ")),function(b){for(var c=0;c<b.length;c++)(function(b){a.fn[b]=function(){return a(a[b].apply(null,arguments))}})(b[c])}("randn".split(" "))}(a,Math),function(a,b){function c(a){return a/b.abs(a)}function d(c,d,e){var f=12,g=6,h=-30,i=-50,j=60,k=8,l=3,m=2,n=3,o=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],p=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],q=c*.5;if(q>=k)return 1;var r=2*a.normal.cdf(q,0,1,1,0)-1;r>=b.exp(i/e)?r=b.pow(r,e):r=0;var s;c>l?s=m:s=n;var t=q,u=(k-q)/s,v=t+u,w=0,x=e-1;for(var y=1;y<=s;y++){var z=0,A=.5*(v+t),B=.5*(v-t);for(var C=1;C<=f;C++){var D,E;g<C?(D=f-C+1,E=o[D-1]):(D=C,E=-o[D-1]);var F=B*E,G=A+F,H=G*G;if(H>j)break;var I=2*a.normal.cdf(G,0,1,1,0),J=2*a.normal.cdf(G,c,1,1,0),K=I*.5-J*.5;K>=b.exp(h/x)&&(K=p[D-1]*b.exp(-(.5*H))*b.pow(K,x),z+=K)}z*=2*B*e/b.sqrt(2*b.PI),w+=z,t=v,v+=u}return r+=w,r<=b.exp(h/d)?0:(r=b.pow(r,d),r>=1?1:r)}function e(a,c,d){var e=.322232421088,f=.099348462606,g=-1,h=.588581570495,i=-0.342242088547,j=.531103462366,k=-0.204231210125,l=.10353775285,m=-0.0000453642210148,n=.0038560700634,o=.8832,p=.2368,q=1.214,r=1.208,s=1.4142,t=120,u=.5-.5*a,v=b.sqrt(b.log(1/(u*u))),w=v+((((v*m+k)*v+i)*v+g)*v+e)/((((v*n+l)*v+j)*v+h)*v+f);d<t&&(w+=(w*w*w+w)/d/4);var x=o-p*w;return d<t&&(x+=-q/d+r*w/d),w*(x*b.log(c-1)+s)}(function(b){for(var c=0;c<b.length;c++)(function(b){a[b]=function(a,b,c){return this instanceof arguments.callee?(this._a=a,this._b=b,this._c=c,this):new arguments.callee(a,b,c)},a.fn[b]=function(c,d,e){var f=a[b](c,d,e);return f.data=this,f},a[b].prototype.sample=function(c){var d=this._a,e=this._b,f=this._c;return c?a.alter(c,function(){return a[b].sample(d,e,f)}):a[b].sample(d,e,f)},function(c){for(var d=0;d<c.length;d++)(function(c){a[b].prototype[c]=function(d){var e=this._a,f=this._b,g=this._c;return!d&&d!==0&&(d=this.data),typeof d!="number"?a.fn.map.call(d,function(d){return a[b][c](d,e,f,g)}):a[b][c](d,e,f,g)}})(c[d])}("pdf cdf inv".split(" ")),function(c){for(var d=0;d<c.length;d++)(function(c){a[b].prototype[c]=function(){return a[b][c](this._a,this._b,this._c)}})(c[d])}("mean median mode variance".split(" "))})(b[c])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),a.extend(a.beta,{pdf:function(d,e,f){return d>1||d<0?0:e==1&&f==1?1:e<512&&f<512?b.pow(d,e-1)*b.pow(1-d,f-1)/a.betafn(e,f):b.exp((e-1)*b.log(d)+(f-1)*b.log(1-d)-a.betaln(e,f))},cdf:function(c,d,e){return c>1||c<0?(c>1)*1:a.ibeta(c,d,e)},inv:function(c,d,e){return a.ibetainv(c,d,e)},mean:function(b,c){return b/(b+c)},median:function(c,d){return a.ibetainv(.5,c,d)},mode:function(b,c){return(b-1)/(b+c-2)},sample:function(c,d){var e=a.randg(c);return e/(e+a.randg(d))},variance:function(c,d){return c*d/(b.pow(c+d,2)*(c+d+1))}}),a.extend(a.centralF,{pdf:function(d,e,f){var g,h,i;return d<0?0:e<=2?d===0&&e<2?Infinity:d===0&&e===2?1:1/a.betafn(e/2,f/2)*b.pow(e/f,e/2)*b.pow(d,e/2-1)*b.pow(1+e/f*d,-(e+f)/2):(g=e*d/(f+d*e),h=f/(f+d*e),i=e*h/2,i*a.binomial.pdf((e-2)/2,(e+f-2)/2,g))},cdf:function(c,d,e){return c<0?0:a.ibeta(d*c/(d*c+e),d/2,e/2)},inv:function(c,d,e){return e/(d*(1/a.ibetainv(c,d/2,e/2)-1))},mean:function(b,c){return c>2?c/(c-2):undefined},mode:function(b,c){return b>2?c*(b-2)/(b*(c+2)):undefined},sample:function(c,d){var e=a.randg(c/2)*2,f=a.randg(d/2)*2;return e/c/(f/d)},variance:function(b,c){return c<=4?undefined:2*c*c*(b+c-2)/(b*(c-2)*(c-2)*(c-4))}}),a.extend(a.cauchy,{pdf:function(c,d,e){return e<0?0:e/(b.pow(c-d,2)+b.pow(e,2))/b.PI},cdf:function(c,d,e){return b.atan((c-d)/e)/b.PI+.5},inv:function(a,c,d){return c+d*b.tan(b.PI*(a-.5))},median:function(b,c){return b},mode:function(b,c){return b},sample:function(d,e){return a.randn()*b.sqrt(1/(2*a.randg(.5)))*e+d}}),a.extend(a.chisquare,{pdf:function(d,e){return d<0?0:d===0&&e===2?.5:b.exp((e/2-1)*b.log(d)-d/2-e/2*b.log(2)-a.gammaln(e/2))},cdf:function(c,d){return c<0?0:a.lowRegGamma(d/2,c/2)},inv:function(b,c){return 2*a.gammapinv(b,.5*c)},mean:function(a){return a},median:function(c){return c*b.pow(1-2/(9*c),3)},mode:function(b){return b-2>0?b-2:0},sample:function(c){return a.randg(c/2)*2},variance:function(b){return 2*b}}),a.extend(a.exponential,{pdf:function(c,d){return c<0?0:d*b.exp(-d*c)},cdf:function(c,d){return c<0?0:1-b.exp(-d*c)},inv:function(a,c){return-b.log(1-a)/c},mean:function(a){return 1/a},median:function(a){return 1/a*b.log(2)},mode:function(b){return 0},sample:function(c){return-1/c*b.log(b.random())},variance:function(a){return b.pow(a,-2)}}),a.extend(a.gamma,{pdf:function(d,e,f){return d<0?0:d===0&&e===1?1/f:b.exp((e-1)*b.log(d)-d/f-a.gammaln(e)-e*b.log(f))},cdf:function(c,d,e){return c<0?0:a.lowRegGamma(d,c/e)},inv:function(b,c,d){return a.gammapinv(b,c)*d},mean:function(a,b){return a*b},mode:function(b,c){return b>1?(b-1)*c:undefined},sample:function(c,d){return a.randg(c)*d},variance:function(b,c){return b*c*c}}),a.extend(a.invgamma,{pdf:function(d,e,f){return d<=0?0:b.exp(-(e+1)*b.log(d)-f/d-a.gammaln(e)+e*b.log(f))},cdf:function(c,d,e){return c<=0?0:1-a.lowRegGamma(d,e/c)},inv:function(b,c,d){return d/a.gammapinv(1-b,c)},mean:function(a,b){return a>1?b/(a-1):undefined},mode:function(b,c){return c/(b+1)},sample:function(c,d){return d/a.randg(c)},variance:function(b,c){return b<=2?undefined:c*c/((b-1)*(b-1)*(b-2))}}),a.extend(a.kumaraswamy,{pdf:function(c,d,e){return c===0&&d===1?e:c===1&&e===1?d:b.exp(b.log(d)+b.log(e)+(d-1)*b.log(c)+(e-1)*b.log(1-b.pow(c,d)))},cdf:function(c,d,e){return c<0?0:c>1?1:1-b.pow(1-b.pow(c,d),e)},inv:function(c,d,e){return b.pow(1-b.pow(1-c,1/e),1/d)},mean:function(b,c){return c*a.gammafn(1+1/b)*a.gammafn(c)/a.gammafn(1+1/b+c)},median:function(c,d){return b.pow(1-b.pow(2,-1/d),1/c)},mode:function(c,d){return c>=1&&d>=1&&c!==1&&d!==1?b.pow((c-1)/(c*d-1),1/c):undefined},variance:function(b,c){throw new Error("variance not yet implemented")}}),a.extend(a.lognormal,{pdf:function(c,d,e){return c<=0?0:b.exp(-b.log(c)-.5*b.log(2*b.PI)-b.log(e)-b.pow(b.log(c)-d,2)/(2*e*e))},cdf:function(d,e,f){return d<0?0:.5+.5*a.erf((b.log(d)-e)/b.sqrt(2*f*f))},inv:function(c,d,e){return b.exp(-1.4142135623730951*e*a.erfcinv(2*c)+d)},mean:function(c,d){return b.exp(c+d*d/2)},median:function(c,d){return b.exp(c)},mode:function(c,d){return b.exp(c-d*d)},sample:function(d,e){return b.exp(a.randn()*e+d)},variance:function(c,d){return(b.exp(d*d)-1)*b.exp(2*c+d*d)}}),a.extend(a.noncentralt,{pdf:function(d,e,f){var g=1e-14;return b.abs(f)<g?a.studentt.pdf(d,e):b.abs(d)<g?b.exp(a.gammaln((e+1)/2)-f*f/2-.5*b.log(b.PI*e)-a.gammaln(e/2)):e/d*(a.noncentralt.cdf(d*b.sqrt(1+2/e),e+2,f)-a.noncentralt.cdf(d,e,f))},cdf:function(d,e,f){var g=1e-14,h=200;if(b.abs(f)<g)return a.studentt.cdf(d,e);var i=!1;d<0&&(i=!0,f=-f);var j=a.normal.cdf(-f,0,1),k=g+1,l=k,m=d*d/(d*d+e),n=0,o=b.exp(-f*f/2),p=b.exp(-f*f/2-.5*b.log(2)-a.gammaln(1.5))*f;while(n<h||l>g||k>g)l=k,n>0&&(o*=f*f/(2*n),p*=f*f/(2*(n+.5))),k=o*a.beta.cdf(m,n+.5,e/2)+p*a.beta.cdf(m,n+1,e/2),j+=.5*k,n++;return i?1-j:j}}),a.extend(a.normal,{pdf:function(c,d,e){return b.exp(-0.5*b.log(2*b.PI)-b.log(e)-b.pow(c-d,2)/(2*e*e))},cdf:function(d,e,f){return.5*(1+a.erf((d-e)/b.sqrt(2*f*f)))},inv:function(b,c,d){return-1.4142135623730951*d*a.erfcinv(2*b)+c},mean:function(a,b){return a},median:function(b,c){return b},mode:function(a,b){return a},sample:function(c,d){return a.randn()*d+c},variance:function(a,b){return b*b}}),a.extend(a.pareto,{pdf:function(c,d,e){return c<d?0:e*b.pow(d,e)/b.pow(c,e+1)},cdf:function(c,d,e){return c<d?0:1-b.pow(d/c,e)},inv:function(c,d,e){return d/b.pow(1-c,1/e)},mean:function(c,d){return d<=1?undefined:d*b.pow(c,d)/(d-1)},median:function(c,d){return c*d*b.SQRT2},mode:function(b,c){return b},variance:function(a,c){return c<=2?undefined:a*a*c/(b.pow(c-1,2)*(c-2))}}),a.extend(a.studentt,{pdf:function(d,e){return e=e>1e+100?1e+100:e,1/(b.sqrt(e)*a.betafn(.5,e/2))*b.pow(1+d*d/e,-((e+1)/2))},cdf:function(d,e){var f=e/2;return a.ibeta((d+b.sqrt(d*d+e))/(2*b.sqrt(d*d+e)),f,f)},inv:function(c,d){var e=a.ibetainv(2*b.min(c,1-c),.5*d,.5);return e=b.sqrt(d*(1-e)/e),c>.5?e:-e},mean:function(b){return b>1?0:undefined},median:function(b){return 0},mode:function(b){return 0},sample:function(d){return a.randn()*b.sqrt(d/(2*a.randg(d/2)))},variance:function(b){return b>2?b/(b-2):b>1?Infinity:undefined}}),a.extend(a.weibull,{pdf:function(c,d,e){return c<0||d<0||e<0?0:e/d*b.pow(c/d,e-1)*b.exp(-b.pow(c/d,e))},cdf:function(c,d,e){return c<0?0:1-b.exp(-b.pow(c/d,e))},inv:function(a,c,d){return c*b.pow(-b.log(1-a),1/d)},mean:function(b,c){return b*a.gammafn(1+1/c)},median:function(c,d){return c*b.pow(b.log(2),1/d)},mode:function(c,d){return d<=1?0:c*b.pow((d-1)/d,1/d)},sample:function(c,d){return c*b.pow(-b.log(b.random()),1/d)},variance:function(d,e){return d*d*a.gammafn(1+2/e)-b.pow(a.weibull.mean(d,e),2)}}),a.extend(a.uniform,{pdf:function(b,c,d){return b<c||b>d?0:1/(d-c)},cdf:function(b,c,d){return b<c?0:b<d?(b-c)/(d-c):1},inv:function(a,b,c){return b+a*(c-b)},mean:function(b,c){return.5*(b+c)},median:function(c,d){return a.mean(c,d)},mode:function(b,c){throw new Error("mode is not yet implemented")},sample:function(c,d){return c/2+d/2+(d/2-c/2)*(2*b.random()-1)},variance:function(c,d){return b.pow(d-c,2)/12}}),a.extend(a.binomial,{pdf:function(d,e,f){return f===0||f===1?e*f===d?1:0:a.combination(e,d)*b.pow(f,d)*b.pow(1-f,e-d)},cdf:function(c,d,e){var f=[],g=0;if(c<0)return 0;if(c<d){for(;g<=c;g++)f[g]=a.binomial.pdf(g,d,e);return a.sum(f)}return 1}}),a.extend(a.negbin,{pdf:function(d,e,f){return d!==d>>>0?!1:d<0?0:a.combination(d+e-1,e-1)*b.pow(1-f,d)*b.pow(f,e)},cdf:function(c,d,e){var f=0,g=0;if(c<0)return 0;for(;g<=c;g++)f+=a.negbin.pdf(g,d,e);return f}}),a.extend(a.hypgeom,{pdf:function(d,e,f,g){if(d!==d|0)return!1;if(d<0||d<f-(e-g))return 0;if(d>g||d>f)return 0;if(f*2>e)return g*2>e?a.hypgeom.pdf(e-f-g+d,e,e-f,e-g):a.hypgeom.pdf(g-d,e,e-f,g);if(g*2>e)return a.hypgeom.pdf(f-d,e,f,e-g);if(f<g)return a.hypgeom.pdf(d,e,g,f);var h=1,i=0;for(var j=0;j<d;j++){while(h>1&&i<g)h*=1-f/(e-i),i++;h*=(g-j)*(f-j)/((j+1)*(e-f-g+j+1))}for(;i<g;i++)h*=1-f/(e-i);return b.min(1,b.max(0,h))},cdf:function(d,e,f,g){if(d<0||d<f-(e-g))return 0;if(d>=g||d>=f)return 1;if(f*2>e)return g*2>e?a.hypgeom.cdf(e-f-g+d,e,e-f,e-g):1-a.hypgeom.cdf(g-d-1,e,e-f,g);if(g*2>e)return 1-a.hypgeom.cdf(f-d-1,e,f,e-g);if(f<g)return a.hypgeom.cdf(d,e,g,f);var h=1,i=1,j=0;for(var k=0;k<d;k++){while(h>1&&j<g){var l=1-f/(e-j);i*=l,h*=l,j++}i*=(g-k)*(f-k)/((k+1)*(e-f-g+k+1)),h+=i}for(;j<g;j++)h*=1-f/(e-j);return b.min(1,b.max(0,h))}}),a.extend(a.poisson,{pdf:function(d,e){return e<0||d%1!==0||d<0?0:b.pow(e,d)*b.exp(-e)/a.factorial(d)},cdf:function(c,d){var e=[],f=0;if(c<0)return 0;for(;f<=c;f++)e.push(a.poisson.pdf(f,d));return a.sum(e)},mean:function(a){return a},variance:function(a){return a},sample:function(c){var d=1,e=0,f=b.exp(-c);do e++,d*=b.random();while(d>f);return e-1}}),a.extend(a.triangular,{pdf:function(b,c,d,e){return d<=c||e<c||e>d?NaN:b<c||b>d?0:b<e?2*(b-c)/((d-c)*(e-c)):b===e?2/(d-c):2*(d-b)/((d-c)*(d-e))},cdf:function(c,d,e,f){return e<=d||f<d||f>e?NaN:c<=d?0:c>=e?1:c<=f?b.pow(c-d,2)/((e-d)*(f-d)):1-b.pow(e-c,2)/((e-d)*(e-f))},inv:function(c,d,e,f){return e<=d||f<d||f>e?NaN:c<=(f-d)/(e-d)?d+(e-d)*b.sqrt(c*((f-d)/(e-d))):d+(e-d)*(1-b.sqrt((1-c)*(1-(f-d)/(e-d))))},mean:function(b,c,d){return(b+c+d)/3},median:function(c,d,e){if(e<=(c+d)/2)return d-b.sqrt((d-c)*(d-e))/b.sqrt(2);if(e>(c+d)/2)return c+b.sqrt((d-c)*(e-c))/b.sqrt(2)},mode:function(b,c,d){return d},sample:function(c,d,e){var f=b.random();return f<(e-c)/(d-c)?c+b.sqrt(f*(d-c)*(e-c)):d-b.sqrt((1-f)*(d-c)*(d-e))},variance:function(b,c,d){return(b*b+c*c+d*d-b*c-b*d-c*d)/18}}),a.extend(a.arcsine,{pdf:function(c,d,e){return e<=d?NaN:c<=d||c>=e?0:2/b.PI*b.pow(b.pow(e-d,2)-b.pow(2*c-d-e,2),-0.5)},cdf:function(c,d,e){return c<d?0:c<e?2/b.PI*b.asin(b.sqrt((c-d)/(e-d))):1},inv:function(a,c,d){return c+(.5-.5*b.cos(b.PI*a))*(d-c)},mean:function(b,c){return c<=b?NaN:(b+c)/2},median:function(b,c){return c<=b?NaN:(b+c)/2},mode:function(b,c){throw new Error("mode is not yet implemented")},sample:function(d,e){return(d+e)/2+(e-d)/2*b.sin(2*b.PI*a.uniform.sample(0,1))},variance:function(c,d){return d<=c?NaN:b.pow(d-c,2)/8}}),a.extend(a.laplace,{pdf:function(c,d,e){return e<=0?0:b.exp(-b.abs(c-d)/e)/(2*e)},cdf:function(c,d,e){return e<=0?0:c<d?.5*b.exp((c-d)/e):1-.5*b.exp(-(c-d)/e)},mean:function(a,b){return a},median:function(a,b){return a},mode:function(a,b){return a},variance:function(a,b){return 2*b*b},sample:function(d,e){var f=b.random()-.5;return d-e*c(f)*b.log(1-2*b.abs(f))}}),a.extend(a.tukey,{cdf:function(e,f,g){var h=1,i=f,j=16,k=8,l=-30,m=1e-14,n=100,o=800,p=5e3,q=25e3,r=1,s=.5,t=.25,u=.125,v=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],w=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(e<=0)return 0;if(g<2||h<1||i<2)return NaN;if(!Number.isFinite(e))return 1;if(g>q)return d(e,h,i);var x=g*.5,y=x*b.log(g)-g*b.log(2)-a.gammaln(x),z=x-1,A=g*.25,B;g<=n?B=r:g<=o?B=s:g<=p?B=t:B=u,y+=b.log(B);var C=0;for(var D=1;D<=50;D++){var E=0,F=(2*D-1)*B;for(var G=1;G<=j;G++){var H,I;k<G?(H=G-k-1,I=y+z*b.log(F+v[H]*B)-(v[H]*B+F)*A):(H=G-1,I=y+z*b.log(F-v[H]*B)+(v[H]*B-F)*A);var J;if(I>=l){k<G?J=e*b.sqrt((v[H]*B+F)*.5):J=e*b.sqrt((-(v[H]*B)+F)*.5);var K=d(J,h,i),L=K*w[H]*b.exp(I);E+=L}}if(D*B>=1&&E<=m)break;C+=E}if(E>m)throw new Error("tukey.cdf failed to converge");return C>1&&(C=1),C},inv:function(c,d,f){var g=1,h=d,i=1e-4,j=50;if(f<2||g<1||h<2)return NaN;if(c<0||c>1)return NaN;if(c===0)return 0;if(c===1)return Infinity;var k=e(c,h,f),l=a.tukey.cdf(k,d,f)-c,m;l>0?m=b.max(0,k-1):m=k+1;var n=a.tukey.cdf(m,d,f)-c,o;for(var p=1;p<j;p++){o=m-n*(m-k)/(n-l),l=n,k=m,o<0&&(o=0,n=-c),n=a.tukey.cdf(o,d,f)-c,m=o;var q=b.abs(m-k);if(q<i)return o}throw new Error("tukey.inv failed to converge")}})}(a,Math),function(a,b){function e(b){return d(b)||b instanceof a}var c=Array.prototype.push,d=a.utils.isArray;a.extend({add:function(c,d){return e(d)?(e(d[0])||(d=[d]),a.map(c,function(a,b,c){return a+d[b][c]})):a.map(c,function(a){return a+d})},subtract:function(c,d){return e(d)?(e(d[0])||(d=[d]),a.map(c,function(a,b,c){return a-d[b][c]||0})):a.map(c,function(a){return a-d})},divide:function(c,d){return e(d)?(e(d[0])||(d=[d]),a.multiply(c,a.inv(d))):a.map(c,function(a){return a/d})},multiply:function(c,d){var f,g,h,i,j,k,l,m;if(c.length===undefined&&d.length===undefined)return c*d;j=c.length,k=c[0].length,l=a.zeros(j,h=e(d)?d[0].length:k),m=0;if(e(d)){for(;m<h;m++)for(f=0;f<j;f++){i=0;for(g=0;g<k;g++)i+=c[f][g]*d[g][m];l[f][m]=i}return j===1&&m===1?l[0][0]:l}return a.map(c,function(a){return a*d})},outer:function(c,d){return a.multiply(c.map(function(a){return[a]}),[d])},dot:function(c,d){e(c[0])||(c=[c]),e(d[0])||(d=[d]);var f=c[0].length===1&&c.length!==1?a.transpose(c):c,g=d[0].length===1&&d.length!==1?a.transpose(d):d,h=[],i=0,j=f.length,k=f[0].length,l,m;for(;i<j;i++){h[i]=[],l=0;for(m=0;m<k;m++)l+=f[i][m]*g[i][m];h[i]=l}return h.length===1?h[0]:h},pow:function(d,e){return a.map(d,function(a){return b.pow(a,e)})},exp:function(d){return a.map(d,function(a){return b.exp(a)})},log:function(d){return a.map(d,function(a){return b.log(a)})},abs:function(d){return a.map(d,function(a){return b.abs(a)})
    },norm:function(c,d){var f=0,g=0;isNaN(d)&&(d=2),e(c[0])&&(c=c[0]);for(;g<c.length;g++)f+=b.pow(b.abs(c[g]),d);return b.pow(f,1/d)},angle:function(d,e){return b.acos(a.dot(d,e)/(a.norm(d)*a.norm(e)))},aug:function(b,d){var e=[];for(var f=0;f<b.length;f++)e.push(b[f].slice());for(var f=0;f<e.length;f++)c.apply(e[f],d[f]);return e},inv:function(c){var d=c.length,e=c[0].length,f=a.identity(d,e),g=a.gauss_jordan(c,f),h=[],i=0,j;for(;i<d;i++){h[i]=[];for(j=e;j<g[0].length;j++)h[i][j-e]=g[i][j]}return h},det:function(b){var c=b.length,d=c*2,e=new Array(d),f=c-1,g=d-1,h=f-c+1,i=g,j=0,k=0,l;if(c===2)return b[0][0]*b[1][1]-b[0][1]*b[1][0];for(;j<d;j++)e[j]=1;for(var j=0;j<c;j++){for(l=0;l<c;l++)e[h<0?h+c:h]*=b[j][l],e[i<c?i+c:i]*=b[j][l],h++,i--;h=--f-c+1,i=--g}for(var j=0;j<c;j++)k+=e[j];for(;j<d;j++)k-=e[j];return k},gauss_elimination:function(d,e){var f=0,g=0,h=d.length,i=d[0].length,j=1,k=0,l=[],m,n,o,p;d=a.aug(d,e),m=d[0].length;for(var f=0;f<h;f++){n=d[f][f],g=f;for(p=f+1;p<i;p++)n<b.abs(d[p][f])&&(n=d[p][f],g=p);if(g!=f)for(p=0;p<m;p++)o=d[f][p],d[f][p]=d[g][p],d[g][p]=o;for(g=f+1;g<h;g++){j=d[g][f]/d[f][f];for(p=f;p<m;p++)d[g][p]=d[g][p]-j*d[f][p]}}for(var f=h-1;f>=0;f--){k=0;for(g=f+1;g<=h-1;g++)k+=l[g]*d[f][g];l[f]=(d[f][m-1]-k)/d[f][f]}return l},gauss_jordan:function(d,e){var f=a.aug(d,e),g=f.length,h=f[0].length,i=0;for(var j=0;j<g;j++){var k=j;for(var l=j+1;l<g;l++)b.abs(f[l][j])>b.abs(f[k][j])&&(k=l);var m=f[j];f[j]=f[k],f[k]=m;for(var l=j+1;l<g;l++){i=f[l][j]/f[j][j];for(var n=j;n<h;n++)f[l][n]-=f[j][n]*i}}for(var j=g-1;j>=0;j--){i=f[j][j];for(var l=0;l<j;l++)for(var n=h-1;n>j-1;n--)f[l][n]-=f[j][n]*f[l][j]/i;f[j][j]/=i;for(var n=g;n<h;n++)f[j][n]/=i}return f},triaUpSolve:function(c,d){var e=c[0].length,f=a.zeros(1,e)[0],g,h=!1;return d[0].length!=undefined&&(d=d.map(function(a){return a[0]}),h=!0),a.arange(e-1,-1,-1).forEach(function(b){g=a.arange(b+1,e).map(function(a){return f[a]*c[b][a]}),f[b]=(d[b]-a.sum(g))/c[b][b]}),h?f.map(function(a){return[a]}):f},triaLowSolve:function(c,d){var e=c[0].length,f=a.zeros(1,e)[0],g,h=!1;return d[0].length!=undefined&&(d=d.map(function(a){return a[0]}),h=!0),a.arange(e).forEach(function(b){g=a.arange(b).map(function(a){return c[b][a]*f[a]}),f[b]=(d[b]-a.sum(g))/c[b][b]}),h?f.map(function(a){return[a]}):f},lu:function(c){var d=c.length,e=a.identity(d),f=a.zeros(c.length,c[0].length),g;return a.arange(d).forEach(function(a){f[0][a]=c[0][a]}),a.arange(1,d).forEach(function(b){a.arange(b).forEach(function(d){g=a.arange(d).map(function(a){return e[b][a]*f[a][d]}),e[b][d]=(c[b][d]-a.sum(g))/f[d][d]}),a.arange(b,d).forEach(function(d){g=a.arange(b).map(function(a){return e[b][a]*f[a][d]}),f[b][d]=c[i][d]-a.sum(g)})}),[e,f]},cholesky:function(d){var e=d.length,f=a.zeros(d.length,d[0].length),g;return a.arange(e).forEach(function(c){g=a.arange(c).map(function(a){return b.pow(f[c][a],2)}),f[c][c]=b.sqrt(d[c][c]-a.sum(g)),a.arange(c+1,e).forEach(function(b){g=a.arange(c).map(function(a){return f[c][a]*f[b][a]}),f[b][c]=(d[c][b]-a.sum(g))/f[c][c]})}),f},gauss_jacobi:function(d,e,f,g){var h=0,i=0,j=d.length,k=[],l=[],m=[],n,o,p,q;for(;h<j;h++){k[h]=[],l[h]=[],m[h]=[];for(i=0;i<j;i++)h>i?(k[h][i]=d[h][i],l[h][i]=m[h][i]=0):h<i?(l[h][i]=d[h][i],k[h][i]=m[h][i]=0):(m[h][i]=d[h][i],k[h][i]=l[h][i]=0)}p=a.multiply(a.multiply(a.inv(m),a.add(k,l)),-1),o=a.multiply(a.inv(m),e),n=f,q=a.add(a.multiply(p,f),o),h=2;while(b.abs(a.norm(a.subtract(q,n)))>g)n=q,q=a.add(a.multiply(p,n),o),h++;return q},gauss_seidel:function(d,e,f,g){var h=0,i=d.length,j=[],k=[],l=[],m,n,o,p,q;for(;h<i;h++){j[h]=[],k[h]=[],l[h]=[];for(m=0;m<i;m++)h>m?(j[h][m]=d[h][m],k[h][m]=l[h][m]=0):h<m?(k[h][m]=d[h][m],j[h][m]=l[h][m]=0):(l[h][m]=d[h][m],j[h][m]=k[h][m]=0)}p=a.multiply(a.multiply(a.inv(a.add(l,j)),k),-1),o=a.multiply(a.inv(a.add(l,j)),e),n=f,q=a.add(a.multiply(p,f),o),h=2;while(b.abs(a.norm(a.subtract(q,n)))>g)n=q,q=a.add(a.multiply(p,n),o),h+=1;return q},SOR:function(d,e,f,g,h){var i=0,j=d.length,k=[],l=[],m=[],n,o,p,q,r;for(;i<j;i++){k[i]=[],l[i]=[],m[i]=[];for(n=0;n<j;n++)i>n?(k[i][n]=d[i][n],l[i][n]=m[i][n]=0):i<n?(l[i][n]=d[i][n],k[i][n]=m[i][n]=0):(m[i][n]=d[i][n],k[i][n]=l[i][n]=0)}q=a.multiply(a.inv(a.add(m,a.multiply(k,h))),a.subtract(a.multiply(m,1-h),a.multiply(l,h))),p=a.multiply(a.multiply(a.inv(a.add(m,a.multiply(k,h))),e),h),o=f,r=a.add(a.multiply(q,f),p),i=2;while(b.abs(a.norm(a.subtract(r,o)))>g)o=r,r=a.add(a.multiply(q,o),p),i++;return r},householder:function(d){var e=d.length,f=d[0].length,g=0,h=[],i=[],j,k,l,m,n;for(;g<e-1;g++){j=0;for(m=g+1;m<f;m++)j+=d[m][g]*d[m][g];n=d[g+1][g]>0?-1:1,j=n*b.sqrt(j),k=b.sqrt((j*j-d[g+1][g]*j)/2),h=a.zeros(e,1),h[g+1][0]=(d[g+1][g]-j)/(2*k);for(l=g+2;l<e;l++)h[l][0]=d[l][g]/(2*k);i=a.subtract(a.identity(e,f),a.multiply(a.multiply(h,a.transpose(h)),2)),d=a.multiply(i,a.multiply(d,i))}return d},QR:function(){function e(b){var c=b.length,d=a.norm(b,2),e=a.zeros(1,c)[0];e[0]=1;var f=a.add(a.multiply(a.multiply(e,d),-1),b),g=a.norm(f,2),h=a.divide(f,g),i=a.subtract(a.identity(c),a.multiply(a.outer(h,h),2));return i}function f(b){var c=b[0].length,d=[];a.arange(c).forEach(function(c){var f=a.slice(b,{row:{start:c},col:c}),g=e(f),h=a.identity(b.length);h=a.sliceAssign(h,{row:{start:c},col:{start:c}},g),b=a.multiply(h,b),d.push(h)});var f=d.reduce(function(b,c){return a.multiply(b,c)}),g=b;return[f,g]}function g(e){var f=e.length,g=e[0].length;e=a.copy(e),r=a.zeros(g,g);var h,i,j;for(i=0;i<g;i++){r[i][i]=b.sqrt(c(d(f).map(function(a){return e[a][i]*e[a][i]})));for(h=0;h<f;h++)e[h][i]=e[h][i]/r[i][i];for(j=i+1;j<g;j++){r[i][j]=c(d(f).map(function(a){return e[a][i]*e[a][j]}));for(h=0;h<f;h++)e[h][j]=e[h][j]-e[h][i]*r[i][j]}}return[e,r]}var c=a.sum,d=a.arange;return g}(),lstsq:function(b,c){function d(b){b=a.copy(b);var c=b.length,d=a.identity(c);return a.arange(c-1,-1,-1).forEach(function(c){a.sliceAssign(d,{row:c},a.divide(a.slice(d,{row:c}),b[c][c])),a.sliceAssign(b,{row:c},a.divide(a.slice(b,{row:c}),b[c][c])),a.arange(c).forEach(function(e){var f=a.multiply(b[e][c],-1),g=a.slice(b,{row:e}),h=a.multiply(a.slice(b,{row:c}),f);a.sliceAssign(b,{row:e},a.add(g,h));var j=a.slice(d,{row:e}),k=a.multiply(a.slice(d,{row:c}),f);a.sliceAssign(d,{row:e},a.add(j,k))})}),d}function e(b,c){var e=!1;c[0].length===undefined&&(c=c.map(function(a){return[a]}),e=!0);var f=a.QR(b),g=f[0],h=f[1],i=b[0].length,j=a.slice(g,{col:{end:i}}),k=a.slice(h,{row:{end:i}}),l=d(k),m=a.transpose(j);m[0].length===undefined&&(m=[m]);var n=a.multiply(a.multiply(l,m),c);return n.length===undefined&&(n=[[n]]),e?n.map(function(a){return a[0]}):n}return e}(),jacobi:function(d){var e=1,f=0,g=d.length,h=a.identity(g,g),i=[],j,k,l,m,n,o,p,q;while(e===1){f++,o=d[0][1],m=0,n=1;for(var k=0;k<g;k++)for(l=0;l<g;l++)k!=l&&o<b.abs(d[k][l])&&(o=b.abs(d[k][l]),m=k,n=l);d[m][m]===d[n][n]?p=d[m][n]>0?b.PI/4:-b.PI/4:p=b.atan(2*d[m][n]/(d[m][m]-d[n][n]))/2,q=a.identity(g,g),q[m][m]=b.cos(p),q[m][n]=-b.sin(p),q[n][m]=b.sin(p),q[n][n]=b.cos(p),h=a.multiply(h,q),j=a.multiply(a.multiply(a.inv(q),d),q),d=j,e=0;for(var k=1;k<g;k++)for(l=1;l<g;l++)k!=l&&b.abs(d[k][l])>.001&&(e=1)}for(var k=0;k<g;k++)i.push(d[k][k]);return[h,i]},rungekutta:function(b,c,d,e,f,g){var h,i,j,k,l;if(g===2)while(e<=d)h=c*b(e,f),i=c*b(e+c,f+h),j=f+(h+i)/2,f=j,e+=c;if(g===4)while(e<=d)h=c*b(e,f),i=c*b(e+c/2,f+h/2),k=c*b(e+c/2,f+i/2),l=c*b(e+c,f+k),j=f+(h+2*i+2*k+l)/6,f=j,e+=c;return f},romberg:function(c,d,e,f){var g=0,h=(e-d)/2,i=[],j=[],k=[],l,m,n,o,p,q;while(g<f/2){p=c(d);for(n=d,o=0;n<=e;n+=h,o++)i[o]=n;l=i.length;for(n=1;n<l-1;n++)p+=(n%2!==0?4:2)*c(i[n]);p=h/3*(p+c(e)),k[g]=p,h/=2,g++}m=k.length,l=1;while(m!==1){for(n=0;n<m-1;n++)j[n]=(b.pow(4,l)*k[n+1]-k[n])/(b.pow(4,l)-1);m=j.length,k=j,j=[],l++}return k},richardson:function(c,d,e,f){function g(a,b){var c=0,d=a.length,e;for(;c<d;c++)a[c]===b&&(e=c);return e}var h=c.length,i=b.abs(e-c[g(c,e)+1]),j=0,k=[],l=[],m,n,o,p,q;while(f>=i)m=g(c,e+f),n=g(c,e),k[j]=(d[m]-2*d[n]+d[2*n-m])/(f*f),f/=2,j++;p=k.length,o=1;while(p!=1){for(q=0;q<p-1;q++)l[q]=(b.pow(4,o)*k[q+1]-k[q])/(b.pow(4,o)-1);p=l.length,k=l,l=[],o++}return k},simpson:function(b,c,d,e){var f=(d-c)/e,g=b(c),h=[],i=c,j=0,k=1,l;for(;i<=d;i+=f,j++)h[j]=i;l=h.length;for(;k<l-1;k++)g+=(k%2!==0?4:2)*b(h[k]);return f/3*(g+b(d))},hermite:function(b,c,d,e){var f=b.length,g=0,h=0,i=[],j=[],k=[],l=[],m;for(;h<f;h++){i[h]=1;for(m=0;m<f;m++)h!=m&&(i[h]*=(e-b[m])/(b[h]-b[m]));j[h]=0;for(m=0;m<f;m++)h!=m&&(j[h]+=1/(b[h]-b[m]));k[h]=(1-2*(e-b[h])*j[h])*i[h]*i[h],l[h]=(e-b[h])*i[h]*i[h],g+=k[h]*c[h]+l[h]*d[h]}return g},lagrange:function(b,c,d){var e=0,f=0,g,h,i=b.length;for(;f<i;f++){h=c[f];for(g=0;g<i;g++)f!=g&&(h*=(d-b[g])/(b[f]-b[g]));e+=h}return e},cubic_spline:function(c,d,e){var f=c.length,g=0,h,i=[],j=[],k=[],l=[],m=[],n=[],o=[];for(;g<f-1;g++)m[g]=c[g+1]-c[g];k[0]=0;for(var g=1;g<f-1;g++)k[g]=3/m[g]*(d[g+1]-d[g])-3/m[g-1]*(d[g]-d[g-1]);for(var g=1;g<f-1;g++)i[g]=[],j[g]=[],i[g][g-1]=m[g-1],i[g][g]=2*(m[g-1]+m[g]),i[g][g+1]=m[g],j[g][0]=k[g];l=a.multiply(a.inv(i),j);for(h=0;h<f-1;h++)n[h]=(d[h+1]-d[h])/m[h]-m[h]*(l[h+1][0]+2*l[h][0])/3,o[h]=(l[h+1][0]-l[h][0])/(3*m[h]);for(h=0;h<f;h++)if(c[h]>e)break;return h-=1,d[h]+(e-c[h])*n[h]+a.sq(e-c[h])*l[h]+(e-c[h])*a.sq(e-c[h])*o[h]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(c){var d=c.length,e=c[0].length,f=!1,g=0,h,i,j=[],k=[],l=[],m=[],n=[],o=[],p=[],q=[],r=[],s=[];for(var g=0;g<d;g++)j[g]=a.sum(c[g])/e;for(var g=0;g<e;g++){p[g]=[];for(h=0;h<d;h++)p[g][h]=c[h][g]-j[h]}p=a.transpose(p);for(var g=0;g<d;g++){q[g]=[];for(h=0;h<d;h++)q[g][h]=a.dot([p[g]],[p[h]])/(e-1)}l=a.jacobi(q),r=l[0],k=l[1],s=a.transpose(r);for(var g=0;g<k.length;g++)for(h=g;h<k.length;h++)k[g]<k[h]&&(i=k[g],k[g]=k[h],k[h]=i,m=s[g],s[g]=s[h],s[h]=m);o=a.transpose(p);for(var g=0;g<d;g++){n[g]=[];for(h=0;h<o.length;h++)n[g][h]=a.dot([s[g]],[o[h]])}return[c,k,s,n]}}),function(b){for(var c=0;c<b.length;c++)(function(b){a.fn[b]=function(c,d){var e=this;return d?(setTimeout(function(){d.call(e,a.fn[b].call(e,c))},15),this):typeof a[b](this,c)=="number"?a[b](this,c):a(a[b](this,c))}})(b[c])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(a,Math),function(a,b){function f(a,c,d,e){if(a>1||d>1||a<=0||d<=0)throw new Error("Proportions should be greater than 0 and less than 1");var f=(a*c+d*e)/(c+e),g=b.sqrt(f*(1-f)*(1/c+1/e));return(a-d)/g}var c=[].slice,d=a.utils.isNumber,e=a.utils.isArray;a.extend({zscore:function(){var e=c.call(arguments);return d(e[1])?(e[0]-e[1])/e[2]:(e[0]-a.mean(e[1]))/a.stdev(e[1],e[2])},ztest:function(){var f=c.call(arguments),g;return e(f[1])?(g=a.zscore(f[0],f[1],f[3]),f[2]===1?a.normal.cdf(-b.abs(g),0,1):a.normal.cdf(-b.abs(g),0,1)*2):f.length>2?(g=a.zscore(f[0],f[1],f[2]),f[3]===1?a.normal.cdf(-b.abs(g),0,1):a.normal.cdf(-b.abs(g),0,1)*2):(g=f[0],f[1]===1?a.normal.cdf(-b.abs(g),0,1):a.normal.cdf(-b.abs(g),0,1)*2)}}),a.extend(a.fn,{zscore:function(b,c){return(b-this.mean())/this.stdev(c)},ztest:function(d,e,f){var g=b.abs(this.zscore(d,f));return e===1?a.normal.cdf(-g,0,1):a.normal.cdf(-g,0,1)*2}}),a.extend({tscore:function(){var e=c.call(arguments);return e.length===4?(e[0]-e[1])/(e[2]/b.sqrt(e[3])):(e[0]-a.mean(e[1]))/(a.stdev(e[1],!0)/b.sqrt(e[1].length))},ttest:function(){var f=c.call(arguments),g;return f.length===5?(g=b.abs(a.tscore(f[0],f[1],f[2],f[3])),f[4]===1?a.studentt.cdf(-g,f[3]-1):a.studentt.cdf(-g,f[3]-1)*2):d(f[1])?(g=b.abs(f[0]),f[2]==1?a.studentt.cdf(-g,f[1]-1):a.studentt.cdf(-g,f[1]-1)*2):(g=b.abs(a.tscore(f[0],f[1])),f[2]==1?a.studentt.cdf(-g,f[1].length-1):a.studentt.cdf(-g,f[1].length-1)*2)}}),a.extend(a.fn,{tscore:function(c){return(c-this.mean())/(this.stdev(!0)/b.sqrt(this.cols()))},ttest:function(d,e){return e===1?1-a.studentt.cdf(b.abs(this.tscore(d)),this.cols()-1):a.studentt.cdf(-b.abs(this.tscore(d)),this.cols()-1)*2}}),a.extend({anovafscore:function(){var e=c.call(arguments),f,g,h,i,j,k,l,m;if(e.length===1){j=new Array(e[0].length);for(var l=0;l<e[0].length;l++)j[l]=e[0][l];e=j}if(e.length===2)return a.variance(e[0])/a.variance(e[1]);g=new Array;for(var l=0;l<e.length;l++)g=g.concat(e[l]);h=a.mean(g),f=0;for(var l=0;l<e.length;l++)f+=e[l].length*b.pow(a.mean(e[l])-h,2);f/=e.length-1,k=0;for(var l=0;l<e.length;l++){i=a.mean(e[l]);for(m=0;m<e[l].length;m++)k+=b.pow(e[l][m]-i,2)}return k/=g.length-e.length,f/k},anovaftest:function(){var e=c.call(arguments),f,g,h,i;if(d(e[0]))return 1-a.centralF.cdf(e[0],e[1],e[2]);anovafscore=a.anovafscore(e),f=e.length-1,h=0;for(var i=0;i<e.length;i++)h+=e[i].length;return g=h-f-1,1-a.centralF.cdf(anovafscore,f,g)},ftest:function(c,d,e){return 1-a.centralF.cdf(c,d,e)}}),a.extend(a.fn,{anovafscore:function(){return a.anovafscore(this.toArray())},anovaftes:function(){var c=0,d;for(var d=0;d<this.length;d++)c+=this[d].length;return a.ftest(this.anovafscore(),this.length-1,c-this.length)}}),a.extend({qscore:function(){var f=c.call(arguments),g,h,i,j,k;return d(f[0])?(g=f[0],h=f[1],i=f[2],j=f[3],k=f[4]):(g=a.mean(f[0]),h=a.mean(f[1]),i=f[0].length,j=f[1].length,k=f[2]),b.abs(g-h)/(k*b.sqrt((1/i+1/j)/2))},qtest:function(){var d=c.call(arguments),e;d.length===3?(e=d[0],d=d.slice(1)):d.length===7?(e=a.qscore(d[0],d[1],d[2],d[3],d[4]),d=d.slice(5)):(e=a.qscore(d[0],d[1],d[2]),d=d.slice(3));var f=d[0],g=d[1];return 1-a.tukey.cdf(e,g,f-g)},tukeyhsd:function(c){var d=a.pooledstdev(c),e=c.map(function(b){return a.mean(b)}),f=c.reduce(function(a,b){return a+b.length},0),g=[];for(var h=0;h<c.length;++h)for(var i=h+1;i<c.length;++i){var j=a.qtest(e[h],e[i],c[h].length,c[i].length,d,f,c.length);g.push([[h,i],j])}return g}}),a.extend({normalci:function(){var e=c.call(arguments),f=new Array(2),g;return e.length===4?g=b.abs(a.normal.inv(e[1]/2,0,1)*e[2]/b.sqrt(e[3])):g=b.abs(a.normal.inv(e[1]/2,0,1)*a.stdev(e[2])/b.sqrt(e[2].length)),f[0]=e[0]-g,f[1]=e[0]+g,f},tci:function(){var e=c.call(arguments),f=new Array(2),g;return e.length===4?g=b.abs(a.studentt.inv(e[1]/2,e[3]-1)*e[2]/b.sqrt(e[3])):g=b.abs(a.studentt.inv(e[1]/2,e[2].length-1)*a.stdev(e[2],!0)/b.sqrt(e[2].length)),f[0]=e[0]-g,f[1]=e[0]+g,f},significant:function(b,c){return b<c}}),a.extend(a.fn,{normalci:function(c,d){return a.normalci(c,d,this.toArray())},tci:function(c,d){return a.tci(c,d,this.toArray())}}),a.extend(a.fn,{oneSidedDifferenceOfProportions:function(c,d,e,g){var h=f(c,d,e,g);return a.ztest(h,1)},twoSidedDifferenceOfProportions:function(c,d,e,g){var h=f(c,d,e,g);return a.ztest(h,2)}})}(a,Math),a.models=function(){function b(a,b){return c(a,b)}function b(b){var d=b[0].length,e=a.arange(d).map(function(e){var f=a.arange(d).filter(function(a){return a!==e});return c(a.col(b,e).map(function(a){return a[0]}),a.col(b,f))});return e}function c(b,c){var d=b.length,e=c[0].length-1,f=d-e-1,g=a.lstsq(c,b),h=a.multiply(c,g.map(function(a){return[a]})).map(function(a){return a[0]}),i=a.subtract(b,h),j=a.mean(b),k=a.sum(h.map(function(a){return Math.pow(a-j,2)})),l=a.sum(b.map(function(a,b){return Math.pow(a-h[b],2)})),m=k+l,n=k/m;return{exog:c,endog:b,nobs:d,df_model:e,df_resid:f,coef:g,predict:h,resid:i,ybar:j,SST:m,SSE:k,SSR:l,R2:n}}function d(c){var d=b(c.exog),e=Math.sqrt(c.SSR/c.df_resid),f=d.map(function(a){var b=a.SST,c=a.R2;return e/Math.sqrt(b*(1-c))}),g=c.coef.map(function(a,b){return(a-0)/f[b]}),h=g.map(function(b){var d=a.studentt.cdf(b,c.df_resid);return(d>.5?1-d:d)*2}),i=a.studentt.inv(.975,c.df_resid),j=c.coef.map(function(a,b){var c=i*f[b];return[a-c,a+c]});return{se:f,t:g,p:h,sigmaHat:e,interval95:j}}function e(b){var c=b.R2/b.df_model/((1-b.R2)/b.df_resid),d=function(b,c,d){return a.beta.cdf(b/(d/c+b),c/2,d/2)},e=1-d(c,b.df_model,b.df_resid);return{F_statistic:c,pvalue:e}}function f(a,b){var f=c(a,b),g=d(f),h=e(f),i=1-(1-f.R2)*((f.nobs-1)/f.df_resid);return f.t=g,f.f=h,f.adjust_R2=i,f}return{ols:f}}(),a.jStat=a,a});

    var jStat = window.jStat;
    module.exports.jStat = jStat;
});

Numbas.addExtension('stats',['math','jme','jStat'],function(stats) {
    var math = Numbas.math;
    var types = Numbas.jme.types;
    var funcObj = Numbas.jme.funcObj;
    var TNum = types.TNum;
    var TBool = types.TBool;
    var TList = types.TList;

    var statsScope = stats.scope;

    function addFunction(name,intype,outcons,fn,options) {
        options = options || {};
        options.random = 'random' in options ? options.random : false;
        return statsScope.addFunction(new Numbas.jme.funcObj(name,intype,outcons,fn,options));
    }

    var listFuncs = 'sum sumsqrd sumsqerr product min max mean meansqerr geomean median cumsum diff range variance stdev meandev meddev coeffvar quartiles'.split(' ');
    for(var i=0;i<listFuncs.length;i++) {
        var fn = listFuncs[i];
        addFunction(fn, ['list of number'],TNum, jStat[fn], {unwrapValues:true});
    }
    var correlationFuncs = ['covariance','corrcoeff'];
    correlationFuncs.forEach(function(fn) {
        addFunction(fn, ['list of number', 'list of number'], TNum, jStat[fn], {unwrapValues:true});
    });
    addFunction('stdev', ['list of number',TBool],TNum, jStat.stdev, {unwrapValues:true});
    addFunction('population_stdev', ['list of number'], TNum, function(l) { return jStat.stdev(l,false); }, {unwrapValues: true});
    addFunction('sample_stdev', ['list of number'], TNum, function(l) { return jStat.stdev(l,true); }, {unwrapValues: true});
    addFunction('variance', ['list of number',TBool],TNum, jStat.variance, {unwrapValues:true});
    addFunction('population_variance', ['list of number'], TNum, function(l) { return jStat.variance(l,false); }, {unwrapValues: true});
    addFunction('sample_variance', ['list of number'], TNum, function(l) { return jStat.variance(l,true); }, {unwrapValues: true});
    addFunction('mode',['list of number'],TList,function(l) {
        var modes = jStat.mode(l);
        if(typeof(modes)==='number') {
            modes = [modes];
        }
        return modes;
    }, {unwrapValues: true}
    );
    addFunction('mode',['list'],TList,null, {
        evaluate :function(args,scope) {
            var sorted = args[0].value.slice().sort(Numbas.jme.compareTokens);
            var counts = [];
            var current = null;
            var count = 0;
            sorted.forEach(function(t) {
                if(current==null) {
                    current = t;
                    count = 0;
                    return;
                }
                if(Numbas.jme.compareTokens(t,current)==0) {
                    count += 1;
                } else {
                    counts.push({token:current,count:count});
                    current = t;
                    count = 0;
                }
            });
            if(current) {
                counts.push({token:current,count:count});
            }

            var max = counts.reduce(function(m,c) { return Math.max(m,c.count); },0);
            var modes = counts.filter(function(c) { return c.count==max; }).map(function(c) { return c.token; });
            return new TList(modes);
        }
    });

    // fill in geometric distribution because jStat doesn't have it
    if(!('geometric' in jStat)) {
        jStat.geometric = {
            pdf: function(x,p) {
                return Math.pow(1-p,x-1)*p
            },

            cdf: function(x,p) {
                return 1-Math.pow(1-p,x)
            },

            mean: function(p) {
                return 1/p;
            },

            median: function(p) {
                return Math.ceil(-1/(Math.log(1-p)/Math.log(2)));
            },
            mode: function() {
                return 1;
            },
            sample: function(p) {
                var u = Math.random()
                var z = (Math.log(1-u))/(Math.log(1-p))

                return Math.round(z);
            },
            variance: function(p) {
                return (1-p)/(p*p);
            }
        }
    }

    //dictionary of distribution methods; values are the number of extra parameters to take
    var methods = {
        pdf: {params: 1, random: false},
        cdf: {params: 1, random: false},
        inv: {params: 1, random: false},
        mean: {params: 0, random: false},
        median: {params: 0, random: false},
        mode: {params: 0, random: false},
        sample: {params: 0, random: true},
        variance: {params: 0, random: false}
    }

    var jdistributions = {
        beta: 2,
        centralF: 2,
        cauchy: 2,
        chisquare: 1,
        exponential: 1,
        gamma: 2,
        invgamma: 2,
        kumaraswamy: 2,
        lognormal: 2,
        normal: 2,
        pareto: 2,
        studentt: 1,
        weibull: 2,
        uniform: 2,
        binomial: 2,
        geometric: 1,
        negbin: 2,
        hypgeom: 3,
        poisson: 1,
        triangular: 3
    }

    for(var name in jdistributions) {
        for(var method in methods) {
            if(method in jStat[name]) {
                var def = methods[method];
                var n = jdistributions[name]+def.params;
                var args = [];
                for(var i=0;i<n;i++)
                    args.push(TNum);

                addFunction(name+method, args, TNum, jStat[name][method], {random: def.random});
            }
        }
    }



    addFunction('zScore',[TNum,TNum,TNum],TNum,jStat.zscore);
    addFunction('zScore',[TNum,'list of number'],TNum,jStat.zscore,{unwrapValues:true});

    addFunction('zTest',[TNum,TNum,TNum,TNum],TNum,jStat.ztest);
    addFunction('zTest',[TNum,'list of number',TNum],TNum,jStat.ztest,{unwrapValues:true});

    addFunction('tScore',[TNum,TNum,TNum,TNum],TNum,jStat.tscore);
    addFunction('tScore',[TNum,'list of number'],TNum,jStat.tscore,{unwrapValues:true});

    addFunction('tTest',[TNum,TNum,TNum,TNum,TNum],TNum,jStat.ttest);
    addFunction('tTest',[TNum,TNum,TNum],TNum,jStat.ttest);
    addFunction('tTest',[TNum,'list of number',TNum],TNum,jStat.ttest,{unwrapValues:true});

    addFunction('anovaFScore',['*list of number'],TNum,jStat.anovafscore,{unwrapValues:true});
    addFunction('anovaFTest',['*list of number'],TNum,jStat.anovaftest,{unwrapValues:true});
    addFunction('ftest',[TNum,TNum,TNum],TNum,jStat.ftest);

    addFunction('normalci',[TNum,TNum,TNum,TNum],TNum,jStat.normalci);
    addFunction('normalci',[TNum,TNum,'list of number'],TNum,jStat.normalci,{unwrapValues:true});
    addFunction('tci',[TNum,TNum,TNum,TNum],TNum,jStat.tci);
    addFunction('tci',[TNum,TNum,'list of number'],TNum,jStat.tci,{unwrapValues:true});

    var specialFunctions = {
        betafn: 2,
        betaln: 2,
        betacf: 3,
        ibetainv: 3,
        ibeta: 3,
        gammaln: 1,
        gammafn: 1,
        gammap: 2,
        factorialln: 1,
        factorial: 1,
        combination: 2,
        permutation: 2,
        gammapinv: 2,
        erf: 1,
        erfc: 1,
        erfcinv: 1,
        randn: 2,
        randg: 3
    }
    for(var name in specialFunctions) {
        var n = specialFunctions[name];
        var args = [];
        for(var i=0;i<n;i++) { args.push(TNum) };
        addFunction(name,args,TNum,jStat[name]);
    }


    /* Put values into a specified number of bins. The first bin begins at the minimum value in the given list, and the last bin ends at the maximum value.
     */
    addFunction('bin',['list of number','number'], types.TList,
        function(values,num_bins){

            //finding the max & min values in a list
            var values_max = Math.max(...values);
            var values_min = Math.min(...values);

            // working out the bin widths
            var bin_width = (values_max-values_min)/num_bins

            // creating the bins we needed
            var bins = []
            for (let i = 0 ;  i < num_bins; i++) {
                bins.push([])
            }

            for (let i of values) {
                var position = (i-values_min)/bin_width;
                var bin_position = Math.min (num_bins -1, Math.floor(position))
                bins[bin_position]. push (i)
            }

            return bins;
        },
        {unwrapValues:true, random: false}
    );


    /* Put values into the given numbers of bins, spanning the given range.
     */
    addFunction('bin',['list of number', 'number', 'range'], types.TList,
        function(values, num_bins, range){
            const start = range[0];
            const end = range[1];

            // working out the bin width
            var bin_width = Math.abs(end - start)/num_bins;

            // creating the bins we need
            var bins = [] ;
            for (let i = 0 ;  i < num_bins; i++) {
                bins.push([]);
            }

            // placing values into bins
            for (let i of values) {
                if (i < start || i> end ){
                    continue;
                }
                var position = (i-start)/bin_width;
                var bin_position = Math.min (num_bins -1, Math.floor(position))
                bins[bin_position]. push (i)
            }

            return bins;
        },
        {unwrapValues: true, random: false}
    );


});
