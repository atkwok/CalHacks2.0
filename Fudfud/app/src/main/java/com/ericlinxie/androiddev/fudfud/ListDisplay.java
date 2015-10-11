package com.ericlinxie.androiddev.fudfud;

import android.content.Intent;
import android.os.Bundle;
import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.ericlinxie.androiddev.fudfud.EventObject;
import com.ericlinxie.androiddev.fudfud.MainActivity;
import com.ericlinxie.androiddev.fudfud.R;

import java.util.ArrayList;

public class ListDisplay extends AppCompatActivity {
    // Array of strings...
    String[] mobileArray = {"Android","IPhone","WindowsMobile","Blackberry","WebOS","Ubuntu","Windows7","Max OS X"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = getIntent();
//        ArrayList<Integer> theDistances = intent.getIntegerArrayListExtra(MainActivity.THEDISTANCES);
//        ArrayList<EventObject> theObjects = intent.getParcelableArrayListExtra(MainActivity.THEEVENTS);
//        ArrayList<String> toAdapter = new ArrayList<String>();
//        for(int index = 0; index < theObjects.size(); index++){
//            toAdapter.add(theObjects.get(index).toString());
//        }
        ArrayList<String> toAdapter = intent.getStringArrayListExtra(MainActivity.THEDESCRIPTIONS);

        setContentView(R.layout.activity_list_display);


        ArrayAdapter adapter = new ArrayAdapter<String>(this, R.layout.activity_listview, toAdapter);

        ListView listView = (ListView) findViewById(R.id.mobile_list);
        listView.setAdapter(adapter);

    }

}