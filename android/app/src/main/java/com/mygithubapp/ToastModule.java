package com.mygithubapp;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class ToastModule extends ReactContextBaseJavaModule {
  private static final String LENGTH_SHORT = "LENGTH_SHORT";
  private static final String LENGTH_LONG = "LENGTH_LONG";

  ToastModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "ToastModule";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(LENGTH_SHORT, Toast.LENGTH_SHORT);
    constants.put(LENGTH_LONG, Toast.LENGTH_LONG);
    return constants;
  }

  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
}