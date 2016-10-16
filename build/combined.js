(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Ниже - код для кнопок "Поделиться" под видео
Share = {

	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},
	mailru: function(purl, ptitle, pimg, text) {
		url  = 'http://connect.mail.ru/share?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&imageurl='    + encodeURIComponent(pimg);
		Share.popup(url)
	},

	me : function(el){
		console.log(el.href);
		Share.popup(el.href);
		return false;
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};


//Ниже - код для всплывающей формы обратной связи

$(document).ready(function() { // Ждём загрузки страницы

	$(".popup_bg").click(function(){	// Событие клика на затемненный фон
		$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
	});

	$('.js-contactsPopup').on('click', showPopup);

});

function showPopup() {
	//alert('!!!');
	$(".popup").fadeIn(800); // Медленно выводим изображение
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvZW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8v0J3QuNC20LUgLSDQutC+0LQg0LTQu9GPINC60L3QvtC/0L7QuiBcItCf0L7QtNC10LvQuNGC0YzRgdGPXCIg0L/QvtC0INCy0LjQtNC10L5cclxuU2hhcmUgPSB7XHJcblxyXG5cdGZhY2Vib29rOiBmdW5jdGlvbihwdXJsLCBwdGl0bGUsIHBpbWcsIHRleHQpIHtcclxuXHRcdHVybCAgPSAnaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD9zPTEwMCc7XHJcblx0XHR1cmwgKz0gJyZwW3RpdGxlXT0nICAgICArIGVuY29kZVVSSUNvbXBvbmVudChwdGl0bGUpO1xyXG5cdFx0dXJsICs9ICcmcFtzdW1tYXJ5XT0nICAgKyBlbmNvZGVVUklDb21wb25lbnQodGV4dCk7XHJcblx0XHR1cmwgKz0gJyZwW3VybF09JyAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChwdXJsKTtcclxuXHRcdHVybCArPSAnJnBbaW1hZ2VzXVswXT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBpbWcpO1xyXG5cdFx0U2hhcmUucG9wdXAodXJsKTtcclxuXHR9LFxyXG5cdHR3aXR0ZXI6IGZ1bmN0aW9uKHB1cmwsIHB0aXRsZSkge1xyXG5cdFx0dXJsICA9ICdodHRwOi8vdHdpdHRlci5jb20vc2hhcmU/JztcclxuXHRcdHVybCArPSAndGV4dD0nICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQocHRpdGxlKTtcclxuXHRcdHVybCArPSAnJnVybD0nICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQocHVybCk7XHJcblx0XHR1cmwgKz0gJyZjb3VudHVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHB1cmwpO1xyXG5cdFx0U2hhcmUucG9wdXAodXJsKTtcclxuXHR9LFxyXG5cdG1haWxydTogZnVuY3Rpb24ocHVybCwgcHRpdGxlLCBwaW1nLCB0ZXh0KSB7XHJcblx0XHR1cmwgID0gJ2h0dHA6Ly9jb25uZWN0Lm1haWwucnUvc2hhcmU/JztcclxuXHRcdHVybCArPSAndXJsPScgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQocHVybCk7XHJcblx0XHR1cmwgKz0gJyZ0aXRsZT0nICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KHB0aXRsZSk7XHJcblx0XHR1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpO1xyXG5cdFx0dXJsICs9ICcmaW1hZ2V1cmw9JyAgICArIGVuY29kZVVSSUNvbXBvbmVudChwaW1nKTtcclxuXHRcdFNoYXJlLnBvcHVwKHVybClcclxuXHR9LFxyXG5cclxuXHRtZSA6IGZ1bmN0aW9uKGVsKXtcclxuXHRcdGNvbnNvbGUubG9nKGVsLmhyZWYpO1xyXG5cdFx0U2hhcmUucG9wdXAoZWwuaHJlZik7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHJcblx0cG9wdXA6IGZ1bmN0aW9uKHVybCkge1xyXG5cdFx0d2luZG93Lm9wZW4odXJsLCcnLCd0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9NjI2LGhlaWdodD00MzYnKTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuLy/QndC40LbQtSAtINC60L7QtCDQtNC70Y8g0LLRgdC/0LvRi9Cy0LDRjtGJ0LXQuSDRhNC+0YDQvNGLINC+0LHRgNCw0YLQvdC+0Lkg0YHQstGP0LfQuFxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7IC8vINCW0LTRkdC8INC30LDQs9GA0YPQt9C60Lgg0YHRgtGA0LDQvdC40YbRi1xyXG5cclxuXHQkKFwiLnBvcHVwX2JnXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHQvLyDQodC+0LHRi9GC0LjQtSDQutC70LjQutCwINC90LAg0LfQsNGC0LXQvNC90LXQvdC90YvQuSDRhNC+0L1cclxuXHRcdCQoXCIucG9wdXBcIikuZmFkZU91dCg4MDApO1x0Ly8g0JzQtdC00LvQtdC90L3QviDRg9Cx0LjRgNCw0LXQvCDQstGB0L/Qu9GL0LLQsNGO0YnQtdC1INC+0LrQvdC+XHJcblx0fSk7XHJcblxyXG5cdCQoJy5qcy1jb250YWN0c1BvcHVwJykub24oJ2NsaWNrJywgc2hvd1BvcHVwKTtcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2hvd1BvcHVwKCkge1xyXG5cdC8vYWxlcnQoJyEhIScpO1xyXG5cdCQoXCIucG9wdXBcIikuZmFkZUluKDgwMCk7IC8vINCc0LXQtNC70LXQvdC90L4g0LLRi9Cy0L7QtNC40Lwg0LjQt9C+0LHRgNCw0LbQtdC90LjQtVxyXG59XHJcbiJdfQ==
