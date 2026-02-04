<template>
  <div class="galaxies-page">
    <h1>🌌 星系</h1>
    
    <div class="intro">
      <p>
        星系是由恒星、气体与尘埃、恒星遗迹以及暗物质共同组成的引力束缚系统。
        从只有数亿颗恒星的矮星系，到拥有上万亿颗恒星的巨型星系，结构和演化路径各不相同。
        研究星系能帮助我们理解恒星形成、物质循环以及宇宙大尺度结构。
      </p>
    </div>

    <div class="section">
      <h2>常见星系类型</h2>
      <div class="galaxy-types">
        <div class="galaxy-type">
          <h4>🌀 螺旋星系</h4>
          <p>拥有旋臂和盘结构，恒星与气体在其中旋转。银河系就属于螺旋星系。</p>
        </div>
        <div class="galaxy-type">
          <h4>⚪ 椭圆星系</h4>
          <p>外形从近球形到拉长椭球形不等，通常以年老恒星为主。</p>
        </div>
        <div class="galaxy-type">
          <h4>🔷 不规则星系</h4>
          <p>没有固定形态，常与引力相互作用或并合事件相关。</p>
        </div>
        <div class="galaxy-type">
          <h4>🔘 透镜星系</h4>
          <p>介于螺旋与椭圆之间：有盘，但缺少明显旋臂结构。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>银河系</h2>
      <p>
        银河系是一座棒旋星系，直径约 10 万光年。
        它包含约 1000 亿到 4000 亿颗恒星以及数量庞大的行星系统。
        太阳系位于银河系盘面内，距离银心大约 2.6 万光年。
      </p>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>可观测宇宙中星系数量可能达到万亿级别（估计）</li>
        <li>仙女座星系与银河系预计在约 45 亿年后发生并合</li>
        <li>多数大型星系中心存在超大质量黑洞</li>
        <li>宇宙在膨胀，星系整体上在远离彼此</li>
        <li>暗物质在星系形成与结构稳定中扮演关键角色</li>
      </ul>
    </div>

    <div class="section">
      <h2>我们如何观测遥远星系？</h2>
      <p>
        天文学家通常通过光谱中的红移来估计星系的距离与退行速度。
        红移越大，通常意味着星系越遥远、来自更早期的宇宙。
        结合深场观测与引力透镜等现象，我们能够研究宇宙早期星系的形成与演化。
      </p>
    </div>
  </div>
</template>

<style scoped>
.galaxies-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #13294B; font-weight: 700; }
.intro { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; border-left: 4px solid #FF5F05; }
.intro p { line-height: 1.8; color: #4b5563; }
.section { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #e5e7eb; }
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.section p { line-height: 1.8; color: #4b5563; }
.galaxy-types { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; }
.galaxy-type { padding: 20px; background: #f8f9fa; border-radius: 10px; border: 1px solid #e5e7eb; }
.galaxy-type h4 { color: #13294B; margin-bottom: 10px; font-weight: 600; }
.galaxy-type p { color: #4b5563; font-size: 0.9rem; margin: 0; line-height: 1.7; }
.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.facts-list li:last-child { border-bottom: none; }
</style>
