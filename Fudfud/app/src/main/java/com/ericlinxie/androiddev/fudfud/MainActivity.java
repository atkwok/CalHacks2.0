package com.ericlinxie.androiddev.fudfud;

import java.util.ArrayList;

import android.os.Parcel;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.content.Intent;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;
import android.view.LayoutInflater;
import android.view.*;
import android.util.Log;
import org.json.*;


import com.facebook.AccessToken;
import com.facebook.AccessTokenSource;
import com.facebook.AccessTokenTracker;
import com.facebook.GraphRequest;
import com.facebook.GraphRequestAsyncTask;
import com.facebook.GraphResponse;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.FacebookSdk;
import com.facebook.login.LoginManager;
import com.facebook.login.widget.LoginButton;
import com.facebook.login.LoginResult;
import com.facebook.FacebookException;
import com.facebook.FacebookCallback;
import com.facebook.CallbackManager;


import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.TreeMap;

public class MainActivity extends AppCompatActivity {
    CallbackManager callbackManager;
    JSONObject yourEvents;
    public final static String EXTRA_MESSAGE = "com.ericlinxie.androiddev.helloworld.MESSAGE";
    ArrayList<EventObject> events = new ArrayList<EventObject>();
    TreeMap<Integer, EventObject> treeEvents = new TreeMap<Integer, EventObject>();
    double lat = 37.76;
    double lon = -122.427;
    public static String THEDISTANCES = "the distances";
    public static String THEEVENTS = "the events";
    public static String THEDESCRIPTIONS = "the descriptions";
    boolean done = false;
    int dummy = 0;

    final Parcel p1 = Parcel.obtain();

    ArrayList<String> theDescriptions = new ArrayList<String>();
    MainActivity theActivity = this;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        FacebookSdk.sdkInitialize(getApplicationContext());
        setContentView(R.layout.activity_main);
        AccessToken accessToken;
        AccessToken dummyToken;

//        final TextView info = (TextView) findViewById(R.id.info);
        final LoginButton loginButton;
        loginButton = (LoginButton) findViewById(R.id.login_button);
        loginButton.setReadPermissions("user_friends, user_events");
        callbackManager = CallbackManager.Factory.create();
        LoginManager.getInstance().registerCallback(callbackManager,
                new FacebookCallback<LoginResult>() {
                    @Override
                    public void onSuccess(LoginResult loginResult) {
                        // App code
                        Log.d("eric",
                                "User ID: "
                                        + loginResult.getAccessToken().getUserId() + " Auth Token: "
                                        + loginResult.getAccessToken().getToken());

                    }

                    @Override
                    public void onCancel() {
                        // App code
                        Log.d("eric","Login attempt canceled.");

                    }

                    @Override
                    public void onError(FacebookException exception) {
                        // App code
                        Log.d("eric","Login attempt failed.");

                    }
                });
//        dummyToken = new AccessToken("1634560356811256|zLyNLov3p5e6W3w2vWH97wzLWnY", "", "", new ArrayList<>(),
//                AccessTokenSource.WEB_VIEW, new Date(), new Date()) {
//        })
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        callbackManager.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
    @Override
    protected void onResume() {
        super.onResume();

        // Logs 'install' and 'app activate' App Events.
        AppEventsLogger.activateApp(this);
    }
    @Override
    protected void onPause() {
        super.onPause();

        // Logs 'app deactivate' App Event.
        AppEventsLogger.deactivateApp(this);
    }


    public MainActivity() {
    }

    /** Called when the user clicks the Send button */
    public void sendMessage(View view){
        //Do something in response to the button


        Log.d("is error", "above");
        AccessToken theToken = AccessToken.getCurrentAccessToken();
        if(theToken == null){
            return;
        }
        Log.d("is error", "above");

        GraphRequest request = GraphRequest.newGraphPathRequest(
                theToken,
                "/search",
                new GraphRequest.Callback() {
                    @Override

                    public void onCompleted(GraphResponse response) {
                        // Insert your code here
                        yourEvents = response.getJSONObject();
                        Intent intent = new Intent(theActivity, ListDisplay.class);
                        try {

                            JSONArray data = response.getJSONObject().getJSONArray("data");
                            String description;
                            String title;
                            String locationName;
                            JSONObject placeTemp;
                            double longitude;
                            double latitude;

                            String[] searchFreeFood = { "free food", "free refreshments",
                                                "free lunch","free sliver","free chipotle",
                                    "provided", "free dinner", "meal provided", "refreshments", "will be served"};
                            int isFreeFood;
                            EventObject singleEvent;

                            Log.d("to the", "loop");
                            Log.d("data", data.toString());
                            for (int i = 0; i < data.length(); i++) {
                                Log.d("get the", "description");
                                if(!data.getJSONObject(i).has("description")){
                                    description = " ";
                                }
                                else {
                                    description = data.getJSONObject(i).getString("description");
                                }
                                Log.d("get the", "title");
                                if(!data.getJSONObject(i).has("name")){
                                    title = " ";
                                }
                                else{
                                    title = data.getJSONObject(i).getString("name");
                                }
                                Log.d("before the", "search");
                                Log.d("description: ", description);
                                for (int j = 0; j < searchFreeFood.length; j++ ) {
                                    if (description.indexOf(searchFreeFood[j]) != -1 || title.indexOf(searchFreeFood[j]) != -1) {
                                        if (data.getJSONObject(i).has("place")) {
                                            placeTemp = data.getJSONObject(i).getJSONObject("place");
                                            locationName = placeTemp.getString("name");
                                            Log.d("To the ", "place");
                                            if (placeTemp.has("location")) {
                                                latitude = placeTemp.getJSONObject("location").getDouble("latitude");
                                                longitude = placeTemp.getJSONObject("location").getDouble("longitude");
                                            } else {
                                                latitude = 0.0;
                                                longitude = 0.0;
                                            }
                                        }
                                        else{
                                            locationName = "no where";
                                            latitude = 0.0;
                                            longitude = 0.0;
                                        }
                                        Log.d("to the", "new object");
                                        singleEvent = new EventObject(p1);
                                        singleEvent.addingEventObject(title, description, locationName, latitude, longitude);
                                        Log.d("add the", "new object");
                                        treeEvents.put((int)(latitude - lat + longitude - lon), singleEvent);
                                        theDescriptions.add(description);
                                        break;
                                    }
                                }
                                Log.d("at the ", "end of loop");
                            }
//                            Log.d("print the ", "object list");
//                            for (int g = 0; g < treeEvents.size(); g++){
//                                Log.d("title: ", events.get(g).title);
//                                Log.d("event: ", events.get(g).toString());
//                            }
                            done = true;
                        }
                            catch (Exception e) {Log.d("wow", "this parsing doesn't work");
                                done = true;
                            }
                        Log.d("the json", yourEvents.toString());
                        intent.putExtra(THEDESCRIPTIONS, theDescriptions);
                        theDescriptions = new ArrayList<String>();

                        startActivity(intent);

                    }
                });

        Bundle parameters = new Bundle();
        parameters.putString("q", "f");
        parameters.putString("type", "event");
        parameters.putString("center", "37.76,-122.427");
        parameters.putString("distance", "10");
        parameters.putString("limit","50");
        request.setParameters(parameters);
        GraphRequestAsyncTask task = request.executeAsync();

        try {
            List output = task.get();
//            Intent intent = new Intent(this, ListDisplay.class);
//            while (done == false){
//                dummy = 1 + 1;
//            }
            Log.d("done: ", Boolean.toString(done));

            ArrayList<Integer> theDistances = new ArrayList<>(treeEvents.keySet());
//        intent.putExtra(THEDISTANCES, theDistances);
            ArrayList<EventObject> theEvents = new ArrayList<>(treeEvents.values());
//        intent.putExtra(THEEVENTS, theEvents);
            theDescriptions.add("stuff to add");
            theDescriptions.add("by David Yan, Alan Kwok, Eric Linxie, and Tom Cheng");
            theDescriptions.add("maybe there is no free food :O");
//            intent.putExtra(THEDESCRIPTIONS,theDescriptions);
//
//            startActivity(intent);
        }
        catch (Exception e){Log.d("failed", "completely");}

//        ArrayAdapter<EventObject> adapter = new ArrayAdapter<EventObject>(this,
//                android.R.layout.simple_list_item_1, events);

//        ListView listView = (ListView) findViewById(R.id.listview);
//        listView.setAdapter(adapter);
//        String message =  " smuckers";


    }


//    @Override
//    public View onCreateView(
//            LayoutInflater inflater,
//            ViewGroup container,
//            Bundle savedInstanceState) {
//        View view = inflater.inflate(R.layout.activity_main, container, false);
//        LoginButton loginButton;
//        loginButton = (LoginButton) view.findViewById(R.id.login_button);
//        loginButton.setReadPermissions("user_friends, user_events");
//        // If using in a fragment
////        loginButton.setFragment(this);
//        // Other app specific specialization
//
//        // Callback registration
//
////        loginButton.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
////            @Override
////            public void onSuccess(LoginResult loginResult) {
////                // App code
////            }
////
////            @Override
////            public void onCancel() {
////                // App code
////            }
////
////            @Override
////            public void onError(FacebookException exception) {
////                // App code
////            }
////        });
//    return view;}

}
