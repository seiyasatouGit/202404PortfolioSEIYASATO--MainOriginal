package com.example;

import java.io.IOException;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class FetchData {
    public static void main(String[] args) {
        // ロンドンの天気情報を取得
        String cityUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY";
        
        // 東京の緯度経度を使用して天気情報を取得
        String latLonUrl = "http://api.openweathermap.org/data/2.5/weather?lat=35.6785&lon=139.6823&appid=YOUR_API_KEY";

        // 使用するURLを指定（必要に応じて切り替え）
        String url = latLonUrl;  // または cityUrl;

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
