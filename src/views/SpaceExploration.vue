<template>
  <div class="exploration-page">
    <h1>🚀 航天探索</h1>
    
    <div class="intro">
      <p>
        航天探索是利用航天技术与天文学方法走向太空、认识宇宙的过程。
        它既包括载人航天，也包括深空探测器、空间望远镜与行星着陆器等无人任务。
        航天探索推动了通信、材料、导航与计算等领域的技术进步，也不断改写我们对宇宙的理解。
      </p>
    </div>

    <div class="section">
      <h2>重要里程碑</h2>
      <div class="timeline">
        <div class="timeline-item">
          <span class="year">1957</span>
          <div class="event">
            <h4>Sputnik 1</h4>
            <p>第一颗人造地球卫星发射（苏联）</p>
          </div>
        </div>
        <div class="timeline-item">
          <span class="year">1961</span>
          <div class="event">
            <h4>Yuri Gagarin</h4>
            <p>首次载人进入太空（苏联）</p>
          </div>
        </div>
        <div class="timeline-item">
          <span class="year">1969</span>
          <div class="event">
            <h4>Apollo 11</h4>
            <p>首次载人登月（美国）</p>
          </div>
        </div>
        <div class="timeline-item">
          <span class="year">1971</span>
          <div class="event">
            <h4>Salyut 1</h4>
            <p>首座空间站发射</p>
          </div>
        </div>
        <div class="timeline-item">
          <span class="year">1981</span>
          <div class="event">
            <h4>Space Shuttle</h4>
            <p>可重复使用航天器体系（哥伦比亚号首飞）</p>
          </div>
        </div>
        <div class="timeline-item">
          <span class="year">1998</span>
          <div class="event">
            <h4>ISS Construction</h4>
            <p>国际空间站开始组装</p>
          </div>
        </div>
        <div class="timeline-item">
          <span class="year">2020</span>
          <div class="event">
            <h4>SpaceX Crew Dragon</h4>
            <p>商业载人飞船执行空间站任务</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>当前与未来任务</h2>
      <ul class="facts-list">
        <li><strong>阿耳忒弥斯计划：</strong>重返月球并开展长期驻留能力建设</li>
        <li><strong>火星样本返回：</strong>将火星岩土样本带回地球实验室分析</li>
        <li><strong>欧罗巴快船：</strong>探索木卫二并评估其潜在宜居性</li>
        <li><strong>詹姆斯·韦布望远镜：</strong>观测早期宇宙与系外行星大气</li>
        <li><strong>新一代可重复使用飞行器：</strong>降低发射成本、提升进入太空的频次</li>
      </ul>
    </div>

    <div class="section">
      <h2>主要航天机构</h2>
      <div class="agencies-grid">
        <div class="agency">🇺🇸 NASA（美国）</div>
        <div class="agency">🇪🇺 ESA（欧洲）</div>
        <div class="agency">🇷🇺 俄罗斯国家航天集团</div>
        <div class="agency">🇨🇳 中国国家航天局</div>
        <div class="agency">🇯🇵 JAXA（日本）</div>
        <div class="agency">🇮🇳 ISRO（印度）</div>
      </div>
    </div>

    <div class="section">
      <h2>关键技术一览</h2>
      <ul class="facts-list">
        <li><strong>推进：</strong>化学推进、离子推进、太阳帆等各有适用场景</li>
        <li><strong>导航与控制：</strong>姿态控制、星敏感器、深空测控网</li>
        <li><strong>生命保障：</strong>闭合循环、辐射防护、心理与医疗支持</li>
        <li><strong>着陆与返回：</strong>大气进入热防护、降落伞/反推、采样封装</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.exploration-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #13294B; font-weight: 700; }
.intro { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; border-left: 4px solid #FF5F05; }
.intro p { line-height: 1.8; color: #4b5563; }
.section { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #e5e7eb; }
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.timeline { display: flex; flex-direction: column; gap: 15px; }
.timeline-item { display: flex; gap: 20px; align-items: flex-start; }
.year { background: rgba(19, 41, 75, 0.12); color: #13294B; padding: 5px 12px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; min-width: 60px; text-align: center; border: 1px solid #e5e7eb; }
.event h4 { color: #13294B; margin-bottom: 5px; font-weight: 700; }
.event p { color: #4b5563; font-size: 0.9rem; margin: 0; line-height: 1.7; }
.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.facts-list li strong { color: #13294B; }
.facts-list li:last-child { border-bottom: none; }
.agencies-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
.agency { background: #f8f9fa; padding: 15px; border-radius: 10px; text-align: center; color: #13294B; border: 1px solid #e5e7eb; }
</style>
