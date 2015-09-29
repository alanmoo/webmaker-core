module.exports={

  calculateSwipe: function(startX, startY, endX, endY) {
    var THRESHOLD = 100;
    var MINIMUM_DISTANCE = 50;

    var distance = Math.sqrt(Math.pow(startX - endX, 2) + Math.pow(startY - endY, 2));

    if (distance >= MINIMUM_DISTANCE) {
      if (startX > endX && Math.abs(startY - endY) < THRESHOLD) {
	return('LEFT');
      } else if (startX < endX && Math.abs(startY - endY) < THRESHOLD) {
	return('RIGHT');
      } else if (startY < endY && Math.abs(startX - endX) < THRESHOLD) {
	return('DOWN');
      } else if (startY > endY && Math.abs(startX - endX) < THRESHOLD) {
	return('UP');
      }
    } else {
      return false;
    }
  },

  checkSwipe: function(element, pattern, callback){
      var xStart = null;
      var yStart = null;
      var patternPos = 0;
      console.log(element);

      var handleTouchStart =(event)=>{
        xStart = event.changedTouches[0].clientX;
        yStart = event.changedTouches[0].clientY;
      }

      var handleTouchEnd =(event)=>{
        var xEnd = event.changedTouches[0].clientX;
        var yEnd = event.changedTouches[0].clientY;
        var direction = this.calculateSwipe(xStart, yStart, xEnd, yEnd);
        if(direction === pattern[patternPos]){
          patternPos++;
        } else {
          patternPos = 0;
        }
        if(patternPos === pattern.length){
          callback();
        }
      }
      element.addEventListener("touchstart", handleTouchStart, false);
      element.addEventListener("touchend", handleTouchEnd, false);
  }
}
