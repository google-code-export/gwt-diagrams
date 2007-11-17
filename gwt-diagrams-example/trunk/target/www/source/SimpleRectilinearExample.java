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

import pl.balon.gwt.diagrams.client.connection.RectilinearTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connection.calculator.SimpleRectilinearTwoEndedCalculator;
import pl.balon.gwt.diagrams.client.connector.Connector;
import pl.balon.gwt.diagrams.client.connector.Direction;

/**
 * Shows very primitive rectilinear example.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class SimpleRectilinearExample extends AbstractConnectionsExample {

	/** 
	 * Creates primitive rectilinear connection.
	 * 
	 * @see pl.balon.gwt.diagramsexample.client.examples.AbstractConnectionsExample#connect(pl.balon.gwt.diagrams.client.connector.Connector, pl.balon.gwt.diagrams.client.connector.Connector)
	 */
	protected void connect(Connector a, Connector b) {
		RectilinearTwoEndedConnection c = new RectilinearTwoEndedConnection(a,b);
		c.setCalculator(new SimpleRectilinearTwoEndedCalculator());
		add(c);
	}

	/**
	 * Creates two connectors for example panel, and connects them.
	 * 
	 * @see pl.balon.gwt.diagramsexample.client.examples.AbstractConnectionsExample#createContents()
	 */
	protected void createContents() {
		Connector b1 = createConnector("connector 1", 50, 50, Direction.UP);
		Connector b2 = createConnector("connector 2", 200, 200, Direction.DOWN);
		connect(b1, b2);
	}
}
