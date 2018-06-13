
var Ring = function (radius, numOfItems){

	
	
	for (var i = numOfItems - 1; i >= 0; i--)
	{
	    var angle = i * Math.PI * 2 / numOfItems;
	    
	    var x =  Math.sin(angle) * radius;
        var y = Math.cos(angle) * radius;
        var z = 0;
        
        this.pointsArray.push(this.make3DPoint(x,y,z));
	}
	
	
		
};

Ring.prototype = new DisplayObject3D();

