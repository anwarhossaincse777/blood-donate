
<script setup>
import '../../assets/img/perfil.png'
import '../../assets/img/advertisement.png'
import profile from  "../../assets/img/profile-pic.png"

import { Link } from '@inertiajs/vue3'

import SettingMenu from "@/Components/SettingMenu.vue";
import {ref} from "vue";

const isShowing=ref(false);

function showSetting(){
   if(isShowing.value===false){
       isShowing.value=true;
   }else{
       isShowing.value=false;
   }
}


</script>


<template>
    <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo">Marlon</a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <Link :href="route('home')" class="nav__link active-link">
                            <i class="bx bx-message-alt nav__icon"></i>
                            <span class="nav__name">Home</span>
                        </Link>
                    </li>

                    <li class="nav__item">
                        <a href="message.html" class="nav__link">
                            <i class="bx bx-message-square-dots nav__icon"></i>
                            <span class="nav__name">Message</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="#search" class="nav__link">
                            <i class="bx bx-search-alt nav__icon"></i>
                            <span class="nav__name">Search</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <Link :href="route('map')" class="nav__link">
                            <i class="bx bx-map nav__icon"></i>
                            <span class="nav__name">Map</span>
                        </Link>
                    </li>
                </ul>
            </div>


            <div class="search_box">
                <i class="fa fa-search" aria-hidden="true"></i>
                <div class="search-box">
                    <input type="text" placeholder="Search Hear">
                </div>
            </div>

            <div class="nav-user-icon online" @click="showSetting">
                <img   :src="profile">
            </div>




            <!--------------------- setting-menu ---------------------------------------->

        <div v-show="isShowing">
           <button @click="showSetting">setting  show</button>
        </div>

            </nav>
    </header>
</template>



<style scoped>

</style>
