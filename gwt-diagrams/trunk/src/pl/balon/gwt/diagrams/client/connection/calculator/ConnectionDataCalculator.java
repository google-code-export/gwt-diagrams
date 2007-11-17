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

/**
 * Connection data calculator interface.
 * Component responsible for calculations of connection shape, size etc.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public interface ConnectionDataCalculator {

	/**
	 * Computes connection data.
	 * 
	 * @param connectors list of connectors in this connection
	 * @return ConnectionData
	 */
	public ConnectionData calculateConnectionData(List connectors);
	
}
