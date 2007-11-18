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

import pl.balon.gwt.diagrams.client.connector.Connector;

import com.google.gwt.user.client.ui.AbsolutePanel;

/**
 * Interface representing connection object
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public interface Connection {

	/**
	 * Removes connection 
	 */
	public abstract void remove();

	/**
	 * Disconnects connector
	 * 
	 * @param c connector
	 */
	public abstract void disconnect(Connector c);

	/**
	 * Updates connection (recalculate and redraw).
	 */
	public abstract void update();

	/**
	 * Appends connection widget to panel
	 * 
	 * @param panel AbsolutePanel
	 */
	public abstract void appendTo(AbsolutePanel panel);
	
}