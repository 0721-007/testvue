<template>
  <div class="home">
    <!-- Hero Banner -->
    <div class="hero">
      <div class="hero-content">
        <h1>探索宇宙</h1>
        <p class="subtitle">从太阳系到遥远星系，用清晰、系统的知识理解浩瀚星空</p>
        <router-link to="/solar-system" class="hero-btn">开始探索 →</router-link>
      </div>
    </div>

    <!-- Recent News Section -->
    <section class="news-section">
      <h2>精选主题</h2>
      <div class="news-grid">
        <router-link to="/black-holes" class="news-card">
          <div class="news-image" style="background: linear-gradient(135deg, #1a1a2e, #16213e);">
            <span class="news-icon">🕳️</span>
          </div>
          <div class="news-content">
            <h3>黑洞：宇宙的极限引力场</h3>
            <p>从事件视界到吸积盘，了解为什么“连光都逃不掉”，以及我们如何间接观测黑洞。</p>
          </div>
        </router-link>
        <router-link to="/space-exploration" class="news-card">
          <div class="news-image" style="background: linear-gradient(135deg, #0f3460, #16213e);">
            <span class="news-icon">🚀</span>
          </div>
          <div class="news-content">
            <h3>航天探索里程碑</h3>
            <p>从第一颗人造卫星到空间站与深空探测，回顾改变世界的关键任务与技术突破。</p>
          </div>
        </router-link>
        <router-link to="/galaxies" class="news-card">
          <div class="news-image" style="background: linear-gradient(135deg, #1a1a40, #270082);">
            <span class="news-icon">🌌</span>
          </div>
          <div class="news-content">
            <h3>星系：宇宙中的“岛屿宇宙”</h3>
            <p>螺旋、椭圆与不规则星系如何形成？我们在银河系中的位置又在哪里？</p>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Quick Facts -->
    <section class="facts-section">
      <h2>快速认识宇宙</h2>
      <div class="facts-grid">
        <div class="fact-card">
          <span class="fact-number">8</span>
          <span class="fact-label">太阳系行星数量</span>
        </div>
        <div class="fact-card">
          <span class="fact-number">100B+</span>
          <span class="fact-label">银河系恒星数量（估计）</span>
        </div>
        <div class="fact-card">
          <span class="fact-number">2T</span>
          <span class="fact-label">可观测宇宙星系数量（估计）</span>
        </div>
        <div class="fact-card">
          <span class="fact-number">12</span>
          <span class="fact-label">登月行走过的人类人数</span>
        </div>
      </div>
    </section>

    <!-- Resources Grid -->
    <section class="resources-section">
      <div class="resources-header">
        <h2>按分类探索</h2>
        <p>从熟悉的天体到壮观的宇宙现象，循序渐进地扩展你的知识版图</p>
      </div>
      <div class="resources-grid">
        <router-link to="/solar-system" class="resource-item">☀️ 太阳系</router-link>
        <router-link to="/sun" class="resource-item">🌞 太阳</router-link>
        <router-link to="/planets/earth" class="resource-item">🌍 地球</router-link>
        <router-link to="/planets/mars" class="resource-item">🔴 火星</router-link>
        <router-link to="/planets/jupiter" class="resource-item">🟠 木星</router-link>
        <router-link to="/planets/saturn" class="resource-item">🪐 土星</router-link>
        <router-link to="/moon" class="resource-item">🌙 月球</router-link>
        <router-link to="/stars" class="resource-item">⭐ 恒星</router-link>
        <router-link to="/nebulae" class="resource-item">💫 星云</router-link>
        <router-link to="/asteroids" class="resource-item">🪨 小行星</router-link>
        <router-link to="/comets" class="resource-item">☄️ 彗星</router-link>
        <router-link to="/astronauts" class="resource-item">👨‍🚀 宇航员</router-link>
      </div>
    </section>

    <section class="learning-section">
      <h2>建议学习路线</h2>
      <div class="learning-grid">
        <div class="learning-card">
          <h3>1. 从太阳系入门</h3>
          <p>先掌握行星、卫星、小天体与轨道的基本概念，建立“宇宙地图”的第一层。</p>
        </div>
        <div class="learning-card">
          <h3>2. 理解恒星如何发光</h3>
          <p>从核聚变、光谱到恒星演化，理解“能量从哪里来、会走向哪里”。</p>
        </div>
        <div class="learning-card">
          <h3>3. 认识星系与宇宙结构</h3>
          <p>学习旋臂、星际介质与暗物质等概念，把视角从“行星系统”扩展到“宇宙网络”。</p>
        </div>
        <div class="learning-card">
          <h3>4. 了解极端天体</h3>
          <p>黑洞、中子星与宇宙射线等主题，将把你带到物理规律最极端的边界。</p>
        </div>
      </div>
    </section>

    <section class="tips-section">
      <h2>观测与实践小贴士</h2>
      <ul class="tips-list">
        <li><strong>肉眼观测：</strong>从月相、流星雨、行星合月开始，逐步培养星空直觉。</li>
        <li><strong>手机软件：</strong>使用星图 App 辅助辨认方位与星座，学习“星空坐标系”。</li>
        <li><strong>望远镜入门：</strong>优先观测月面、木星条纹与土星光环，成就感更强。</li>
        <li><strong>观测安全：</strong>严禁直接用肉眼或望远镜直视太阳，太阳观测必须配合专业滤镜。</li>
      </ul>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="about-content">
        <h2>关于本网站</h2>
        <p>
          这里是一份面向大众的太空知识库。我们从太阳系的行星与卫星出发，一路扩展到恒星、星云、星系乃至宇宙学尺度，
          用更清晰的结构与更易读的表达，帮助你建立自己的宇宙认知框架。
        </p>
        <p>
          无论你是学生、教师，还是单纯对宇宙好奇，都可以在这里找到可循序学习的内容与可实践的观测建议。
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  animation: fadeIn 0.4s ease;
  width: 100%;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #13294B 0%, #1e3a5f 50%, #13294B 100%);
  padding: 60px 50px;
  border-radius: 12px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: 300px;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="white" opacity="0.3"/><circle cx="60" cy="30" r="0.5" fill="white" opacity="0.5"/><circle cx="80" cy="60" r="1.5" fill="white" opacity="0.2"/><circle cx="40" cy="70" r="0.8" fill="white" opacity="0.4"/><circle cx="90" cy="10" r="0.6" fill="white" opacity="0.3"/></svg>');
  opacity: 0.5;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.hero h1 {
  font-size: 2.8rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 700;
}

.hero .subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin-bottom: 25px;
}

.hero-btn {
  display: inline-block;
  background: #FF5F05;
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.hero-btn:hover {
  background: #e55500;
  transform: translateY(-2px);
}

/* News Section */
.news-section {
  margin-bottom: 50px;
}

.news-section h2 {
  font-size: 1.5rem;
  color: #13294B;
  margin-bottom: 25px;
  font-weight: 600;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.news-card {
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.news-image {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-icon {
  font-size: 3rem;
}

.news-content {
  padding: 20px;
}

.news-content h3 {
  color: #13294B;
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.news-content p {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Facts Section */
.facts-section {
  margin-bottom: 50px;
}

.facts-section h2 {
  font-size: 1.5rem;
  color: #13294B;
  margin-bottom: 25px;
  font-weight: 600;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.fact-card {
  background: #ffffff;
  padding: 30px 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.fact-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #FF5F05;
  margin-bottom: 8px;
}

.fact-label {
  color: #6b7280;
  font-size: 0.9rem;
}

/* Resources Section */
.resources-section {
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 40px;
  border: 1px solid #e5e7eb;
}

.resources-header {
  margin-bottom: 30px;
}

.resources-header h2 {
  font-size: 1.5rem;
  color: #13294B;
  margin-bottom: 10px;
  font-weight: 600;
}

.resources-header p {
  color: #6b7280;
  font-style: italic;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

.resource-item {
  display: block;
  padding: 15px 20px;
  background: #f8f9fa;
  border-radius: 8px;
  text-decoration: none;
  color: #13294B;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.resource-item:hover {
  background: #13294B;
  color: #ffffff;
  border-color: #13294B;
}

/* About Section */
.about-section {
  background: linear-gradient(135deg, #f0f4f8 0%, #e8ecf0 100%);
  padding: 40px;
  border-radius: 12px;
}

.about-content h2 {
  font-size: 1.5rem;
  color: #13294B;
  margin-bottom: 20px;
  font-weight: 600;
}

.about-content p {
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 15px;
}

.about-content p:last-child {
  margin-bottom: 0;
}

.learning-section {
  margin-bottom: 40px;
}

.learning-section h2 {
  font-size: 1.5rem;
  color: #13294B;
  margin-bottom: 20px;
  font-weight: 600;
}

.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.learning-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.learning-card h3 {
  color: #13294B;
  font-size: 1.05rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.learning-card p {
  color: #4b5563;
  line-height: 1.8;
}

.tips-section {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 40px;
}

.tips-section h2 {
  font-size: 1.5rem;
  color: #13294B;
  margin-bottom: 16px;
  font-weight: 600;
}

.tips-list {
  list-style: none;
  padding: 0;
}

.tips-list li {
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
  line-height: 1.8;
}

.tips-list li:last-child {
  border-bottom: none;
}

.tips-list strong {
  color: #13294B;
}
</style>
