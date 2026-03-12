<template>
  <div class="blackholes-page">
    <h1>🕳️ 黑洞</h1>
    
    <div class="intro">
      <p>
        黑洞是时空中引力极强的区域，一旦物质或光跨过事件视界，就几乎不可能再逃逸。
        黑洞的存在可以由爱因斯坦的广义相对论推导得到。
        虽然黑洞本身不发光，但我们可以通过其对周围物质与时空的影响“看见”它。
      </p>
    </div>

    <div class="section">
      <h2>黑洞的类型</h2>
      <div class="bh-types">
        <div class="bh-type">
          <h4>恒星级黑洞</h4>
          <p>大质量恒星死亡坍缩形成，典型质量为数倍到数十倍太阳质量。</p>
        </div>
        <div class="bh-type">
          <h4>超大质量黑洞</h4>
          <p>位于星系中心，质量可达数百万到数十亿倍太阳质量。</p>
        </div>
        <div class="bh-type">
          <h4>中等质量黑洞</h4>
          <p>介于恒星级与超大质量之间，质量可达数百到数千倍太阳质量。</p>
        </div>
        <div class="bh-type">
          <h4>原初黑洞</h4>
          <p>理论假设：可能在宇宙大爆炸后不久形成。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>黑洞的“结构”</h2>
      <ul class="anatomy-list">
        <li><strong>奇点：</strong>理论上密度无限大的中心（经典理论框架下）</li>
        <li><strong>事件视界：</strong>“有去无回”的边界</li>
        <li><strong>吸积盘：</strong>物质螺旋下落时被加热到极高温</li>
        <li><strong>光子球：</strong>光可能在此附近发生绕行的区域</li>
        <li><strong>相对论喷流：</strong>沿磁场方向射出的高能粒子束</li>
      </ul>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>2019 年人类首次获得黑洞“照片”（M87*）</li>
        <li>银河系中心的超大质量黑洞称为人马座 A*</li>
        <li>强引力会导致引力时间膨胀：靠近黑洞的时间流逝更慢</li>
        <li>霍金辐射理论预言黑洞可能在极长时间后“蒸发”</li>
        <li>黑洞可以通过吸积盘与喷流对星系演化产生重要影响</li>
      </ul>
    </div>

    <div class="section">
      <h2>我们如何观测黑洞？</h2>
      <ul class="facts-list">
        <li><strong>吸积辐射：</strong>物质落入黑洞前被加热，会在 X 射线等波段强烈发光</li>
        <li><strong>恒星运动：</strong>通过恒星绕行轨道反推出中心致密天体质量</li>
        <li><strong>引力波：</strong>黑洞并合会产生引力波信号（LIGO/Virgo 等观测）</li>
        <li><strong>甚长基线干涉：</strong>事件视界望远镜（EHT）实现了“看见”黑洞阴影
        
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
No hidden charge</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.blackholes-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #13294B; font-weight: 700; }
.intro { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; border-left: 4px solid #FF5F05; }
.intro p { line-height: 1.8; color: #4b5563; }
.section { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #e5e7eb; }
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.bh-types { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
.bh-type { padding: 20px; background: #f8f9fa; border-radius: 10px; border: 1px solid #e5e7eb; }
.bh-type h4 { color: #13294B; margin-bottom: 10px; font-weight: 600; }
.bh-type p { color: #4b5563; font-size: 0.9rem; margin: 0; line-height: 1.7; }
.anatomy-list { list-style: none; padding: 0; }
.anatomy-list li { padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.anatomy-list li strong { color: #13294B; }
.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.facts-list li:last-child { border-bottom: none; }
</style>
