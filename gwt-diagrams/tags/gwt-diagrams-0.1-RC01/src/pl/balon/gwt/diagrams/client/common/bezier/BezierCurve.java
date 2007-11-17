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

import com.google.gwt.user.client.Element;

/**
 * Base class for BezierCurve implementations. It provides interface for bezier
 * curve drawing and should be instantiated through GWT deferred binding:
 * <code>GWT.create(BezierCurve.class)</code>. Because there are different
 * implementations (canvas, vml) for different kinds of browsers.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class BezierCurve {

	/**
	 * Redraws this bezier curve instance.
	 * 
	 * @param p1 stat point
	 * @param p2 end point
	 * @param c1 first control point
	 * @param c2 second control point
	 */
	public void draw(Point p1, Point p2, Point c1, Point c2) {
		throw new UnsupportedOperationException("Unsupported browser");
	}

	/**
	 * @return dom element representing bezier curve (it contains curve)
	 */
	public Element getElement() {
		throw new UnsupportedOperationException("Unsupported browser");
	}

}
