<template>
  <div class="planet-page">
    <h1>💙 海王星</h1>
    
    <div class="intro">
      <p>
        海王星是距离太阳第八近、也是已知最远的行星。
        它按直径排名第四、按质量排名第三，质量约为地球的 17 倍，属于冰巨星。
        海王星因深蓝色外观而闻名，其大气中甲烷对光的吸收与散射共同造成了这种色调。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">49,244 千米</p>
      </div>
      <div class="stat-card">
        <h3>距日距离</h3>
        <p class="stat-value">约 45 亿千米</p>
      </div>
      <div class="stat-card">
        <h3>已知卫星</h3>
        <p class="stat-value">16</p>
      </div>
      <div class="stat-card">
        <h3>公转周期</h3>
        <p class="stat-value">约 165 个地球年</p>
      </div>
    </div>

    <div class="section">
      <h2>极端天气</h2>
      <p>
        海王星拥有太阳系行星中最强的持续风速，最高可达约 2,100 千米/小时。
        尽管距离太阳很远，海王星仍能产生显著的内部热量，驱动大气对流与剧烈风暴。
        这也使海王星成为研究大气动力学与行星内部热源的重要对象。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>海王星是第一颗通过数学预测找到位置的行星之一</li>
        <li>1846 年依据天王星轨道扰动的预测被确认</li>
        <li>最大卫星海卫一（特里同）为逆行轨道，可能是被捕获的柯伊伯带天体</li>
        <li>海卫一是太阳系最寒冷的天体之一（约 -235°C）</li>
        <li>海王星有 5 条主要光环，较暗且结构复杂</li>
        <li>目前仅旅行者 2 号在 1989 年飞掠过海王星</li>
      </ul>
    </div>

    <div class="section">
      <h2>海卫一与行星形成</h2>
      <p>
        海卫一的逆行轨道与独特性质，使其成为研究“捕获过程”和外太阳系演化的关键线索。
        海王星本身的组成与结构，也与太阳系外大量“海王星类行星”密切相关。
        通过对海王星系统的研究，我们能够更好地理解行星系统的多样性。
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
