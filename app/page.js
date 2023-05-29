import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <header className={styles.main}>
      <div className={styles.menu_container}>
        <nav id="navbar" className={styles.nav_bar}>
          <ul className={styles.menu_primary}>
            <li className={styles.menu_item} id="menu-item-home">
              <a title="home" href="#navbar">Home</a>
            </li>
            <li className={styles.menu_item} id="menu-item-about">
              <a title="about" href="#about">About</a>
            </li>
            <li className={styles.menu_item} id="menu-item-projects">
              <a title="projects" href="#projects">Projects</a>
            </li>
            <li className={styles.menu_item} id="menu-item-contact">
              <a title="contact" href="#contact">Contact</a>
            </li>
          </ul>
        </nav> 
      </div>
      <div className={styles.name_avatar}>
      <img className={styles.avatar}src='https://images.unsplash.com/photo-1685110191196-0a04ac68ea13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
      <h1>Oleksiy Kotukh</h1>
      <h2>UI/UX designer</h2>
      <p>This is my first portfolio and it's strange</p>
      </div>
      <section className={styles.information}>
        <div className={styles.about}>
          <h2 id="about">ABOUT</h2>
          <div className={styles.text}>
            <p>I am a professional UI/UX designer with years of experience in creating high-quality user interfaces and memorable experiences for products and platforms. My strong desire to create beautiful and functional designs always helps me achieve the best results.</p>
          </div>
        </div>
        <div className={styles.projects}>
          <h2 id="projects">PROJECTS</h2>
          <p></p>
        </div>
        <div className={styles.img_projects}>
          <p><a href="https://www.figma.com/file/0aVKpsneZH5uBtNiwsyyb9/Untitled?type=design&t=8lcDLTAV9cSmkWFr-6">Music player</a></p>
          <img className={styles.photo1}src='https://images.unsplash.com/photo-1519619091416-f5d7e5200702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'></img>
          <img className={styles.photo2}src='https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGlzdG9yeSUyMHF1aXp8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'></img>
          <p1><a href="https://www.figma.com/file/sykEwKtmILPNEuePqY09M4/Untitled?type=design&t=8lcDLTAV9cSmkWFr-6">History quiz</a></p1>
        </div>
        <div className={styles.contacts}>
          <h2 id="contact">Contact</h2>
          <p></p>
        </div>
        <div className={styles.network}>
          <p>
           Number: +380637722649
          </p>
          <p>
          Telegram: @Leha_Kotukh
          </p><p>
           Instagram: leha_kotukh
          </p>
        </div>
      </section>
    </header>
   )
}
