---
outline: deep
---


# Cấu hình SDK

Hướng dẫn thêm VBot Android SDK vào dự án của bạn.

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>
<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">
<GitHubButton />
</a>

## Tải xuống SDK 

Tải VBot Android SDK tại đây

<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">
<GitHubButton />
</a>

## Thêm SDK vào Project

Copy <span class="highlight-text">VBot-Android-SDK.aar</span> ích và thời hạn sử dụng. <span class="highlight-text">libs </span>

![Cauhinhsdk](/CauhinhSDK/Cauhinhsdk.png)

Mở file <span class="highlight-text"> build.gradle(Module :app) </span> trong mục <span class="highlight-text"> dependencies </span> thêm dòng sau:

```JSON
dependencies {
	api fileTree(dir: 'libs', include: ['*.aar'])
}
```