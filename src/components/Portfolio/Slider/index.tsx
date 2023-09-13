// SWIPER
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
// CSS
import styles from './Slider.module.css'
// COMPONETS
import Image from 'next/image';
import imagens from './imagens.json'
import Link from 'next/link';

export default function Slider() {

    function render() {
        const reversedArray = [...imagens].reverse();
        return reversedArray.map(imagem => {
            return (
                <SwiperSlide key={imagem.descricao} className={styles.centralizacao} >
                    <Link passHref href={imagem.url} rel="noreferrer" target="_blank" >
                        <Image className={styles.slider} src={require('../../../../public/img/' + imagem.imagem)}
                            alt={imagem.descricao} />
                    </Link>
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