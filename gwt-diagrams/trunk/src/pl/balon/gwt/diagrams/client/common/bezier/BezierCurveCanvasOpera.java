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
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class BezierCurveCanvasOpera extends BezierCurveCanvas {
	/**
	 * Private constructor.
	 * Do not instantiate directly @see BezierCurve
	 */
	private BezierCurveCanvasOpera() {
		// Do not instantiate directly
	}

	public void draw(Point p1, Point p2, Point c1, Point c2) {
		Element parent = DOM.getParent(getElement());
		if( parent!=null ){
			DOM.removeChild(parent, getElement());
			initCanvas();
			DOM.appendChild(parent, getElement());
		}
		super.draw(p1, p2, c1, c2);
	}
}
