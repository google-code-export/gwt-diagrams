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

import java.util.Collection;

import pl.balon.gwt.diagrams.client.connection.Connection;
import pl.balon.gwt.diagrams.client.connection.data.Point;

/**
 * Interface representing connector (object which can be connected two another
 * through connection).
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public interface Connector {

	/**
	 * Disconnects connector from connection
	 */
	public void disconnect(Connection c);

	/**
	 * Disconnects connector from all connections
	 */
	public void disconnect();

	/**
	 * Connects to connection
	 */
	public void connect(Connection c);
	
	/**
	 * Updates all related connections
	 */
	public void update();
	
	/**
	 * @return left position of connector
	 */
	public int getLeft();
	
	/**
	 * @return top position of connector
	 */
	public int getTop();
	
	/**
	 * @return width of connector
	 */
	public int getWidth();
	
	/**
	 * @return height of connector
	 */
	public int getHeight();
	
	/**
	 * @return directions in which is allowed connection
	 */
	public Direction[] getDirections();
	
	/**
	 * Calculates starting point of connection in some direction.
	 * Often implementation is same as {@link Connector#pointOnBorder(Direction)}
	 * 
	 * @param direction
	 * @return
	 */
	public Point getConnectionPoint(Direction direction);

	/**
	 * Calculates point on border in some direction
	 * 
	 * @param d
	 * @return
	 */
	public Point pointOnBorder(Direction d);

	/**
	 * @return Collection of all connections
	 */
	public Collection/*<Connection>*/ getConnections();

}
