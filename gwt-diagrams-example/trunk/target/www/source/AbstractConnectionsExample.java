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

package pl.balon.gwt.diagramsexample.client.examples;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import pl.balon.gwt.diagrams.client.connection.AbstractConnection;
import pl.balon.gwt.diagrams.client.connection.Connection;
import pl.balon.gwt.diagrams.client.connector.Connector;
import pl.balon.gwt.diagrams.client.connector.Direction;
import pl.balon.gwt.diagrams.client.connector.UIObjectConnector;

import com.allen_sauer.gwt.dragdrop.client.DragController;
import com.allen_sauer.gwt.dragdrop.client.PickupDragController;
import com.allen_sauer.gwt.dragdrop.client.drop.BoundaryDropController;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

/**
 * Base examples tab for gwt-diagrams connections examples.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public abstract class AbstractConnectionsExample extends AbstractExample {

	/**
	 * DnD controller
	 */
	protected final DragController dragController;

	/**
	 * List of connections presented in this example
	 */
	private List connections = new ArrayList();
	
	/**
	 * Indicates if this example is already initialized.
	 */
	private boolean initialized = false;
	
	/**
	 * Constructor, sets up example.
	 */
	public AbstractConnectionsExample() {
		this.dragController = createDragController();

		DOM.setStyleAttribute(getArea().getElement(), "width", "450px");
		DOM.setStyleAttribute(getArea().getElement(), "height", "350px");
		
		createContents();
	}

	/**
	 * Creates example contents (sets up connectors and connections)
	 */
	protected void createContents() {
		Connector a1 = createConnector("all", 50, 50, null);
		Connector a2 = createConnector("all", 100, 100, null);
		connect(a1, a2);
		
		Connector b1 = createConnector("up", 250, 50, Direction.UP);
		Connector b2 = createConnector("down", 300, 100, Direction.DOWN);
		connect(b1, b2);

		Connector c1 = createConnector("left", 50, 200, Direction.LEFT);
		Connector c2 = createConnector("right", 100, 250, Direction.RIGHT);
		connect(c1, c2);

		Connector d1 = createConnector("left", 250, 200, Direction.LEFT);
		Connector d2 = createConnector("left", 300, 250, Direction.LEFT);
		connect(d1, d2);
	}

	/**
	 * Adds connection to examples panel.
	 * 
	 * @param c connection to be added
	 */
	protected void add(AbstractConnection c){
		getArea().add(c);
		connections.add(c);
	}
	
	/**
	 * Removes connection from examples panel.
	 * 
	 * @param c
	 */
	protected void remove(Connection c){
		connections.remove(c);
	}
	
	/**
	 * Recalculates and redraws all connections in this example
	 */
	public void update(){
		initializeIfNecessary();
		for (Iterator i = connections.iterator(); i.hasNext();) {
			Connection c = (Connection) i.next();
			c.update();
		}
	}

	/**
	 * Initializes example.
	 */
	protected void initializeIfNecessary() {
		if( !initialized ) {
			initialized = true;
			doAttachChildren();
		}
	}
	
	/**
	 * Prevents from attaching children when example is not initialized (eg. not
	 * visible/selected tab) - it's necessary to avoid vml curve problems on IE.
	 * 
	 * @see com.google.gwt.user.client.ui.Panel#doAttachChildren()
	 */
	protected void doAttachChildren() {
		if( initialized ) {
			super.doAttachChildren();
		}
	}
	
	/**
	 * @see com.google.gwt.user.client.ui.Widget#onDetach()
	 */
	protected void onDetach() {
		if( initialized ) {
			super.onDetach();
		}
	}
	
	/**
	 * Connects two connectors.
	 * To be implemented in child classes.
	 * 
	 * @param a
	 * @param b
	 */
	protected abstract void connect(Connector a, Connector b);
	
	/**
	 * Creates connector.
	 * 
	 * @param text -
	 *            label on connector
	 * @param left -
	 *            horizontal position
	 * @param top -
	 *            vertical position
	 * @param direction -
	 *            allowed direction of connection from this connector (null
	 *            means all directions_
	 * @return
	 */
	protected UIObjectConnector createConnector(String text, int left, int top, Direction direction) {
		Label l = new Label(text);
		l.addStyleName("example-connector");
		getArea().add(l, left, top);
		dragController.makeDraggable(l);
		if(direction!=null){
			return UIObjectConnector.wrap(l, new Direction[]{direction});
		}
		return UIObjectConnector.wrap(l);
	}

	/**
	 * DnD stuff, not related to gwt-diagrams idea.
	 * It's only 'bonus' in this example app.
	 * 
	 * @return DragController
	 */
	protected DragController createDragController() {
		PickupDragController dragController = new PickupDragController(
				getArea(), true) {
			public BoundaryDropController newBoundaryDropController(
					AbsolutePanel boundaryPanel, boolean allowDropping) {
				return new BoundaryDropController(boundaryPanel, allowDropping) {
					public void onMove(Widget reference, Widget draggable,
							DragController dragController) {
						super.onMove(reference, draggable, dragController);
						UIObjectConnector c = UIObjectConnector
								.getWrapper(draggable);
						if (c != null) {
							c.update();
						}
					}
				};
			}

			public void makeDraggable(Widget widget) {
				super.makeDraggable(widget);
				DOM.setStyleAttribute(widget.getElement(), "position",
						"absolute");
				DOM.setStyleAttribute(widget.getElement(), "zIndex", "100");
			}
		};
		return dragController;
	}
	
	/**
	 * Nothing really important. Presents links to source code on examples panel.
	 * 
	 * @see pl.balon.gwt.diagramsexample.client.examples.AbstractExample#sources()
	 */
	protected List sources() {
		ArrayList sources = new ArrayList();
		
		int dot = GWT.getTypeName(this).lastIndexOf('.');
		String className = GWT.getTypeName(this).substring(dot+1); 
		
		sources.add(new Hyperlink(className + ".java", ""));
		sources.add(new Hyperlink("AbstractExample.java", ""));
		sources.add(new Hyperlink("AbstractConnectionsExample.java", ""));
		
		for (Iterator i = sources.iterator(); i.hasNext();) {
			final Hyperlink h = (Hyperlink) i.next();
			h.addStyleName("gwt-diagrams-source-link");
			h.addClickListener(new ClickListener(){
				public void onClick(Widget sender) {
					Window.open("../source/" + h.getText(), "", "");
				}
			});
		}
		
		return sources;
	}

}
