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
 * Represents connection data.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class ConnectionData {

	/**
	 * List of points defining connection.
	 */
	private final List/*<Point>*/ points = new ArrayList();

	public ConnectionData() {
	}
	
	public ConnectionData(List points) {
		this.points.addAll(points);
	}

	public ConnectionData(Point points[]) {
		this(Arrays.asList(points));
	}
	
	public List getPoints() {
		return points;
	}
	
}
