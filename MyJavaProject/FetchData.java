package com.example;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.IOException;

public class FetchData {
    public static void main(String[] args) {
        String url = "【API URL】";

        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url(url)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);

            String responseData = response.body().string();

            JsonObject json = JsonParser.parseString(responseData).getAsJsonObject();

            System.out.println(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
