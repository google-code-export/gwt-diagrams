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

package pl.balon.gwt.diagrams.client.connection.calculator;

import java.util.List;

import pl.balon.gwt.diagrams.client.connection.data.BezierConnectionData;
import pl.balon.gwt.diagrams.client.connection.data.ConnectionData;
import pl.balon.gwt.diagrams.client.connection.data.Point;
import pl.balon.gwt.diagrams.client.connector.Connector;
import pl.balon.gwt.diagrams.client.connector.Direction;

/**
 * Calculates ConnectionData for bezier connections.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class BezierConnectionCalculator implements ConnectionDataCalculator {

	/**
	 * @see pl.balon.gwt.diagrams.client.connection.calculator.ConnectionDataCalculator#calculateConnectionData(java.util.List)
	 */
	public ConnectionData calculateConnectionData(List connectors) {
		if( connectors.size() != 2 ){
			throw new IllegalArgumentException("Unsupported connectors count");
		}
		
		Connector c1 = (Connector) connectors.get(0);
		Connector c2 = (Connector) connectors.get(1);

		Direction[] d = computeDirections(c1, c2);
		
		Point p1 = c1.pointOnBorder(d[0]);
		Point p2 = c2.pointOnBorder(d[1]);
		
		Point b1 = p1.move(d[0], 50); // TODO read from css?
		Point b2 = p2.move(d[1], 50); // TODO read from css?
		
		BezierConnectionData data = new BezierConnectionData(
				new Point[]{p1, p2},
				new Point[]{b1, b2});
		
		return data;
	}

	/**
	 * TODO externalize to some super class
	 */
	private Direction[] computeDirections(Connector c1, Connector c2) {
		Direction[] d1 = c1.getDirections();
		Direction[] d2 = c2.getDirections();
		
		Direction[] bestDirections = new Direction[2];
		double best = Double.MAX_VALUE;
		for (int i = 0; i < d1.length; i++) {
			for (int j = 0; j < d2.length; j++) {
				double actual = c1.getConnectionPoint(d1[i]).distance(c2.getConnectionPoint(d2[j]));
				if( actual < best ){
					best = actual;
					bestDirections[0] = d1[i];
					bestDirections[1] = d2[j];
				}
			}
		}
		
		return bestDirections;
	}

}
