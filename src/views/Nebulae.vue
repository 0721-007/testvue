<template>
  <div class="nebulae-page">
    <h1>💫 星云</h1>
    
    <div class="intro">
      <p>
        星云是宇宙空间中由气体与尘埃组成的巨大云团。
        有些星云是恒星诞生的“育婴房”，有些则来自恒星死亡时喷出的物质（如行星状星云或超新星遗迹）。
        星云不仅壮观，也是研究恒星形成与元素循环的重要对象。
      </p>
    </div>

    <div class="section">
      <h2>星云的类型</h2>
      <div class="nebula-types">
        <div class="nebula-type">
          <h4>🌟 发射星云</h4>
          <p>被附近恒星紫外辐射电离后发光，常是恒星形成区域。</p>
        </div>
        <div class="nebula-type">
          <h4>🔵 反射星云</h4>
          <p>自身不强烈发光，主要反射附近恒星的光，常呈现蓝色调。</p>
        </div>
        <div class="nebula-type">
          <h4>⚫ 暗星云</h4>
          <p>密度更高，遮挡背景光，常以“黑影”形态出现在亮星云或银河背景前。</p>
        </div>
        <div class="nebula-type">
          <h4>🔮 行星状星云</h4>
          <p>恒星晚年抛射出的气体壳层，与行星无直接关系。</p>
        </div>
        <div class="nebula-type">
          <h4>💥 超新星遗迹</h4>
          <p>恒星爆炸后向外膨胀的气体壳层，包含丰富的重元素。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>著名星云</h2>
      <ul class="facts-list">
        <li><strong>猎户座大星云（M42）：</strong>著名的恒星形成区，条件良好时肉眼可见</li>
        <li><strong>蟹状星云（M1）：</strong>1054 年超新星爆发留下的遗迹</li>
        <li><strong>鹰状星云：</strong>包含著名的“创生之柱”</li>
        <li><strong>螺旋星云：</strong>距离地球较近的行星状星云之一</li>
        <li><strong>马头星云：</strong>典型暗星云，位于猎户座附近</li>
      </ul>
    </div>

    <div class="section">
      <h2>有趣的小知识</h2>
      <ul class="facts-list">
        <li>“星云”一词可理解为宇宙中的气体与尘埃云团</li>
        <li>大型星云的尺度可达数百光年</li>
        <li>太阳系也诞生于约 46 亿年前的一片星云</li>
        <li>星云中气体主要由氢和氦构成，尘埃含有更重元素</li>
        <li>星云整体密度极低，但在引力作用下仍可形成恒星</li>
      </ul>
    </div>

    <div class="section">
      <h2>恒星形成的“育婴房”</h2>
      <p>
        在分子云内部，局部区域密度升高后发生塌缩，形成原恒星。
        随着物质持续吸积，原恒星周围形成原行星盘，并可能孕育行星系统。
        因此，研究星云就是在研究“恒星与行星从哪里来”。
      </p>
    </div>
  </div>
</template>

<style scoped>
.nebulae-page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
h1 { font-size: 2rem; margin-bottom: 20px; color: #13294B; font-weight: 700; }
.intro { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; border-left: 4px solid #FF5F05; }
.intro p { line-height: 1.8; color: #4b5563; }
.section { background: #ffffff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #e5e7eb; }
.section h2 { color: #13294B; margin-bottom: 15px; font-weight: 600; }
.nebula-types { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
.nebula-type { padding: 20px; background: #f8f9fa; border-radius: 10px; border: 1px solid #e5e7eb; }
.nebula-type h4 { color: #13294B; margin-bottom: 10px; font-weight: 600; }
.nebula-type p { color: #4b5563; font-size: 0.9rem; margin: 0; line-height: 1.7; }
.facts-list { list-style: none; padding: 0; }
.facts-list li { padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563; }
.facts-list li strong { color: #13294B; }
.facts-list li:last-child { border-bottom: none; }
</style>
