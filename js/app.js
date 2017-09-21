$$(document).on("pageInit", function(e) {
    var page = e.detail.page;
	console.log('initialized');
	
	// departures page
	if (page.name === 'departures') {
	console.log('departures page loaded');
	//var loadNews();
		var htmlText1 ="";
		console.log('222222222222222');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/departures.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								htmlText1 += '<li><a href="#" data-popover=".popover-' + data[i].id + '" class="link open-popover" class="item-link item-content">';
								
								htmlText1 += '<div class="item-inner">';
								htmlText1 += '<div class="item-title"> <img src="img/airlines/' + data[i].logoname + '" width="100" alt="' + data[i].logoalt + '"><div class="smallfont">' + data[i].aAirportCode + ' - ' + data[i].airline + ' ' + data[i].flight + '</div></div>';
								htmlText1 += '<div class="item-after timefont">' + data[i].dDate + '<br> ' + data[i].dTime + '</div>';
								htmlText1 += '</div></a></li>';
								
								htmlText1 += '<div class="popover popover-' + data[i].id + '">';
								htmlText1 += '<div class="popover-angle"></div>';
								htmlText1 += '<div class="popover-inner">';
								htmlText1 += '<div class="content-block">';
								htmlText1 += '<a href="#" class="timefont close-popover">X Close</a>';
								htmlText1 += '<div class="row no-gutter">';
								htmlText1 += '<div class="col-45 blue fixedheight">';
								htmlText1 += '<div class="card-content">';
								htmlText1 += '<div class="content-block">';
								htmlText1 += '<h3 class="maintitle col-100">' + data[i].dAirportName + ' (' + data[i].dAirportCode + ')</h3>';
								htmlText1 += '<p class="col-100">' + data[i].dDate + ' ' + data[i].dTime + '</p>';
								htmlText1 += '<div class="clear"></div>';
								htmlText1 += '</div>';
								htmlText1 += '<div class="clear"></div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '<div class="col-10 green fixedheight">';
								htmlText1 += '<div class="card-content">';
								htmlText1 += '<div class="content-block">';
								htmlText1 += '<h2 class="maintitle col-100"><i class="icon material-icons rotate-90">airplanemode_active</i></h2>';
								htmlText1 += '<div class="clear"></div>';
								htmlText1 += '</div>';
								htmlText1 += '<div class="clear"></div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '<div class="col-45 green fixedheight">';
								htmlText1 += '<div class="card-content">';
								htmlText1 += '<div class="content-block">';
								htmlText1 += '<h3 class="maintitle col-100 ">' + data[i].aAirportName + ' (' + data[i].aAirportCode + ')</h3>';
								htmlText1 += '<p class="col-100">' + data[i].aDate + ' ' + data[i].aTime + '</p>';
								htmlText1 += '<div class="clear"></div>';
								htmlText1 += '</div>';
								htmlText1 += '<div class="clear"></div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';          
								htmlText1 += '</div>';
								htmlText1 += '<p><h4><img src="img/airlines/' + data[i].logoname + '" width="100" alt="' + data[i].logoalt + '">' + data[i].airline + ' ' + data[i].flight + '</h4></p>';
								//htmlText1 += '<p><i class="color-blue">from:</i> ' + data[i].dAirportName + ' (' + data[i].dAirportCode + ')<br><i class="color-blue">to:</i> ' + data[i].aAirportName + ' (' + data[i].aAirportCode + ')<br><i class="color-blue">departure:</i> ' + data[i].dDate + ' ' + data[i].dTime + '<br><i class="color-blue">actual:</i> ' + data[i].dDateActual + ' ' + data[i].dTimeActual + '<br><i class="color-blue">arrival:</i> ' + data[i].aDate + ' ' + data[i].aTime + '<br><i class="color-blue">actual:</i> ' + data[i].aDateActual + ' ' + data[i].aTimeActual + '<br><i class="color-blue">duration:</i> ' + data[i].flightDuration + ' minutes<br><i class="color-blue">departure terminal:</i> ' + data[i].dTerminal + '<br><i class="color-blue">plane:</i> ' + data[i].plane + '<br><i class="color-blue">widebody:</i> ' + data[i].widebody + '<br><i class="color-blue">tail number:</i> ' + data[i].tailNumber + '<br><span class="badge bg-' + data[i].statuscolor + '">' + data[i].statusname + '</span></p>';
								htmlText1 += '<div class="list-block accordion-list inset">';
								htmlText1 += '<ul>';
								htmlText1 += '<li class="accordion-item"><a href="#" class="item-link item-content">';
								htmlText1 += '<div class="item-inner">';
								htmlText1 += '<div class="item-title smallfont">More Information</div>';
								htmlText1 += '</div></a>';
								htmlText1 += '<div class="accordion-item-content">';
								htmlText1 += '<div class="list-block">';
								htmlText1 += '<ul>';
								htmlText1 += '<li>';
								htmlText1 += '<div class="item-content">';
								htmlText1 += '<div class="item-inner"> ';
								htmlText1 += '<div class="item-title smallfont"><i class="color-blue">Duration:</i> ' + data[i].flightDuration + ' minutes </div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</li>';
								htmlText1 += '<li>';
								htmlText1 += '<div class="item-content">';
								htmlText1 += '<div class="item-inner">';
								htmlText1 += '<div class="item-title smallfont"><i class="color-blue">Departure Terminal:</i> ' + data[i].dTerminal + '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</li>';
								htmlText1 += '<li>';
								htmlText1 += '<div class="item-content">';
								htmlText1 += '<div class="item-inner">';
								htmlText1 += '<div class="item-title smallfont"><i class="color-blue">Plane:</i> ' + data[i].plane + '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</li>';
								htmlText1 += '<li>';
								htmlText1 += '<div class="item-content">';
								htmlText1 += '<div class="item-inner">';
								htmlText1 += '<div class="item-title smallfont"><i class="color-blue">Wide Body:</i> ' + data[i].widebody + '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</li>';
								htmlText1 += '<li>';
								htmlText1 += '<div class="item-content">';
								htmlText1 += '<div class="item-inner">';
								htmlText1 += '<div class="item-title smallfont"><i class="color-blue">Tail Number:</i> ' + data[i].tailNumber + '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</li>';
								htmlText1 += '</ul>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</li>';
								htmlText1 += '</ul>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								htmlText1 += '</div>';
								
							});
							$("#deps").html(htmlText1);
							console.log("Done");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading Departures List");
						}

					});
	}
	/////////// end
	
	// arrivals page
	if (page.name === 'arrivals') {
	console.log('arrivals page loaded');
	//var loadNews();
		var htmlText ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/arrivals.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								htmlText += '<li><a href="#" data-popover=".popover-' + data[i].id + '" class="link open-popover" class="item-link item-content">';
								
								htmlText += '<div class="item-inner">';
								htmlText += '<div class="item-title"> <img src="img/airlines/' + data[i].logoname + '" width="100" alt="' + data[i].logoalt + '"><div class="smallfont">' + data[i].aAirportCode + ' - ' + data[i].airline + ' ' + data[i].flight + '</div></div>';
								htmlText += '<div class="item-after timefont">' + data[i].dDate + '<br> ' + data[i].dTime + '</div>';
								htmlText += '</div></a></li>';
								
								htmlText += '<div class="popover popover-' + data[i].id + '">';
								htmlText += '<div class="popover-angle"></div>';
								htmlText += '<div class="popover-inner">';
								htmlText += '<div class="content-block">';
								htmlText += '<div class="row">';
								htmlText += '<div class="col-90">';
								htmlText += '<a href="#" class="timefont close-popover">X Close</a>';
								htmlText += '</div>';
								htmlText += '<div class="col-10" onclick="window.plugins.socialsharing.share(\'SAS Airports App\', null, null, \'http://www.sasairports.com/\')">';
								htmlText += '<i class="icon material-icons">share</i> Share';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '<div class="row no-gutter">';
								htmlText += '<div class="col-45 blue fixedheight">';
								htmlText += '<div class="card-content">';
								htmlText += '<div class="content-block">';
								htmlText += '<h3 class="maintitle col-100">' + data[i].dAirportName + ' (' + data[i].dAirportCode + ')</h3>';
								htmlText += '<p class="col-100">' + data[i].dDate + ' ' + data[i].dTime + '</p>';
								htmlText += '<div class="clear"></div>';
								htmlText += '</div>';
								htmlText += '<div class="clear"></div>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '<div class="col-10 green fixedheight">';
								htmlText += '<div class="card-content">';
								htmlText += '<div class="content-block">';
								htmlText += '<h2 class="maintitle col-100"><i class="icon material-icons rotate-90">airplanemode_active</i></h2>';
								htmlText += '<div class="clear"></div>';
								htmlText += '</div>';
								htmlText += '<div class="clear"></div>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '<div class="col-45 green fixedheight">';
								htmlText += '<div class="card-content">';
								htmlText += '<div class="content-block">';
								htmlText += '<h3 class="maintitle col-100 ">' + data[i].aAirportName + ' (' + data[i].aAirportCode + ')</h3>';
								htmlText += '<p class="col-100">' + data[i].aDate + ' ' + data[i].aTime + '</p>';
								htmlText += '<div class="clear"></div>';
								htmlText += '</div>';
								htmlText += '<div class="clear"></div>';
								htmlText += '</div>';
								htmlText += '</div>';          
								htmlText += '</div>';
								htmlText += '<p><h4><img src="img/airlines/' + data[i].logoname + '" width="100" alt="' + data[i].logoalt + '">' + data[i].airline + ' ' + data[i].flight + '</h4></p>';
								//htmlText += '<p><i class="color-blue">from:</i> ' + data[i].dAirportName + ' (' + data[i].dAirportCode + ')<br><i class="color-blue">to:</i> ' + data[i].aAirportName + ' (' + data[i].aAirportCode + ')<br><i class="color-blue">departure:</i> ' + data[i].dDate + ' ' + data[i].dTime + '<br><i class="color-blue">actual:</i> ' + data[i].dDateActual + ' ' + data[i].dTimeActual + '<br><i class="color-blue">arrival:</i> ' + data[i].aDate + ' ' + data[i].aTime + '<br><i class="color-blue">actual:</i> ' + data[i].aDateActual + ' ' + data[i].aTimeActual + '<br><i class="color-blue">duration:</i> ' + data[i].flightDuration + ' minutes<br><i class="color-blue">departure terminal:</i> ' + data[i].dTerminal + '<br><i class="color-blue">plane:</i> ' + data[i].plane + '<br><i class="color-blue">widebody:</i> ' + data[i].widebody + '<br><i class="color-blue">tail number:</i> ' + data[i].tailNumber + '<br><span class="badge bg-' + data[i].statuscolor + '">' + data[i].statusname + '</span></p>';
								htmlText += '<div class="list-block accordion-list inset">';
								htmlText += '<ul>';
								htmlText += '<li class="accordion-item"><a href="#" class="item-link item-content">';
								htmlText += '<div class="item-inner">';
								htmlText += '<div class="item-title smallfont">More Information</div>';
								htmlText += '</div></a>';
								htmlText += '<div class="accordion-item-content">';
								htmlText += '<div class="list-block">';
								htmlText += '<ul>';
								htmlText += '<li>';
								htmlText += '<div class="item-content">';
								htmlText += '<div class="item-inner"> ';
								htmlText += '<div class="item-title smallfont"><i class="color-blue">Duration:</i> ' + data[i].flightDuration + ' minutes </div>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '</li>';
								htmlText += '<li>';
								htmlText += '<div class="item-content">';
								htmlText += '<div class="item-inner">';
								htmlText += '<div class="item-title smallfont"><i class="color-blue">Departure Terminal:</i> ' + data[i].dTerminal + '</div>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '</li>';
								htmlText += '<li>';
								htmlText += '<div class="item-content">';
								htmlText += '<div class="item-inner">';
								htmlText += '<div class="item-title smallfont"><i class="color-blue">Plane:</i> ' + data[i].plane + '</div>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '</li>';
								htmlText += '<li>';
								htmlText += '<div class="item-content">';
								htmlText += '<div class="item-inner">';
								htmlText += '<div class="item-title smallfont"><i class="color-blue">Wide Body:</i> ' + data[i].widebody + '</div>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '</li>';
								htmlText += '<li>';
								htmlText += '<div class="item-content">';
								htmlText += '<div class="item-inner">';
								htmlText += '<div class="item-title smallfont"><i class="color-blue">Tail Number:</i> ' + data[i].tailNumber + '</div>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '</li>';
								htmlText += '</ul>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '</li>';
								htmlText += '</ul>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '</div>';
								htmlText += '</div>';
							});
							$("#arrs").html(htmlText);
							console.log("Done Arrivals");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading Arrivals List");
						}

					});
	}
	/////////// end
	// about page
	if (page.name === 'about') {
	console.log('about page loaded');
	//var loadNews();
		var aboutText1 ="";
		var aboutText2 ="";
		var aboutText3 ="";
		var aboutBody1 ="";
		var aboutBody2 ="";
		var aboutBody3 ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/about.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								aboutText1 += '<div data-swiper-parallax="-100" class="swiper-slide-title">' + data[i].header1a + '</div>';
								aboutText1 += '<div data-swiper-parallax="-200" class="swiper-slide-subtitle">' + data[i].header1b + '</div>';
								aboutBody1 = '<p></p>' + data[i].body1;

								aboutText2 += '<div data-swiper-parallax="-100" class="swiper-slide-title">' + data[i].header2a + '</div>';
								aboutText2 += '<div data-swiper-parallax="-200" class="swiper-slide-subtitle">' + data[i].header2b + '</div>';
								aboutBody2 = '<p></p>' + data[i].body2;
								
								aboutText3 += '<div data-swiper-parallax="-100" class="swiper-slide-title">' + data[i].header3a + '</div>';
								aboutText3 += '<div data-swiper-parallax="-200" class="swiper-slide-subtitle">' + data[i].header3b + '</div>';
								aboutBody3 = '<p></p>' + data[i].body3;
							});
							$("#aboutheader1").html(aboutText1);
							$("#aboutbody1").html(aboutBody1);
							
							$("#aboutheader2").html(aboutText2);
							$("#aboutbody2").html(aboutBody2);
							
							$("#aboutheader3").html(aboutText3);
							$("#aboutbody3").html(aboutBody3);
							
							console.log(aboutText1);
							console.log(aboutBody1);
							console.log(aboutText2);
							console.log(aboutBody2);
							console.log(aboutText3);
							console.log(aboutBody3);
							console.log("Done About");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading About Page");
						}

					});
	}
	/////////// end
	
	// vip page
	if (page.name === 'vip') {
	console.log('vip page loaded');

	//var loadNews();
		var vipText ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/vip.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								vipText += '<li class="accordion-item"><a href="#" class="item-link item-content">';
								vipText += '<div class="item-inner">';
								vipText += '<div class="swiper-slide-title whitefont"><b>' + data[i].header1a + '</b></div>';
								vipText += '</div></a>';
								vipText += '<div class="accordion-item-content">';
								vipText += '<div class="content-block whitefont">';
								vipText += '<p>' + data[i].body1 + '</p>';
								vipText += '</div>';
								vipText += '</div>';
								vipText += '</li>';

								vipText += '<li class="accordion-item"><a href="#" class="item-link item-content">';
								vipText += '<div class="item-inner">';
								vipText += '<div class="item-title whitefont"><b>' + data[i].header2a + '</b></div>';
								vipText += '</div></a>';
								vipText += '<div class="accordion-item-content">';
								vipText += '<div class="content-block whitefont">';
								vipText += '<p>' + data[i].body2 + '</p>';
								vipText += '</div>';
								vipText += '</div>';
								vipText += '</li>';
								
								vipText += '<li class="accordion-item"><a href="#" class="item-link item-content">';
								vipText += '<div class="item-inner">';
								vipText += '<div class="item-title whitefont"><b>' + data[i].header3a + '</b></div>';
								vipText += '</div></a>';
								vipText += '<div class="accordion-item-content">';
								vipText += '<div class="content-block whitefont">';
								vipText += '<p>' + data[i].body3 + '</p>';
								vipText += '</div>';
								vipText += '</div>';
								vipText += '</li>';
							});
							$("#vip").html(vipText);
							console.log(vipText);
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading VIP Page");
						}

					});
	}
	/////////// end
	
	// baggage page
	if (page.name === 'baggage') {
	console.log('baggage page loaded');
	//var loadNews();
		var baggageText ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/baggage.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								baggageText += '<div class="swiper-slide">';
								baggageText += '<div data-swiper-parallax="-300" class="swiper-slide-text">';
								baggageText += '<p>' + data[i].body + '</p>';
								baggageText += '</div>';
								baggageText += '</div>';

							});
							$("#baggage").html(baggageText);
							console.log("Done Baggage");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading Baggage Page");
						}

					});
	}
	/////////// end
	
	// kia page
	if (page.name === 'kia') {
	console.log('kia page loaded');
	//var loadNews();
		var kiaText ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/kia.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								kiaText += '<div class="swiper-slide">';
								kiaText += '<div data-swiper-parallax="-300" class="swiper-slide-text">';
								kiaText += '<p>' + data[i].body + '</p>';
								kiaText += '</div>';
								kiaText += '</div>';

							});
							$("#kia").html(kiaText);
							console.log("Done kia");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading KIA Page");
						}

					});
	}
	/////////// end
	
	// SAS page
	if (page.name === 'sas') {
	console.log('sas page loaded');
	//var loadNews();
		var sasText ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/sas.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								sasText += '<div class="swiper-slide">';
								sasText += '<div data-swiper-parallax="-300" class="swiper-slide-text">';
								sasText += '<p>' + data[i].body + '</p>';
								sasText += '</div>';
								sasText += '</div>';

							});
							$("#sas").html(sasText);
							console.log("Done kia");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading SAS Page");
						}

					});
	}
	/////////// end
	
	// contact page
	if (page.name === 'contact') {
	console.log('contact page loaded');
		$(function() {
			$(".button").click(function() {

				var name = $("input#name").val();
				var email = $("input#email").val();
				var phone = $("input#phone").val();
				var subject = $("select#subject").val();
				var message = $("textarea#message").val();
				var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&subject=' + subject + '&message=' + message;
				
				$.ajax({
				  beforeSend: function() { myApp.showIndicator(); },
				  complete: function(){ myApp.hideIndicator(); },
				  dataType: "jsonp",
				  jsonpCallback: "jsonCallback",
				  type: "GET",
				  url: "http://webhosting.sd/~sasapp/contact.php",
				  data: dataString,
				  success: function jsonCallback(data){
					alert("Message sent. We will get back to you shortly..");
					$.each(data, function(i, field){
					console.log(data[i]);
					});
				  },
				  error:function(XMLHttpRequest,textStatus,errorThrown){
					alert("Failed sending message");
				  }
				});
				return false;
			});
		});
	}
	
	
	//////////////////////////////// ARABIC
	
	// about page
	if (page.name === 'aboutar') {
	console.log('aboutar page loaded');
	//var loadNews();
		var aboutText1 ="";
		var aboutText2 ="";
		var aboutText3 ="";
		var aboutBody1 ="";
		var aboutBody2 ="";
		var aboutBody3 ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/aboutar.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								aboutText1 += '<div data-swiper-parallax="-100" class="swiper-slide-title">' + data[i].header1a + '</div>';
								aboutText1 += '<div data-swiper-parallax="-200" class="swiper-slide-subtitle">' + data[i].header1b + '</div>';
								aboutBody1 = '<p></p>' + data[i].body1;

								aboutText2 += '<div data-swiper-parallax="-100" class="swiper-slide-title">' + data[i].header2a + '</div>';
								aboutText2 += '<div data-swiper-parallax="-200" class="swiper-slide-subtitle">' + data[i].header2b + '</div>';
								aboutBody2 = '<p></p>' + data[i].body2;
								
								aboutText3 += '<div data-swiper-parallax="-100" class="swiper-slide-title">' + data[i].header3a + '</div>';
								aboutText3 += '<div data-swiper-parallax="-200" class="swiper-slide-subtitle">' + data[i].header3b + '</div>';
								aboutBody3 = '<p></p>' + data[i].body3;
							});
							$("#aboutheader1").html(aboutText1);
							$("#aboutbody1").html(aboutBody1);
							
							$("#aboutheader2").html(aboutText2);
							$("#aboutbody2").html(aboutBody2);
							
							$("#aboutheader3").html(aboutText3);
							$("#aboutbody3").html(aboutBody3);
							
							console.log(aboutText1);
							console.log(aboutBody1);
							console.log(aboutText2);
							console.log(aboutBody2);
							console.log(aboutText3);
							console.log(aboutBody3);
							console.log("Done About");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading About Page");
						}

					});
	}
	/////////// end
	
	// vip page
	if (page.name === 'vipar') {
	console.log('vipar page loaded');

	//var loadNews();
		var vipText ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/vipar.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								vipText += '<li class="accordion-item"><a href="#" class="item-link item-content">';
								vipText += '<div class="item-inner">';
								vipText += '<div class="swiper-slide-title whitefont"><b>' + data[i].header1a + '</b></div>';
								vipText += '</div></a>';
								vipText += '<div class="accordion-item-content">';
								vipText += '<div class="content-block whitefont">';
								vipText += '<p>' + data[i].body1 + '</p>';
								vipText += '</div>';
								vipText += '</div>';
								vipText += '</li>';

								vipText += '<li class="accordion-item"><a href="#" class="item-link item-content">';
								vipText += '<div class="item-inner">';
								vipText += '<div class="item-title whitefont"><b>' + data[i].header2a + '</b></div>';
								vipText += '</div></a>';
								vipText += '<div class="accordion-item-content">';
								vipText += '<div class="content-block whitefont">';
								vipText += '<p>' + data[i].body2 + '</p>';
								vipText += '</div>';
								vipText += '</div>';
								vipText += '</li>';
								
								vipText += '<li class="accordion-item"><a href="#" class="item-link item-content">';
								vipText += '<div class="item-inner">';
								vipText += '<div class="item-title whitefont"><b>' + data[i].header3a + '</b></div>';
								vipText += '</div></a>';
								vipText += '<div class="accordion-item-content">';
								vipText += '<div class="content-block whitefont">';
								vipText += '<p>' + data[i].body3 + '</p>';
								vipText += '</div>';
								vipText += '</div>';
								vipText += '</li>';
							});
							$("#vip").html(vipText);
							console.log(vipText);
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading VIP Page");
						}

					});
	}
	/////////// end
	
	// baggage page
	if (page.name === 'baggagear') {
	console.log('baggagear page loaded');
	//var loadNews();
		var baggageText ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/baggagear.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								baggageText += '<div class="swiper-slide">';
								baggageText += '<div data-swiper-parallax="-300" class="swiper-slide-text">';
								baggageText += '<p>' + data[i].body + '</p>';
								baggageText += '</div>';
								baggageText += '</div>';

							});
							$("#baggage").html(baggageText);
							console.log("Done Baggage");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading Baggage Page");
						}

					});
	}
	/////////// end
	
	// kia page
	if (page.name === 'kiaar') {
	console.log('kiaar page loaded');
	//var loadNews();
		var kiaText ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/kiaar.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								kiaText += '<div class="swiper-slide">';
								kiaText += '<div data-swiper-parallax="-300" class="swiper-slide-text">';
								kiaText += '<p>' + data[i].body + '</p>';
								kiaText += '</div>';
								kiaText += '</div>';

							});
							$("#kia").html(kiaText);
							console.log("Done kia");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading KIA Page");
						}

					});
	}
	/////////// end
	
	// SAS page
	if (page.name === 'sasar') {
	console.log('sasar page loaded');
	//var loadNews();
		var sasText ="";
		console.log('8888888888888888');
		
				$.ajax({
						beforeSend: function() { myApp.showIndicator(); },
						complete: function(){ myApp.hideIndicator(); },
						url:'http://webhosting.sd/~sasapp/sasar.php',
						dataType: "jsonp",
						jsonpCallback: "jsonCallback",
						success:function jsonCallback(data){
							//$("#news").val(data);
							$.each(data, function(i, field){
								sasText += '<div class="swiper-slide">';
								sasText += '<div data-swiper-parallax="-300" class="swiper-slide-text">';
								sasText += '<p>' + data[i].body + '</p>';
								sasText += '</div>';
								sasText += '</div>';

							});
							$("#sas").html(sasText);
							console.log("Done kia");
							
						},
						error:function(XMLHttpRequest,textStatus,errorThrown){
							alert("Failed Loading SAS Page");
						}

					});
	}
	/////////// end
	
	

}), $(document).ready(function() {
// enter here
console.log('initialized with jquery');
});