<template>
  <header class="header">
      <!-- <nav class="nav-bar py-3">
        <a class="navbar-brand" href="#">
          <img
            src="../../public/assets/images/icons/Asset 1ldpi.png"
            alt="logo"
          />
        </nuxt-link>
        <div class="menu">
          <SocialLinks />
          <a href="#" class="menu-item lang">
            <img
              src="../../public/assets/samia_assets/icons/Asset 4ldpi.png"
              alt=""
            />
          </a>
          <a href="#" class="menu-item search">
            <img
              src="../../public/assets/samia_assets/icons/Asset 3ldpi.png"
              alt=""
            />
          </a>
          <a href="#" class="toggler" v-on:click="openSlideMenu()">
            <img
              src="../../public/assets/samia_assets/icons/Asset 5ldpi.png"
              alt=""
              width="30px"
            />
          </a>
        </div>

      </nav> -->
      <!-- <div id="menu" class="nav1">
        <a href="#" class="menu-link close" v-on:click="closeSlideMenu()">
          <i class="fa fa-close"></i>
        </a>
          <nuxt-link class="menu-link"  to="/">Home</nuxt-link>
          <nuxt-link class="menu-link"  to="/about">About Us</nuxt-link>
          <nuxt-link class="menu-link"  to="/practice">Practice</nuxt-link>
          <nuxt-link  class="menu-link" to="/ourprofile"> Our Profile</nuxt-link>
          <nuxt-link  class="menu-link" to="/contact">Contact</nuxt-link>
          
<div class="media-drop">
  <button class="media-btn">Media Center</button>
  <div class="dropdown-content">
    <nuxt-link to="/media/videos">Vedio</nuxt-link>
    <nuxt-link to="/media/gallery">Photo Gallery</nuxt-link>
  </div>
</div>

          <button class="btn classic-btn call ">CALL: +9714 220 0399</button>
          <SocialLinks :class="{desktophide:true}"/>
          <div>
            <a href="#" class="desktophide mobileshow-inline menu-item lang">
            <img
              src="../../public/assets/samia_assets/icons/Asset 4ldpi.png"
              alt=""
            />
            </a>
            <a href="#" class="desktophide mobileshow-inline menu-item search">
            <img
              src="../../public/assets/samia_assets/icons/Asset 3ldpi.png"
              alt=""
            />
          </a>
          </div>
              
      </div> -->
      <nav class="navbar navbar-expand-sm navbar-dark">
  <div class="container">
    <img    class="navbar-brand"
            src="../../public/assets/images/Icons/Asset 1ldpi.png"
            alt="logo"
          />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon">
          <img
              src="../../public/assets/samia_assets/icons/Asset 5ldpi.png"
              alt=""
              width="30px"
            />
      </span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav menu mx-auto">
        <li class="nav-item">
          <nuxt-link class="menu-link"  to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="menu-link"  to="/about">About Us</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="menu-link"  to="/practice">Practice</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link  class="menu-link" to="/ourprofile"> Our Profile</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link  class="menu-link" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <HeaderSection v-show="isVisible" />
  </header>
</template>

<script>
import HeaderSection from "./Header_Section";
import SocialLinks from "./SocialLinks";

export default {
  name: "Header",
  components: {
    HeaderSection,
    SocialLinks
  },
  props: {
    isVisible: Boolean,
  },
  methods: {
    openSlideMenu() {
      document.getElementById("menu").style.width = "320px";
    },
    closeSlideMenu() {
      document.getElementById("menu").style.width = "0";
    },
  },
};
</script>

<style scoped></style>
