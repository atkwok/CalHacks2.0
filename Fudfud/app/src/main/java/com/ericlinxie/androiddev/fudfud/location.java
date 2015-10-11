package com.ericlinxie.androiddev.fudfud;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.location.places.Places;

public class location extends AppCompatActivity implements GoogleApiClient.ConnectionCallbacks {

    private GoogleApiClient mGoogleApiClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mGoogleApiClient = new GoogleApiClient
                .Builder(this)
                .addApi(Places.GEO_DATA_API)
                .addApi(Places.PLACE_DETECTION_API)
                .addConnectionCallbacks(this)
                .addOnConnectionFailedListener(this)
                .build();
    }
    //PendingResult<PlaceLikelihoodBuffer> currLocation = getCurentPlace(GOOGLEAPICLIENT, new PlaceFilter())

    @Override
    protected void onStart() {
        super.onStart();
        mGoogleApiClient.connect();
    }
    public void onConnectionSuspended(int i){
        return;
    }
    public void onConnected(Bundle b){
        return;
    }


    @Override
    protected void onStop() {
        mGoogleApiClient.disconnect();
        super.onStop();
    }

}
