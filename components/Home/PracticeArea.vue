<template>
  <section class="homepage practicearea">
    <div class="container">
      <h2 class="ptblsstr big-title mx-auto text-center">
        <nuxt-link to="/practice">Practice Areas</nuxt-link>
      </h2>
      <div class="row">
        <div class="col-lg-6 col-sm-12 mb-4">
          <div class="row item align-items-center backbord marginright">
            <div class="col-6 pl-0">
              <img
                class="praimg"
                src="../../public/assets/samia_assets/images/Untitled-2-05.png"
              />
            </div>
            <div class="col-6">
              <h3>Assurance Law</h3>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
              <button class="btn classic-btn">More</button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 mb-4">
          <div class="row item align-items-center backbord">
            <div class="col-6 pl-0">
              <img
                class="praimg pl-0"
                src="../../public/assets/samia_assets/images/Untitled-2-07.png"
              />
            </div>
            <div class="col-6">
              <h3>Assurance Law</h3>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
              <button class="btn classic-btn">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PracticeArea",
};
</script>