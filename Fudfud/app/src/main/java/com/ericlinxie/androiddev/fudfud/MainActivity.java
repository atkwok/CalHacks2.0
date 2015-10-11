package com.ericlinxie.androiddev.fudfud;

import java.util.ArrayList;

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
    TreeMap<Double, EventObject> treeEvents = new TreeMap<Double, EventObject>();
    double lat = 37.76;
    double lon = -122.427;
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
        loginButton.setReadPermissions("user_friends, user_events, user_photos");
        callbackManager = CallbackManager.Factory.create();
        System.out.print("hello");
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

//        Intent intent = new Intent(this, Main2Activity.class);
        Log.d("is error", "above");
        AccessToken theToken = AccessToken.getCurrentAccessToken();
        Log.d("is error", "above");

        GraphRequest request = GraphRequest.newGraphPathRequest(
                theToken,
                "/search",
                new GraphRequest.Callback() {
                    @Override

                    public void onCompleted(GraphResponse response) {
                        // Insert your code here
                        yourEvents = response.getJSONObject();
                        try {

                            JSONArray data = response.getJSONObject().getJSONArray("data");
                            String description;
                            String title;
                            String locationName;
                            JSONObject placeTemp;
                            double longitude;
                            double latitude;

                            String[] searchFreeFood = {"FREE", "free food", "free refreshments",
                                                "free lunch", "free dinner", "meal provided", "refreshments", "will be served"};
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
                                        singleEvent = new EventObject(title, description, locationName, latitude, longitude);
                                        Log.d("add the", "new object");
                                        treeEvents.put((latitude - lat + longitude - lon), singleEvent);
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

                        }
                            catch (Exception e) {Log.d("wow", "this parsing doesn't work");
                            }
                        Log.d("the json", yourEvents.toString());

                    }
                });

        Bundle parameters = new Bundle();
        parameters.putString("q", ".");
        parameters.putString("type", "event");
        parameters.putString("center", "37.76,-122.427");
        parameters.putString("distance", "10");
        parameters.putString("limit","100");
        request.setParameters(parameters);
        GraphRequestAsyncTask task = request.executeAsync();

        try {
            task.get();
        }
        catch (Exception e){Log.d("failed", "completely");}
//        ArrayAdapter<EventObject> adapter = new ArrayAdapter<EventObject>(this,
//                android.R.layout.simple_list_item_1, events);
//
//        ListView listView = (ListView) findViewById(R.id.listview);
//        listView.setAdapter(adapter);
//        String message =  " smuckers";
//
//        intent.putExtra(EXTRA_MESSAGE, message);
//        startActivity(intent);
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
