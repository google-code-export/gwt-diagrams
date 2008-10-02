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

import java.util.ArrayList;
import java.util.List;

import pl.balon.gwt.diagrams.client.connection.calculator.ConnectionDataCalculator;
import pl.balon.gwt.diagrams.client.connection.calculator.FullRectilinearTwoEndedCalculator;
import pl.balon.gwt.diagrams.client.connection.data.ConnectionData;
import pl.balon.gwt.diagrams.client.connection.data.Point;
import pl.balon.gwt.diagrams.client.connector.Connector;
import pl.balon.gwt.diagrams.client.connector.Direction;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;

/**
 * Rectilinear connection widget
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class RectilinearTwoEndedConnection extends AbstractTwoEndedConnection {

	/**
	 * DOM elements representing connection in browser dom tree
	 */
	private List/*<Element>*/ elements = new ArrayList();
	
	/**
	 * Constructs connection
	 */
	public RectilinearTwoEndedConnection(Connector[] toConnect) {
		super(toConnect);
		setElement(DOM.createDiv());
		addStyleName("gwt-diagrams-connection");
	}

	/**
	 * Constructs connection
	 */
	public RectilinearTwoEndedConnection(Connector c1, Connector c2) {
		this(new Connector[]{c1, c2});
	}
	
	/**
	 * @see pl.balon.gwt.diagrams.client.connection.AbstractConnection#createCalculator()
	 */
	protected ConnectionDataCalculator createCalculator() {
		return new FullRectilinearTwoEndedCalculator();
	}

	/**
	 * @see pl.balon.gwt.diagrams.client.connection.AbstractConnection#update(pl.balon.gwt.diagrams.client.connection.data.ConnectionData)
	 */
	protected void update(ConnectionData data) {
		if( data.getPoints().size() <= 1 ){
			throw new IllegalArgumentException("Too few connection points");
		}

		prepareElements(data.getPoints().size()-1);

		for (int i = 0; i < elements.size(); i++) {
			Element div = (Element) elements.get(i);
			Point start = (Point) data.getPoints().get(i);
			Point end = (Point) data.getPoints().get(i+1);
			
			String style = "gwt-diagrams-line";

			DOM.setElementAttribute(div, "style", "");
			DOM.setElementProperty(div, "className", style);

			DOM.setStyleAttribute(div, "height", "1"); // TODO from css (IE impl bug)
			DOM.setStyleAttribute(div, "width", "1"); // TODO from css (IE impl bug)
			
			if( start.left == end.left ) {
				style += " gwt-diagrams-line-vertical";
				DOM.setStyleAttribute(div, "height", Integer.toString( Math.abs(start.top - end.top) ));
			} else if( start.top == end.top ) {
				DOM.setStyleAttribute(div, "width", Integer.toString( Math.abs(start.left - end.left) ));
				style += " gwt-diagrams-line-horizontal";
			}
//			} else {
// We are silent, nobody notice that inconsistence ;)				
//				throw new IllegalStateException("Illegal state for right angeled connection");
//			}

			DOM.setStyleAttribute(div, "left", Integer.toString( Math.min(start.left, end.left) ));
			DOM.setStyleAttribute(div, "top", Integer.toString( Math.min(start.top, end.top) ));
			
			DOM.setElementProperty(div, "className", style);

			// Endings
			if( i==0 && getEnding(0)!=null ) {
				if( start.left < end.left ) { // LEFT
					getEnding(0).update( 
							Math.min(start.left, end.left), 
							Math.min(start.top, end.top), 
							Direction.LEFT.getAngle());
				} else if( start.left > end.left ) { // RIGHT
					getEnding(0).update( 
							Math.max(start.left, end.left), 
							Math.min(start.top, end.top), 
							Direction.RIGHT.getAngle());
				} else if( start.top > end.top ) { // DOWN
					getEnding(0).update( 
							Math.min(start.left, end.left), 
							Math.max(start.top, end.top), 
							Direction.DOWN.getAngle());
				} else if( start.top < end.top ) { // UP
					getEnding(0).update( 
							Math.min(start.left, end.left), 
							Math.min(start.top, end.top), 
							Direction.UP.getAngle());
				}
			} else if( i+1 == elements.size() && getEnding(1)!=null ){
				if( start.left > end.left ) { // LEFT
					getEnding(1).update( 
							Math.min(start.left, end.left), 
							Math.min(start.top, end.top), 
							Direction.LEFT.getAngle());
				} else if( start.left < end.left ) { // RIGHT
					getEnding(1).update( 
							Math.max(start.left, end.left), 
							Math.min(start.top, end.top), 
							Direction.RIGHT.getAngle());
				} else if( start.top < end.top ) { // DOWN
					getEnding(1).update( 
							Math.min(start.left, end.left), 
							Math.max(start.top, end.top), 
							Direction.DOWN.getAngle());
				} else if( start.top > end.top ) { // UP
					getEnding(1).update( 
							Math.min(start.left, end.left), 
							Math.min(start.top, end.top), 
							Direction.UP.getAngle());
				}
			}
		}
		
	}

	/**
	 * Recalculates elements collection. Creates new or remove some if
	 * necessary.
	 */
	private void prepareElements(int count) {

		// New lines if too few
		for (int i = elements.size(); i < count; i++) {
			Element div = DOM.createDiv();
			elements.add(div);
			DOM.appendChild(getElement(), div);
	        DOM.setInnerHTML(div, "&nbsp;");
		}
		
		// Remove some lines if too many
		while (elements.size() > count) {
			Element div = (Element) elements.get(0);
			elements.remove(div);
			DOM.removeChild(getElement(), div);
		}
		
	}
	
}
