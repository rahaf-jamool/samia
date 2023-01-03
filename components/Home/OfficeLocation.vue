<template>
  <section class="homepage officelocation">
    <div class="container">
      
            <div class="row">
                <div class="col-lg-7 col-sm-12">
                    <img
                        class=""
                        src="../../public/assets/samia_assets/images/Untitled-1-04.png"
                        alt=""
                    />
                </div>
                <div class="col-lg-4 col-sm-12 officeInfo">
                  <h2 class="ptblsstr">Office Locations</h2>
                    <Location
                      title="Head Office (DUBAI)"
                      :description="desc1"/>
                  
                    <Location title="AJMAN" :description="desc2" />
                    <Location title="SHARJAH" :description="desc3" />
                </div>
      
        
    </div>
    </div>
  </section>
</template>

<script>
import Location from "./location.vue";

export default {
  name: "OfficeLocation",
  components: {
    Location,
  },
  data() {
    return {
      desc1: [
        "OFFICE NO. 801 & 802",
        "GREEN TOWER",
        "RIGGAT AL BUTEEN MARQABAD DUBAI -",
        "UNITED ARAB EMIRATES",
        "Email:dxbinfo@ssjjewellers.com",
        "TEL: +9714 220 0399",
      ],
      desc2:["OFFICE NO. 301","CRYSTAL TOWER AL NUAIMIA - 3","AJMAN - UNITED ARAB EMIRATES",
      "Email: info@ssjlawyers.com","TEL: +971 6 779 4440"],
      desc3: ["COMING SOON", "TEL: +971 6 779 4440"],
    };
  },
};
</script>