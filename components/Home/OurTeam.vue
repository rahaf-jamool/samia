<template>
  <section class="homepage our-team text-center">
    <div class="container">
      <h2 class="ptblsstr big-title mx-auto">Our Team</h2>
      <div class="row items">
        <div class="col-lg-4 col-sm-12">
          <PersonTeam
            image="Untitled-2-10.png"
            title="ADV. SHIEK ABDULLA JAMAL BIN NASER "
            description=" is has done her Law degree from University of Ajman in the year 2021 having attained her Bachelors of Law Degree from the University of Ajman. He also holds a Post Graduate Diploma"
            link="#"
          />
        </div>
                <div class="col-lg-4 col-sm-12">
          <PersonTeam
            image="Untitled-2-11.png"
            title="ADVOCATE  SHEIKH ALI  JAMAL BIN NASER  "
            description=" ADV. SHEIKH ALI JAMAL BIN NASER is has done her Law degree from University of Ajman in the year 2018 having attained her Bachelors of Law Degree from the University of Ajman. He also "
            link="#"
          />
        </div>
                <div class="col-lg-4 col-sm-12">
          <PersonTeam
            image="Untitled-2-12.png"
            title="ADV. HASSAN MUBARK HASSAN ELSAFI"
            description=" HASSAN MUBARK HASSAN ELSAFI is an expert and highly motivated lawyer with sum of 9 years Certified experience. He has done his law graduation from Faculty of Law University of Khartoum . He is holding Bachelor Degree"
            link="#"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import PersonTeam from "./PersonTeam";

export default {
  name: "OurTeam",
  components: {
    PersonTeam,
  },
};
</script>