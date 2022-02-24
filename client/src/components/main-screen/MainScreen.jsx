import React from 'react'
import HomeStatisck from './home-statistic/HomeStatisck';
import { MainPractics } from './main-practics/MainPractics';
import s from './MainPractics.module.css';
import Footer from './footer/Footer';
import Offer from './home-offer/Offer';
import Advantages from './home-advantages/Advantages';
import Additions from './home-additions/Additions';



const MainScreen = () => {
  return (
      <div className={s.container}>
        <main>
          <div className={s.home_bg}>
            <div className={s.wrapper}>
              <div className={s.main}>
                <div className={s.animated_fadeInDown}>
                  <h1>Онлайн тренажер с упражнениями по SQL</h1>
                  <h3>Научись манипулировать реляционными данными, построй карьеру в IT и в аналитике, отточи навыки работы с SQL запросами.</h3>
                </div>
              </div>
            </div>
          </div>
        </main>
        <MainPractics/>
        <Offer />
        <Advantages />
        <Additions/>
        <HomeStatisck />
        <Footer/>
      </div>
  )
}

export default MainScreen