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

package pl.balon.gwt.diagrams.client.connection.ending;

import java.util.Map;

import pl.balon.gwt.diagrams.client.common.DeckPanel;
import pl.balon.gwt.diagrams.client.connector.Direction;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Widget;

/**
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class RectilinearEnding extends ConnectionEnding {

	private DeckPanel deck = new DeckPanel();
	
	public RectilinearEnding(Widget up, Widget down, Widget left, Widget right) {
		setElement(deck.getElement());
		addStyleName("gwt-diagrams-ending");
		DOM.setStyleAttribute(deck.getElement(), "position", "absolute"); // TODO
		deck.insert(up, 0);
		deck.insert(right, 1);
		deck.insert(down, 2);
		deck.insert(left, 3);
	}

	public RectilinearEnding(Map/*<Direction, Widget>*/ endings) {
		this(
				(Widget) endings.get(Direction.UP),
				(Widget) endings.get(Direction.DOWN),
				(Widget) endings.get(Direction.LEFT),
				(Widget) endings.get(Direction.RIGHT));
	}

	public RectilinearEnding(RectilinearEndingsImageBundle imageBundle) {
		this(
				imageBundle.up().createImage(),
				imageBundle.down().createImage(),
				imageBundle.left().createImage(),
				imageBundle.right().createImage()
			);
	}
	
	/**
	 * @see pl.balon.gwt.diagrams.client.connection.ending.ConnectionEnding#update(int, int, float)
	 */
	public void update(int left, int top, float angle) {
		if( angle < 0.0f || angle >=360.0f ){
			throw new IllegalArgumentException("Angle must from [0.0f, 360.0f)");
		}
		
		if( angle > 315.0f || angle < 45.0f ){
			deck.showWidget(0); // UP
			DOM.setStyleAttribute(deck.getElement(), "left", Integer.toString( left - deck.getOffsetWidth()/2 ));
			DOM.setStyleAttribute(deck.getElement(), "top", Integer.toString( top ));
		} else if( angle > 45.0f && angle < 135.0f ){
			deck.showWidget(1); // RIGHT
			DOM.setStyleAttribute(deck.getElement(), "left", Integer.toString( left - deck.getOffsetWidth() ));
			DOM.setStyleAttribute(deck.getElement(), "top", Integer.toString( top - deck.getOffsetHeight()/2));
		} else if( angle > 135.0f && angle < 225.0f ){
			deck.showWidget(2); // DOWN
			DOM.setStyleAttribute(deck.getElement(), "left", Integer.toString( left - deck.getOffsetWidth()/2 ));
			DOM.setStyleAttribute(deck.getElement(), "top", Integer.toString( top - deck.getOffsetHeight()));
		} else {
			deck.showWidget(3); // LEFT
			DOM.setStyleAttribute(deck.getElement(), "left", Integer.toString( left ));
			DOM.setStyleAttribute(deck.getElement(), "top", Integer.toString( top - deck.getOffsetHeight()/2));
		}
		
	}

}
