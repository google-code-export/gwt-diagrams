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

package pl.balon.gwt.diagrams.client.connection;

import pl.balon.gwt.diagrams.client.connection.calculator.ConnectionDataCalculator;
import pl.balon.gwt.diagrams.client.connection.calculator.StraightCenterConnectionDataCalculator;
import pl.balon.gwt.diagrams.client.connection.data.ConnectionData;
import pl.balon.gwt.diagrams.client.connection.data.Point;
import pl.balon.gwt.diagrams.client.connector.Connector;

/**
 * Straight line connection widget.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class StraightTwoEndedConnection extends BezierTwoEndedConnection {

	/**
	 * Constructor
	 * 
	 * @param c1
	 * @param c2
	 */
	public StraightTwoEndedConnection(Connector c1, Connector c2) {
		super(c1, c2);
	}

	/**
	 * Constructor
	 * 
	 * @param toConnect
	 */
	public StraightTwoEndedConnection(Connector[] toConnect) {
		super(toConnect);
	}

	/**
	 * @see pl.balon.gwt.diagrams.client.connection.BezierTwoEndedConnection#createCalculator()
	 */
	protected ConnectionDataCalculator createCalculator() {
		return new StraightCenterConnectionDataCalculator();
	}
	
	/**
	 * @see pl.balon.gwt.diagrams.client.connection.BezierTwoEndedConnection#update(pl.balon.gwt.diagrams.client.connection.data.ConnectionData)
	 */
	protected void update(ConnectionData data) {
		if( data.getPoints().size() != 2 ){
			throw new IllegalArgumentException("Expected two connection points");
		}

		curve.draw(
				(Point)data.getPoints().get(0),
				(Point)data.getPoints().get(1),
				(Point)data.getPoints().get(1),
				(Point)data.getPoints().get(0));
		
		// Endings
		if( getEnding(0)!=null ){
			Point p1 = (Point)data.getPoints().get(0);
			Point p2 = (Point)data.getPoints().get(1);
		
			float tan = ((float)(p2.top-p1.top))/(p2.left - p1.left); 
			float angle = (float)Math.toDegrees(Math.atan(tan));
			if( p1.left < p2.left ) {
				angle += 180f;
			}
			getEnding(0).update(p1.left, p1.top, angle+90f);
		}
		
		if( getEnding(1)!=null ){
			Point p1 = (Point)data.getPoints().get(1);
			Point p2 = (Point)data.getPoints().get(0);

			float tan = ((float)(p2.top-p1.top))/(p2.left - p1.left); 
			float angle = (float)Math.toDegrees(Math.atan(tan));
			if( p1.left < p2.left ) {
				angle += 180f;
			}
			getEnding(1).update(p1.left, p1.top, angle+90f);
		}

	}
	
}
