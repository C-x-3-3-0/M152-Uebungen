<template>
  <ul class="people">
    <li v-for="index in 10" :key="index" class="person">
      <div class="person__inner">
        <img class="person__image" src="https://i.pinimg.com/564x/d8/cd/1b/d8cd1ba4e5190fb29dd27c31c4c1fde3.jpg" width="300" height="300" />
        <div class="person__content">
          <div class="person__title">
            Hao Wang
          </div>
          <div class="person__text">
            Web Entwickler
          </div>
          <button class="person__button">Kontaktieren</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">

.people {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .person {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    width: calc(33.33% - 10px);
    .person__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid black;
      padding: 20px;
      .person__image {
        border-radius: 50%;
        margin-bottom: 10px;
      }
      .person__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .person__title {
          font-size: 2rem;
          font-weight: bold;
        }
        .person__text {
          margin-top: 5px;
        }
        .person__button {
          background-color: teal;
          border-radius: 5px;
          color: white;
          padding: 10px;
          border: none;
          margin: 10px 0 0;
        }
      }
    }
  }
  @media (max-width: 1023px) {
    .person {
      width: calc(50% - 10px);
      .person__inner {
        flex-direction: row;
        .person__image {
          margin-right: 10px;
          margin-bottom: 0;
          width: 150px;
          height: 150px;
        }
        .person__content {
          align-items: flex-start;
          text-align: left;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .person {
      width: 100%;
      .person__inner {
        flex-direction: column;
        .person__image {
          margin-bottom: 10px;
          width: 300px;
          height: 300px;
        }
        .person__content {
          align-items: center;
          text-align: center;
        }
      }
    }
  }
}
</style>
