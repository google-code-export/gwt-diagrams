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

import pl.balon.gwt.diagrams.client.connection.BezierTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connection.RectilinearTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connection.StraightTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connector.Connector;

/**
 * Shows example of multi connections.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class MultiConnectionsExample extends AbstractConnectionsExample {

	/**
	 * @see pl.balon.gwt.diagramsexample.client.examples.AbstractConnectionsExample#connect(pl.balon.gwt.diagrams.client.connector.Connector, pl.balon.gwt.diagrams.client.connector.Connector)
	 */
	protected void connect(Connector a, Connector b) {
		throw new UnsupportedOperationException();
	}

	/**
	 * Creates connectors for example panel, and connects them.
	 * 
	 * @see pl.balon.gwt.diagramsexample.client.examples.AbstractConnectionsExample#createContents()
	 */
	protected void createContents() {
		
		Connector x = createConnector("X", 50, 100, null);
		Connector y = createConnector("Y", 150, 50, null);
		Connector z = createConnector("Z", 250, 25, null);
		Connector u = createConnector("U", 125, 125, null);
		Connector w = createConnector("W", 250, 100, null);
		
		add(new RectilinearTwoEndedConnection(x,y));
		add(new RectilinearTwoEndedConnection(y,z));
		add(new RectilinearTwoEndedConnection(y,u));
		add(new RectilinearTwoEndedConnection(u,w));

		Connector a = createConnector("A", 50, 200, null);
		Connector b = createConnector("B", 150, 250, null);

		add(new RectilinearTwoEndedConnection(a,b));
		add(new BezierTwoEndedConnection(a,b));
		add(new StraightTwoEndedConnection(a,b));

	}

}
