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
import pl.balon.gwt.diagrams.client.connector.Connector;

/**
 * Shows example bezier connections.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class BezierExample extends AbstractConnectionsExample {

	/**
	 * Creates bezier connection.
	 * 
	 * @see pl.balon.gwt.diagramsexample.client.examples.AbstractConnectionsExample#connect(pl.balon.gwt.diagrams.client.connector.Connector, pl.balon.gwt.diagrams.client.connector.Connector)
	 */
	protected void connect(Connector a, Connector b) {
		add(new BezierTwoEndedConnection(a,b));
	}

}
