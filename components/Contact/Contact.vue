<template>
<section id="myPage">
  <!--devide-->
  <div class="container text-center">
    <div class="row">
        <div class="col-sm-6">
            <h1 class="location">Our Dubai Office</h1>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d461703.1776370458!2d56.400751!3d25.30232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdabdf1214880e0b0!2sSamya%20Saeed%20Lawyers%20%26%20Legal%20Consultants!5e0!3m2!1sen!2sus!4v1670412794993!5m2!1sen!2sus" 
                width="550" height="450" 
                style="border:0;" allowfullscreen="true" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        <div class="col-sm-6">
            <h1 class="location">Our Ajman Office</h1>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d461359.2360925015!2d55.432619!3d25.392455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f0757e0a720c07c!2sUnion%20Insurance%20Company!5e0!3m2!1sen!2sus!4v1670412954225!5m2!1sen!2sus" 
                width="550" height="450" 
                style="border:0;" allowfullscreen="true" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
    <div class="info-box-content row">
  <div class="col-md-4">
     <div class="thumbnail">
      <i class="fas fa-inbox" style="font-size:40px;"></i>
      <p><strong>Email Address</strong></p><br>
        <p>Dubai:= dxbinfo@ssjlawyers.com</p>
        <p>Ajman :=info@ssjlawyers.com</p>
      </div>
  </div>
  <div class="col-md-4">
     <div class="thumbnail">
      <i class="fas fa-phone-alt" style="font-size:40px;"></i>
      <p><strong>Phone Number </strong></p><br>
        <p>Dxb:= +971 4 220 0399</p>
        <p>Ajm =: +971 6 779 4440</p>
      </div>
  </div>
  <div class="col-md-4">
     <div class="thumbnail">
      <i class="fas fa-map-marker-alt" style="font-size:40px;"></i>
      <p><strong>Head Office </strong></p><br>
        <p>OFFICE NO. 801 & 802 GREEN TOWER RIGGAT AL BUTEEN - MARQABAD DUBAI - UNITED ARAB EMIRATES</p>
      </div>
  </div>
</div>
<div class="row">
        <div class="col-sm-6">
           <div class="contact">
            <h2>Let's Talk</h2><br>
            <h4><span class="title-word title-word-1">Give </span><span class="title-word title-word-2">us </span><span class="title-word title-word-3">call... </span> </h4 > 
            <i class="fas fa-phone-alt" style="font-size:40px;"></i>
            </div> 
                     
        </div>
        <div class="col-sm-6">
          <div class="contact">  
          <h2><span class="title-word title-word-1">Get </span><span class="title-word title-word-2">an </span><span class="title-word title-word-4">Appointment </span><span class="title-word title-word-3">Today!</span></h2>
          
          
          
          <form action="" method="POST" >
            <div class="row">
              <div class="col-sm-6">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  class="form-control mb-2"
                  placeholder="first name"
                  required
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  class="form-control mb-2"
                  placeholder="last name"
                  required
                />
              </div>
              
            </div>
            <div class="col-sm-12">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  class="form-control mb-2"
                  placeholder="last name"
                  required
                />
              </div>
              <div class="col-sm-12">
                <textarea
                  name="message"
                  id="message"
                  class="form-control mb-3"
                  rows="6"
                  placeholder="Enter your message"
                >
                </textarea>
              </div>
            <button class="btn btn-success" type="submit" id="send-btn" >Send</button>
            
          </form> 
          </div>         
        </div>
</div>
  </div>
</section>
</template>