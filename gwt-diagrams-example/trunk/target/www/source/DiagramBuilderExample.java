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
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import pl.balon.gwt.diagrams.client.connection.AbstractConnection;
import pl.balon.gwt.diagrams.client.connection.BezierTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connection.Connection;
import pl.balon.gwt.diagrams.client.connection.RectilinearTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connection.StraightTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connector.Connector;
import pl.balon.gwt.diagrams.client.connector.Direction;
import pl.balon.gwt.diagrams.client.connector.UIObjectConnector;

import com.allen_sauer.gwt.dragdrop.client.DragController;
import com.allen_sauer.gwt.dragdrop.client.DragEndEvent;
import com.allen_sauer.gwt.dragdrop.client.DragHandlerAdapter;
import com.allen_sauer.gwt.dragdrop.client.PickupDragController;
import com.allen_sauer.gwt.dragdrop.client.VetoDragException;
import com.allen_sauer.gwt.dragdrop.client.drop.AbsolutePositionDropController;
import com.allen_sauer.gwt.dragdrop.client.drop.DropController;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.EventPreview;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.CellPanel;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.KeyboardListener;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class DiagramBuilderExample extends AbstractConnectionsExample {

	CellPanel toolbox;
	CellPanel helpPanel;
	AbsolutePanel panel;
	DragController toolboxDragController;
	String style;
	
	protected void createContents() {
		
		PickupDragController dragController = new PickupDragController(getArea(), true);
		AbsolutePositionDropController dropController = new AbsolutePositionDropController(getArea());
		
		toolboxDragController = new ToolboxDragController(dropController, dragController);
		
		toolbox = new HorizontalPanel();
		toolbox.setStyleName("toolbox");
		panel = new AbsolutePanel();
		helpPanel = new HorizontalPanel();
		helpPanel.setStyleName("helpPanel");
		
		VerticalPanel vp = new VerticalPanel();
		vp.setStyleName("builder");
		vp.add(helpPanel);
		vp.add(toolbox);
		vp.add(panel);
		getArea().add(vp);
		
		createToolboxNode("A", "all");
		createToolboxNode("L", "left");
		createToolboxNode("R", "right");
		createToolboxNode("T", "top");
		createToolboxNode("B", "bottom");
		
		createStyleOption("rectilinear", true);
		createStyleOption("bezier", false);
		createStyleOption("straight", false);

		createHelpEntry("drag&drop from toolbar to add");
		createHelpEntry("CTRL+click to select/connect");
		createHelpEntry("DEL to delete selected");
		
		DOM.addEventPreview(new EventPreview(){
			public boolean onEventPreview(Event event) {
				
				if ( Event.ONKEYDOWN == DOM.eventGetType(event)
					&& KeyboardListener.KEY_DELETE == DOM.eventGetKeyCode(event)
					&& !selected.isEmpty()) {
					for (Iterator i = selected.listIterator(); i.hasNext();) {
						Widget w = (Widget) i.next();
						UIObjectConnector.unwrap(w);
						i.remove();
						w.removeFromParent();
					}
					return false;
				}
				
				return true;
			}
		});
		
	}

	private void createHelpEntry(String help){
		Label l = new Label(help);
		l.addStyleName("helpEntry");
		helpPanel.add(l);
	}
	
	private Widget createStyleOption(final String style, boolean checked){
		RadioButton rb = new RadioButton("style", style);
		rb.addStyleName("style-option");
		rb.setChecked(checked);
		if(checked){
			setStyle(style);
		}
		toolbox.add(rb);
		
		rb.addClickListener(new ClickListener(){
			public void onClick(Widget sender) {
				setStyle(style);				
			}
		});

		return rb;
	}
	
	private Widget createToolboxNode(String label, String style){
		Widget node = new Label(label);
		node.setStyleName("toolbox-node");
		node.addStyleName(style);
		toolbox.add(node);
		toolboxDragController.makeDraggable(node);
		return node;
	}

	private List selected = new ArrayList();
	
	protected void select(Widget w){
		if(selected.isEmpty()) {
			w.addStyleName("selected-connector");
			Collection cons = UIObjectConnector.getWrapper(w).getConnections();
			for (Iterator i = cons.iterator(); i.hasNext();) { // TODO list iterator ?
				Connection c = (Connection) i.next();
				c.remove();
				remove(c); // TODO maybe in one
			}
			selected.add(w);
		} else if(selected.contains(w)){
			w.removeStyleName("selected-connector");
			selected.remove(w);
		} else if(selected.size() == 1) {
			Widget w2 = (Widget) selected.get(0);
			w.removeStyleName("selected-connector");
			w2.removeStyleName("selected-connector");
			Collection cons = UIObjectConnector.getWrapper(w).getConnections();
			for (Iterator i = cons.iterator(); i.hasNext();) { // TODO list iterator ?
				Connection c = (Connection) i.next();
				c.remove();
				remove(c); // TODO maybe in one
			}
			connect(UIObjectConnector.getWrapper(w2), UIObjectConnector.getWrapper(w));
			selected.clear();
		}
	}
	
	protected UIObjectConnector createConnector(Label proxy, AbsolutePanel panel) {
		Label l = new Label(proxy.getText()) {
			public void onBrowserEvent(Event event) {
				if( DOM.eventGetType(event) == Event.ONCLICK 
					&& DOM.eventGetCtrlKey(event)  ){
					select(this);
				}
				
				super.onBrowserEvent(event);
			}
		};
		l.sinkEvents(Event.ONCLICK);
		l.setPixelSize(proxy.getOffsetWidth(), proxy.getOffsetHeight());
		l.addStyleName("example-connector");
		panel.add(l, proxy.getAbsoluteLeft() - panel.getAbsoluteLeft(), proxy.getAbsoluteTop() - panel.getAbsoluteTop());
		dragController.makeDraggable(l);

		Direction direction = null;
		if( "T".equals(l.getText()) ){
			direction = Direction.UP;
		} else if( "L".equals(l.getText()) ){
			direction = Direction.LEFT;
		} else if( "B".equals(l.getText()) ){
			direction = Direction.DOWN;
		} else if( "R".equals(l.getText()) ){
			direction = Direction.RIGHT;
		}
			
		if(direction!=null){
			return UIObjectConnector.wrap(l, new Direction[]{direction});
		}
		return UIObjectConnector.wrap(l);
	}
	
	protected void connect(Connector a, Connector b) {
		
		if("rectilinear".equals(style)){
			add(new RectilinearTwoEndedConnection(a, b));
		} else if("bezier".equals(style)){
			add(new BezierTwoEndedConnection(a, b));
		} else if("straight".equals(style)){
			add(new StraightTwoEndedConnection(a, b));
		}
		
	}

	public void setStyle(String style) {
		this.style = style;
	}

	protected void add(AbstractConnection c) {
		super.add(c);
		c.update();
	}
	
	private class ToolboxDragController extends PickupDragController {

		Map nodes = new HashMap();
		
		public ToolboxDragController(final DropController dropController, final DragController nodesDragController) {
			super(getArea(), false);
	        setDragProxyEnabled(true);
	        registerDropController(dropController);
	        
	        addDragHandler(new DragHandlerAdapter(){
	        	
	        	public void onPreviewDragEnd(DragEndEvent event) throws VetoDragException {
	        		Widget node = (Widget) event.getSource();
	        		Widget proxy = (Widget) nodes.get(node);
	        		
	        		AbsolutePanel panel = (AbsolutePanel) dropController.getDropTarget();
	        		createConnector((Label)proxy, panel);
					
					throw new VetoDragException();
	        	}
	        	
	        });
	        
		}

		protected Widget maybeNewDraggableProxy(Widget draggable) {
			Label node = (Label) draggable;

			Widget proxy = new Label(node.getText());
			proxy.addStyleName(CSS_PROXY);
			proxy.addStyleName("toolbox-node-proxy");
			proxy.setPixelSize(node.getOffsetWidth(), node.getOffsetHeight());
			
			nodes.put(node, proxy);
			
			return proxy;
		}

	}

}
