<template>
  <div class="solar-system">
    <h1>☀️ 太阳系</h1>
    
    <div class="intro">
      <p>
        太阳系是由太阳及其引力束缚的天体共同组成的系统，包括八大行星、卫星、小行星、彗星与无数尘埃。
        目前普遍认为，太阳系诞生于约 46 亿年前一次巨大的分子云塌缩：中心形成太阳，周围的原行星盘逐渐凝聚出行星。
      </p>
    </div>

    <div class="section">
      <h2>太阳系的基本结构</h2>
      <p>
        太阳占据了太阳系绝大部分质量（约 99.86%）。除太阳外，木星是最“重”的成员，几乎承载了剩余质量中的大头。
        太阳系通常分为内侧与外侧：
        内侧四颗（水星、金星、地球、火星）以岩石和金属为主，表面可见山脉与陨石坑；
        外侧四颗（木星、土星、天王星、海王星）体积和质量更大，其中木星和土星是气态巨行星，天王星和海王星属于冰巨星。
      </p>
    </div>

    <div class="planets-overview">
      <h2>八大行星一览</h2>
      <div class="planet-grid">
        <router-link to="/planets/mercury" class="planet-card">
          <span class="planet-emoji">☿️</span>
          <h3>水星</h3>
          <p>距离太阳最近</p>
        </router-link>
        <router-link to="/planets/venus" class="planet-card">
          <span class="planet-emoji">♀️</span>
          <h3>金星</h3>
          <p>太阳系最热行星</p>
        </router-link>
        <router-link to="/planets/earth" class="planet-card">
          <span class="planet-emoji">🌍</span>
          <h3>地球</h3>
          <p>我们的家园</p>
        </router-link>
        <router-link to="/planets/mars" class="planet-card">
          <span class="planet-emoji">🔴</span>
          <h3>火星</h3>
          <p>红色星球</p>
        </router-link>
        <router-link to="/planets/jupiter" class="planet-card">
          <span class="planet-emoji">🟠</span>
          <h3>木星</h3>
          <p>体积最大</p>
        </router-link>
        <router-link to="/planets/saturn" class="planet-card">
          <span class="planet-emoji">🪐</span>
          <h3>土星</h3>
          <p>著名光环</p>
        </router-link>
        <router-link to="/planets/uranus" class="planet-card">
          <span class="planet-emoji">🔵</span>
          <h3>天王星</h3>
          <p>冰巨星</p>
        </router-link>
        <router-link to="/planets/neptune" class="planet-card">
          <span class="planet-emoji">💙</span>
          <h3>海王星</h3>
          <p>已知最远行星</p>
        </router-link>
      </div>
    </div>

    <div class="section">
      <h2>关键数据</h2>
      <ul class="facts-list">
        <li><strong>年龄：</strong>约 46 亿年</li>
        <li><strong>尺度：</strong>若按奥尔特云外缘估计，直径可达约 2874.6 亿千米（概念性范围）</li>
        <li><strong>行星数量：</strong>8</li>
        <li><strong>官方确认的矮行星：</strong>5（例如冥王星、谷神星等）</li>
        <li><strong>已知卫星数量：</strong>200+（持续更新）</li>
        <li><strong>小行星带：</strong>位于火星与木星之间</li>
        <li><strong>柯伊伯带：</strong>位于海王星轨道之外</li>
      </ul>
    </div>

    <div class="section">
      <h2>小天体与“边缘地带”</h2>
      <p>
        除了行星与卫星，太阳系还有数量庞大的小天体：
        小行星多集中在火星与木星之间的主带，也有一部分成为近地小行星；彗星通常来自柯伊伯带或更遥远的奥尔特云，
        当它们靠近太阳时会形成彗发与彗尾。
        这些天体保存了早期太阳系的“化石信息”，对研究行星形成非常关键。
      </p>
    </div>

    <div class="section">
      <h2>我们如何探索太阳系</h2>
      <p>
        人类对太阳系的认识来自望远镜观测与航天探测的共同推动：
        从近地轨道的观测卫星到飞掠、环绕、着陆与采样返回任务，探测器为我们带回了行星表面地貌、
        大气组成、磁场与引力场等大量数据。未来，深空探测与载人探月/探火将进一步改写我们对太阳系的理解。
      </p>
    </div>
  </div>
</template>

<style scoped>
.solar-system { animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

h1 { font-size: 2rem; margin-bottom: 20px; color: #13294B; font-weight: 700; }

.intro {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 1px solid #e5e7eb;
  border-left: 4px solid #FF5F05;
}
.intro p { line-height: 1.8; color: #4b5563; }

.section {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;
  border: 1px solid #e5e7eb;
}
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.section p { line-height: 1.8; color: #4b5563; }

.planets-overview { margin-bottom: 30px; }
.planets-overview h2 { color: #13294B; margin-bottom: 20px; font-weight: 600; }

.planet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
}

.planet-card {
  background: #ffffff;
  padding: 25px 20px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}
.planet-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  border-color: #13294B;
}
.planet-emoji { font-size: 2.5rem; display: block; margin-bottom: 12px; }
.planet-card h3 { color: #13294B; margin-bottom: 5px; font-weight: 600; }
.planet-card p { color: #6b7280; font-size: 0.85rem; }

.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.facts-list li:last-child { border-bottom: none; }
.facts-list strong { color: #13294B; }
</style>
