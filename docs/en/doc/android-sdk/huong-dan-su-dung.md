---
outline: deep
---

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>

# Instructions

Instructions for integrating VBot SDK on Android.

<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">

<GitHubButton />
</a>

## Listen for events

```KOTLIN

private var listener = object : ClientListener() {
// Listen for account registration events
// status:
// • OK
// • Progress
// • Error
// • None
override fun onAccountRegistrationState(status: AccountRegistrationState, reason: String) {
}

// Listen for call status
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

// Listen for errors
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

## Account

```KOTLIN

// Register account
// token: User token (Create SDK account to get token)
// tokenFirebase: Firebase Token
client.registerAccount(token,tokenFirebase)

// Get account state
client.getStateAccount()

// Get account name account
client.getAccountUsername()

// Log out of account
client.logout()

// Unregister and delete account
client.unregisterAndDeleteAccount()

```

## Hotline

```KOTLIN

// Get hotline list
client.getListHotline()

// Return Hotline list
// ⦁ listHotline: Hotline list
// ⦁ Name
// ⦁ PhoneNumber
```

## Incoming call

```KOTLIN
// Create incoming call
// transId: returned in notification data
client.addIncomingCall(transId)

// Start ringing
client.startRinging()

// Stop ringing
client.stopRinging()

// Hang up call
client.hangupCall()

// Answer call call
client.answerIncomingCall()
```

## Calling

```KOTLIN
// Create outgoing call
client.addOutgoingCall(hotline, phone)
```

## In-call operations

```KOTLIN

// Check if call exists
client.isCall()

// Turn microphone on/off
client.setMute(isMute)

// Call duration
client.getDuration()

// Send DTMF
client.senDTMF(string)

// Get caller name
client.getRemoteAddressCall()

// Hold call
client.setHold(boolean)

// Hang up call
client.hangupCall()
```