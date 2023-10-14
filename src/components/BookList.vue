<template>
    <div class="">
        <h3 class="text-center ">All books</h3>
        <div class="text-center" v-if="error">
            <h1><code>!!!{{ error }}!!!</code></h1>
        </div>
        <div v-if="books.length">
            <div class="row g-3">
                <div v-for="book in books" :key="book.id" class="col-6 col-md-4 col-lg-3">
                    <!-- START SINGE BOOK CARD  -->
                    <div class="card" style="max-width: 300px;">
                        <img :src="book.image" class="card-img-top" :alt="book.name" style="max-height: 250px;">
                        <div class="card-body text-center">
                            <p class="card-title m-0 p-0">{{ book.name }}</p>
                            <p class="card-text">{{ book.author }}</p>
                            <router-link :to="{name:'book-details' ,params:{id: book.id}}" class="btn btn-primary">View Details</router-link>
                        </div>
                    </div>
                    <!-- END SINGE BOOK CARD  -->
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            <h1><code>Loading.....</code></h1>
        </div>
    </div>
</template>


<script>
export default {
    props: ['books', 'error'],

}

</script>


<style></style>