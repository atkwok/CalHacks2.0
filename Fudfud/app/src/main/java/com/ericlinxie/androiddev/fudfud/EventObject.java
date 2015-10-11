package com.ericlinxie.androiddev.fudfud;

import android.os.Parcel;
import android.os.Parcelable;

/**
 * Created by ericlinxie on 10/10/15.
 */
public class EventObject implements Parcelable {

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
    public int describeContents() {
        return 0;
    }

    public void writeToParcel(Parcel out, int flags) {
        out.writeInt(mData);
    }

    public static final Parcelable.Creator<EventObject> CREATOR
            = new Parcelable.Creator<EventObject>() {
        public EventObject createFromParcel(Parcel in) {
            return new EventObject(in);
        }

        public EventObject[] newArray(int size) {
            return new EventObject[size];
        }
    };

    public EventObject(Parcel in) {
        mData = in.readInt();
    }
}