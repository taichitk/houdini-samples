registerAnimator('scroll-linked-zoom-sample', class ScrollLinkedZoomSample {
  constructor(options) {
    this.options = options;
  }

  animate(currentTime, effect) {
    effect.children[0].localTime = currentTime;
  }
});