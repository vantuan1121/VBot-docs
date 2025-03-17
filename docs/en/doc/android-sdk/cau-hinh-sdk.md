---
outline: deep
---

<script setup>
import GitHubButton from '../../../.vitepress//components/GitHubButton.vue'
</script>

# Configure SDK

Instructions for adding the VBot Android SDK to your project.

<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">

<GitHubButton />
</a>

## Download SDK

Download VBot Android SDK here

<a href="https://github.com/quocdat1804/vbot-sdk-demo" target="_blank" style="text-decoration: none;">
<GitHubButton />
</a>

## Add SDK to Project

Copy <span class="highlight-text">VBot-Android-SDK.aar</span> benefits and expiration date. <span class="highlight-text">libs </span>

![Cauhinhsdk](/CauhinhSDK/Cauhinhsdk.png)

Open the file <span class="highlight-text"> build.gradle(Module :app) </span> in the <span class="highlight-text"> dependencies </span> section add the following line:

```JSON
dependencies {
 api fileTree(dir: 'libs', include: ['*.aar'])
}
```