
head.ready(function() {
	w = $('body').width();
	$('body').addClass('a');
	sq1 = $('#logo__sq1');
	sq2 = $('#logo__sq2');
	sq3 = $('#logo__sq3');
	sq4 = $('#logo__sq4');
	$('body').mousemove(function (e) {
	    var mouseX = e.pageX;
	    sq1.css('left',10*mouseX/w);
	    sq2.css('left',20*mouseX/w);
	    sq3.css('left',25*mouseX/w);
	    sq4.css('left',30*mouseX/w);
	});
});