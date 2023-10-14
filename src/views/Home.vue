<template>
    <div class="home my-3">
        <!-- START MAIN SECTION   -->
        <main>
            <div class="row m-0">
                <!-- START all books section  -->
                <div class="col-md-9 border p-2" :class="border">
                    <BookList :books="books" :error="error" />
                </div>
                <!-- END all books section  -->
                <div class="col-md-3 border p-1  text-center">
                    <!-- START CATEGORY SECTION  -->
                    <div>
                        <h3>category</h3><hr>
                        <ul>
                            <li class="p-2 bg-secondary my-1"><a href="#">Category 1</a></li>
                            <li class="p-2 bg-secondary my-1"><a href="#">Category 1</a></li>
                            <li class="p-2 bg-secondary my-1"><a href="#">Category 1</a></li>
                            <li class="p-2 bg-secondary my-1"><a href="#">Category 1</a></li>
                            <li class="p-2 bg-secondary my-1"><a href="#">Category 1</a></li>
                            <a href="#">More ...</a>
                        </ul>
                    </div>
                    <!-- END CATEGORY SECTION  -->
                    <!-- START AUTHOR SECTION  -->
                    <div>
                        <h3>Autohur</h3><hr> 
                        <ul>
                            <li class="p-2 bg-info my-1"><a href="#">Author 1</a></li>
                            <li class="p-2 bg-info my-1"><a href="#">Author 1</a></li>
                            <li class="p-2 bg-info my-1"><a href="#">Author 1</a></li>
                            <li class="p-2 bg-info my-1"><a href="#">Author 1</a></li>
                            <li class="p-2 bg-info my-1"><a href="#">Author 1</a></li>
                            <li class="p-2 bg-info my-1"><a href="#">Author 1</a></li>
                            <a href="#">More ...</a>

                        </ul>
                    </div>
                    <!-- END AUTHOR SECTION  -->
                </div>
            </div>
        </main>
        <!-- END MAIN SECTION  -->
    </div>
</template>

<script>
// @ is an alias to /src

import getBooks from "../composables/getBooks"
import BookList from '../components/BookList.vue'
export default {
    name: "HomeView",
    components: { BookList },
    setup() {
        const { books, error, load } = getBooks()
        load()

        return { books, error }
    }
};
</script>

<style>

</style>
