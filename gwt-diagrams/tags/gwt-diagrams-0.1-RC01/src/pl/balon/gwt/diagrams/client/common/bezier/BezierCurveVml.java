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
import com.google.gwt.user.client.ui.RootPanel;

/**
 * VML based implementation of BezierCurve.
 * Do not instantiate directly @see BezierCurve
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class BezierCurveVml extends BezierCurve {

	private Element div = DOM.createDiv();
	
	private Element element = div;
	
	private Element vmlGroup;

	private Element vmlCurve;
	
	private Element styledDiv = DOM.createDiv();
	
	private boolean appendedToParent = false; // hack :(
	
	private static boolean documentInitialized = false;
	
	{
		if( !documentInitialized ){
			documentInitialized = initDocument();
		
		}
		
		vmlGroup = DOM.createElement("g_vml_:group");
		vmlCurve = DOM.createElement("g_vml_:curve");
		DOM.appendChild(vmlGroup, vmlCurve);
		
		DOM.setElementAttribute(vmlGroup, "class", "gwt-diagrams-vml-group");
		DOM.setElementAttribute(vmlCurve, "class", "gwt-diagrams-vml-curve");
		DOM.appendChild(RootPanel.get().getElement(), vmlGroup); // hack :(
		
		DOM.appendChild(RootPanel.get().getElement(), styledDiv);
		DOM.setElementProperty(styledDiv, "className", "gwt-diagrams-vml-curve");

		DOM.setElementAttribute(vmlCurve, "strokecolor", getComputedStyle(styledDiv, "color"));
		DOM.setElementAttribute(vmlCurve, "strokeweight", getComputedStyle(styledDiv, "width"));
		DOM.setElementAttribute(vmlCurve, "filled", "false");
		
		DOM.setStyleAttribute(vmlGroup, "width", "100px");
		DOM.setStyleAttribute(vmlGroup, "height", "100px");
		DOM.setStyleAttribute(vmlGroup, "position", "absolute");
		DOM.setElementAttribute(vmlGroup, "coordsize", "100,100");
		
	}

	/**
	 * Private constructor.
	 * Do not instantiate directly @see BezierCurve
	 */
	private BezierCurveVml() {
		// Do not instantiate directly
	}
	
	public void draw(Point p1, Point p2, Point c1, Point c2) {

		if( !appendedToParent ) {
			DOM.appendChild(DOM.getParent(div), vmlGroup);
			element = vmlGroup;
			appendedToParent = true;
		}
		
		DOM.setElementAttribute(vmlCurve, "strokecolor", getComputedStyle(styledDiv, "color"));
		DOM.setElementAttribute(vmlCurve, "strokeweight", getComputedStyle(styledDiv, "width"));

		Point start = new Point( Math.min(p1.left, p2.left), Math.min(p1.top, p2.top));

		DOM.setStyleAttribute(vmlGroup, "left", Integer.toString(start.left));
		DOM.setStyleAttribute(vmlGroup, "top", Integer.toString(start.top));

		drawImpl(
				p1.move(start.negative()),
				p2.move(start.negative()),
				c1.move(start.negative()),
				c2.move(start.negative()));

	}

	private void drawImpl(Point p1, Point p2, Point c1, Point c2){
		DOM.setElementAttribute(vmlCurve, "from", p1.left + "," + p1.top);
		DOM.setElementAttribute(vmlCurve, "to", p2.left + "," + p2.top);
		DOM.setElementAttribute(vmlCurve, "control1", c1.left + "," + c1.top);
		DOM.setElementAttribute(vmlCurve, "control2", c2.left + "," + c2.top);
	}
	
	/**
	 * @see pl.balon.gwt.diagrams.client.common.bezier.BezierCurve#getElement()
	 */
	public Element getElement() {
		return element;
	}

	private native boolean initDocument()/*-{
        if (!$doc.namespaces["g_vml_"]) {
          $doc.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml");
        }
        
        var ss = $doc.createStyleSheet();
        ss.cssText = "g_vml_\\:*{behavior:url(#default#VML)}";

		return true;
	}-*/;
	
	private native static String getComputedStyle(Element element, String cssRule)/*-{
		if ( element.currentStyle ) {
  		   return element.currentStyle[ cssRule ];
  		} else {
  			return null;
  		}
  	}-*/;

}
