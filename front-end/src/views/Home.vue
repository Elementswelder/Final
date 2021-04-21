<template>
  <div class="app">
    <div class="overall">
    <div class="header">
  <p>Wellness Crusaders</p>
    </div>
    <div class="intro">
      <p>Welcome to Wellness Crusaders</p>
      <span>Here at Wellness Cursaders we promote health, wellness and training to help you become the best possible you!</span>
    </div>
    <div class="overallTwo">
    <div class="box">
    <p>Our Goals</p>
  </div>
  <div class="list">
    <ul>
      <li>Make <strong>you</strong> healthy through training, and nutrition!</li>
      <li>Keep <strong>you</strong> healthy through dicipline training!</li>
      <li>Make sure <strong>you</strong> understand WHY you're healthy!</li>
    </ul>
  </div>
  <div class="image">
    <img src="/point.jpg"/>
  </div>
  </div>
</div>

  <div class="blank">
  </div>
</div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script:wght@600&display=swap');

.image {
  margin-top: 60px;
  background: #e8e8e8;
  opacity: 0.90;
  width: 300px;
  height: 300px;
  padding: 20px 20px;
  font-size: 64px;
  text-align: center;
  border-radius: 20px;
}

.image img {
  border-radius: 20px;
  width: 300px;
  height: 300px;
}
.overall {
  margin: 0;
  font-family: 'Abel', sans-serif;

}

.overallTwo {
  padding: 30px;
  display: flex;
  flex-direction: row;
}

.intro {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
}

.intro span {
  font-weight: normal;
  font-size: 24px;
}

.header {
  color: white;
  font-size: 64px;
  font-family: 'Dancing Script', cursive;
  text-align: center;
  background-image: url("/headerbackground.jpg");
  background-size: 100%;
  border: 1px solid black;
}

.goals {
  text-align: center;
}

.goals h1 {
  font-size: 36px;
}

.box {
  margin-top: 60px;
  background: #e8e8e8;
  opacity: 0.90;
  width: 200px;
  height: 300px;
  padding: 20px 20px;
  font-size: 64px;
  text-align: center;
  border-radius: 20px;

}

.list {
  padding-top: 90px;
  padding-left: 40px;
  font-size: 45px;
}


.register {
  width: 100px;
  justify-content: center;
  padding-top: 50px;


}

.blank {
  padding: 100px;
}


</style>
