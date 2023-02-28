// SWIPER
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
// CSS
import styles from './Slider.module.css'
// COMPONETS
import Image from 'next/image';
import imagens from './imagens.json'

export default function Slider() {
    const comprimento = 420
    const altura = 300

    function render() {
        return imagens.map(imagem => {
            return (
                <SwiperSlide key={imagem.descricao} className={styles.centralizacao} >
                    <a href={imagem.url} target="_blank" >
                        <Image className={styles.slider} src={require('../../../../public/img/' + imagem.imagem)}
                            alt={imagem.descricao} />
                    </a>
                </SwiperSlide>
            )
        })
    }

    return (
        <Swiper slidesPerView={3} >
            {render()}
        </Swiper>
    )
}