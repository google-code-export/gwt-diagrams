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


/**
 * Enumeration representing directions.
 * 
 * @author Michał Baliński (michal.balinski@gmail.com)
 */
public class Direction {

    public static final Direction UP = new Direction("UP", 0.0f);
    public static final Direction DOWN = new Direction("DOWN", 180.0f);
    public static final Direction LEFT = new Direction("LEFT", 270.0f);
    public static final Direction RIGHT = new Direction("RIGHT", 90.0f);
    
    private final String id;
    private final float angle;
    
    private Direction(String id, float angle){
        this.id = id;
        this.angle = angle;
    }

    /**
     * @return all defined directions
     */
    public static Direction[] getAll(){
    	return new Direction[]{UP, DOWN, LEFT, RIGHT};
    }
    
    /**
     * @return true if it is horizontal direction
     */
    public boolean isHorizontal(){
    	return this == LEFT || this == RIGHT;
    }
    
    /**
     * @return true if it is vertical direction
     */
    public boolean isVertical(){
    	return this == UP || this == DOWN;
    }

    /**
     * @return representing angle value
     */
    public float getAngle(){
    	return angle;
    }
    
    /**
     * @see java.lang.Object#toString()
     */
    public String toString() {
    	return id;
    }
    
}
