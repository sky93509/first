(function (ext) {

    var flagArray = {
        data:[]
    };
	
    port = ":8080";
	
    ext._shutdown = function () {
        console.log('Shutting down...');

    };

    ext._getStatus = function () {
         return {status: 2, msg: 'Ready'};
    };

    ext.Setting_targetIP = function (ip) {
        console.log("Setting_targetIP");
        return ip;
    };

    var getSentencesRecursion = function(ip, flagIndex) {

		if ( flagArray.data[flagIndex].get_sentences_flag === true ) {  	 
			 flagArray.data[flagIndex].get_sentences_flag = false;  
			 
			$.ajax({
				type: 'GET',
				url: 'http://' + ip + port + '/?extension=advance' + '&name=Get_sentences',
				dataType: 'text',
				crossDomain: true,
				success: function (data) {
				console.log("Get_sentences-success handler");
                               
                                console.log('splitedData[0]' + data.split(",")[0]);
                                
				switch(data.split(",")[0]) {

                    case 'number':
                                 
                        console.log('辨識到number');
                        console.log( ip + " "  + flagIndex + " " + "number_flag true");
                        flagArray.data[flagIndex].number_flag = true;
                        flagArray.data[flagIndex].correctedSentence = data.split(",")[1];
                        console.log('correctedSentence:' + flagArray.data[flagIndex].correctedSentence);
                                              
                        break; 

					case '語句一':
						
						console.log('辨識到語句一'); 
						console.log( ip + " "  + flagIndex + " " + "sentence_1_flag true");
						flagArray.data[flagIndex].sentence_1_flag = true;

						break;

					case '語句二':
						
  				        console.log('辨識到語句二'); 
						console.log( ip + " "  + flagIndex + " " + "sentence_2_flag true");
						flagArray.data[flagIndex].sentence_2_flag = true;

						break;

					case '語句三':
						

						console.log('辨識到語句三');  
						console.log( ip + " "  + flagIndex + " " + "sentence_3_flag true");
						flagArray.data[flagIndex].sentence_3_flag = true;

						break;

					case '語句四':
						
						console.log('辨識到語句四'); 
						console.log( ip + " "  + flagIndex + " " + "sentence_4_flag true");
						flagArray.data[flagIndex].sentence_4_flag = true;

						break;


					case '語句五':

						console.log('辨識到語句五');                   
						console.log( ip + " "  + flagIndex + " " + "sentence_5_flag true");
						flagArray.data[flagIndex].sentence_5_flag = true;

					   break;
					   
					   
					   case '語句六':

						console.log('辨識到語句六');                   
						console.log( ip + " "  + flagIndex + " " + "sentence_6_flag true");
						flagArray.data[flagIndex].sentence_6_flag = true;

					   break;
					   
					   case '語句七':

						console.log('辨識到語句七');                   
						console.log( ip + " "  + flagIndex + " " + "sentence_7_flag true");
						flagArray.data[flagIndex].sentence_7_flag = true;

					   break;
					   
					   
					   case '語句八':

						console.log('辨識到語句八');                   
						console.log( ip + " "  + flagIndex + " " + "sentence_8_flag true");
						flagArray.data[flagIndex].sentence_8_flag = true;

					   break;
					   
					   
					   case '語句九':

						console.log('辨識到語句九');                   
						console.log( ip + " "  + flagIndex + " " + "sentence_9_flag true");
						flagArray.data[flagIndex].sentence_9_flag = true;

					   break;
					   
					   
					   case '語句十':

						console.log('辨識到語句十');                   
						console.log( ip + " "  + flagIndex + " " + "sentence_10_flag true");
						flagArray.data[flagIndex].sentence_10_flag = true;

					   break;
					   
					   
					   case '語句十一':

						console.log('辨識到語句十一');                   
						console.log( ip + " "  + flagIndex + " " + "sentence_11_flag true");
						flagArray.data[flagIndex].sentence_11_flag = true;

					   break;
					   
					   
					   case '語句十二':

						console.log('辨識到語句十二');                   
						console.log( ip + " "  + flagIndex + " " + "sentence_12_flag true");
						flagArray.data[flagIndex].sentence_12_flag = true;

					   break;
					   
				}  

                flagArray.data[flagIndex].get_sentences_flag = true;
                getSentencesRecursion(ip, flagIndex);  				 
				
				},
				error: function (jqXHR, textStatus, errorThrown) {
					console.log("error handler");
			 
			    flagArray.data[flagIndex].get_sentences_flag = true;
                getSentencesRecursion(ip, flagIndex);	 
					
				}
			});
				
            }    
	
	
    };
	
    ext.Head_movement = function (ip, p1, p2, callback) {
        console.log("Head_movement");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Head_movement' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Body_movement = function (ip, p1, p2, p3, callback) {
        console.log("Body_movement");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        console.log(p3);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Body_movement' + '&p1=' + p1 + '&p2=' + p2 + '&p3=' + p3,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Body_turn = function (ip, p1, p2, callback) {
        console.log("Body_turn");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Body_turn' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Remote_control_body = function (ip, p1, callback){
        console.log("Remote_control_body");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Remote_control_body' + '&p1=' + p1,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Stop_moving = function (ip,callback){

        console.log("Stop_moving");
        console.log(ip);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Stop_moving',
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });

        console.log("Cancel_actionset");
        console.log(ip);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Cancel_actionset',
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
       
    };

    ext.Action = function (ip, p1,callback){
        console.log("Action");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Action' + '&p1=' + p1,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Facial = function (ip, p1, callback) {
        console.log("Facial");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Facial' + '&p1=' + p1,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.TTS = function (ip, p1, callback) {
        console.log("Tts");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=TTS' + '&p1=' + p1,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.TTS_editor = function (ip, p1, callback) {
        console.log("TTS_editor");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=TTS_editor' + '&p1=' + p1,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Cancel_actionset = function (ip,callback){
        console.log("Cancel_actionset");
        console.log(ip);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Cancel_actionset',
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Adjust_stream_volume = function (ip, p1, p2, callback) {
        console.log("Adjust_stream_volume");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Adjust_stream_volume' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Add_and_update_sentence = function (ip, p1, p2) {
        
         var setupFlag_init_2 = true;
         var flagIndex_init_2 = 0;

         for(var h = 0; h < flagArray.data.length; h++) {

              console.log("flagArray.data[h].device: "+  flagArray.data[h].device ); 
             if ( ip == flagArray.data[h].device) {
               setupFlag_init_2 = false;
               flagIndex_init_2 = h;
               console.log("false" + "flagIndex_init_2: "+ flagIndex_init_2);
             }
         }         

         if ( setupFlag_init_2 == true) {
              
               flagArray.data.push( { device: ip, correctedSentence: "", sentence_1_flag: false, sentence_2_flag: false, sentence_3_flag: false, 
               sentence_4_flag: false, sentence_5_flag: false, number_flag: false, touch_head_flag: false, get_sentences_flag: true, recursionFlag: true } );
               console.log("add new device IP and its flags");
               flagIndex_init_2 = flagArray.data.length -1 ;
               console.log("true " + "flagIndex_init_2: "+ flagIndex_init_2);

         }
   
		
	if  ( flagArray.data[flagIndex_init_2].recursionFlag === true) {
              flagArray.data[flagIndex_init_2].recursionFlag = false;

        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Add_and_update_sentence' + '&p1=' + 'test' + '&p2=' + 'zenbo',
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
           
             console.log("success handler");
             getSentencesRecursion(ip, flagIndex_init_2);
 
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
                flagArray.data[flagIndex_init_2].recursionFlag = true; 
            }
        }); 

        } 

         
        console.log("Add_and_update_sentence");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Add_and_update_sentence' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
            console.log("success handler");			
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };    

	
    ext.Delete_instance = function (ip,callback){
        console.log("Delete_instance");
        console.log(ip);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Delete_instance',
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Speak_and_listen = function (ip){
        console.log("Speak_and_listen");
        console.log(ip);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Speak_and_listen',
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
            console.log("Speak_and_listen-success handler");	 
				               				   
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Play_music = function (ip, p1, p2, callback) {
        console.log("Play_music");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Play_music' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Adjust_tts_and_speed = function (ip, p1, p2, callback) {
        console.log("Adjust_tts_and_speed");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Adjust_tts_and_speed' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Get_sentences = function (ip, p1, callback){
        console.log("Get_sentences");
        console.log(ip);
        console.log(p1);
        $.ajax({
            type: 'GET',  
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Get_sentences',
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
                callback(textStatus);
            }
        });        
    };

    ext.when_listen_and_run = function(ip, p1) {
       
    var checkFlag = false;
    var valueIndex = 0;

    for(var i = 0; i < flagArray.data.length; i++){

             if ( ip == flagArray.data[i].device) {
                  checkFlag = true;
                  valueIndex = i;
             }
    }

    if ( checkFlag === false )
    return false;

    switch(p1) {

    case '語句一':
        
       if (flagArray.data[valueIndex].sentence_1_flag === true) {
           flagArray.data[valueIndex].sentence_1_flag = false;
		   console.log('true 語句一'); 
           return true;
       }

        break;

    case '語句二':
        
       if (flagArray.data[valueIndex].sentence_2_flag === true) {
           flagArray.data[valueIndex].sentence_2_flag = false;
		   console.log('true 語句二'); 
           return true;
       }


        break;

    case '語句三':
         
       if (flagArray.data[valueIndex].sentence_3_flag === true) {
           flagArray.data[valueIndex].sentence_3_flag = false;
		   console.log('true 語句三'); 
           return true;
       }


        break;

    case '語句四':
        
       if (flagArray.data[valueIndex].sentence_4_flag === true) {
           flagArray.data[valueIndex].sentence_4_flag = false;
		   console.log('true 語句四'); 
           return true;
       }

        break;

    case '語句五':
               
       if (flagArray.data[valueIndex].sentence_5_flag === true) {
           flagArray.data[valueIndex].sentence_5_flag = false;
		   console.log('true 語句五');    
           return true;
       }

       break;
       
   }
     return false;
    };

	
    ext.when_listen_number_and_run = function(ip) {
       
    var valueIndex_2 = -1;

    for(var j = 0; j < flagArray.data.length; j++){

             if ( ip == flagArray.data[j].device) {          
                  valueIndex_2 = j;
             }
    }

    if ( valueIndex_2 === -1 ) {
	
        console.log('valueIndex_2 === -1');  	
		return false;
	}
         
    if (flagArray.data[valueIndex_2].number_flag === true) {
		   console.log('true number'); 
           flagArray.data[valueIndex_2].number_flag = false;             
           return true;
    }

     return false;
    };

	
    ext.getCorrectedSentence = function(ip) {
       
    var valueIndex_3 = -1;

    for(var k = 0; k < flagArray.data.length; k++){

             if ( ip == flagArray.data[k].device) {               
                  valueIndex_3 = k;
             }
    }
	
    if ( valueIndex_3 === -1 ) {
	
        console.log('valueIndex_3 === -1');  	
		return 'no device';
	}

    console.log('getCorrectedSentence: ' + flagArray.data[valueIndex_3].correctedSentence);   
  		
     return flagArray.data[valueIndex_3].correctedSentence;
    };


    ext.playVideosInYoutube = function (ip, p1, p2) {
        console.log("playVideosInYoutube");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=playVideosInYoutube' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.displayUrlPictures = function (ip, p1, p2) {
        console.log("displayUrlPictures");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=displayUrlPictures' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };
	
    ext.playUrlMusic = function (ip, p1, p2) {
        console.log("playUrlMusic");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=playUrlMusic' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.hideFace = function (ip) {
        console.log("hideFace");
        console.log(ip);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=hideFace',
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.openDriveUrl = function (ip, p1, p2) {
        console.log("openDriveUrl");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=openDriveUrl' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.openDriveVideoUrl = function (ip, p1, p2) {
        console.log("openDriveVideoUrl");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=openDriveVideoUrl' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.openDriveAudioUrl = function (ip, p1, p2) {
        console.log("openDriveAudioUrl");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=openDriveAudioUrl' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.openDrivePictureUrl = function (ip, p1, p2) {
        console.log("openDrivePictureUrl");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=openDrivePictureUrl' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.openDriveDocumentUrl = function (ip, p1, p2) {
        console.log("openDriveDocumentUrl");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=openDriveDocumentUrl' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");
            
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };


ext.Add_and_update_sentence_number = function (ip) {
       
         var setupFlag_init_3 = true;
         var flagIndex_init_3 = 0;

         for(var f = 0; f < flagArray.data.length; f++) {

              console.log("flagArray.data[f].device: "+  flagArray.data[f].device ); 
             if ( ip == flagArray.data[f].device) {
               setupFlag_init_3 = false;
               flagIndex_init_3 = f;
               console.log("false" + "flagIndex_init_3: "+ flagIndex_init_3);
             }
         }         

         if ( setupFlag_init_3 == true) {
              
               flagArray.data.push( { device: ip, correctedSentence: "", sentence_1_flag: false, sentence_2_flag: false, sentence_3_flag: false, 
               sentence_4_flag: false, sentence_5_flag: false, number_flag: false, touch_head_flag: false, get_sentences_flag: true, recursionFlag: true } );
               console.log("add new device IP and its flags");
               flagIndex_init_3 = flagArray.data.length -1 ;
               console.log("true " + "flagIndex_init_3: "+ flagIndex_init_3);

         }
   
		
	if  ( flagArray.data[flagIndex_init_3].recursionFlag === true) {
              flagArray.data[flagIndex_init_3].recursionFlag = false;

        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=Add_and_update_sentence' + '&p1=' + 'test' + '&p2=' + 'zenbo',
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
           
             console.log("success handler");
             getSentencesRecursion(ip, flagIndex_init_3);
 
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
                flagArray.data[flagIndex_init_3].recursionFlag = true; 
            }
        }); 

        } 

    };    

    var descriptor = {
        blocks: [
            ['r', '設定Zenbo IP: %s', 'Setting_targetIP', "192.168.0.1"],
            ['', 'IP %s 移動 %m.move_direction %m.move_far 公尺 %m.move_speed 速度', 'Body_movement', "192.168.0.1", "前進", "0.25", "一般"],
            ['', 'IP %s 停止', 'Stop_moving', "192.168.0.1"],
            ['', 'IP %s 轉動頭部 向 %m.head_direction %m.head_degree 度', 'Head_movement', "192.168.0.1", "左", "45"], 
            ['', 'IP %s 轉動身體 向 %m.body_turn_direction %m.body_turn_degree 度', 'Body_turn', "192.168.0.1", "左轉", "90"],
            ['', 'IP %s 控制身體 %m.remote_control_body', 'Remote_control_body', "192.168.0.1", "右轉"],
            ['', 'IP %s Zenbo 做動作 %m.action_type', 'Action', "192.168.0.1", '打招呼'],
            ['', 'IP %s 做出表情 %m.facial_type', 'Facial', "192.168.0.1", '期待'],
            ['', 'IP %s 隱藏表情', 'hideFace', "192.168.0.1"],
            ['', 'IP %s 說話 %m.tts_type ', 'TTS', "192.168.0.1", 'Hi,你好'],
            ['', 'IP %s 說話 %s', 'TTS_editor', "192.168.0.1", '請填入文字'],
            ['', 'IP %s 調整 %m.volume_option_type 音量 %m.volume_type', 'Adjust_stream_volume', "192.168.0.1", '說話', '大聲點'],
            ['', 'IP %s 說話 %s 速度 %m.tts_speed_type', 'Adjust_tts_and_speed', "192.168.0.1", '請填入文字', 'L2'],
            ['', 'IP %s 準備要聽 %m.sentence_type 是 %s', 'Add_and_update_sentence', "192.168.0.1", '語句一', '吃飯'], 
            ['', 'IP %s 我要開始聽', 'Speak_and_listen', "192.168.0.1"], 
            ['h', '當我聽到 IP %s 的 %m.sentence_type', 'when_listen_and_run', "192.168.0.1", '語句一'],
            ['', 'IP %s 刪除全部語句', 'Delete_instance', "192.168.0.1"],
       //     ['', 'IP %s 準備要聽數字', 'Add_and_update_sentence_number', "192.168.0.1"],
       //     ['h', '當我聽到 IP %s 的數字', 'when_listen_number_and_run', "192.168.0.1"],
       //     ['r', '目前 IP %s 聽到的數字 ', 'getCorrectedSentence', "192.168.0.1"],
            ['', 'IP %s %m.playVideosInYoutubeItems 播放 Youtube 網址: %s', 'playVideosInYoutube', "192.168.0.1", '開始', 'https://www.youtube.com/watch?v=Ou21RusvBcg'],
            ['', 'IP %s %m.playUrlMusicItems 播放線上音樂: %s', 'playUrlMusic', "192.168.0.1", '開始', 'https://zenboscratch.github.io/examples/zenbo_music.mp3'],
            ['', 'IP %s %m.displayUrlPicturesItems 瀏覽線上圖片: %s', 'displayUrlPictures', "192.168.0.1", '開始', 'https://zenboscratch.github.io/images/zenbo.jpg'],
            ['', 'IP %s %m.openDriveVideoUrlItems 播放 Google Drive 影片: %s', 'openDriveVideoUrl', "192.168.0.1", '開始', 'https://drive.google.com/open?id=0B5o6VwYT7NaiUUhrTW12Ql9tcUk'],
            ['', 'IP %s %m.openDriveAudioUrlItems 播放 Google Drive 音樂: %s', 'openDriveAudioUrl', "192.168.0.1", '開始', 'https://drive.google.com/open?id=0B5o6VwYT7NaibHJ0LWtHN0JtVFU'], 
            ['', 'IP %s %m.openDrivePictureUrlItems 瀏覽 Google Drive 圖片: %s', 'openDrivePictureUrl', "192.168.0.1", '開始', 'https://drive.google.com/open?id=0B5o6VwYT7NaiSVJ0S3JKeEZwODA'],
            ['', 'IP %s %m.openDriveDocumentUrlItems 瀏覽 Google Drive 文件: %s', 'openDriveDocumentUrl', "192.168.0.1", '開始', 'https://drive.google.com/open?id=0B5o6VwYT7NaiN1h3SXZHTjRsc2s'],
        ],
        menus: {
            "head_direction": ["左", "右", "上", "下"],
            "head_degree": ["0", "15", "30", "45"],
            "move_direction": ["前進", "後退"],
            "move_far": ["0.25", "0.50", "0.75", "1.00", "1.25", "1.50", "1.75", "2.00"],
            "move_speed": ["慢", "一般", "快"],
            "body_turn_direction": ["左轉", "右轉"],
            "body_turn_degree": ["0", "15", "30", "45", "60", "75", "90", "105", "120", "135", "150", "165", "180"],
            "remote_control_body": ["停止", "前進", "左轉", "右轉"],
            "action_type": ["輕鬆(預設)", "聽指令/briefing(高)", "完成任務/滿足", "打招呼", "一般訊息一", "待機(無聊)", "充電(滿足)", "聽指令/briefing(矮)", "連續任務衝突", "失望(使用者結束)",
                            "沮喪(使用者結束)", "待機(疲倦)", "快沒電", "充電(愉悅)", "充電(慵懶)", "跳舞一大點", "聽懂", "音樂播放", "向左慢轉", "向左急轉", "搖頭(回答否定)", "跳舞一小點", 
                            "害羞", "聽不懂", "跳舞二", "連續搖頭", "搖頭晃腦", "跳舞極快", "搖頭", "結束打招呼", "一般訊息二", "向右慢轉", "向右急轉", "結束向左慢轉", "結束向右慢轉",
                            "結束向左急轉", "結束向右急轉", "解除連續任務衝突"],
            "facial_type": ["有興趣", "疑惑", "驕傲", "輕鬆愉快(預設)", "開心", "期待", "愣一下", "質疑", "不耐煩", "自信", "有活力一", "得意", "無奈", "嚴肅", "煩惱", "裝平靜", "慵懶", "察覺", 
                            "倦怠", "害羞", "無辜", "有活力二", "察覺", "預設"],
            "tts_type": ["Hi,你好", "看這裡", "WoW", "YA"],
            "volume_type": ["大聲點", "小聲點"],
            "music_type": ["開始", "暫停", "繼續", "停止", "重新"],
            "volume_option_type": ["音樂", "鬧鐘", "通知", "說話"],
            "tts_speed_type": ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"],
            "sentence_type": ["語句一", "語句二", "語句三", "語句四", "語句五", "語句六", "語句七", "語句八", "語句九", "語句十", "語句十一", "語句十二"],
            "playVideosInYoutubeItems": ["開始", "關閉"],
            "displayUrlPicturesItems": ["開始", "關閉"],
            "playUrlMusicItems": ["開始", "關閉"],
            "openDriveVideoUrlItems": ["開始", "關閉"],
            "openDriveAudioUrlItems": ["開始", "關閉"],
            "openDrivePictureUrlItems": ["開始", "關閉"],
            "openDriveDocumentUrlItems": ["開始", "關閉"],
        },
        url: 'https://zenboscratchservice.github.io/' // Link to extension documentation, homepage, etc.
    };

    // Register the extension
    ScratchExtensions.register('ZenboScratchService', descriptor, ext);
})({});
