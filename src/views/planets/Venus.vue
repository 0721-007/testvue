<template>
  <div class="planet-page">
    <h1>♀️ 金星</h1>
    
    <div class="intro">
      <p>
        金星是距离太阳第二近的行星，也是地球的近邻。由于大小与质量与地球相近，金星常被称为地球的“姊妹星”。
        尽管水星更靠近太阳，但金星拥有极强的温室效应，反而成为太阳系中平均温度最高的行星。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">12,104 km</p>
      </div>
      <div class="stat-card">
        <h3>距日距离</h3>
        <p class="stat-value">108.2 million km</p>
      </div>
      <div class="stat-card">
        <h3>地表温度</h3>
        <p class="stat-value">465°C</p>
      </div>
      <div class="stat-card">
        <h3>公转周期</h3>
        <p class="stat-value">225 Earth days</p>
      </div>
    </div>

    <div class="section">
      <h2>大气与温室效应</h2>
      <p>
        金星拥有浓厚且有毒的大气层，主要成分是二氧化碳，并伴随硫酸云。
        金星地表气压约为地球的 92 倍，这种“厚毯子”般的大气会把热量牢牢困住，形成失控温室效应，
        使金星地表温度高到足以熔化铅。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>金星的自转方向与大多数行星相反（逆行自转）</li>
        <li>金星的一天比它的一年还长（约 243 vs 225 个地球日）</li>
        <li>金星是夜空中除月球外最明亮的自然天体之一</li>
        <li>金星没有卫星，也没有明显的光环</li>
        <li>金星是最早被探测器近距离访问的行星之一（1962 年水手 2 号）</li>
      </ul>
    </div>

    <div class="section">
      <h2>地表与探测</h2>
      <p>
        金星地表被厚厚的云层遮蔽，早期只能依靠雷达成像“看见”地形。
        金星表面存在大片火山平原和复杂的构造地貌，但在高温高压环境下，着陆器的工作时间通常很短。
        研究金星能帮助我们理解温室效应的极端情况，也为理解类地行星气候演化提供重要参照。
      </p>
    </div>
  </div>
</template>

<style scoped>
.planet-page { animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #13294B; font-weight: 700; }
.intro { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; border-left: 4px solid #FF5F05; }
.intro p { line-height: 1.8; color: #4b5563; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px; }
.stat-card { background: #ffffff; padding: 20px; border-radius: 10px; text-align: center; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
.stat-card h3 { color: #6b7280; font-size: 0.85rem; margin-bottom: 8px; }
.stat-value { color: #13294B; font-size: 1.1rem; font-weight: 700; }
.section { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #e5e7eb; }
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.section p { line-height: 1.8; color: #4b5563; }
.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.facts-list li:last-child { border-bottom: none; }
</style>
