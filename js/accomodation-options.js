


// saving HTML temporarily!!

/* 


    <!-- Modal: details | Alpine-->
    <div class="modal fade" id="detailsAlpine" tabindex="-1" role="dialog" aria-labelledby="detailsAlpine" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header-flex">
              <div><img src="images/accom1.jpeg" alt="image"></div>
              <div>
                  <div class="modal-title">alpine lodge</div>
                  <div class="txt-distance">100km from Remarkables ski area</div>
                  <div class="txt-price"><span class="price-green">$50 NZD</span> / night</div>
                  <div class="star-ctnr"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
              </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
              </button>
          </div>
          <div class="modal-dscptn">
              Real nice hotel with a lake n yum breakfast, you'll have a good time ay.
          </div>
          <div class="modal-footer-flex">
              <div>
                  <div class="ft-title">features:</div>
                  <div class="ft-flex">
                    <div class="iconTxt-wrapper">
                        <img src="images/icons/wifi.svg" alt="wifi svg test">
                        <div class="icon-title">wifi</div>
                    </div>
                    <div class="iconTxt-wrapper">
                        <img src="images/icons/scenic.svg" alt="wifi svg test">
                        <div class="icon-title">scenic</div>
                    </div>
                  </div>
              </div>
              <div class="btn-group dropright">
                  <button type="button" class="btn btn-modal dropdown-toggle" data-toggle="modal" data-target="#bookingAlpine">
                    book now
                  </button>
              </div>
          </div>
        </div> <!--END modal-content-->
      </div>
    </div> <!--END Modal: details | Alpine-->
    
    <!-- Modal: booking | Alpine-->
    <div class="modal fade" id="bookingAlpine" tabindex="-1" role="dialog" aria-labelledby="bookingAlpine" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
         <div> <!--Prevents form for doing weird things-->
          <div class="modal-header-flex">
              <img src="images/accom1.jpeg" alt="image" class="img-booking">
              <div>
                  <div class="modal-title title-booking">Alpine Lodge</div>
                  <div class="txt-price"><span class="price-green">$50 NZD</span> / night</div>
              </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
              </button>
           </div>
          </div>
          <div class="modal-form">
                <div class="input-title">check in:</div>
                <input type="text" class="datepickerHostelIn check-in" required>
                <div class="input-title">check out:</div>
                <input type="text" class="datepickerHostelOut check-out" required readonly>
                <div class="form-flex cpcty-input-hostel">
                  <div class="form-col-left">
                      <div class="input-title">adults:</div>
                      <input type="number" class="inputAdult">
                  </div>
                  <div class="form-col-right">
                      <div class="input-title">children:</div>
                      <input type="number" class="inputChild">
                  </div>
                </div> <!-- END form flex-->
                <div class="warning input-warning"></div>
                <div class="input-title">full name:</div>
                <input type="text" class="input-name" required>
                <div class="input-title">email:</div>
                <input type="email" class="input-email" required>
                <div class="warning email-warning"></div>
          </div><!-- END form-->
          <div class="modal-footer-flex">
          <div>
          </div> <!--Keeps flex in tact-->
           <div class="btn-group">
              <button type="button" class="btn btn-modal confirm-trigger">
                confirm
              </button>
           </div>
          </div>
        </div>
      </div>
    </div> <!--END Modal: booking | Alpine-->
    
    <!-- Modal: confirmation | Alpine-->
    <div class="modal fade" id="confirmationAlpine" tabindex="-1" role="dialog" aria-labelledby="confirmationAlpine" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
         <div> <!--Prevents form for doing weird things-->
          <div class="modal-header-flex">
              <img src="images/accom1.jpeg" alt="image" class="img-booking">
              <div>
                  <div class="modal-title title-booking">Alpine Lodge</div>
                  <div class="txt-price"><span class="price-green">$50 NZD</span> / night</div>
              </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
              </button>
          </div>
          </div>
          <div class="modal-form">
                <div class="total-title">total:</div>
                <div class="total-text"><span id="totalNights">3</span> Nights</div>
                <div class="total-text"><span id="totalAdults">2</span> Adults</div>
                <div class="total-text"><span id="totalAdults">1</span> Child</div>
                <div class="total-text">$50.00 NZD / night</div>
                <div class="total-text">+ $10.00 breakfast per person</div>
                <div class="hr"></div>
                <div class="total-text green">$<span id="priceTotal">750</span>.00 NZD</div>
          </div><!-- END form-->
          <div class="modal-footer-flex">
          <div>
          </div>
           <div class="btn-group">
              <button type="button" class="btn btn-modal">
                Reserve
              </button>
           </div>
          </div>
        </div>
      </div>
    </div> <!--END Modal: confirmation | Alpine-->
    
    <!-- Modal: details | Skiqt-->
    <div class="modal fade" id="detailsSkiqt" tabindex="-1" role="dialog" aria-labelledby="detailsSkiqt" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header-flex">
              <div><img src="images/acom3.jpeg" alt="image"></div>
              <div>
                  <div class="modal-title">ski qt house</div>
                  <div class="txt-distance">50km from Remarkables ski area</div>
                  <div class="txt-price"><span class="price-green">$150 NZD</span> / night</div>
                  <div class="star-ctnr"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
              </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
              </button>
          </div>
          <div class="modal-dscptn">
              Real nice hotel with a lake n yum breakfast, you'll have a good time ay.
          </div>
          <div class="modal-footer-flex">
              <div>
                  <div class="ft-title">features:</div>
                  <div class="ft-flex">
                    <div class="iconTxt-wrapper">
                        <img src="images/icons/wifi.svg" alt="wifi svg test">
                        <div class="icon-title">wifi</div>
                    </div>
                  </div>
              </div>
              <div class="btn-group dropright">
                  <button type="button" class="btn btn-modal dropdown-toggle" data-toggle="modal" data-target="#bookingSkiqt">
                    book now
                  </button>
              </div>
          </div>
        </div> <!--END modal-content-->
      </div>
    </div> <!--END Modal: details | Skiqt-->
    
    <!-- Modal: booking | Skiqt-->
    <div class="modal fade" id="bookingSkiqt" tabindex="-1" role="dialog" aria-labelledby="bookingSkiqt" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
         <div> <!--Prevents form for doing weird things-->
          <div class="modal-header-flex">
              <img src="images/acom3.jpeg" alt="image" class="img-booking">
              <div>
                  <div class="modal-title title-booking">Ski qt house</div>
                  <div class="txt-price"><span class="price-green">$150 NZD</span> / night</div>
              </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
              </button>
           </div>
          </div>
          <div class="modal-form">
                <div class="input-title">check in:</div>
                <input type="text" class="datepickerHouseIn check-in" required>
                <div class="input-title">check out:</div>
                <input type="text" class="datepickerHouseOut check-out" required readonly>
                <div class="form-flex cpcty-input-house">
                  <div class="form-col-left">
                      <div class="input-title">adults:</div>
                      <input type="number" class="inputAdult">
                  </div>
                  <div class="form-col-right">
                      <div class="input-title">children:</div>
                      <input type="number" class="inputChild">
                  </div>
                </div> <!-- END form flex-->
                <div class="warning input-warning"></div>
                <div class="input-title">full name:</div>
                <input type="text" class="input-name" required>
                <div class="input-title">email:</div>
                <input type="email" class="input-email" required>
                <div class="warning email-warning"></div>
          </div><!-- END form-->
          <div class="modal-footer-flex">
          <div>
          </div>
           <div class="btn-group">
              <button type="button" class="btn btn-modal confirm-trigger">
                confirm
              </button>
           </div>
          </div>
        </div>
      </div>
    </div> <!--END Modal: booking | Skiqt-->
    
    <!-- Modal: confirmation | Skiqt-->
    <div class="modal fade" id="confirmationSkiqt" tabindex="-1" role="dialog" aria-labelledby="confirmationSkiqt" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
         <div> <!--Prevents form for doing weird things-->
          <div class="modal-header-flex">
              <img src="images/acom3.jpeg" alt="image" class="img-booking">
              <div>
                  <div class="modal-title title-booking">Ski qt house</div>
                  <div class="txt-price"><span class="price-green">$150 NZD</span> / night</div>
              </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
              </button>
          </div>
          </div>
          <div class="modal-form">
                <div class="total-title">total:</div>
                <div class="total-text"><span id="totalNights">3</span> Nights</div>
                <div class="total-text"><span id="totalAdults">2</span> Adults</div>
                <div class="total-text"><span id="totalAdults">1</span> Child</div>
                <div class="total-text">$150.00 NZD / night</div>
                <div class="total-text">+ $10.00 breakfast per person</div>
                <div class="hr"></div>
                <div class="total-text green">$<span id="priceTotal">750</span>.00 NZD</div>
          </div><!-- END form-->
          <div class="modal-footer-flex">
          <div>
          </div>
           <div class="btn-group">
              <button type="button" class="btn btn-modal">
                Reserve
              </button>
           </div>
          </div>
        </div>
      </div>
    </div> <!--END Modal: confirmation | Skiqt-->
    
    */