
head.ready(function() {
	w = $('body').width();
	$('body').addClass('a');
	sq1 = $('#logo__sq1');
	sq2 = $('#logo__sq2');
	sq3 = $('#logo__sq3');
	sq4 = $('#logo__sq4');

	function culc(K, BLA, BLABLA){
		return -(BLA*50-BLABLA*K)
	};

	$('body').mousemove(function (e) {
	    var mouseX = e.pageX;

		x = mouseX/w-0.5;
		y = Math.abs(x);
		console.log(x, y);

    	sq1.css('transform', 'translate('+ culc(10, x, y) +'px,-50%)');
    	sq2.css('transform', 'translate('+ culc(20, x, y) +'px,-50%)');
    	sq3.css('transform', 'translate('+ culc(30, x, y) +'px,-50%)');
    	sq4.css('transform', 'translate('+ culc(40, x, y) +'px,-50%)');

	});
});