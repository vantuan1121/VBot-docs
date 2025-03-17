---
    outline: deep
---

# Hướng dẫn sử dụng

Hướng dẫn sử dụng VBot iOS SDK.

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>
<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">
<GitHubButton />
</a>

## Import VBot SDK

Mở <span class="highlight-text"> AppDelegate.swift </span>

Import SDK và khởi tạo thư viện

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

## Login SDK

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
Trong đó: <br>
- <span class="highlight-text">token</span>: Token SDK của tài khoản VBot <br>
- <span class="highlight-text">displayName</span>: Tên của tài khoản <br>
- <span class="highlight-text"> error</span>: Lỗi trả về khi đăng nhập không thành công
</div>

## Logout SDK

```SWIFT
client.disconnect { error in
	if error != nil {
		// logout error
		return
	}
	// logout successful
}
```

## Lấy danh sách hotline

```SWIFT
client.getHotlines { hotlines, error in
	if error != nil {
		// get hotline error
		return
	}
	// get hotline successful
}
```
## Gọi đi

```SWIFT
client.startCall(hotline: selecedHotine!.phoneNumber, phoneNumber: phoneNumber) { call, error in
	if error != nil {
		// start call error
		return
	}
	// start call successful
}
```

## Lắng nghe các sự kiện

Bạn hãy sử dụng NotificationCenter để lắng nghe các sự kiện cuộc gọi của VBot của VBot

| Notification.Name.CallKitProviderDelegateOutboundCallStartedNotification  | Sự kiện thực hiện cuộc gọi bằng CallKit     |
|---------------------------------------------------------------------------|---------------------------------------------|
| Notification.Name.CallKitProviderDelegateInboundCallAcceptedNotification  | Sự kiện chấp nhận cuộc gọi đến bằng CallKit |
| Notification.Name.CallKitProviderDelegateInboundCallRejectedNotification  | Sự kiện kết thúc cuộc gọi bằng CallKit      |
| Notification.Name.VBotCallStateChanged                                    | Trạng thái của cuộc gọi                     |


