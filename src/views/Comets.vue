<template>
  <div class="comets-page">
    <h1>☄️ 彗星</h1>
    
    <div class="intro">
      <p>
        彗星是富含冰与尘埃的小天体。当它们靠近太阳时，冰升华释放气体与尘埃，形成彗发，
        并在太阳风与辐射压力作用下拖出彗尾。
        彗星常被称为“脏雪球”，它们保存了太阳系早期的原始物质信息。
      </p>
    </div>

    <div class="section">
      <h2>彗星的组成</h2>
      <div class="anatomy-grid">
        <div class="anatomy-item">
          <h4>🧊 彗核</h4>
          <p>由冰、岩石和尘埃组成的固体核心，尺度通常为数公里到十几公里。</p>
        </div>
        <div class="anatomy-item">
          <h4>☁️ 彗发</h4>
          <p>包裹彗核的稀薄“气体外衣”，由挥发气体与尘埃构成。</p>
        </div>
        <div class="anatomy-item">
          <h4>💨 尘埃尾</h4>
          <p>由尘埃颗粒组成，通常呈弯曲形态，受太阳辐射压力影响更明显。</p>
        </div>
        <div class="anatomy-item">
          <h4>💙 离子尾</h4>
          <p>由电离气体形成，常呈直线并指向远离太阳的方向，受太阳风主导。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>著名彗星</h2>
      <ul class="facts-list">
        <li><strong>哈雷彗星：</strong>周期约 75–79 年，1986 年曾被观测到</li>
        <li><strong>海尔-波普彗星：</strong>1996–1997 年持续可见时间很长，观测效果震撼</li>
        <li><strong>NEOWISE 彗星：</strong>2020 年出现的明亮彗星</li>
        <li><strong>67P/楚留莫夫-格拉西门科彗星：</strong>罗塞塔任务实现首次彗星着陆探测（2014）</li>
      </ul>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>彗尾长度可达数百万千米</li>
        <li>彗星可能为早期地球带来部分水与有机分子</li>
        <li>奥尔特云可能包含数量巨大的长周期彗星</li>
        <li>短周期彗星多来自柯伊伯带</li>
        <li>一些彗星在近日点附近会因受热而解体</li>
        <li>当地球穿过彗星遗留的尘埃带，就可能出现流星雨</li>
      </ul>
    </div>

    <div class="section">
      <h2>彗星与流星雨</h2>
      <ul class="facts-list">
        <li><strong>英仙座流星雨：</strong>与斯威夫特-塔特尔彗星有关，夏季常见</li>
        <li><strong>狮子座流星雨：</strong>与坦普尔-塔特尔彗星有关，偶尔出现“流星暴”</li>
        <li><strong>双子座流星雨：</strong>与小天体（3200 法厄同）相关，峰值稳定且明亮</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.comets-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #13294B; font-weight: 700; }
.intro { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; border-left: 4px solid #FF5F05; }
.intro p { line-height: 1.8; color: #4b5563; }
.section { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #e5e7eb; }
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.anatomy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
.anatomy-item { padding: 20px; background: #f8f9fa; border-radius: 10px; border: 1px solid #e5e7eb; }
.anatomy-item h4 { color: #13294B; margin-bottom: 10px; font-weight: 600; }
.anatomy-item p { color: #4b5563; font-size: 0.9rem; margin: 0; line-height: 1.7; }
.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.facts-list li strong { color: #13294B; }
.facts-list li:last-child { border-bottom: none; }
</style>
