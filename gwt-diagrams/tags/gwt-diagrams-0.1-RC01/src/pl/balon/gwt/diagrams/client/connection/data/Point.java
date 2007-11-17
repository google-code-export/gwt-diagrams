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

import pl.balon.gwt.diagrams.client.connector.Direction;

/**
 * Represents 2D point and vector.
 * Unmodifiable type.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class Point {

	public final int left;
	public final int top;
	
	public Point(int left, int top) {
		this.left = left;
		this.top = top;
	}

	public int getLeft() {
		return left;
	}

	public int getTop() {
		return top;
	}
	
	public double distance(Point other){
		return Math.sqrt( (left-other.left)*(left-other.left) +  (top-other.top)*(top-other.top) );
	}
	
	public Point move(Direction dir, int distance){
		if( dir == Direction.DOWN ){
			return new Point(left, top+distance);
		} else if( dir == Direction.UP ){
			return new Point(left, top-distance);
		} else if( dir == Direction.LEFT ){
			return new Point(left-distance, top);
		} else if( dir == Direction.RIGHT ){
			return new Point(left+distance, top);
		} else {
			throw new IllegalStateException();
		}
	}

	public Point move(Point vector){
		return new Point(left+vector.left, top+vector.top);
	}
	
	public Point negative(){
		return new Point(-left, -top);
	}
	
	public static boolean equals(Point p1, Point p2){
		return p1.left == p2.left && p1.top == p2.top;
	}
	
}
