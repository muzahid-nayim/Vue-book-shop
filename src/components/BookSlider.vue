<template>
    <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
        clickable: true,
    }" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 0,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 4,
        spaceBetween: 50,
    },
}" :modules="modules" class="mySwiper">
        <swiper-slide v-for="book in books" :key="book.id">
            <div class="card">
                <img :src="book.image" class="card-img-top" style="max-height: 250px;">
                <div class="card-body">
                    <p class="card-title m-0">{{book.name}}</p>
                    <p class="card-text m-0">৳ {{book.price}}</p>
                    <router-link :to="{name:'book-details' ,params:{id: book.id}}" class="btn btn-primary">View Details</router-link>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['books', 'error'],
    setup(props) {


        return { modules: [Pagination] }
    }
}
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #ffffff;
    padding: 20px;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>