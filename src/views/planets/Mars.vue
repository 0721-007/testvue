<template>
  <div class="planet-page">
    <h1>🔴 火星</h1>
    
    <div class="intro">
      <p>
        火星是距离太阳第四近的行星，也是太阳系中第二小的行星。
        由于地表富含氧化铁尘埃呈现红色外观，火星常被称为“红色星球”。
        火星拥有与地球相似的昼长和季节变化，是人类未来深空探索与长期驻留的重要目标。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">6,779 km</p>
      </div>
      <div class="stat-card">
        <h3>距日距离</h3>
        <p class="stat-value">227.9 million km</p>
      </div>
      <div class="stat-card">
        <h3>卫星</h3>
        <p class="stat-value">2 (Phobos, Deimos)</p>
      </div>
      <div class="stat-card">
        <h3>昼长</h3>
        <p class="stat-value">24h 37m</p>
      </div>
    </div>

    <div class="section">
      <h2>地貌与水的线索</h2>
      <p>
        火星拥有太阳系最高的火山——奥林帕斯山（约 21.9 km），以及巨大的峡谷系统——水手谷（长约 4,000 km）。
        多种证据表明火星早期可能存在更温暖湿润的环境，地表曾出现液态水；如今两极与地下仍存在水冰。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>火星和地球一样有四季，原因是地轴倾角较明显</li>
        <li>火星一年约为 687 个地球日</li>
        <li>火星会发生覆盖全球的大型沙尘暴</li>
        <li>火星重力约为地球的 38%</li>
        <li>多台火星车已开展探测（勇气、机遇、好奇、毅力等）</li>
        <li>火星大气稀薄，主要成分为二氧化碳</li>
      </ul>
    </div>

    <div class="section">
      <h2>探索任务与未来目标</h2>
      <p>
        近几十年来，火星探测聚焦于“过去是否宜居”和“是否存在生命迹象”。
        轨道器与火星车对地表矿物、沉积结构与有机分子进行了持续研究。
        下一阶段的重要目标包括样本返回、资源利用（如制氧、制水）与更长期的人类驻留方案。
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
