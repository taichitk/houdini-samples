registerAnimator('spring', class SpringAnimator {
    constructor(options) {
	this.options = options;
    }

    animate(currentTime, effects) {
	const time = currentTime * 0.001;
	const options = this.options;
        effects.children.forEach(function(effect, i) {
	    const weight = options[i].weight;
	    const repeatTime = Math.abs(Math.sin(time * Math.PI / weight) * 100);
	    effect.localTime = repeatTime;
        });
    }
});