<script>
import Home from "../components/Home/Home";
import About from "../components/Home/About";
import Statistics from "../components/Home/Statistics";
import OurTeam from "../components/Home/OurTeam";
import OfficeLocation from "../components/Home/OfficeLocation";
import PracticeArea from "../components/Home/PracticeArea";
import Appointment from "../components/Common/Appointment";
import LeaderInfo from "../components/Home/LeaderInfo";
import OurPlan from "../components/Home/OurPlan";

export default {
  layout: 'app',
  name: "index",
  components: {
    Home,
    Appointment,
    About,
    OurPlan,
    Statistics,
    PracticeArea,
    OfficeLocation,
    LeaderInfo,
    OurTeam
  }
};
</script>
<template>
  <div>
  <Home />
  <Statistics />
  <About />
  <OurPlan />
  <OfficeLocation />
  <LeaderInfo />
  <OurTeam />
  <PracticeArea />

  </div>
</template>

<style scoped>

</style>
