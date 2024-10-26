import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
import bannerImg from 'img/banner.jpg'
import bannerImgRetina from 'img/banner@x2.jpg'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <section className={styles.banner}>
      <img
        srcSet={`${bannerImg} 1x, ${bannerImgRetina} 2x`}
        src={bannerImg}
        className={styles.background}
        alt='Camping'
      />
      <Container>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.description}>You can find everything you want in our catalog</p>
        <Button as='link' to='/campers' className={styles.btn}>
          View Now
        </Button>
      </Container>
    </section>
  )
}

export default Banner
