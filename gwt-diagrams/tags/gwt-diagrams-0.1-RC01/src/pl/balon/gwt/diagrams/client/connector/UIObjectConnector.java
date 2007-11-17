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

package pl.balon.gwt.diagrams.client.connector;

import java.util.HashMap;
import java.util.Map;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.UIObject;

/**
 * Decorator for any UIObject, adds ability to be connectable.
 * Implements {@link Connector} and wraps UIObject.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class UIObjectConnector extends AbstractConnector {

	/**
	 * Static registry of all wrapped UIObjects
	 */
	private static final Map wrappersMap = new HashMap(); 
	
	/**
	 * Wrapped UIObject
	 */
	private UIObject wrapped;
	
	/**
	 * Static factory method, decorates UIObject with Connector functionality.
	 */
	public static UIObjectConnector wrap(UIObject wrapped){
		if( wrappersMap.containsKey(wrapped) ){
			return (UIObjectConnector) wrappersMap.get(wrapped);
		} else {
			UIObjectConnector c = new UIObjectConnector(wrapped);
			wrappersMap.put(wrapped, c);
			return c;
		}
	}

	/**
	 * Static factory method, decorates UIObject with Connector functionality.
	 * 
	 * @param wrapped UIObject to be wrapped
	 * @param directions directions in which connector allow connections
	 * @return Connector
	 */
	public static UIObjectConnector wrap(UIObject wrapped, final Direction[] directions){
		if( wrappersMap.containsKey(wrapped) ){
			return (UIObjectConnector) wrappersMap.get(wrapped);
		} else {
			UIObjectConnector c = new UIObjectConnector(wrapped){
				public Direction[] getDirections() {
					return directions;
				}
			};
			wrappersMap.put(wrapped, c);
			return c;
		}
	}

	/**
	 * Finds Connector for UIObject (in static registry)
	 */
	public static UIObjectConnector getWrapper(UIObject uio){
		return (UIObjectConnector) wrappersMap.get(uio);
	}
	
	/**
	 * Private constructor
	 * 
	 * @param wrapped
	 */
	private UIObjectConnector(UIObject wrapped) {
		this.wrapped = wrapped;
	}

	/**
	 * @see pl.balon.gwt.diagrams.client.connector.Connector#getHeight()
	 */
	public int getHeight() {
		return wrapped.getOffsetHeight();
	}

	/**
	 * @see pl.balon.gwt.diagrams.client.connector.Connector#getWidth()
	 */
	public int getWidth() {
		return wrapped.getOffsetWidth();
	}
	
	/**
	 * @see pl.balon.gwt.diagrams.client.connector.Connector#getLeft()
	 */
	public int getLeft() {
		int containerOffset = 0;
		Element parent = DOM.getParent(wrapped.getElement());
		while( parent!=null ){
			if( "relative".equals(DOM.getStyleAttribute(parent, "position")) ){
				containerOffset = DOM.getAbsoluteLeft(parent);
				break;
			}
			parent = DOM.getParent(parent);
		}
		return wrapped.getAbsoluteLeft() - containerOffset;
	}

	/**
	 * @see pl.balon.gwt.diagrams.client.connector.Connector#getTop()
	 */
	public int getTop() {
		int containerOffset = 0;
		Element parent = DOM.getParent(wrapped.getElement());
		while( parent!=null ){
			if( "relative".equals(DOM.getStyleAttribute(parent, "position")) ){
				containerOffset = DOM.getAbsoluteTop(parent);
				break;
			}
			parent = DOM.getParent(parent);
		}
		return wrapped.getAbsoluteTop() - containerOffset;
	}

}
