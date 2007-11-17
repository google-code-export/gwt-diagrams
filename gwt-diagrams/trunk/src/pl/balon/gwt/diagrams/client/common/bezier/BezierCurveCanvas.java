/*
 * Copyright 2007 Michał Baliński
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package pl.balon.gwt.diagrams.client.common.bezier;

import pl.balon.gwt.diagrams.client.connection.data.Point;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;

/**
 * Canvas based implementation of BezierCurve.
 * Do not instantiate directly @see BezierCurve
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class BezierCurveCanvas extends BezierCurve {

	/**
	 * Private constructor.
	 * Do not instantiate directly @see BezierCurve
	 */
	private BezierCurveCanvas() {
		// Do not instantiate directly
	}
	
	private Element canvas = DOM.createElement("canvas");

	{
		String prev = DOM.getElementAttribute(canvas, "class");
		DOM.setElementAttribute(canvas, "class", prev + " gwt-diagrams-canvas");
	}
	
	public void draw(Point p1, Point p2, Point c1, Point c2) {

		Point start = new Point( Math.min(p1.left, p2.left), Math.min(p1.top, p2.top) );
		int width = Math.abs(p1.left - p2.left);
		int height = Math.abs(p1.top - p2.top);

		int size = Math.max(width, height);
		size = Math.max(size,Math.abs(p1.left - c1.left));
		size = Math.max(size,Math.abs(p1.top - c1.top));
		size = Math.max(size,Math.abs(p2.left - c2.left));
		size = Math.max(size,Math.abs(p2.top - c2.top));
		Point realStart = new Point(start.left - size, start.top - size);
		
		DOM.setStyleAttribute(canvas, "left", Integer.toString(realStart.left));
		DOM.setStyleAttribute(canvas, "top", Integer.toString(realStart.top));
		DOM.setElementAttribute(canvas, "width", Integer.toString(width+size*2));
		DOM.setElementAttribute(canvas, "height", Integer.toString(height+size*2));
		
		drawImpl(
				p1.move(realStart.negative()),
				p2.move(realStart.negative()),
				c1.move(realStart.negative()),
				c2.move(realStart.negative()),
				getComputedStyle(canvas, "color"));
		
		// TODO lineWidth, maybe shadows etc.
	}

	private native void drawImpl(Point p1, Point p2, Point c1, Point c2, String color)/*-{
	  
	  	var canvas = this.@pl.balon.gwt.diagrams.client.common.bezier.BezierCurveCanvas::canvas;
		var ctx = canvas.getContext('2d');

	    ctx.beginPath();
	    ctx.moveTo(p1.@pl.balon.gwt.diagrams.client.connection.data.Point::left,
	    		   p1.@pl.balon.gwt.diagrams.client.connection.data.Point::top);
	    ctx.strokeStyle = color;
	    ctx.bezierCurveTo(
	    	c1.@pl.balon.gwt.diagrams.client.connection.data.Point::left,
	    	c1.@pl.balon.gwt.diagrams.client.connection.data.Point::top,
	    	c2.@pl.balon.gwt.diagrams.client.connection.data.Point::left,
	    	c2.@pl.balon.gwt.diagrams.client.connection.data.Point::top,
	    	p2.@pl.balon.gwt.diagrams.client.connection.data.Point::left,
	    	p2.@pl.balon.gwt.diagrams.client.connection.data.Point::top);
	    ctx.stroke();

	  
	}-*/;
	
	/**
	 * @see pl.balon.gwt.diagrams.client.common.bezier.BezierCurve#getElement()
	 */
	public Element getElement() {
		return canvas;
	}

	private native static String getComputedStyle(Element element, String cssRule)/*-{
		if( $doc.defaultView && $doc.defaultView.getComputedStyle ){
			return $doc.defaultView.getComputedStyle( element, '' ).getPropertyValue(cssRule);
		} else {
		 	return null;
		}
	}-*/;

}
