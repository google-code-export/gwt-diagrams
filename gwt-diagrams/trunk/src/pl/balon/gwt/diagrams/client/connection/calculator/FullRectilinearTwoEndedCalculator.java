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

import pl.balon.gwt.diagrams.client.connection.data.ConnectionData;
import pl.balon.gwt.diagrams.client.connection.data.Point;
import pl.balon.gwt.diagrams.client.connector.Connector;
import pl.balon.gwt.diagrams.client.connector.Direction;

/**
 * Full rectilinear connections data calculator.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class FullRectilinearTwoEndedCalculator implements ConnectionDataCalculator {

	/**
	 * @see pl.balon.gwt.diagrams.client.connection.calculator.ConnectionDataCalculator#calculateConnectionData(java.util.List)
	 */
	public ConnectionData calculateConnectionData(List connectors) {
		if( connectors.size() != 2 ){
			throw new IllegalArgumentException("Unsupported connectors count");
		}
		
		Connector c1 = (Connector) connectors.get(0);
		Connector c2 = (Connector) connectors.get(1);
		
		ConnectionData data = new ConnectionData();
		
		Direction[] directions = computeDirections(c1, c2);
		
		Point s1 = c1.pointOnBorder(directions[0]);
		Point s11 = s1.move(directions[0], 10);
		
		Point s2 = c2.pointOnBorder(directions[1]);
		Point s21 = s2.move(directions[1], 10);
		
		int horizontal = s21.left - s11.left;
		int vertical = s21.top - s11.top;

		Point n1 = null;
		Point n2 = null;
		
		// if h - zgodny h - zgodny
		// else if v - zgodny v - zgodny
		// else if h - zgodny v - zgodny
		// else if v - zgodny h - zgodny

		// else if h - zgodny h - mozliwy
		// else if h - mozliwy h - zgodny
		// else if v - zgodny v - mozliwy
		// else if v - mozliwy v - zgodny
		
		// else if h - mozliwy h - mozliwy
		// else if v - mozliwy v - mozliwy
		// else ?

		if( equalDirection(directions[0], 0, horizontal, true) && equalDirection(directions[1], 1, horizontal, true) ){
			n1 = s11.move(directions[0], Math.abs(horizontal/2) );
			n2 = new Point(n1.left, s21.top);
		} else if( equalDirection(directions[0], 0, vertical, false) && equalDirection(directions[1], 1, vertical, false) ){
			n1 = s11.move(directions[0], Math.abs(vertical/2) );
			n2 = new Point(s21.left, n1.top);
		} else if( equalDirection(directions[0], 0, horizontal, true) && equalDirection(directions[1], 1, vertical, false) ){
			n1 = s11.move(directions[0], Math.abs(horizontal));
			n2 = s21.move(directions[1], Math.abs(vertical));
		} else if( equalDirection(directions[0], 0, vertical, false) && equalDirection(directions[1], 1, horizontal, true) ){
			n1 = s11.move(directions[0], Math.abs(vertical));
			n2 = s21.move(directions[1], Math.abs(horizontal));
		} else if( equalDirection(directions[0], 0, horizontal, true) && canMove(directions[1], 1, horizontal, true) ){
			n1 = s11.move(directions[0], Math.abs(horizontal/2) );
			n2 = new Point(n1.left, s21.top);
		} else if( canMove(directions[0], 0, horizontal, true) && equalDirection(directions[1], 1, horizontal, true) ){
			n1 = s11.move(directions[0], Math.abs(horizontal/2) );
			n2 = new Point(n1.left, s21.top);
		} else if( equalDirection(directions[0], 0, vertical, false) && canMove(directions[1], 1, vertical, false) ){
			n1 = s11.move(directions[0], Math.abs(vertical/2) );
			n2 = new Point(s21.left, n1.top);
		} else if( canMove(directions[0], 0, vertical, false) && equalDirection(directions[1], 1, vertical, false) ){
			n1 = s11.move(directions[0], Math.abs(vertical/2) );
			n2 = new Point(s21.left, n1.top);
		} else if( canMove(directions[0], 0, horizontal, true) && canMove(directions[1], 1, horizontal, true) ){
			n1 = s11.move(Direction.RIGHT, horizontal/2 );
			n2 = new Point(n1.left, s21.top);
		} else if( canMove(directions[0], 0, vertical, false) && canMove(directions[1], 1, vertical, false) ){
			n1 = s11.move(Direction.DOWN, vertical/2 );
			n2 = new Point(s21.left, n1.top);
		}
//		} else {
// We are silent, nobody notice that inconsistence ;)				
//			GWT.log("??", null);
//		}
		
		data.getPoints().add(s1);
		data.getPoints().add(s11);
		if(n1!=null){
			data.getPoints().add(n1);
		}
		if(n2!=null){
			data.getPoints().add(n2);
		}
		data.getPoints().add(s21);
		data.getPoints().add(s2);
		
		return data;
	}

	private boolean canMove(Direction defined, int index, int sign, boolean horizontal){
		if( horizontal ) {
			if( index == 0 && sign > 0 ){
				return defined != Direction.LEFT;
			}
			if( index == 1 && sign > 0 ){
				return defined != Direction.RIGHT;
			}
			if( index == 0 && sign < 0 ){
				return defined != Direction.RIGHT;
			}
			if( index == 1 && sign < 0 ){
				return defined != Direction.LEFT;
			}
		} else {
			if( index == 0 && sign > 0 ){
				return defined != Direction.UP;
			}
			if( index == 1 && sign > 0 ){
				return defined != Direction.DOWN;
			}
			if( index == 0 && sign < 0 ){
				return defined != Direction.DOWN;
			}
			if( index == 1 && sign < 0 ){
				return defined != Direction.UP;
			}
		}
		return false; // sign == 0 ??
	}
	
	private boolean equalDirection(Direction defined, int index, int sign, boolean horizontal){
		if( horizontal ) {
			if( index == 0 && sign > 0 ){
				return defined == Direction.RIGHT;
			}
			if( index == 1 && sign > 0 ){
				return defined == Direction.LEFT;
			}
			if( index == 0 && sign < 0 ){
				return defined == Direction.LEFT;
			}
			if( index == 1 && sign < 0 ){
				return defined == Direction.RIGHT;
			}
		} else {
			if( index == 0 && sign > 0 ){
				return defined == Direction.DOWN;
			}
			if( index == 1 && sign > 0 ){
				return defined == Direction.UP;
			}
			if( index == 0 && sign < 0 ){
				return defined == Direction.UP;
			}
			if( index == 1 && sign < 0 ){
				return defined == Direction.DOWN;
			}
		}
		return false; // sign == 0 ??
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
