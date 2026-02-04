<template>
  <div class="planet-page">
    <h1>🟠 木星</h1>
    
    <div class="intro">
      <p>
        木星是距离太阳第五近的行星，也是太阳系中体积和质量最大的行星。
        它属于气态巨行星，质量超过其余行星总和的两倍多。
        木星最著名的特征之一是“大红斑”——一个持续数百年的巨大风暴系统。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">139,820 km</p>
      </div>
      <div class="stat-card">
        <h3>距日距离</h3>
        <p class="stat-value">778.5 million km</p>
      </div>
      <div class="stat-card">
        <h3>已知卫星</h3>
        <p class="stat-value">95</p>
      </div>
      <div class="stat-card">
        <h3>自转周期</h3>
        <p class="stat-value">9.9 hours</p>
      </div>
    </div>

    <div class="section">
      <h2>大红斑</h2>
      <p>
        木星的大红斑是一个长期存在的高压反气旋风暴。
        它的尺度曾达到地球直径的数倍，目前仍然是太阳系最大的风暴之一。
        早在 17 世纪的观测记录中就可能出现了类似结构，近代以来一直持续被追踪研究。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>木星的自转很快，一天只有约 9.9 小时</li>
        <li>木星也有微弱的光环（1979 年被发现）</li>
        <li>木星四大卫星被称为伽利略卫星（木卫一至木卫四）</li>
        <li>木卫二（欧罗巴）可能存在地下海洋，是潜在的宜居环境候选</li>
        <li>木星对小天体有“引力屏障”作用，会吸引并改变部分小行星彗星轨道</li>
        <li>木星拥有非常强的磁场和强烈的辐射带</li>
      </ul>
    </div>

    <div class="section">
      <h2>卫星系统与磁场</h2>
      <p>
        木星拥有数量众多的卫星，从小型不规则卫星到大型的伽利略卫星。
        强磁场与高速自转共同造就了强烈的辐射环境，并在木星周围形成巨大的磁层。
        对木星磁场与卫星系统的研究，有助于理解巨行星内部结构、行星形成与潜在生命环境。
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
