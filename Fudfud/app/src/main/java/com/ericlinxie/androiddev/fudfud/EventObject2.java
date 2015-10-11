package com.ericlinxie.androiddev.fudfud;

import android.os.Parcelable;

/**
 * Created by ericlinxie on 10/11/15.
 */
public class EventObject2 {


        String title;
        String description;
        String locationName;
        Double latitude;
        Double longitude;
        private int mData;

        public void addingEventObject(String title, String description, String locationName, Double latitude, Double longitude) {
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
