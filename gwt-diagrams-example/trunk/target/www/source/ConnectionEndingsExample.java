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

import pl.balon.gwt.diagrams.client.connection.AbstractTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connection.BezierTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connection.RectilinearTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connection.StraightTwoEndedConnection;
import pl.balon.gwt.diagrams.client.connection.ending.ConnectionEnding;
import pl.balon.gwt.diagrams.client.connection.ending.RectilinearEnding;
import pl.balon.gwt.diagrams.client.connection.ending.RectilinearEndingsImageBundle;
import pl.balon.gwt.diagrams.client.connector.Connector;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.AbstractImagePrototype;
import com.google.gwt.user.client.ui.Image;

/**
 * Shows example of connection endings.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class ConnectionEndingsExample extends AbstractConnectionsExample {

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
		
		Connector a = createConnector("A", 50, 50, null);
		Connector b = createConnector("B", 150, 100, null);

		Connector c = createConnector("C", 250, 50, null);
		Connector d = createConnector("D", 350, 100, null);

		Connector e = createConnector("E", 50, 200, null);
		Connector f = createConnector("F", 150, 250, null);

		Connector g = createConnector("G", 250, 200, null);
		Connector h = createConnector("H", 350, 250, null);

		AbstractTwoEndedConnection c1 = new RectilinearTwoEndedConnection(a,b);
		AbstractTwoEndedConnection c2 = new BezierTwoEndedConnection(c,d);
		AbstractTwoEndedConnection c3 = new StraightTwoEndedConnection(e,f);
		AbstractTwoEndedConnection c4 = new RectilinearTwoEndedConnection(g,h);
		
		add(c1);
		add(c2);
		add(c3);
		add(c4);
		
		c1.setEndings(newRectilinearEnding(), newRectilinearEnding());
		c2.setEndings(newRectilinearEnding(), newRectilinearEnding());
		c3.setEndings(newRectilinearEnding(), newRectilinearEnding());
		c4.setEndings(null, newRectilinearEndingFromBundle());

	}

	private static ConnectionEnding newRectilinearEnding(){
		return new RectilinearEnding(
				new Image("img/up.png"),
				new Image("img/down.png"),
				new Image("img/left.png"),
				new Image("img/right.png")
			);
	}

	private static ConnectionEnding newRectilinearEndingFromBundle(){
		return new RectilinearEnding((SampleImageBundle)GWT.create(SampleImageBundle.class));
	}

	public static interface SampleImageBundle extends RectilinearEndingsImageBundle {
		/**
		 * @gwt.resource pl/balon/gwt/diagramsexample/public/img/up.png
		 */
		public AbstractImagePrototype up();
		/**
		 * @gwt.resource pl/balon/gwt/diagramsexample/public/img/down.png
		 */
		public AbstractImagePrototype down();
		/**
		 * @gwt.resource pl/balon/gwt/diagramsexample/public/img/left.png
		 */
		public AbstractImagePrototype left();
		/**
		 * @gwt.resource pl/balon/gwt/diagramsexample/public/img/right.png
		 */
		public AbstractImagePrototype right();
	}
}
