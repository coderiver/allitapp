
head.ready(function() {
	w = $('body').width();
	$('body').addClass('a');
	sq1 = $('#logo__sq1');
	sq2 = $('#logo__sq2');
	sq3 = $('#logo__sq3');
	sq4 = $('#logo__sq4');
	$('body').mousemove(function (e) {
	    var mouseX = e.pageX;
	    sq1.css('transform', 'translate('+ 10*mouseX/w +'px,-50%)');
	    sq2.css('transform', 'translate('+ 20*mouseX/w +'px,-50%)');
	    sq3.css('transform', 'translate('+ 30*mouseX/w +'px,-50%)');
	    sq4.css('transform', 'translate('+ 40*mouseX/w +'px,-50%)');
	});
});