---
outline: deep
---

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>

# Push Notification

VBot Android SDK uses Google Firebase to receive incoming call notifications.

<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">
<GitHubButton />
</a>

## On Firebase

Create a Project

Add your app to the newly created Project

Download the file <span class="highlight-text"> google-services.json </span>

Go to <span class="highlight-text"> Project Setting </span> -> <span class="highlight-text"> Service accounts </span> -> <span class="highlight-text"> Firebase Admin SDK </span>

In the screen that appears. Select <span class="highlight-text"> Java </span>

Select <span class="highlight-text"> Generate new private key </span>

![Push1](/Push-Notification/Push1.png)

Open the downloaded file. Copy all the content in the file

## On VBot Website

Use Admin account to log in to website [VBot.vn]()

Access <span class="highlight-text"> Settings </span> -> <span class="highlight-text"> SDK Mobile Push Credentials </span>

Select <span style="color: #22c55e; border: 1px solid #22c55e; padding: 2px 6px; border-radius: 4px; ">+ Add new</span>

![Push2](/Push-Notification/Push2.png)

Enter the name of the app

Select the type as <span class="highlight-text"> FCM Push Credential</span>

Paste the content of the file just copied in the step above into the <span class="highlight-text"> KEY </span> box

Select <span class="highlight-text"> Save </span>

![Push3](/Push-Notification/Push3.avif)

## On your App Project

Add <span class="highlight-text"> google-services.json </span> to the <span class="highlight-text"> app </span> folder

![Push4](/Push-Notification/Push4.png)

Add your app to the newly created Project

In the <span class="highlight-text"> build.gradle(Module :app) </span> file

In the <span class="highlight-text"> dependencies </span> section

Add the following 2 lines:

```JSON
implementation platform('com.google.firebase:firebase-bom:32.4.0')
implementation 'com.google.firebase:firebase-messaging-ktx:23.3.1'
```
In the <span class="highlight-text"> plugins section </span>

Add the following line:

```JSON
id 'com.google.gms.google-services'
```

In the <span class="highlight-text"> build.gradle(Project) </span> file

In the <span class="highlight-text"> plugins </span> section

Add the following line:

```JSON
id 'com.google.gms.google-services'
```
In the <span class="highlight-text"> manifests </span> file
in the <span class="highlight-text"> application </span> folder

Add the following lines:

```XML
<service
android:name=".FirebaseService"
android:exported="false"
android:stopWithTask="false">
<intent-filter>
<action android:name="com.google.firebase.MESSAGING_EVENT" />
</intent-filter>
</service>
```
Create a class to receive notifications call

```KOTLIN
class FirebaseService : FirebaseMessagingService() {
// Receive call notification
override fun onMessageReceived(remoteMessage: RemoteMessage) {
}
}
```