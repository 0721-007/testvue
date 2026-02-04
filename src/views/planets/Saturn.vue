<template>
  <div class="planet-page">
    <h1>🪐 土星</h1>
    
    <div class="intro">
      <p>
        土星是距离太阳第六近的行星，也是太阳系第二大行星。
        它以壮观的环系统闻名，是肉眼和小型望远镜观测中最具辨识度的天体之一。
        土星属于气态巨行星，主要由氢和氦组成。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">116,460 千米</p>
      </div>
      <div class="stat-card">
        <h3>距日距离</h3>
        <p class="stat-value">约 14.3 亿千米</p>
      </div>
      <div class="stat-card">
        <h3>已知卫星</h3>
        <p class="stat-value">146</p>
      </div>
      <div class="stat-card">
        <h3>环系统宽度</h3>
        <p class="stat-value">约 282,000 千米</p>
      </div>
    </div>

    <div class="section">
      <h2>土星环</h2>
      <p>
        土星环主要由冰粒组成，夹杂少量岩石碎屑与尘埃。
        它们向外延伸的尺度极大，但平均厚度却非常薄（数量级可达十米级别）。
        土星环通常按发现顺序以字母分区命名（如 A 环、B 环等），其精细结构与“缝隙”反映了卫星与引力共振的作用。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>土星平均密度很低，理论上“放进足够大的水池里”可能会漂浮</li>
        <li>土星一年约为 29.4 个地球年</li>
        <li>土卫六（泰坦）有浓厚大气与液态甲烷湖</li>
        <li>土星北极存在著名的六边形风暴结构</li>
        <li>土星高层大气风速可达约 1,800 千米/小时</li>
        <li>土星环并非永恒，可能会在更长时间尺度上逐渐演化与消散</li>
      </ul>
    </div>

    <div class="section">
      <h2>重要卫星</h2>
      <ul class="facts-list">
        <li><strong>土卫六（泰坦）：</strong>太阳系中少数拥有浓厚大气的卫星之一，也是研究类地化学的重要对象</li>
        <li><strong>土卫二（恩克拉多斯）：</strong>喷发水冰羽流，暗示地下可能存在海洋</li>
        <li><strong>土卫八（伊阿珀托斯）：</strong>表面明暗对比强烈，具有“赤道山脊”等独特地貌</li>
      </ul>
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
