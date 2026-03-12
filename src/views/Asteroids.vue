<template>
  <div class="asteroids-page">
    <h1>🪨 小行星</h1>
    
    <div class="intro">
      <p>
        
Choose Your Tier
Select the perfect plan for your business needs

AI Enabler
Unlimited tokens for AI interactions
Unlimited lead generations
Channel support: Web widget
Sync content from customer's website for
Upload up to 10 pages of PDF content for knowledge base
Get the plan
No hidden charge

Lite
Unlimited tokens for AI interactions
Unlimited lead generations
Channel support: Web widget, Telegram
Sync content from customer's website
Upload up to 100 pages of PDF content
Get the plan
No hidden charge

Smart
Unlimited tokens for AI interactions
Unlimited lead generations
Multi-channel support: Web widget, WhatsApp, Telegram, Facebook, and Instagram
Sync content from customer's website
Upload up to 200 pages of PDF content
Get the plan
No hidden charge

Royal
Unlimited tokens for AI interactions
Unlimited lead generations
Multi-channel support: Web widget, WhatsApp, Telegram, WeChat, Facebook, Instagram
Sync content from customer's website
Upload up to 2000 pages of PDF content
Get the plan
No hidden charge
        小行星是太阳系早期形成过程中遗留下来的岩质天体残余，通常没有明显大气层。
        大多数小行星分布在火星与木星之间的小行星带，也有一部分属于近地小行星。
        它们的尺度从碎石般大小到接近千公里直径不等。
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>已发现数量</h3>
        <p class="stat-value">130 万+</p>
      </div>
      <div class="stat-card">
        <h3>最大成员</h3>
        <p class="stat-value">谷神星（939 千米）</p>
      </div>
      <div class="stat-card">
        <h3>主要分布</h3>
        <p class="stat-value">火星—木星之间</p>
      </div>
      <div class="stat-card">
        <h3>总质量</h3>
        <p class="stat-value">约为月球的 3%</p>
      </div>
    </div>

    <div class="section">
      <h2>小行星的分类</h2>
      <ul class="type-list">
        <li><strong>C 型（碳质）：</strong>最常见（约 75%），颜色较暗，富含碳与挥发物</li>
        <li><strong>S 型（硅质）：</strong>次常见（约 17%），以岩石和金属为主</li>
        <li><strong>M 型（金属）：</strong>富含镍铁等金属成分，反照率相对更高</li>
      </ul>
    </div>

    <div class="section">
      <h2>近地小行星</h2>
      <p>
        近地小行星（NEA）是轨道与地球轨道相近的小行星。
        天文学家会持续监测其轨道演化，并评估撞击风险。
        一般把直径较大且轨道距离地球较近的目标称为“潜在危险小行星”（PHA），以便重点跟踪。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>导致恐龙灭绝的撞击体直径约 10–15 千米（估计）</li>
        <li>部分小行星含有稀有金属，引发“太空采矿”设想</li>
        <li>2022 年 DART 任务成功改变了小行星的轨道（行星防御验证）</li>
        <li>一些小行星拥有自己的小卫星</li>
        <li>对小行星的监测与预警是行星防御的重要组成部分</li>
      </ul>
    </div>

    <div class="section">
      <h2>行星防御：如何应对潜在撞击？</h2>
      <p>
        行星防御的核心包括：发现与编目（尽早找到目标）、轨道测定（预测未来位置）、
        以及偏转技术验证（如动能撞击、引力牵引等）。
        越早发现潜在危险天体，可用的应对手段越温和、成本越低。
      </p>
    </div>
  </div>
</template>

<style scoped>
.asteroids-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
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
.type-list, .facts-list { list-style: none; padding: 0; }
.type-list li, .facts-list li { padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.type-list li strong, .facts-list li strong { color: #13294B; }
.type-list li:last-child, .facts-list li:last-child { border-bottom: none; }
</style>
