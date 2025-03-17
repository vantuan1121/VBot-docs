---
outline: deep
---

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>

# Push Notification Configuration

Guide to configuring incoming call notifications for VBot iOS SDK.

<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">
<GitHubButton />
</a>

## Steps to Follow

1. Enable VoIP in Xcode Project
2. Create a VoIP Certificate
3. Update Information on VBot.vn

## Enable VoIP in Xcode Project

Select <span class="highlight-text">Xcode Project</span> → <span class="highlight-text">Capabilities</span>

Enable <span class="highlight-text">Background Modes</span> and <span class="highlight-text">Push Notifications</span>

In <span class="highlight-text">Background Modes</span>, check the following:
- <span class="highlight-text">Audio, AirPlay, and Picture in Picture</span>
- <span class="highlight-text">Voice over IP</span>
- <span class="highlight-text">Background Fetch</span>
- <span class="highlight-text">Remote Notifications</span>

![ios1](/iOSSDK/ios1.png)

Open the `info.plist` file and add the following key:

```XML
<key>NSMicrophoneUsageDescription</key>
<string>Microphone access is necessary to be able to make calls.</string>
```

## Create a VoIP Certificate

### Generate a CSR File

Open <span class="highlight-text">Keychain Access</span> on macOS.

From the menu, select <span class="highlight-text">Keychain Access</span> → <span class="highlight-text">Certificate Assistant</span> → <span class="highlight-text">Request a Certificate From a Certificate Authority</span>

![ios2](/iOSSDK/ios2.png)

Enter the file name (e.g., `demo_sdk.certSignsRequest`) → Select <span class="highlight-text">Saved to disk</span> → Click <span class="highlight-text">Save</span>

### Generate a Certificate File

Go to <span class="highlight-text">Certificates, Identifiers & Profiles - Apple Developer</span> → <span class="highlight-text">Create a New Certificate</span> → Select <span class="highlight-text">VoIP Services Certificate</span> → Click <span class="highlight-text">Continue</span>

![ios3](/iOSSDK/ios3.png)

Select the <span class="highlight-text">App ID</span> of your Xcode project → Click <span class="highlight-text">Continue</span>

![ios4](/iOSSDK/ios4.png)

Upload the <span class="highlight-text">CSR</span> file generated from <span class="highlight-text">Keychain</span> → After successful upload, click <span class="highlight-text">Continue</span>

![ios5](/iOSSDK/ios5.png)

Click <span class="highlight-text">Download</span>

![ios6](/iOSSDK/ios6.png)

Open the downloaded file. The <span class="highlight-text">Certificate</span> will be added to <span class="highlight-text">Keychain</span>.

Export the certificate in <span class="highlight-text">.p12</span> format from <span class="highlight-text">Keychain</span>.

![ios7](/iOSSDK/ios7.png)

Extract two files: <span class="highlight-text">certificate key</span> and <span class="highlight-text">private key</span> from the `.p12` file using the Terminal command:

```POWERSHELL
openssl pkcs12 -in cred.p12 -nokeys -out cert.pem -nodes
```

<div class="note">
<span class="highlight-text">cert.pem</span> is your <span class="highlight-text">certificate key</span> file.
</div>

Then, run the following command:

```POWERSHELL
openssl pkcs12 -in cred.p12 -nocerts -out key.pem -nodes
```

<div class="note">
<span class="highlight-text">key.pem</span> is your <span class="highlight-text">private key</span> file.
</div>

Open both files using a text editor and remove any text outside of:
- <span class="highlight-text">-----BEGIN CERTIFICATE-----</span> and <span class="highlight-text">-----END CERTIFICATE-----</span>
- <span class="highlight-text">-----BEGIN RSA PRIVATE KEY-----</span> and <span class="highlight-text">-----END RSA PRIVATE KEY-----</span>

**cert.pem**

```JAVASCRIPT
-----BEGIN CERTIFICATE-----
ZXJ0aWZpY2F0aW9uIEF1dGhvcmrlgLb1tsHGn6pzNzANBgkqhkiG9w0BAQsFADB1
MUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBD
-----END CERTIFICATE-----
```

**key.pem**

```JAVASCRIPT
-----BEGIN RSA PRIVATE KEY-----
ZXJ0aWZpY2F0aW9uIEF1dGhvcmrlgLb1tsHGn6pzNzANBgkqhkiG9w0BAQsFADB1
MUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBD
-----END RSA PRIVATE KEY-----
```

## On VBot.vn

Log in to the VBot website.

Select <span class="highlight-text">Settings</span> → <span class="highlight-text">SDK Mobile Push Credentials</span> → <span class="highlight-text">Add New</span>

Fill in the details as shown in the image and paste the information from the two generated files.

Click <span class="highlight-text">Save</span>

![ios8](/iOSSDK/ios8.png)

