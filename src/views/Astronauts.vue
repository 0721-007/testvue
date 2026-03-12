<template>
  <div class="astronauts-page">
    <h1>👨‍🚀 宇航员</h1>
    
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
        宇航员是经过专业训练、能够在太空环境中执行任务的人。
        他们需要掌握航天器系统、实验操作、应急处置与长期驻留的生活技能。
        截至近年，已有来自多个国家的数百人进入太空并参与各类任务。
      </p>
    </div>

    <div class="section">
      <h2>代表人物</h2>
      <div class="astronaut-grid">
        <div class="astronaut-card">
          <h4>Yuri Gagarin</h4>
          <p>首次载人进入太空（1961）</p>
          <span class="country">🇷🇺 苏联</span>
        </div>
        <div class="astronaut-card">
          <h4>Neil Armstrong</h4>
          <p>首次登上月球的人（1969）</p>
          <span class="country">🇺🇸 美国</span>
        </div>
        <div class="astronaut-card">
          <h4>Valentina Tereshkova</h4>
          <p>首位进入太空的女性（1963）</p>
          <span class="country">🇷🇺 苏联</span>
        </div>
        <div class="astronaut-card">
          <h4>Yang Liwei</h4>
          <p>中国首位进入太空的宇航员（2003）</p>
          <span class="country">🇨🇳 中国</span>
        </div>
        <div class="astronaut-card">
          <h4>Chris Hadfield</h4>
          <p>加拿大著名航天员与空间站指令长</p>
          <span class="country">🇨🇦 加拿大</span>
        </div>
        <div class="astronaut-card">
          <h4>Mae Jemison</h4>
          <p>首位进入太空的非裔美国女性</p>
          <span class="country">🇺🇸 美国</span>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>训练内容</h2>
      <p>宇航员训练周期通常较长，内容涵盖：</p>
      <ul class="training-list">
        <li>多环境生存训练与应急处置</li>
        <li>水下训练：模拟舱外活动（出舱）</li>
        <li>飞行与操作训练：提升空间姿态与系统理解</li>
        <li>科学实验与工程技能训练</li>
        <li>体能训练与医学监测</li>
        <li>团队协作与心理适应训练</li>
      </ul>
    </div>

    <div class="section">
      <h2>太空生活</h2>
      <ul class="facts-list">
        <li>微重力环境会使身高暂时增加</li>
        <li>每天需要规律锻炼以减少肌肉与骨量流失</li>
        <li>睡眠通常在固定于舱壁的睡袋中进行</li>
        <li>食物多为冻干或热稳定处理，强调营养与保存性</li>
        <li>空间站上每天可见多次日出日落</li>
        <li>长期飞行对人体与心理都是巨大挑战</li>
      </ul>
    </div>

    <div class="section">
      <h2>选拔与能力要求</h2>
      <ul class="facts-list">
        <li><strong>身体素质：</strong>良好的心肺功能、抗压能力与健康管理</li>
        <li><strong>工程与科学素养：</strong>对系统、实验与故障处理有扎实基础</li>
        <li><strong>心理素质：</strong>长期封闭环境下的情绪稳定与团队协作</li>
        <li><strong>学习能力：</strong>面对复杂任务与快速变化的流程能持续学习</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.astronauts-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #13294B; font-weight: 700; }
.intro { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; border-left: 4px solid #FF5F05; }
.intro p { line-height: 1.8; color: #4b5563; }
.section { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #e5e7eb; }
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.section p { line-height: 1.8; color: #4b5563; margin-bottom: 15px; }
.astronaut-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
.astronaut-card { padding: 20px; background: #f8f9fa; border-radius: 10px; border: 1px solid #e5e7eb; }
.astronaut-card h4 { color: #13294B; margin-bottom: 5px; font-weight: 700; }
.astronaut-card p { color: #4b5563; font-size: 0.9rem; margin: 0 0 10px 0; line-height: 1.6; }
.country { font-size: 0.85rem; color: #6b7280; }
.training-list, .facts-list { list-style: none; padding: 0; }
.training-list li, .facts-list li { padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.training-list li:last-child, .facts-list li:last-child { border-bottom: none; }
</style>
