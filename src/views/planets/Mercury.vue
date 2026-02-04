<template>
  <div class="planet-page">
    <h1>☿️ 水星</h1>
    
    <div class="intro">
      <p>
        水星是太阳系最小、距离太阳最近的行星。它绕太阳公转一周约 88 个地球日，是八大行星中公转周期最短的一颗。
        由于靠近太阳且几乎没有大气层保温，水星昼夜温差极大，地表布满撞击坑，外观与月球相似。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">4,879 km</p>
      </div>
      <div class="stat-card">
        <h3>距日距离</h3>
        <p class="stat-value">57.9 million km</p>
      </div>
      <div class="stat-card">
        <h3>昼长</h3>
        <p class="stat-value">59 Earth days</p>
      </div>
      <div class="stat-card">
        <h3>公转周期</h3>
        <p class="stat-value">88 Earth days</p>
      </div>
    </div>

    <div class="section">
      <h2>表面环境</h2>
      <p>
        水星的温度变化极端：夜晚可低至约 -180°C，白天可高达约 430°C。
        由于缺乏浓厚的大气层，热量难以保存，导致昼夜温差非常剧烈。
        水星表面遍布陨石坑与古老的熔岩平原，是研究早期太阳系撞击历史的重要窗口。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>水星没有卫星，也没有明显的光环</li>
        <li>水星密度很高，仅次于地球</li>
        <li>水星拥有巨大的铁核，半径占比很高</li>
        <li>尽管最靠近太阳，但金星由于温室效应反而更热</li>
        <li>水星的“一个太阳日”比它的一年还长</li>
      </ul>
    </div>

    <div class="section">
      <h2>探测任务</h2>
      <ul class="facts-list">
        <li><strong>水手 10 号：</strong>首次飞掠水星并拍摄近距离照片</li>
        <li><strong>信使号（MESSENGER）：</strong>进入水星轨道，测量磁场与元素组成</li>
        <li><strong>贝皮科伦坡（BepiColombo）：</strong>欧日联合任务，进一步研究水星内部结构与空间环境</li>
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
