<template>
  <div class="stations-page">
    <h1>🛰️ 空间站</h1>
    
    <div class="intro">
      <p>
        空间站是能够在轨道上长期支持人员驻留的航天器平台。
        它既是科学实验室，也是技术验证场：在微重力环境下可以开展生命科学、材料科学、流体物理等实验，
        同时也是地球观测与空间环境监测的重要平台。
      </p>
    </div>

    <div class="section">
      <h2>国际空间站（ISS）</h2>
      <p>
        国际空间站是近地轨道上规模最大的模块化空间站工程之一。
        它由多个国家/机构联合参与建造与运营，自 2000 年起实现长期有人驻留。
        该平台为在轨实验、空间行走、生命保障与国际合作提供了持续验证环境。
      </p>
      <div class="stats-grid">
        <div class="stat-card">
          <h4>尺寸</h4>
          <p>109m × 73m</p>
        </div>
        <div class="stat-card">
          <h4>质量</h4>
          <p>420,000 kg</p>
        </div>
        <div class="stat-card">
          <h4>轨道高度</h4>
          <p>约 408 km</p>
        </div>
        <div class="stat-card">
          <h4>轨道速度</h4>
          <p>约 27,600 km/h</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>历史空间站</h2>
      <div class="station-list">
        <div class="station-item">
          <h4>Salyut (1971-1986)</h4>
          <p>早期空间站计划之一，开启了长期在轨驻留的探索。</p>
        </div>
        <div class="station-item">
          <h4>Skylab (1973-1979)</h4>
          <p>美国早期空间站，开展了大量在轨实验。</p>
        </div>
        <div class="station-item">
          <h4>Mir (1986-2001)</h4>
          <p>模块化空间站的代表之一，为后续空间站发展积累了经验。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>当前与未来空间站</h2>
      <ul class="facts-list">
        <li><strong>天宫空间站：</strong>中国空间站平台</li>
        <li><strong>月球门户（Gateway）：</strong>规划中的月球轨道空间站项目</li>
        <li><strong>商业空间站：</strong>多家企业推进在轨商业化模块与平台</li>
        <li><strong>深空驻留：</strong>为未来载人深空探索积累生命保障与运营经验</li>
      </ul>
    </div>

    <div class="section">
      <h2>空间站上的研究方向</h2>
      <ul class="facts-list">
        <li>微重力对人体与生命过程的影响</li>
        <li>材料科学、晶体生长与燃烧实验</li>
        <li>地球观测与气候监测</li>
        <li>空间环境、辐射与宇宙线探测</li>
        <li>深空任务关键技术验证（通信、对接、机械臂等）</li>
        <li>医学与药物研究</li>
      </ul>
    </div>

    <div class="section">
      <h2>为什么空间站很重要？</h2>
      <p>
        空间站提供了长期、可重复的在轨实验与工程验证环境。
        它让我们能够在真实的太空条件下测试生命保障系统、开展跨学科实验，并逐步积累载人深空探索的运营能力。
        对于月球基地、火星任务等更远目标，空间站相当于“必经的训练场”。
      </p>
    </div>
  </div>
</template>

<style scoped>
.stations-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #13294B; font-weight: 700; }
.intro { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; border-left: 4px solid #FF5F05; }
.intro p { line-height: 1.8; color: #4b5563; }
.section { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #e5e7eb; }
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.section p { line-height: 1.8; color: #4b5563; margin-bottom: 15px; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; }
.stat-card { background: #f8f9fa; padding: 15px; border-radius: 10px; text-align: center; border: 1px solid #e5e7eb; }
.stat-card h4 { color: #6b7280; font-size: 0.85rem; margin-bottom: 5px; }
.stat-card p { color: #13294B; font-size: 1.1rem; font-weight: 700; margin: 0; }
.station-list { display: flex; flex-direction: column; gap: 15px; }
.station-item { padding: 20px; background: #f8f9fa; border-radius: 10px; border: 1px solid #e5e7eb; }
.station-item h4 { color: #13294B; margin-bottom: 5px; font-weight: 700; }
.station-item p { color: #4b5563; font-size: 0.9rem; margin: 0; line-height: 1.7; }
.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.facts-list li strong { color: #13294B; }
.facts-list li:last-child { border-bottom: none; }
</style>
