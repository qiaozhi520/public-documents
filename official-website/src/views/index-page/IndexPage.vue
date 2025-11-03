<template>
  <section class="index">
    <!-- Hero Section -->
    <header class="hero">
      <div class="hero-content">
        <div class="logo-badge">TLE</div>
        <h1 class="brand">{{ $t('index.title') }}</h1>
        <p class="tagline">{{ $t('index.mission') }}</p>
      </div>
      <div class="hero-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </header>

    <!-- Mission Points -->
    <section class="block mission-block">
      <div class="section-header">
        <h2 class="block-title">{{ $t('index.missionTitle') }}</h2>
        <div class="title-underline"></div>
      </div>
      <div class="mission-grid">
        <div v-for="(key, index) in missionKeys" :key="key" class="mission-card" :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="mission-icon">
            <component :is="getMissionIcon(key)" />
          </div>
          <h3 class="mission-card-title">{{ $t(`index.missionPoints.${key}.title`) }}</h3>
          <p class="mission-card-desc">{{ $t(`index.missionPoints.${key}.desc`) }}</p>
        </div>
      </div>
    </section>

    <!-- Product -->
    <section class="block product-block">
      <div class="section-header">
        <h2 class="block-title">{{ $t('index.productTitle') }}</h2>
        <div class="title-underline"></div>
      </div>
      <div class="product-content">
        <h3 class="product-name">
          <img class="product-emoji" src="../../assgin/speed-math.png" :alt="$t('index.productName')" />
          {{ $t('index.productName') }}
        </h3>
        <div class="gallery" role="list" aria-label="product gallery">
          <div v-for="(src, i) in images" :key="i" class="gallery-item">
            <img :src="src" :alt="$t('index.productName') + ' ' + (i+1)" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-label">{{ $t('index.productName') }}</span>
            </div>
          </div>
        </div>
        <p class="desc">{{ $t('index.productDesc') }}</p>
      </div>
    </section>

    <!-- Contact -->
    <section class="block contact-block">
      <div class="section-header">
        <h2 class="block-title">{{ $t('index.contactTitle') }}</h2>
        <div class="title-underline"></div>
      </div>
      <div class="contact-container">
        <div class="contact-card">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <h3 class="contact-label">Email</h3>
          <a class="email-link" href="mailto:qiaozhi943@gmail.com">qiaozhi943@gmail.com</a>
          <p class="contact-hint">{{ $t('index.contactHint') }}</p>
        </div>
      </div>
    </section>

    <!-- Footer Wave -->
    <div class="footer-wave">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import img1 from '@/assgin/speedMath/1.png'
import img2 from '@/assgin/speedMath/2.png'
import img3 from '@/assgin/speedMath/3.png'
import img4 from '@/assgin/speedMath/4.png'
import img5 from '@/assgin/speedMath/5.png'
import img6 from '@/assgin/speedMath/6.png'
import img7 from '@/assgin/speedMath/7.png'
import img8 from '@/assgin/speedMath/8.png'
import img9 from '@/assgin/speedMath/9.png'

const missionKeys = ['simple', 'convenient', 'practical', 'secure', 'free', 'family']

// Placeholder images with portrait orientation (1280x1920); replace with real assets under /public
const images = ref([
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9
])

// Mission icons as inline SVG components
const getMissionIcon = (key: string) => {
  const icons: Record<string, any> = {
    simple: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 2L2 7l10 5 10-5-10-5z' }),
      h('path', { d: 'M2 17l10 5 10-5' }),
      h('path', { d: 'M2 12l10 5 10-5' })
    ]),
    convenient: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
      h('polyline', { points: '22 4 12 14.01 9 11.01' })
    ]),
    practical: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' })
    ]),
    secure: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
    ]),
    free: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('circle', { cx: '12', cy: '12', r: '10' }),
      h('path', { d: 'M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' }),
      h('path', { d: 'M12 18V6' })
    ]),
    family: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M3 21h18' }),
      h('path', { d: 'M3 10h18' }),
      h('path', { d: 'M5 6h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z' }),
      h('path', { d: 'M9 21v-9a3 3 0 0 1 6 0v9' })
    ])
  }
  return icons[key] || icons.simple
}
</script>

<style scoped>
.index {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

/* Hero Section */
.hero {
  position: relative;
  text-align: center;
  padding: 80px 16px 100px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
}
.hero-content {
  position: relative;
  z-index: 2;
}
.logo-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  line-height: 76px;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: 2px;
}
.brand {
  font-size: 3rem;
  line-height: 1.2;
  margin: 0 0 16px;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.tagline {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.95;
  font-weight: 300;
}
.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}
.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 20s infinite ease-in-out;
}
.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -50px;
  animation-delay: 0s;
}
.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: 10%;
  animation-delay: 5s;
}
.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: -50px;
  animation-delay: 10s;
}
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(180deg); }
}

/* Common Block Styles */
.block {
  padding: 64px 24px;
}
.section-header {
  text-align: center;
  margin-bottom: 48px;
}
.block-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 16px;
  color: #1f2937;
  position: relative;
  display: inline-block;
}
.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  margin: 0 auto;
  border-radius: 2px;
}

/* Mission Points Grid */
.mission-block {
  background: white;
}
.mission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.mission-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 36px 28px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mission-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: scaleX(0);
  transition: transform 0.3s;
}
.mission-card:hover::before {
  transform: scaleX(1);
}
.mission-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
  border-color: #667eea;
}
.mission-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 20px;
  transition: transform 0.3s;
}
.mission-card:hover .mission-icon {
  transform: scale(1.1) rotate(5deg);
}
.mission-card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 12px;
  color: #1f2937;
}
.mission-card-desc {
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.7;
}

/* Product Section */
.product-block {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}
.product-content {
  max-width: 1200px;
  margin: 0 auto;
}
.product-name {
  font-weight: 600;
  font-size: 1.75rem;
  margin: 0 0 48px;
  text-align: center;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.product-emoji {
  width: 48px;
  height: 48px;
  object-fit: contain;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.gallery {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
}
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.gallery-item:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
}
.gallery-item img {
  width: 320px;
  height: 570px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}
.gallery-item:hover img {
  transform: scale(1.05);
}
.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s;
}
.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}
.gallery-label {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}
.desc {
  margin-top: 24px;
  color: #4b5563;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Contact */
.contact-block {
  background: white;
  position: relative;
  padding-bottom: 120px;
}
.contact-container {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
.contact-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 48px;
  text-align: center;
  color: white;
  max-width: 520px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}
.contact-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 70px rgba(102, 126, 234, 0.4);
}
.contact-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}
.contact-icon svg {
  color: white;
  position: relative;
  z-index: 1;
}
.contact-label {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
}
.email-link {
  position: relative;
  display: inline-block;
  font-size: 1.3rem;
  color: white;
  font-weight: 500;
  text-decoration: none;
  padding: 14px 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  margin-top: 8px;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}
.email-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
.contact-hint {
  position: relative;
  margin: 24px 0 0;
  font-size: 1rem;
  opacity: 0.95;
  line-height: 1.6;
}

/* Footer Wave */
.footer-wave {
  position: relative;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
.footer-wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 80px;
  fill: #667eea;
}

/* Responsive */
@media (max-width: 1000px) {
  .brand { font-size: 2.25rem; }
  .block-title { font-size: 1.75rem; }
  .block { padding: 48px 20px; }
  .gallery-item img {
    width: 280px;
    height: 420px;
  }
  .contact-card {
    padding: 40px 32px;
  }
}
@media (max-width: 600px) {
  .hero { padding: 60px 16px 80px; }
  .logo-badge {
    width: 64px;
    height: 64px;
    line-height: 60px;
    font-size: 1.25rem;
  }
  .brand { font-size: 1.75rem; }
  .tagline { font-size: 1rem; }
  .block-title { font-size: 1.5rem; }
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .gallery-item img {
    width: 100%;
    max-width: 320px;
    height: auto;
    aspect-ratio: 2/3;
  }
  .contact-card {
    padding: 32px 24px;
  }
  .email-link {
    font-size: 1.1rem;
    padding: 12px 24px;
  }
  .footer-wave svg {
    height: 60px;
  }
}
</style>
