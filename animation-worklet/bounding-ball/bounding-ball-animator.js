registerAnimator('bounding', class BoundingAnimator {
    constructor(options) {
	this.balls = options.map((opt) => {
	    return {
                g: opt.g,
                v: opt.v,
                k: opt.k,
		timeInterval: opt.timeInterval,
                y: 0
            };
	});
    }

    animate(currentTime, effects) {
	const time = currentTime * 0.01;
	this.balls.forEach((ball, i) => {
	    if ( time > ball.timeInterval ) {   
	        effects.children[i].localTime = this.fall(this.balls[i]);
	    }
	});
    }

    fall(ball) {
	const bottom = 100;
	ball.v += ball.g;
	ball.y += ball.v;
	if(ball.y > bottom){
	    ball.y = bottom - (ball.y - bottom) * ball.k;
	    ball.v = -ball.v * ball.k;
	}
	return ball.y;
    }
});