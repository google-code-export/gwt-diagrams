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

package pl.balon.gwt.diagramsexample.client;

import pl.balon.gwt.diagramsexample.client.examples.AbstractConnectionsExample;
import pl.balon.gwt.diagramsexample.client.examples.BezierExample;
import pl.balon.gwt.diagramsexample.client.examples.DiagramBuilderExample;
import pl.balon.gwt.diagramsexample.client.examples.RectilinearExample;
import pl.balon.gwt.diagramsexample.client.examples.StraightConnectionsExample;

import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.SourcesTabEvents;
import com.google.gwt.user.client.ui.TabListener;
import com.google.gwt.user.client.ui.TabPanel;

/**
 * gwt-diagrams-example module entry point
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class GwtDiagramsExample extends BaseExamplesEntryPoint {

	public void onLoad() {

		final TabPanel tabs = new TabPanel();
		RootPanel.get("tabs").add(tabs);

		tabs.add(new RectilinearExample(), "Rectilinear");
		tabs.add(new BezierExample(), "Bezier");
		tabs.add(new StraightConnectionsExample(), "Straight");
		tabs.add(new DiagramBuilderExample(), "Diagram builder");

		tabs.addTabListener(new TabListener() {
			public boolean onBeforeTabSelected(SourcesTabEvents sender,
					int tabIndex) {
				return true;
			}

			public void onTabSelected(SourcesTabEvents sender, int tabIndex) {
				AbstractConnectionsExample e = (AbstractConnectionsExample) tabs
						.getWidget(tabIndex);
				e.update();
			}
		});

		String tab = getUrlParam("tab");
		if( tab==null || "".equals(tab) ){
			tab = "0";
		}
		tabs.selectTab(Integer.parseInt(tab));

	}

}
