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
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import pl.balon.gwt.diagrams.client.connection.calculator.ConnectionDataCalculator;
import pl.balon.gwt.diagrams.client.connection.data.ConnectionData;
import pl.balon.gwt.diagrams.client.connector.Connector;

import com.google.gwt.user.client.ui.Widget;

/**
 * Base widget class for connections.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public abstract class AbstractConnection extends Widget implements Connection {

	/**
	 * List of connectors involved in this connection.
	 */
	private final List/*<Connector>*/ connected = new ArrayList();
	
	/**
	 * Component responsible for connection computation.
	 */
	private ConnectionDataCalculator calculator;
	
	/**
	 * Constructs connection which connects list of connectors.
	 * 
	 * @param toConnect Connectors to connect
	 */
	public AbstractConnection(List toConnect) {
		connected.addAll(toConnect);
		setCalculator(createCalculator());
		for (Iterator i = connected.iterator(); i.hasNext();) {
			Connector c = (Connector) i.next();
			c.connect(this);
		}
	}
	
	/**
	 * Constructs connection which connects list of connectors.
	 * 
	 * @param toConnect Connectors to connect
	 */
	public AbstractConnection(Connector toConnect[]) {
		this(Arrays.asList(toConnect));
	}
	
	/**
	 * @see pl.balon.gwt.diagrams.client.connection.Connection#remove()
	 */
	public void remove(){
		for (ListIterator i = connected.listIterator(); i.hasNext();) {
			Connector c = (Connector) i.next();
			i.remove();
			c.disconnect(this);
		}
		removeFromParent();
	}

	/**
	 * @see pl.balon.gwt.diagrams.client.connection.Connection#disconnect(pl.balon.gwt.diagrams.client.connector.Connector)
	 */
	public void disconnect(Connector c){
		int index = connected.indexOf(c);
		if( index > -1 ){
			connected.listIterator(index).remove();
			c.disconnect(this);
		}
	}
	
	/**
	 * @see pl.balon.gwt.diagrams.client.connection.Connection#update()
	 */
	public void update(){
		update(computeConnectionData());
	}
	
	/**
	 * Delegates connection computation to ConnectionDataCalculator
	 * 
	 * @return connection data
	 */
	private ConnectionData computeConnectionData() {
		return calculator.calculateConnectionData(connected);
	}
	
	/**
	 * Redraws connection base on connection data
	 * 
	 * @param data connection data
	 */
	protected abstract void update(ConnectionData data);
	
	/**
	 * @return new connection data calculator
	 */
	protected abstract ConnectionDataCalculator createCalculator();

	/**
	 * @return calculator
	 */
	public ConnectionDataCalculator getCalculator() {
		return calculator;
	}

	/**
	 * @param calculator
	 */
	public void setCalculator(ConnectionDataCalculator calculator) {
		this.calculator = calculator;
	}
	
}
