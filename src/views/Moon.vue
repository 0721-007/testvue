<template>
  <div class="moon-page">
    <h1>🌙 月球</h1>
    
    <div class="intro">
      <p>
        月球是地球唯一的天然卫星，也是太阳系中体积较大的卫星之一。
        月球对地球的引力作用引发潮汐，并在长期尺度上影响地球自转。
        月球表面几乎没有大气层，保留了丰富的撞击与火山活动痕迹，是研究早期太阳系历史的重要对象。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">3,474 千米</p>
      </div>
      <div class="stat-card">
        <h3>距地距离</h3>
        <p class="stat-value">384,400 千米</p>
      </div>
      <div class="stat-card">
        <h3>公转周期</h3>
        <p class="stat-value">约 27.3 天</p>
      </div>
      <div class="stat-card">
        <h3>表面重力</h3>
        <p class="stat-value">1.62 m/s²</p>
      </div>
    </div>

    <div class="section">
      <h2>月相</h2>
      <p>
        月球的相位变化周期约为 29.5 天。
        月相包括朔（月初）、上弦、望（满月）、下弦等。
        月相本质上是“太阳照亮月球的部分”与“我们能看到的部分”重叠面积随位置变化而产生的视觉效果。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>月球正以每年约 3.8 厘米的速度远离地球</li>
        <li>共有 12 名人类曾在月面行走（阿波罗任务 1969-1972）</li>
        <li>月球几乎没有大气，因此脚印可能保留极长时间</li>
        <li>月球对地球潮汐锁定，总有同一面朝向地球</li>
        <li>月面温度范围大致为 -173°C 到 127°C</li>
        <li>两极永久阴影坑内可能存在水冰</li>
      </ul>
    </div>

    <div class="section">
      <h2>探月与未来</h2>
      <p>
        月球是深空探索的重要“跳板”。
        未来的探月重点包括：资源勘探（如水冰）、月面通信与导航基础设施、长期驻留技术验证等。
        月球背面与极区也将为射电天文与低温环境实验提供独特场景。
      </p>
    </div>
  </div>
</template>

<style scoped>
.moon-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #c0c0c0; }
.intro { background: rgba(192, 192, 192, 0.1); padding: 25px; border-radius: 15px; margin-bottom: 30px; border: 1px solid rgba(192, 192, 192, 0.3); }
.intro p { line-height: 1.8; color: #d0d0e0; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px; }
.stat-card { background: rgba(192, 192, 192, 0.1); padding: 20px; border-radius: 12px; text-align: center; border: 1px solid rgba(192, 192, 192, 0.3); }
.stat-card h3 { color: #a0a0a0; font-size: 0.85rem; margin-bottom: 8px; }
.stat-value { color: #ffffff; font-size: 1.1rem; font-weight: bold; }
.section { background: rgba(40, 40, 80, 0.4); padding: 25px; border-radius: 15px; margin-bottom: 25px; border: 1px solid rgba(100, 100, 255, 0.2); }
.section h2 { color: #c0c0c0; margin-bottom: 15px; }
.section p { line-height: 1.8; color: #c0c0e0; }
.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 10px 0; border-bottom: 1px solid rgba(192, 192, 192, 0.1); color: #c0c0e0; }
.facts-list li:last-child { border-bottom: none; }
</style>
