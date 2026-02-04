<template>
  <div class="planet-page">
    <h1>🌍 地球</h1>
    
    <div class="intro">
      <p>
        地球是距离太阳第三近的行星，也是目前已知唯一孕育生命的天体。
        地表约 71% 被海洋覆盖，并拥有能够维持液态水与生命活动的适宜温度范围。
        大气层与磁场共同构成“保护罩”，减弱太阳辐射与带电粒子对生命的危害。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>直径</h3>
        <p class="stat-value">12,742 km</p>
      </div>
      <div class="stat-card">
        <h3>距日距离</h3>
        <p class="stat-value">149.6 million km</p>
      </div>
      <div class="stat-card">
        <h3>卫星</h3>
        <p class="stat-value">1（月球）</p>
      </div>
      <div class="stat-card">
        <h3>年龄</h3>
        <p class="stat-value">4.54 billion years</p>
      </div>
    </div>

    <div class="section">
      <h2>独特之处</h2>
      <p>
        地球是太阳系中唯一在地表长期稳定存在液态水的行星。
        地球磁场可偏转太阳风，减缓大气被剥离；大气成分以氮气（约 78%）和氧气（约 21%）为主。
        月球的存在有助于稳定地轴倾角，使地球气候在较长时间尺度上更稳定。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>地球是太阳系密度最高的行星</li>
        <li>地核温度可与太阳表面相当（约 5,500°C）</li>
        <li>地球自转正在缓慢变慢（长期尺度）</li>
        <li>最高点为珠穆朗玛峰（8,849 m），最低点为马里亚纳海沟（-10,994 m）</li>
        <li>地球拥有极其丰富的生物多样性</li>
        <li>大气层并非“硬边界”，外层向太空逐渐稀薄过渡</li>
      </ul>
    </div>

    <div class="section">
      <h2>宜居性的关键条件</h2>
      <p>
        地球能够长期保持宜居，与多种因素有关：适中的日地距离、稳定的恒星能量输入、
        温室效应与水循环的共同调节、板块构造带来的碳循环，以及磁场对高能粒子的防护。
        这些因素共同作用，使地球在漫长时间里保持了适合生命繁衍的环境。
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
