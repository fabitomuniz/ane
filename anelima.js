(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AljFkIAArHILHAAIAALHgAlYFZIKxAAIAAqxIqxAAg");
	this.shape.setTransform(-6.6,-6.6,1.605,1.605);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AleFeIAAq7IK9AAIAAK7g");
	this.shape_1.setTransform(-6.6,-6.6,1.605,1.605);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AljFkIAArHILHAAIAALHgAlYFZIKxAAIAAqxIqxAAg");
	this.shape_2.setTransform(6.6,6.6,1.605,1.605);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AleFfIAAq8IK8AAIAAK8g");
	this.shape_3.setTransform(6.6,6.6,1.605,1.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.7,-63.7,127.4,127.4);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlgFZIK5q5IAIAIIq5K5g");
	this.shape.setTransform(57.6,57.1,1.605,1.605);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AizirIAIgIIFfFfIgIAIg");
	this.shape_1.setTransform(28.9,29.3,1.605,1.605);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlmFmIAArMILMAAIAALMgAlaFcIK2AAIAAq2Iq2AAg");
	this.shape_2.setTransform(57.6,57.5,1.605,1.605);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlgFhIAArBILBAAIAALBg");
	this.shape_3.setTransform(57.6,57.5,1.605,1.605);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAJIARgRIAAAPIgCACg");
	this.shape_4.setTransform(126,125.9,1.605,1.605);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkAlIBJhJIAAAQIg5A5g");
	this.shape_5.setTransform(121.6,121.5,1.605,1.605);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/BAIB/h/IAAAPIhwBwg");
	this.shape_6.setTransform(117.1,117.1,1.605,1.605);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhbBcIC3i3IAAAPIioCog");
	this.shape_7.setTransform(112.7,112.6,1.605,1.605);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah3B4IDvjvIAAAQIjfDfg");
	this.shape_8.setTransform(108.2,108.2,1.605,1.605);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiSCTIElklIAAAPIkWEWg");
	this.shape_9.setTransform(103.8,103.7,1.605,1.605);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AiuCvIFdldIAAAQIlOFNg");
	this.shape_10.setTransform(99.4,99.3,1.605,1.605);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjKDLIGVmUIAAAPImFGFg");
	this.shape_11.setTransform(94.9,94.9,1.605,1.605);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjlDmIHLnLIAAAPIm8G8g");
	this.shape_12.setTransform(90.5,90.4,1.605,1.605);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AkBECIIDoDIAAAQInzHzg");
	this.shape_13.setTransform(86.1,86,1.605,1.605);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AkdEeII7o7IAAAQIorIrg");
	this.shape_14.setTransform(81.6,81.6,1.605,1.605);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ak4E5IJxpxIAAAPIpiJig");
	this.shape_15.setTransform(77.2,77.1,1.605,1.605);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AlUFVIKpqpIAAAQIqZKZg");
	this.shape_16.setTransform(72.7,72.7,1.605,1.605);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AlYFKIKiqiIAPAAIqxKxg");
	this.shape_17.setTransform(69.6,69.5,1.605,1.605);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ak9EuIJrprIAQAAIp7J7g");
	this.shape_18.setTransform(65.1,65,1.605,1.605);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AkhESIIzozIAQAAIpDJDg");
	this.shape_19.setTransform(60.7,60.6,1.605,1.605);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AkFD3IH8n8IAPAAIoLILg");
	this.shape_20.setTransform(56.2,56.2,1.605,1.605);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AjqDbIHFnFIAPAAInUHUg");
	this.shape_21.setTransform(51.8,51.7,1.605,1.605);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AjOC/IGNmNIAQAAImdGdg");
	this.shape_22.setTransform(47.4,47.3,1.605,1.605);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AllFlIAArJILLAAIAALJgAlcFcIK5AAIAAq4Iq5AAg");
	this.shape_23.setTransform(71,70.9,1.605,1.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,128.4,128.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7BIQgXgVAAgmIAAhqIASAAIAABpQAAAfASARQARAQAdAAQAdgBASgSQASgUAAgdIAAhlIATAAIAAC4IgSAAIAAghQgUAjguABQglAAgWgWg");
	this.shape.setTransform(196.2,15.6,1.605,1.605);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABCBeIAAhpQAAgfgSgRQgSgQgeAAQgcAAgSAUQgSASAAAdIAABmIgTAAIAAi4IASAAIAAAhQAUgjAtgBQAmAAAWAVQAYAXAAAmIAABpg");
	this.shape_1.setTransform(162.9,15.1,1.605,1.605);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhABFQgcgaAAgrQAAgoAcgcQAbgaAmAAQArAAAZAZQAcAbgFAzIilAAQADAfAWATQAVASAcAAQAUAAARgHQAUgIAKgNIANAKQgNASgXAJQgVAJgXAAQgnAAgagagAgwg7QgWAUgDAhICVAAQAAgigVgTQgUgTgiAAQgcAAgVATg");
	this.shape_2.setTransform(127.1,15.4,1.605,1.605);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ACABeIAAhuQAAgagRgRQgQgRgaAAQgbAAgQARQgRASAAAbIAABsIgRAAIAAhsQAAgbgRgRQgQgSgbAAQgaAAgQASQgRARAAAbIAABsIgSAAIAAi3IARAAIABAeQARgiArAAQAXAAARAKQAVAMAGAXQAIgVAUgNQASgLAXAAQAiAAAVAVQAWAWAAAiIAABug");
	this.shape_3.setTransform(82.3,15.1,1.605,1.605);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhZgCIBZhIIBaBIIhaBNgAhFgCIBFA8IBGg8IhGg4g");
	this.shape_4.setTransform(255.1,57.7,1.605,1.605);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhZgCIBZhIIBaBIIhaBNgAhFgCIBFA8IBGg8IhGg4g");
	this.shape_5.setTransform(14.4,57.7,1.605,1.605);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AqmAGIAAgLIVNAAIAAALg");
	this.shape_6.setTransform(135.7,57.2,1.605,1.605);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ai2hCIAIgKICuCJICwiJIAIAKIi4CPg");
	this.shape_7.setTransform(98,68.8,1.605,1.605);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ai2hCIAIgKICuCJICwiJIAIAKIi4CPg");
	this.shape_8.setTransform(171.6,68.8,1.605,1.605);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AkehvII9AAIkfDfgAAABgID5jCInxAAg");
	this.shape_9.setTransform(134.8,75.2,1.605,1.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,269.6,93.3), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlgFnIAArNILBAAIAALNg");
	mask.setTransform(35.3,35.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAJIARgRIAAAOIgCADg");
	this.shape.setTransform(69.7,70.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAlIBJhJIAAAQIg5A5g");
	this.shape_1.setTransform(66.9,68.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BBIB/iBIAAAPIhwByg");
	this.shape_2.setTransform(64.2,65.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhbBeIC3i7IAAARIioCqg");
	this.shape_3.setTransform(61.4,62.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ah2B6IDtjyIAAAPIjeDjg");
	this.shape_4.setTransform(58.7,59.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiSCWIElkrIAAAQIkWEbg");
	this.shape_5.setTransform(55.9,56.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiuCyIFdljIAAAQIlNFTg");
	this.shape_6.setTransform(53.1,54);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjKDOIGUmbIAAAQImEGLg");
	this.shape_7.setTransform(50.4,51.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjlDqIHLnTIAAAQIm8HDg");
	this.shape_8.setTransform(47.6,48.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AkBEGIIDoLIAAAQInzH7g");
	this.shape_9.setTransform(44.8,45.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AkdEjII6pFIAAARIoqI0g");
	this.shape_10.setTransform(42.1,42.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ak4E/IJxp9IAAARIpiJsg");
	this.shape_11.setTransform(39.3,40);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AlUFbIKpq1IAAAQIqZKlg");
	this.shape_12.setTransform(36.5,37.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AlYFPIKiqtIAPAAIqxK9g");
	this.shape_13.setTransform(34.5,35.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ak9EzIJrp1IAQAAIp7KFg");
	this.shape_14.setTransform(31.8,32.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AkhEXIIzo9IAQAAIpDJNg");
	this.shape_15.setTransform(29,29.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AkFD7IH8oFIAPAAIoLIVg");
	this.shape_16.setTransform(26.2,26.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjqDfIHFnNIAPAAInUHdg");
	this.shape_17.setTransform(23.5,23.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjODDIGOmVIAPAAImdGlg");
	this.shape_18.setTransform(20.7,21.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,70.6,71.8), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlZCxIFZlhIFaFhg");
	mask.setTransform(69.5,18.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape.setTransform(48.9,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnnAEIAAgHIPPAAIAAAHg");
	this.shape_1.setTransform(51.6,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnnAEIAAgHIPPAAIAAAHg");
	this.shape_2.setTransform(54.3,5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AnnAEIAAgHIPPAAIAAAHg");
	this.shape_3.setTransform(57,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_4.setTransform(59.7,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_5.setTransform(62.4,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_6.setTransform(65.2,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_7.setTransform(67.9,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_8.setTransform(70.6,22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_9.setTransform(73.3,25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_10.setTransform(76,28.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AnnAEIAAgHIPPAAIAAAHg");
	this.shape_11.setTransform(78.7,30.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AnnAEIAAgHIPPAAIAAAHg");
	this.shape_12.setTransform(81.4,33.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_13.setTransform(84.1,36.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_14.setTransform(86.8,39.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_15.setTransform(89.6,42);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_16.setTransform(92.3,44.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_17.setTransform(95,47.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AnoAEIAAgHIPRAAIAAAHg");
	this.shape_18.setTransform(97.7,50.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(34.9,1.1,69.2,35.5), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlgFhIAArBILBAAIAALBg");
	mask.setTransform(94,36.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape.setTransform(149.8,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_1.setTransform(144.3,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("An2HvIPkvlIAJAIIvlPlg");
	this.shape_2.setTransform(138.8,50.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("An1HvIPkvlIAHAIIvjPlg");
	this.shape_3.setTransform(133.2,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("An1HvIPjvlIAIAIIvkPlg");
	this.shape_4.setTransform(127.7,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("An1HvIPkvlIAIAIIvkPlg");
	this.shape_5.setTransform(122.2,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_6.setTransform(116.6,50.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_7.setTransform(111.1,50.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("An2HvIPlvlIAHAIIvkPlg");
	this.shape_8.setTransform(105.6,50.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("An2HvIPkvlIAJAIIvlPlg");
	this.shape_9.setTransform(100.1,50.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("An1HvIPjvlIAIAIIvjPlg");
	this.shape_10.setTransform(94.5,50.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("An1HvIPkvlIAIAIIvkPlg");
	this.shape_11.setTransform(89,50.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("An1HvIPkvlIAIAIIvlPlg");
	this.shape_12.setTransform(83.5,50.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("An2HvIPkvlIAJAIIvlPlg");
	this.shape_13.setTransform(77.9,50.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("An1HvIPkvlIAHAIIvkPlg");
	this.shape_14.setTransform(72.4,50.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("An2HvIPkvlIAIAIIvkPlg");
	this.shape_15.setTransform(66.9,50.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("An1HvIPkvlIAHAIIvjPlg");
	this.shape_16.setTransform(61.3,50.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_17.setTransform(55.8,50.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_18.setTransform(50.3,50.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(58.7,1.2,70.6,70.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlWFXIKtqtIAAKtg");
	mask.setTransform(60,38.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape.setTransform(149.9,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_1.setTransform(144.4,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_2.setTransform(138.8,50.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_3.setTransform(133.3,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_4.setTransform(127.8,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_5.setTransform(122.2,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_6.setTransform(116.7,50.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_7.setTransform(111.2,50.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_8.setTransform(105.6,50.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_9.setTransform(100.1,50.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_10.setTransform(94.6,50.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_11.setTransform(89,50.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_12.setTransform(83.5,50.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_13.setTransform(78,50.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_14.setTransform(72.4,50.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_15.setTransform(66.9,50.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_16.setTransform(61.4,50.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_17.setTransform(55.8,50.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("An2HvIPlvlIAIAIIvlPlg");
	this.shape_18.setTransform(50.3,50.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(25.7,4,68.6,68.7), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AldFdIAAq5IK7AAIAAK5g");
	mask.setTransform(50.1,35.4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape.setTransform(95,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_1.setTransform(84.4,67.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_2.setTransform(73.8,67.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgQAOgYAAQgXAAgRgOg");
	this.shape_3.setTransform(63.2,67.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgWAAgSgOg");
	this.shape_4.setTransform(52.6,67.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnANQgRgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_5.setTransform(42,67.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnANQgRgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_6.setTransform(31.4,67.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnANQgRgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_7.setTransform(20.8,67.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_8.setTransform(79.9,62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_9.setTransform(69.3,62);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_10.setTransform(58.7,62);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_11.setTransform(48.1,62);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_12.setTransform(37.5,62);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_13.setTransform(26.9,62);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_14.setTransform(16.3,62);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_15.setTransform(5.7,62);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_16.setTransform(95,56.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_17.setTransform(84.4,56.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_18.setTransform(73.8,56.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_19.setTransform(63.2,56.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgWAAgSgPg");
	this.shape_20.setTransform(52.6,56.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_21.setTransform(42,56.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_22.setTransform(31.4,56.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_23.setTransform(20.8,56.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_24.setTransform(79.9,51.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_25.setTransform(69.3,51.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_26.setTransform(58.7,51.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_27.setTransform(48.1,51.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_28.setTransform(37.5,51.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_29.setTransform(26.9,51.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAANgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_30.setTransform(16.3,51.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_31.setTransform(5.7,51.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgRAPgXAAQgXAAgRgPg");
	this.shape_32.setTransform(95,45.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgRAPgXAAQgXAAgRgPg");
	this.shape_33.setTransform(84.4,45.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgRAPgXAAQgXAAgRgPg");
	this.shape_34.setTransform(73.8,45.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgQAPgYAAQgXAAgRgPg");
	this.shape_35.setTransform(63.2,45.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgRAPgXAAQgWAAgSgPg");
	this.shape_36.setTransform(52.6,45.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnAMQgRgOAAgUIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgQAOQgRAPgYAAQgWAAgRgPg");
	this.shape_37.setTransform(42,45.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgnAMQgRgOAAgUIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgQAOQgRAPgYAAQgWAAgRgPg");
	this.shape_38.setTransform(31.4,45.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgnAMQgRgOAAgUIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgQAOQgRAPgYAAQgWAAgRgPg");
	this.shape_39.setTransform(20.8,45.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATgBQAUABAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_40.setTransform(79.9,40.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATgBQAUABAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_41.setTransform(69.3,40.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATgBQAUABAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_42.setTransform(58.7,40.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATgBQAUABAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_43.setTransform(48.1,40.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATgBQAUABAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_44.setTransform(37.5,40.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATgBQAUABAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_45.setTransform(26.9,40.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATgBQAUABAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_46.setTransform(16.3,40.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATgBQAUABAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_47.setTransform(5.7,40.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATgBQAUABAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_48.setTransform(95,35.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATgBQAUABAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_49.setTransform(84.4,35.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATgBQAUABAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_50.setTransform(73.8,35.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATgBQAUABAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_51.setTransform(63.2,35.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATgBQAUABAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgWAAgSgPg");
	this.shape_52.setTransform(52.6,35.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATgBQAUABAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_53.setTransform(42,35.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATgBQAUABAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_54.setTransform(31.4,35.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATgBQAUABAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_55.setTransform(20.8,35.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_56.setTransform(79.9,29.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_57.setTransform(69.3,29.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_58.setTransform(58.7,29.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_59.setTransform(48.1,29.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_60.setTransform(37.5,29.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_61.setTransform(26.9,29.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_62.setTransform(16.3,29.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_63.setTransform(5.7,29.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_64.setTransform(95,24.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_65.setTransform(84.4,24.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_66.setTransform(73.8,24.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_67.setTransform(63.2,24.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgWAAgSgPg");
	this.shape_68.setTransform(52.6,24.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_69.setTransform(42,24.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_70.setTransform(31.4,24.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_71.setTransform(20.8,24.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_72.setTransform(79.9,18.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_73.setTransform(69.3,18.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_74.setTransform(58.7,18.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_75.setTransform(48.1,18.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_76.setTransform(37.5,18.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_77.setTransform(26.9,18.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAANgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_78.setTransform(16.3,18.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_79.setTransform(5.7,18.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAASAOAKQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_80.setTransform(95,13.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAASAOAKQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_81.setTransform(84.4,13.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAOANAUAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_82.setTransform(73.8,13.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAVAAAOgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgQAOgYAAQgXAAgRgOg");
	this.shape_83.setTransform(63.2,13.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAVAAAOgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgWAAgSgOg");
	this.shape_84.setTransform(52.6,13.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAVAAAOgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_85.setTransform(42,13.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgKAAgSIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_86.setTransform(31.4,13.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgKAAgSIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_87.setTransform(20.8,13.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_88.setTransform(79.9,8.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_89.setTransform(69.3,8.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgXAAgRgOg");
	this.shape_90.setTransform(58.7,8.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_91.setTransform(48.1,8.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_92.setTransform(37.5,8.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_93.setTransform(26.9,8.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgQAOgYAAQgXAAgRgOg");
	this.shape_94.setTransform(16.3,8.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgQAOgYAAQgWAAgSgOg");
	this.shape_95.setTransform(5.7,8.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_96.setTransform(95,2.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_97.setTransform(84.4,2.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_98.setTransform(73.8,2.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgQAOgYAAQgXAAgRgOg");
	this.shape_99.setTransform(63.2,2.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgWAAgSgOg");
	this.shape_100.setTransform(52.6,2.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_101.setTransform(42,2.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_102.setTransform(31.4,2.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_103.setTransform(20.8,2.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(15.2,0.5,69.9,69.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AldFdIAAq6IK7AAIAAK6g");
	mask.setTransform(50.1,35.4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAASAOAKQAPAMATAAQAUAAAOgMQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape.setTransform(95,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAASAOAKQAPAMATAAQAUAAAOgMQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_1.setTransform(84.4,67.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAOAMAUAAQAUAAAOgMQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_2.setTransform(73.8,67.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOAMATAAQAVAAAOgMQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgQAOgYAAQgXAAgRgOg");
	this.shape_3.setTransform(63.2,67.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPAMATAAQAVAAAOgMQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgWAAgSgOg");
	this.shape_4.setTransform(52.6,67.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOAMATAAQAVAAAOgMQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_5.setTransform(42,67.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOAMATAAQAUAAAPgMQAOgKAAgSIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_6.setTransform(31.4,67.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOAMATAAQAUAAAPgMQAOgKAAgSIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_7.setTransform(20.8,67.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnANQgRgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_8.setTransform(79.9,62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnANQgRgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_9.setTransform(69.3,62);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgQAOQgRAOgYAAQgXAAgRgOg");
	this.shape_10.setTransform(58.7,62);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_11.setTransform(48.1,62);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_12.setTransform(37.5,62);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_13.setTransform(26.9,62);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgQAOgYAAQgXAAgRgOg");
	this.shape_14.setTransform(16.3,62);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgQAOgYAAQgWAAgSgOg");
	this.shape_15.setTransform(5.7,62);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_16.setTransform(95,56.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_17.setTransform(84.4,56.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAOgMQAPgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_18.setTransform(73.8,56.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgQAOgYAAQgXAAgRgOg");
	this.shape_19.setTransform(63.2,56.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgoANQgQgOAAgUIAAgFIAIAAIAAAFQAAAQAOALQAPAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgRAOQgRAOgXAAQgWAAgSgOg");
	this.shape_20.setTransform(52.6,56.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgnANQgRgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_21.setTransform(42,56.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnANQgRgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_22.setTransform(31.4,56.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnANQgRgOAAgUIAAgFIAIAAIAAAFQAAAQAPALQAOAMATAAQAUAAAPgMQAOgLAAgQIAAgFIAIAAIAAAFQAAAUgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_23.setTransform(20.8,56.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_24.setTransform(79.9,51.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_25.setTransform(69.3,51.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_26.setTransform(58.7,51.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_27.setTransform(48.1,51.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_28.setTransform(37.5,51.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_29.setTransform(26.9,51.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_30.setTransform(16.3,51.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_31.setTransform(5.7,51.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_32.setTransform(95,45.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_33.setTransform(84.4,45.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_34.setTransform(73.8,45.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_35.setTransform(63.2,45.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgWAAgSgPg");
	this.shape_36.setTransform(52.6,45.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_37.setTransform(42,45.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_38.setTransform(31.4,45.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_39.setTransform(20.8,45.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_40.setTransform(79.9,40.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_41.setTransform(69.3,40.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_42.setTransform(58.7,40.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_43.setTransform(48.1,40.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_44.setTransform(37.5,40.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_45.setTransform(26.9,40.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAANgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_46.setTransform(16.3,40.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_47.setTransform(5.7,40.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAOAMQAPAMATgBQAUABAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgRAPgXAAQgXAAgRgPg");
	this.shape_48.setTransform(95,35.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAOAMQAPAMATgBQAUABAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgRAPgXAAQgXAAgRgPg");
	this.shape_49.setTransform(84.4,35.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUgBQAUABAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgRAPgXAAQgXAAgRgPg");
	this.shape_50.setTransform(73.8,35.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAPAMQAOAMATgBQAVABAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgQAPgYAAQgXAAgRgPg");
	this.shape_51.setTransform(63.2,35.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgoAMQgQgOAAgUIAAgEIAIAAIAAAEQAAARAOAMQAPAMATgBQAVABAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgRAOQgRAPgXAAQgWAAgSgPg");
	this.shape_52.setTransform(52.6,35.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgnAMQgRgOAAgUIAAgEIAIAAIAAAEQAAARAPAMQAOAMATgBQAVABAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgQAOQgRAPgYAAQgWAAgRgPg");
	this.shape_53.setTransform(42,35.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgnAMQgRgOAAgUIAAgEIAIAAIAAAEQAAARAPAMQAOAMATgBQAUABAPgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgQAOQgRAPgYAAQgWAAgRgPg");
	this.shape_54.setTransform(31.4,35.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgnAMQgRgOAAgUIAAgEIAIAAIAAAEQAAARAPAMQAOAMATgBQAUABAPgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAUgQAOQgRAPgYAAQgWAAgRgPg");
	this.shape_55.setTransform(20.8,35.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_56.setTransform(79.9,29.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATAAQAUAAAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_57.setTransform(69.3,29.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATAAQAUAAAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_58.setTransform(58.7,29.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATAAQAUAAAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_59.setTransform(48.1,29.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_60.setTransform(37.5,29.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_61.setTransform(26.9,29.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATAAQAUAAAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_62.setTransform(16.3,29.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_63.setTransform(5.7,29.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_64.setTransform(95,24.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_65.setTransform(84.4,24.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_66.setTransform(73.8,24.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_67.setTransform(63.2,24.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgWAAgSgPg");
	this.shape_68.setTransform(52.6,24.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_69.setTransform(42,24.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_70.setTransform(31.4,24.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAASAPALQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_71.setTransform(20.8,24.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_72.setTransform(79.9,18.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_73.setTransform(69.3,18.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_74.setTransform(58.7,18.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_75.setTransform(48.1,18.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_76.setTransform(37.5,18.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_77.setTransform(26.9,18.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_78.setTransform(16.3,18.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAUAAAPgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_79.setTransform(5.7,18.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_80.setTransform(95,13.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_81.setTransform(84.4,13.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_82.setTransform(73.8,13.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_83.setTransform(63.2,13.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgWAAgSgPg");
	this.shape_84.setTransform(52.6,13.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_85.setTransform(42,13.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_86.setTransform(31.4,13.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_87.setTransform(20.8,13.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAPgMQAOgLAAgSIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_88.setTransform(79.9,8.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgnAMQgRgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgWAAgRgPg");
	this.shape_89.setTransform(69.3,8.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgQANQgRAPgYAAQgXAAgRgPg");
	this.shape_90.setTransform(58.7,8.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_91.setTransform(48.1,8.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAASAOALQAPAMATAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_92.setTransform(37.5,8.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAOAMAUAAQAUAAAOgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgRAPgXAAQgXAAgRgPg");
	this.shape_93.setTransform(26.9,8.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAPAMQAOAMATAAQAVAAANgMQAPgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgXAAgRgPg");
	this.shape_94.setTransform(16.3,8.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgoAMQgQgNAAgVIAAgEIAIAAIAAAEQAAARAOAMQAPAMATAAQAVAAAOgMQAOgMAAgRIAAgEIAIAAIAAAEQAAAVgRANQgQAPgYAAQgWAAgSgPg");
	this.shape_95.setTransform(5.7,8.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAASAOAKQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_96.setTransform(95,2.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAASAOAKQAPANATAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_97.setTransform(84.4,2.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAOANAUAAQAUAAAOgNQAPgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgXAAgRgOg");
	this.shape_98.setTransform(73.8,2.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAVAAAOgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgQAOgYAAQgXAAgRgOg");
	this.shape_99.setTransform(63.2,2.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgoANQgQgOAAgVIAAgEIAIAAIAAAEQAAARAOALQAPANATAAQAVAAAOgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgRAOQgRAOgXAAQgWAAgSgOg");
	this.shape_100.setTransform(52.6,2.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAVAAAOgNQAOgLAAgRIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_101.setTransform(42,2.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgKAAgSIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_102.setTransform(31.4,2.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgnANQgRgOAAgVIAAgEIAIAAIAAAEQAAARAPALQAOANATAAQAUAAAPgNQAOgKAAgSIAAgEIAIAAIAAAEQAAAVgQAOQgRAOgYAAQgWAAgRgOg");
	this.shape_103.setTransform(20.8,2.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(15.2,0.4,69.9,69.7), null);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmMmMIMZAAIsZMZgAmBFyILzrzIrzAAg");
	this.shape.setTransform(0,0,1.605,1.605);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmDmCIMGAAIsGMGg");
	this.shape_1.setTransform(-0.6,-0.6,1.605,1.605);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(62,16.6,1.605,1.605,0,0,0,100.1,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.6,-63.9,321.3,161.4);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AllFmIAArMILMAAIAALMgAlbFcIK2AAIAAq2Iq2AAg");
	this.shape.setTransform(-6.2,-6.1,1.605,1.605);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlgFhIAArBILBAAIAALBg");
	this.shape_1.setTransform(-6.2,-6.1,1.605,1.605);

	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(16.7,29.2,1.605,1.605,0,0,0,100,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.7,-63.6,321,173.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AliFjIAArFILFAAIAALFgAlXFYIKvAAIAAqvIqvAAg");
	this.shape.setTransform(57,56.9,1.605,1.605);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(57.4,56.5,1.605,1.605,0,0,0,50.4,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AleFdIAAq5IK9AAIAAK5g");
	this.shape_1.setTransform(56.8,57.2,1.605,1.605);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AljFjIAArEILHAAIAALEgAlZFYIKzAAIAAqvIqzAAg");
	this.shape_2.setTransform(70.2,70.4,1.605,1.605);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AleFdIAAq5IK9AAIAAK5g");
	this.shape_3.setTransform(70.2,70.4,1.605,1.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-23.4,0,161.6,127.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AliFjIAArFILFAAIAALFgAlXFYIKvAAIAAqvIqvAAg");
	this.shape.setTransform(57,57,1.605,1.605);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(57.4,56.6,1.605,1.605,0,0,0,50.4,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AleFdIAAq5IK9AAIAAK5g");
	this.shape_1.setTransform(56.8,57.2,1.605,1.605);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AljFiIAArEILHAAIAALEgAlZFYIKzAAIAAquIqzAAg");
	this.shape_2.setTransform(70.2,70.5,1.605,1.605);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AleFdIAAq5IK9AAIAAK5g");
	this.shape_3.setTransform(70.2,70.5,1.605,1.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-23.4,0,161.6,127.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 2
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(63.7,63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-231.1},9,cjs.Ease.get(1)).to({x:63.7},10,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.7,63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-83.7},9,cjs.Ease.get(1)).to({x:63.7},10,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.7,63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},9,cjs.Ease.get(1)).to({startPosition:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.4,127.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(56.7,58.3,1.605,1.605,0,0,0,35.3,35.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiTCXQg9g/AAhYQAAhYA9g+QA+g/BVAAQBXAAA9A/QA9A+AABYQAABYg9A/Qg9A/hXAAQhVAAg+g/g");
	this.shape.setTransform(57.7,51.1,1.605,1.605);

	this.instance_1 = new lib.ClipGroup_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.8,99.5,1.605,1.605,0,0,0,73.3,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlmFvIAArdILNAAIAALdgAlbFkIK2AAIAArHIq2AAg");
	this.shape_1.setTransform(57.7,58.9,1.605,1.605);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlgFpIAArRILBAAIAALRg");
	this.shape_2.setTransform(57.7,58.9,1.605,1.605);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").p("AFhFnIrBAAIAArNILBAAg");
	this.shape_3.setTransform(69.1,70.7,1.605,1.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-53.8,0,235.2,140.3), null);


// stage content:
(lib.anelima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Play a Movie Clip
		Plays the specified movie clip on stage.
		
		Instructions:
		1. Use this code for movie clips that are currently stopped.
		*/
		
		this.Mesas.play();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Mesas.addEventListener("click", VaiMesas.bind(this));
		
		function VaiMesas()
		{
		this.Mesas.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ICONS
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(597.8,1180.1,1,1,0,0,0,64.2,64.1);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(591.5,1028.3,1,1,0,0,0,57.4,63.6);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(591.5,876.6,1,1,0,0,0,57.4,63.7);

	this.Mesas = new lib.Symbol3();
	this.Mesas.parent = this;
	this.Mesas.setTransform(637.1,747.7,1,1,0,0,0,103,86.5);

	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(598.6,579,1,1,0,0,0,63.7,70);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(597.8,441.6,1,1,0,0,0,134.8,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.Mesas},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg6lBoTMAAAjQlMB1LAAAMAAADQlg");
	this.shape.setTransform(375,667.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667.5,820.4,1335);
// library properties:
lib.properties = {
	width: 750,
	height: 1335,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;