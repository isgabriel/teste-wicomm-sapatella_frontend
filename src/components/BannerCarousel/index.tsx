import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Modal } from "../Modal";
import styles from "./styles.module.scss";

const BannerCarousel = () => {
    const slides = [
        { id: 1, imageUrl: "assets/banners/banner.svg" },
        { id: 2, imageUrl: "assets/banners/banner.svg" },
        { id: 3, imageUrl: "assets/banners/banner.svg" },
    ];

    return (
        <section className={styles.carouselContainer}>
            <Swiper
                autoplay={{
                    delay: 3000,
                    stopOnLastSlide: false,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
                loop
                className={styles.mySwiper}
                navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
                        <Modal />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export { BannerCarousel };
