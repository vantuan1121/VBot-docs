---
outline: deep
---

# Khởi tạo SDK

Hướng dẫn khởi tạo VBot SDK trong project Android.

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>
<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">
<GitHubButton />
</a>

## Kết nối

```KOTLIN
// Khởi tạo VBotClient
client = VBotClient(context)
// Start VBotClient	
client.startClient()
// Kiểm tra VBotClient đã bắt đầu chưa
client.clientIsStart()		
```

## Ngắt kết nối

```KOTLIN
client.stopClient()			
 ```
