---
    outline: deep
---

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>

# User Guide

Guide to using VBot iOS SDK.

<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">
<GitHubButton />
</a>

## Import VBot SDK

Open <span class="highlight-text">AppDelegate.swift</span>

Import the SDK and initialize the library.

```SWIFT
import UIKit
import VBot
                
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
                
let vbot = VBotPhone.sharedInstance
                
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions:
    [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        vbot.setup()
        return true
    }
}
```

## Login to SDK

```SWIFT
client.connect(token: token) { displayName, error in
	guard let displayName = displayName else {
		// login error
		return
	}
	// login successful
}
```
<div class="note">
Details: <br>
- <span class="highlight-text">token</span>: SDK token of the VBot account <br>
- <span class="highlight-text">displayName</span>: Account name <br>
- <span class="highlight-text">error</span>: Error returned if login fails
</div>

## Logout from SDK

```SWIFT
client.disconnect { error in
	if error != nil {
		// logout error
		return
	}
	// logout successful
}
```

## Retrieve Hotline List

```SWIFT
client.getHotlines { hotlines, error in
	if error != nil {
		// get hotline error
		return
	}
	// get hotline successful
}
```

## Make a Call

```SWIFT
client.startCall(hotline: selectedHotline!.phoneNumber, phoneNumber: phoneNumber) { call, error in
	if error != nil {
		// start call error
		return
	}
	// start call successful
}
```

## Listen for Events

Use NotificationCenter to listen for VBot call events.

| Notification.Name.CallKitProviderDelegateOutboundCallStartedNotification  | Event for making an outbound call using CallKit    |
|---------------------------------------------------------------------------|----------------------------------------------------|
| Notification.Name.CallKitProviderDelegateInboundCallAcceptedNotification  | Event for accepting an inbound call using CallKit  |
| Notification.Name.CallKitProviderDelegateInboundCallRejectedNotification  | Event for ending a call using CallKit              |
| Notification.Name.VBotCallStateChanged                                    | Call state change                                  |

