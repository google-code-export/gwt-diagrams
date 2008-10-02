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

import pl.balon.gwt.diagrams.client.common.bezier.BezierCurve;
import pl.balon.gwt.diagrams.client.connection.calculator.BezierConnectionCalculator;
import pl.balon.gwt.diagrams.client.connection.calculator.ConnectionDataCalculator;
import pl.balon.gwt.diagrams.client.connection.data.BezierConnectionData;
import pl.balon.gwt.diagrams.client.connection.data.ConnectionData;
import pl.balon.gwt.diagrams.client.connection.data.Point;
import pl.balon.gwt.diagrams.client.connector.Connector;
import pl.balon.gwt.diagrams.client.connector.Direction;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Element;

/**
 * Bezier connection widget.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class BezierTwoEndedConnection extends AbstractTwoEndedConnection {
	/**
	 * Represents bezier curve. Implementation depends on browser type.
	 * Instantiated through deferred binding
	 */
	protected BezierCurve curve = (BezierCurve) GWT.create(BezierCurve.class);
	
	/**
	 * Constructs bezier connection
	 */
	public BezierTwoEndedConnection(Connector[] toConnect) {
		super(toConnect);
		setElement(curve.getElement());
		addStyleName("gwt-diagrams-connection");
	}

	public Element getElement() {
		return curve.getElement();
	}
	
	/**
	 * Constructs bezier connection
	 */
	public BezierTwoEndedConnection(Connector c1, Connector c2) {
		this(new Connector[]{c1, c2});
	}
	
	/**
	 * @see pl.balon.gwt.diagrams.client.connection.AbstractConnection#createCalculator()
	 */
	protected ConnectionDataCalculator createCalculator() {
		return new BezierConnectionCalculator();
	}

	/**
	 * @see pl.balon.gwt.diagrams.client.connection.AbstractConnection#update(pl.balon.gwt.diagrams.client.connection.data.ConnectionData)
	 */
	protected void update(ConnectionData data) {
		if(!(data instanceof BezierConnectionData)){
			throw new IllegalArgumentException("Expected BezierConnectionData");
		}
		BezierConnectionData bdata = (BezierConnectionData) data;
		if( bdata.getPoints().size() != 2 ){
			throw new IllegalArgumentException("Expected two connection points");
		}
		if( bdata.getControlPoints().size() != 2 ){
			throw new IllegalArgumentException("Expected two control points");
		}

		curve.draw(
				(Point)bdata.getPoints().get(0),
				(Point)bdata.getPoints().get(1),
				(Point)bdata.getControlPoints().get(0),
				(Point)bdata.getControlPoints().get(1));
		
		// Endings
		if( getEnding(0)!=null ){
			Point p = (Point)bdata.getPoints().get(0);
			Point c = (Point)bdata.getControlPoints().get(0);
			
			if( p.left > c.left ){ // RIGHT
				getEnding(0).update(p.left, p.top, Direction.RIGHT.getAngle());
			} else if( p.left < c.left ){ // LEFT
				getEnding(0).update(p.left, p.top, Direction.LEFT.getAngle());
			} else if( p.top > c.top ){ // DOWN
				getEnding(0).update(p.left, p.top, Direction.DOWN.getAngle());
			} else if( p.top < c.top ){ // UP
				getEnding(0).update(p.left, p.top, Direction.UP.getAngle());
			}
			
		}
		
		if( getEnding(1)!=null ){
			Point p = (Point)bdata.getPoints().get(1);
			Point c = (Point)bdata.getControlPoints().get(1);

			if( p.left > c.left ){ // RIGHT
				getEnding(1).update(p.left, p.top, Direction.RIGHT.getAngle());
			} else if( p.left < c.left ){ // LEFT
				getEnding(1).update(p.left, p.top, Direction.LEFT.getAngle());
			} else if( p.top > c.top ){ // DOWN
				getEnding(1).update(p.left, p.top, Direction.DOWN.getAngle());
			} else if( p.top < c.top ){ // UP
				getEnding(1).update(p.left, p.top, Direction.UP.getAngle());
			}

		}
		
	}

	/**
	 * @see pl.balon.gwt.diagrams.client.connection.AbstractConnection#remove()
	 */
	public void remove() {
		curve.remove();
		super.remove();
	}
	
}
