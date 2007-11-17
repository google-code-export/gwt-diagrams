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

package pl.balon.gwt.diagrams.client.connection.data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Represents bezier connection data (not only points on path, but also control
 * points).
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class BezierConnectionData extends ConnectionData {

	/**
	 * List of control points defining connection shape.
	 */
	private List/*<Point>*/ controlPoints = new ArrayList();

	public BezierConnectionData() {
		
	}
	
	public BezierConnectionData(List points, List controlPoints){
		super(points);
		this.controlPoints.addAll(controlPoints);
	}

	public BezierConnectionData(Point[] points, Point[] controlPoints){
		this(Arrays.asList(points), Arrays.asList(controlPoints));
	}

	public List getControlPoints() {
		return controlPoints;
	}
	
	
	
}
