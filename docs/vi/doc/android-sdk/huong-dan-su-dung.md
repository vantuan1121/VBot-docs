---
outline: deep
---

# Hướng dẫn sử dụng

Hướng dẫn tích hợp VBot SDK trên Android.

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>
<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">
<GitHubButton />
</a>

## Lắng nghe các sự kiện

```KOTLIN

private var listener = object : ClientListener() {
	// Lắng nghe sự kiện đăng ký tài khoản
	// status:
	// • OK
	// • Progress
	// • Error
	// • None
	override fun onAccountRegistrationState(status: AccountRegistrationState, reason: String) {
	}

	// Lắng nghe trạng thái của cuộc gọi
	// state:
	// • Null
	// • Calling
	// • Outgoing
	// • Incoming
	// • Early
	// • Connecting
	// • Confirmed
	// • Disconnected
	override fun onCallState(state: CallState) {
	}

	// Lắng nghe lỗi
	// erCode:
	// ⦁ BadRequest(400),
	// ⦁ Forbidden(403),
	// ⦁ SeverError(500),
	// ⦁ WrongParam(-1),
	// ⦁ Unknown(-1000),
	// ⦁ timeout(-1001),
	// ⦁ DataEmpty(-1002)

	override fun onErrorCode(erCode: Int) {
	}
}

client.addListener(listener)
client.removeListener(listener)
```

## Tài khoản

```KOTLIN

// Đăng ký tài khoản
// token: Token của user (Tạo tài khoản SDK để lấy token)
// tokenFirebase: Firebase Token
client.registerAccount(token,tokenFirebase)

// Lấy trạng thái tài khoản
client.getStateAccount()

// Lấy tên tài khoản
client.getAccountUsername()

// Đăng xuất tài khoản
client.logout()

// Huỷ đăng ký và xoá tài khoản 
client.unregisterAndDeleteAccount()
```

## Hotline

```KOTLIN

// Lấy danh sách hotline
client.getListHotline()

// Trả về danh sách Hotline
// ⦁ listHotline: Dánh sách Hotline
// ⦁ Name
// ⦁ PhoneNumber
```

## Gọi đến

```KOTLIN
// Tạo cuộc gọi đến
// transId: được trả về ở dữ liệu thông báo
client.addIncomingCall(transId)

// Bắt đầu đổ chuông
client.startRinging()

// Dừng đổ chuông
client.stopRinging()

// Tắt cuộc gọi 
client.hangupCall()

// Trả lời cuộc gọi
client.answerIncomingCall()
```

## Gọi đi

```KOTLIN
// Tạo cuộc gọi đi
client.addOutgoingCall(hotline, phone)
```

## Thao tác trong cuộc gọi

```KOTLIN

// Kiểm tra cuộc gọi có tồn tại không
client.isCall()

// Bật/Tắt micro
client.setMute(isMute)

// Thời gian gọi
client.getDuration()

// Gửi DTMF
client.senDTMF(string)

// Lấy tên người gọi đến
client.getRemoteAddressCall()

// Giữ cuộc gọi
client.setHold(boolean)

// Tắt cuộc gọi
client.hangupCall()
```
