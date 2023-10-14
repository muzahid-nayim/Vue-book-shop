<template>
    <main>
        <div class="content container">
            <div v-if="book">
                <h1 class="text-center my-3">Book Details</h1>
                <!-- START SINGLE BOOK CARD  -->
                <div class="row container single-book-card p-5 rounded">
                    <!-- START BOOK IMAGE  -->
                    <div class="col-md-6 text-center single-book-image">
                        <img :src="book.image" :alt="book.image">
                    </div>
                    <!-- END BOOK IMAGE  -->
                    <div class="col-md-6 mt-4 mt-md-0">
                        <!-- START BOOK DETAILS  -->
                        <div class="book-details text-center text-md-start">
                            <h5 class="lead">{{ book.name }}</h5>
                            <p class="m-0 p-0">By: <a href="#">{{ book.author }}</a> </p>
                            <p>Category: <a href="#">{{ book.category }}</a></p>
                            <p class="m-0 p-0"><span class="text-info">{{ book.page }}</span> Pages</p>
                            <p class="lead">TK. <span class="price">{{ book.price }}</span> ৳ only</p>
                            <p class="mt-3 lead"><i class='bx bxs-check-circle' style="color: green;"></i> In stock (10 copy
                                availavle)</p>
                            <button class="btn-primary btn">Add to Cart</button>
                        </div>
                        <!-- END BOOK DETAILS  -->
                    </div>
                </div>
                <!-- END SINGLE BOOK CARD  -->
            </div>
            <div v-else>Loading...</div>

            <!-- START CATEGORY BOOK SECTION  -->
            <div class="my-4">
                <h2 class="text-center">{{ category }} releted books</h2>
                <p ref="ct">{{ category }}</p>
                <BookSlider :books="categoryBooks" :error="getBooksError" />
                <!-- END CATEGORY BOOK SECTION  -->
            </div>
        </div>
    </main>
</template>

<script>
import { computed,watchEffect,ref } from 'vue';
import getBook from '../../composables/getBook'
import getBooks from '../../composables/getBooks'
import BookSlider from '../../components/BookSlider.vue'

export default {
    components: {
        BookSlider
    },
    props: ['id'],
    setup(props) {
        const { book, error, load } = getBook(props.id)
        load()

        const category = ref(null)
        watchEffect(() => {
            if (book.value) {
                category.value = book.value.category;
            }
        });
        
        const { books: categoryBooks, error: getBooksError, load: getBooksload } = getBooks(category.value);//not working
        getBooksload()

        return { book, error, getBooksError, categoryBooks, category }
    }
}

</script>

