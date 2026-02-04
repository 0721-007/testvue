<template>
  <div class="sun-page">
    <h1>🌞 太阳</h1>
    
    <div class="intro">
      <p>
        太阳是太阳系的中心恒星，是一团高温等离子体构成的“自发光气体球”。
        它的能量主要来自核心的核聚变反应，并以可见光、紫外线与红外辐射的形式向外释放。
        对地球而言，太阳不仅提供光与热，还深刻影响气候、空间环境与生命演化。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">1,392,700 km</p>
        <p class="stat-desc">约为地球直径的 109 倍</p>
      </div>
      <div class="stat-card">
        <h3>质量</h3>
        <p class="stat-value">1.989 × 10³⁰ kg</p>
        <p class="stat-desc">约为地球质量的 33.3 万倍</p>
      </div>
      <div class="stat-card">
        <h3>表面温度</h3>
        <p class="stat-value">5,500°C</p>
        <p class="stat-desc">核心温度约 1500 万 °C</p>
      </div>
      <div class="stat-card">
        <h3>年龄</h3>
        <p class="stat-value">约 46 亿年</p>
        <p class="stat-desc">一颗“中年”恒星</p>
      </div>
    </div>

    <div class="section">
      <h2>太阳的结构</h2>
      <p>
        太阳的内部和大气可分为多个层次：
        核心（发生核聚变）、辐射层、对流层、光球层（可见“表面”）、色球层和日冕（外层稀薄大气）。
        核心产生的能量需要在辐射层与对流层中经历漫长的“随机行走”，才逐步抵达表面并辐射到太空中。
      </p>
    </div>

    <div class="section">
      <h2>太阳活动</h2>
      <p>
        太阳并非“安静的灯泡”，它会出现太阳黑子、耀斑、日珥与日冕物质抛射（CME）等多种活动现象。
        这些活动与太阳磁场强弱密切相关，整体上呈现约 11 年左右的活动周期。
        强烈的太阳活动会扰动地球磁层，引发极光、无线电通信干扰，甚至影响卫星与电网。
      </p>
    </div>

    <div class="section">
      <h2>太阳为什么会发光？</h2>
      <p>
        在核心的极高温高压环境下，氢核通过质子-质子链反应聚变成氦核。
        聚变过程中释放的能量以光子和粒子形式向外传递，最终从光球层辐射出来。
        这也是恒星能够在数十亿年时间尺度上稳定发光的原因。
      </p>
    </div>

    <div class="section">
      <h2>太阳风与空间天气</h2>
      <p>
        太阳持续向外喷发带电粒子流，即太阳风。太阳风与太阳磁场一起塑造了日球层，并与行星磁场相互作用。
        当强烈的日冕物质抛射抵达地球附近，可能触发地磁暴，影响导航定位、短波通信以及在轨航天器的运行。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>太阳光到达地球大约需要 8 分 20 秒</li>
        <li>太阳约占太阳系总质量的 99.86%</li>
        <li>太阳内部大约能“装下” 100 万个地球体积</li>
        <li>太阳自转并不一致：赤道更快（约 25 天），高纬更慢（约 35 天）</li>
        <li>约 50 亿年后，太阳将演化为红巨星</li>
        <li>每秒钟，太阳将约 6 亿吨氢聚变成氦并释放能量</li>
      </ul>
    </div>

    <div class="section">
      <h2>观测安全提示</h2>
      <p>
        太阳亮度极高，直接用肉眼或望远镜观测会对眼睛造成不可逆伤害。
        如需观测太阳黑子或日食，请使用专业太阳滤镜或投影法，并在具备经验的情况下进行操作。
      </p>
    </div>
  </div>
</template>

<style scoped>
.sun-page { animation: fadeIn 0.4s ease; }
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.stat-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}
.stat-card h3 { color: #6b7280; font-size: 0.85rem; margin-bottom: 8px; }
.stat-value { color: #13294B; font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; }
.stat-desc { color: #9ca3af; font-size: 0.8rem; }

.section {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;
  border: 1px solid #e5e7eb;
}
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.section p { line-height: 1.8; color: #4b5563; }

.facts-list { list-style: none; padding: 0; }
.facts-list li {
  padding: 12px 0;
  padding-left: 28px;
  position: relative;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
}
.facts-list li::before {
  content: '☀️';
  position: absolute;
  left: 0;
  font-size: 0.85rem;
}
.facts-list li:last-child { border-bottom: none; }
</style>
