<script setup>
import DefaultTheme from 'vitepress/theme';
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <div class="custom-footer">
        <div>
          <img src="/app-logo.png" alt="Logo VBot" class="img-logo" />
          <p style="font-weight: bold;">Tổng đài AI đa tính năng</p>
          <br>
          <p>Địa chỉ: 3/4, 163 Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội</p>
          <p>Điện thoại: 0857 066 866</p>
          <p>Email: sales@vbot.vn</p>
          <p>Số ĐKKD: 0106342003</p>
        </div>
        <div>
          <div>
            <div class="icon-frooter">
              <a href="https://www.facebook.com/vbotapp" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-facebook" viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>

              <a href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fmessages%2Ft%2F100252124922062"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-messenger" viewBox="0 0 16 16">
                  <path
                    d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                </svg>
              </a>

              <a href="https://www.youtube.com/@VBotSolution" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube"
                  viewBox="0 0 16 16">
                  <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
            </div>
            <div class="logo-footer">
              <img src="/logo-footer.avif" alt="logo-footer" class="logo-footer" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.custom-footer {
  border-top: 1px solid #222222;
  gap: 100px;
  display: flex;
  padding: 20px 0;
  font-size: 14px;
  justify-content: center;
}

.img-logo {
  margin-bottom: 0;
  width: 30px;
  height: 30px;
}

.logo-footer {
  margin-top: 30px;
  width: 208px;
  height: 79px;

}

.icon-frooter {
  display: flex;
  gap: 20px;
  width: 20px;
  height: 20px;
  fill: #000;
  /* Màu mặc định */
  transition: fill 0.3s ease, transform 0.3s ease;
}

.icon-frooter a:hover svg {
  fill: rgb(251, 247, 247);
  /* Đổi màu khi hover */
  transform: scale(1.2);
  /* Phóng to nhẹ */
}
</style>
