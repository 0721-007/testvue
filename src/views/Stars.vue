<template>
  <div class="stars-page">
    <h1>⭐ 恒星</h1>
    
    <div class="intro">
      <p>
        恒星是由引力束缚的高温等离子体球体，通过核聚变释放能量并发光。
        它们诞生于分子云：密度较高的区域在引力作用下塌缩形成原恒星，最终点燃聚变成为恒星。
        距离地球最近的恒星是太阳，除太阳外最近的恒星是比邻星，距离约 4.24 光年。
      </p>
    </div>

    <div class="section">
      <h2>恒星的生命周期</h2>
      <p>
        恒星的一生通常经历：星云 → 原恒星 → 主序星 → 红巨星/超巨星 →
        （取决于质量）白矮星、中子星或黑洞。
        太阳目前处于主序阶段，未来将演化为红巨星。
      </p>
    </div>

    <div class="section">
      <h2>常见恒星类型</h2>
      <div class="star-types">
        <div class="star-type">
          <span class="star-color red">●</span>
          <div>
            <h4>红矮星</h4>
            <p>体积小、温度低、数量最多，可稳定燃烧极长时间。</p>
          </div>
        </div>
        <div class="star-type">
          <span class="star-color yellow">●</span>
          <div>
            <h4>黄矮星</h4>
            <p>类似太阳的恒星，体积适中，表面温度约 5,500°C。</p>
          </div>
        </div>
        <div class="star-type">
          <span class="star-color blue">●</span>
          <div>
            <h4>蓝巨星</h4>
            <p>质量大、温度高、寿命短，但光度极高。</p>
          </div>
        </div>
        <div class="star-type">
          <span class="star-color orange">●</span>
          <div>
            <h4>红巨星</h4>
            <p>老年恒星膨胀后的阶段，参宿四是著名例子。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>可观测宇宙中的恒星数量极其庞大</li>
        <li>银河系包含约 1000 亿到 4000 亿颗恒星（估计）</li>
        <li>中子星自转可快到每秒数百圈</li>
        <li>已知最大恒星之一 UY 盾牌座的半径可达太阳的千倍量级</li>
        <li>恒星“闪烁”主要来自地球大气扰动</li>
      </ul>
    </div>

    <div class="section">
      <h2>如何测量恒星的距离与亮度</h2>
      <p>
        天文学中常用视差测量近距离恒星；更远处则依赖标准烛光（如造父变星、Ia 型超新星）等方法。
        恒星亮度也分为“视星等”和“绝对星等”：前者与距离相关，后者更能反映恒星真实的发光能力。
      </p>
    </div>
  </div>
</template>

<style scoped>
.stars-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #ffdd44; }
.intro { background: rgba(255, 221, 68, 0.1); padding: 25px; border-radius: 15px; margin-bottom: 30px; border: 1px solid rgba(255, 221, 68, 0.3); }
.intro p { line-height: 1.8; color: #e0e0c0; }
.section { background: rgba(40, 40, 80, 0.4); padding: 25px; border-radius: 15px; margin-bottom: 25px; border: 1px solid rgba(100, 100, 255, 0.2); }
.section h2 { color: #ffdd44; margin-bottom: 15px; }
.section p { line-height: 1.8; color: #c0c0e0; }
.star-types { display: flex; flex-direction: column; gap: 15px; }
.star-type { display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
.star-color { font-size: 2rem; }
.star-color.red { color: #ff6060; }
.star-color.yellow { color: #ffdd44; }
.star-color.blue { color: #6080ff; }
.star-color.orange { color: #ff9040; }
.star-type h4 { color: #ffffff; margin-bottom: 5px; }
.star-type p { color: #a0a0c0; font-size: 0.9rem; margin: 0; }
.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 10px 0; border-bottom: 1px solid rgba(255, 221, 68, 0.1); color: #c0c0e0; }
.facts-list li:last-child { border-bottom: none; }
</style>
