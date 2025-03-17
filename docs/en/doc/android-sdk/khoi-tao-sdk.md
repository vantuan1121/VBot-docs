---
outline: deep
---

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>

# Initialize SDK

Instructions for initializing VBot SDK in Android project.

<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">

<GitHubButton />
</a>

## Connect

```KOTLIN
// Initialize VBotClient
client = VBotClient(context)
// Start VBotClient
client.startClient()
// Check if VBotClient has started
client.clientIsStart()
```

## Disconnect

```KOTLIN
client.stopClient()
```