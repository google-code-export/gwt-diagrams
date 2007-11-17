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

package pl.balon.gwt.diagrams.client.connection.calculator;

import java.util.List;

import pl.balon.gwt.diagrams.client.connection.data.ConnectionData;
import pl.balon.gwt.diagrams.client.connection.data.Point;
import pl.balon.gwt.diagrams.client.connector.Connector;

/**
 * Primitve rectilinear connection data calculator.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class SimpleRectilinearTwoEndedCalculator implements ConnectionDataCalculator {

	/**
	 * @see pl.balon.gwt.diagrams.client.connection.calculator.ConnectionDataCalculator#calculateConnectionData(java.util.List)
	 */
	public ConnectionData calculateConnectionData(List connectors) {
		if( connectors.size() != 2 ){
			throw new IllegalArgumentException("Unsupported connectors count");
		}
		
		Connector c1 = (Connector) connectors.get(0);
		Connector c2 = (Connector) connectors.get(1);
		
		ConnectionData data = new ConnectionData();
		
		data.getPoints().add(new Point( c1.getLeft() + c1.getWidth()/2, c1.getTop() + c1.getHeight()/2 ));
		data.getPoints().add(new Point( c1.getLeft() + c1.getWidth()/2, c2.getTop() + c2.getHeight()/2 ));
		data.getPoints().add(new Point( c2.getLeft() + c2.getWidth()/2, c2.getTop() + c2.getHeight()/2 ));
		
		return data;
	}

}
