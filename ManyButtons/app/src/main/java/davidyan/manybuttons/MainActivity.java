package davidyan.manybuttons;

import android.content.Intent;
import android.content.SharedPreferences;
import android.location.Location;
import android.location.LocationListener;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuInflater;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;

import java.text.DateFormat;
import java.util.Date;

public class MainActivity extends AppCompatActivity {
    private boolean canButton;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        canButton = true;
        setContentView(R.layout.activity_main);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        // If your minSdkVersion is 11 or higher, instead use:
        //getActionBar().setDisplayHomeAsUpEnabled(true);
    }

    public void goToLocation(View view) {
        Intent intent = new Intent(this, LocationActivity.class);
        startActivity(intent);
    }

    @Override
    public void onPause()
    {
        super.onPause();
        TextView textView = (TextView) findViewById(R.id.textView);
        textView.setText("Paused");
    }

    @Override
    public void onResume() {
        super.onResume();
        canButton = false;
        CheckBox box = (CheckBox) findViewById(R.id.radioButton);
        box.setChecked(true);
    }

    @Override
    public void onStop()
    {
        super.onStop();
        SharedPreferences settings = getSharedPreferences("prev_settings", 0);
        SharedPreferences.Editor editor = settings.edit();
        EditText editText = (EditText) findViewById(R.id.editText);
        editor.putString("edit text", editText.getText().toString());
        editText.setText("");
        editor.commit();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        switch(item.getItemId()) {
            case R.id.action_search:
                //openSearch();
                return true;
            case R.id.action_settings:
                openSettings();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    public void openSettings()
    {
        SharedPreferences settings = getSharedPreferences("prev_settings", 0);
        String message = settings.getString("edit text", "not destroyed yet");
        TextView textView = (TextView) findViewById(R.id.textView);
        textView.setText(message);
    }

    public void disableButton(View view)
    {
        canButton = !canButton;
    }

    public void buttonClicked(View view)
    {
        if (canButton) {
            TextView textView = (TextView) findViewById(R.id.textView);
            EditText edit = (EditText) findViewById(R.id.editText);
            String message = edit.getText().toString();
            edit.setText("");
            textView.setText(message);
        }
        return;
    }

}
