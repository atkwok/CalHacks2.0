package com.ericlinxie.androiddev.fudfud;

/**
 * Created by ericlinxie on 10/10/15.
 */
public class EventObject {

    String title;
    String description;
    String locationName;
    Double latitude;
    Double longitude;

    public EventObject(String title, String description, String locationName, Double latitude, Double longitude) {
        this.title = title;
        this.description = description;
        this.locationName = locationName;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    @Override
    public String toString() {
        return "title: " + title + " " + "description: " + description + " " + "location name: " + locationName +
                " " + "latitude: " + latitude + " " + "longitude: " + longitude;
    }
}
