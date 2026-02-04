<template>
  <div class="planet-page">
    <h1>🔵 天王星</h1>
    
    <div class="intro">
      <p>
        天王星是距离太阳第七近的行星，属于冰巨星。
        它在太阳系行星中半径排名第三、质量排名第四。
        天王星最独特的特点是几乎“躺着”自转：地轴倾角约 98°，使它拥有极端的季节变化。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">50,724 千米</p>
      </div>
      <div class="stat-card">
        <h3>距日距离</h3>
        <p class="stat-value">约 28.7 亿千米</p>
      </div>
      <div class="stat-card">
        <h3>已知卫星</h3>
        <p class="stat-value">28</p>
      </div>
      <div class="stat-card">
        <h3>公转周期</h3>
        <p class="stat-value">约 84 个地球年</p>
      </div>
    </div>

    <div class="section">
      <h2>独特的自转方式</h2>
      <p>
        天王星可能在早期经历过与大型天体的剧烈碰撞，从而导致极端的倾角。
        这意味着在它绕太阳公转过程中，会出现某一极长时间朝向太阳的情况（持续几十年尺度），
        从而形成非常极端的季节与日照分布。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>天王星是第一颗通过望远镜发现的行星（1781 年）</li>
        <li>天王星有 13 条已知光环（1977 年确认）</li>
        <li>天王星是太阳系最冷的行星之一，最低温可达约 -224°C</li>
        <li>蓝绿色外观主要来自大气中的甲烷吸收红光</li>
        <li>许多卫星以莎士比亚和蒲柏作品角色命名</li>
        <li>目前仅有旅行者 2 号在 1986 年近距离飞掠天王星</li>
      </ul>
    </div>

    <div class="section">
      <h2>光环与磁层</h2>
      <p>
        天王星的光环较暗且狭窄，主要由较大的粒子构成。
        此外，天王星磁场轴与自转轴存在明显偏差，磁层结构复杂。
        研究这类冰巨星有助于理解太阳系外类天王星行星（系外行星）的大气与内部组成。
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
