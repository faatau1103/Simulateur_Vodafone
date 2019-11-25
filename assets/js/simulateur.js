(function($){ // in here you're assured that `$ == jQuery`

     //Dropdown plugin data
    var ddData = [{
        text: "Par mois",
        value: 1,
        selected: true
    }, {
        text: "Par semaine",
        value: 4,
        selected: false
    }, {
        text: "Par jour",
        value: 30.5,
        selected: false
    }];
    // Page Internet
    var $internetrange = $('#internetrange');
    var $datainternet = parseInt($('#internetrange').attr("datainternet"));
    var internetrangeselectval = 1;
    var $nbredejourparmois = 30;
    // sliderrange change
    $internetrange.rangeslider({
            polyfill: false,
            onSlideEnd: function(position, value) {
                // Modifier la valeur pour (output);
                $('.internetrange').text(this.value);
                //  Consommation mensuelle estimée
                var resultinternetrange = parseInt($internetrange.val()) * parseInt($datainternet)/*12*/ * internetrangeselectval; /*1*/
                var dataonkilooctet = resultinternetrange > 1e3 ? resultinternetrange / 1e3 : resultinternetrange;
                resultinternetrange = resultinternetrange > 1e3 ? Math.round(resultinternetrange / 1e3) + " Go" : resultinternetrange + " mo";

                // $("#total_usage").find(".total_usage_value").text(resultinternetrange);
                // data on kilo octet pou la somme
                var parts = resultinternetrange.split(' ');
                if (parts[1] == "Go") {
                    //  Go
                    var data = dataonkilooctet * 1000 * 1000;
                    $internetrange.attr("dataonkilooctet", data);
                } else {
                    // octet
                    var data = dataonkilooctet * 1000;
                    $internetrange.attr("dataonkilooctet", data);
                }

                sum();
            }
        })
        // select
    $('#internetrangeselect').ddslick({
        data: ddData,
        width: 100 + '%',
        imagePosition: "left",
        onSelected: function(selectedData) {
            //  get value selected
            internetrangeselectval = selectedData.selectedData.value;

            // Initialize max rangeslider
            var attributes = {
                max: parseInt($nbredejourparmois) * 24
            };

            //  select par jour
            if (internetrangeselectval == 30.5) {
                attributes = {
                    max: 1 * 24
                };
                //  selet par semaine
                if ($internetrange.val() > 24) {
                    // Modifier la valeur pour (output);
                    $('.internetrange').text(parseInt(24));
                }
            } else if (internetrangeselectval == 4) {
                attributes = {
                    max: 7 * 24
                };
                // select par mois
                if ($internetrange.val() > 168) {
                    // Modifier la valeur pour (output);
                    $('.internetrange').text(parseInt(168));
                }
            } else {
                attributes = {
                    max: parseInt($nbredejourparmois) * 24
                };
            }

            $internetrange.attr(attributes);
            $internetrange.rangeslider('update', true);

            //  Consommation mensuelle estimée
            var resultinternetrange = parseInt($internetrange.val()) * parseInt($datainternet) * internetrangeselectval;
            var dataonkilooctet = resultinternetrange > 1e3 ? resultinternetrange / 1e3 : resultinternetrange;
            resultinternetrange = resultinternetrange > 1e3 ? Math.round(resultinternetrange / 1e3) + " Go" : resultinternetrange + " mo";
            // $("#total_usage").find(".total_usage_value").text(resultinternetrange);

            // data on kilo octet pou la somme
            var parts = resultinternetrange.split(' ');
            if (parts[1] == "Go") {
                //  Go
                var data = dataonkilooctet * 1000 * 1000;
                $internetrange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet * 1000;
                $internetrange.attr("dataonkilooctet", data);
            }
            sum();
        }
    });


    // E-mails sans pièce jointe
    var $emailsanspiecejointerange = $('#emailsanspiecejointerange');
    var emailsanspiecejointerangeselect = 1;
    $emailsanspiecejointerange.rangeslider({
        polyfill: false,
        // Callback function
        onSlideEnd: function(position, value) {
            // Modifier la valeur pour (output);
            $('.emailsanspiecejointerange').text(this.value);
            //  Consommation mensuelle estimée
            var resultemailsanspiecejointerange = emailsanspiecejointerangeselect * parseInt($emailsanspiecejointerange.val()) * parseInt($emailsanspiecejointerange.attr("dataemail"));
            var dataonkilooctet = resultemailsanspiecejointerange > 1e3 ? resultemailsanspiecejointerange / 1e3 : resultemailsanspiecejointerange;
            resultemailsanspiecejointerange = parseInt(resultemailsanspiecejointerange) > 1e3 ? Math.round(parseInt(resultemailsanspiecejointerange) / 1e3) + " mo" : parseInt(resultemailsanspiecejointerange) + " ko";
            // $("#total_usage").find(".total_usage_value").text(resultemailsanspiecejointerange);
            // data on kilo octet pou la somme
            var parts = resultemailsanspiecejointerange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $emailsanspiecejointerange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $emailsanspiecejointerange.attr("dataonkilooctet", data);
            }
            sum();
        }
    });
    $("#emailsanspiecejointerangeselect").ddslick({
        data: ddData,
        width: 100 + '%',
        imagePosition: "left",
        onSelected: function(selectedData) {
            //  get value selected
            emailsanspiecejointerangeselect = selectedData.selectedData.value;
            // Initialize max rangeslider
            var attributes = {
                max: 2800
            };
            //  select par jour
            if (emailsanspiecejointerangeselect == 30.5) {
                attributes = {
                    max: 100
                };
                //  selet par jour
                if ($emailsanspiecejointerange.val() > 100) {
                    // Modifier la valeur pour (output);
                    $('.emailsanspiecejointerange').text(parseInt(100));
                }
            } else if (emailsanspiecejointerangeselect == 4) {
                attributes = {
                    max: 700
                };
                //  selet par jour
                if ($emailsanspiecejointerange.val() > 700) {
                    // Modifier la valeur pour (output);
                    $('.emailsanspiecejointerange').text(parseInt(700));
                }
            } else {
                attributes = {
                    max: 2800
                };
            }

            $emailsanspiecejointerange.attr(attributes);
            $emailsanspiecejointerange.rangeslider('update', true);
            //  Consommation mensuelle estimée
            var resultemailsanspiecejointerange = emailsanspiecejointerangeselect * parseInt($emailsanspiecejointerange.val()) * parseInt($emailsanspiecejointerange.attr("dataemail"));
            var dataonkilooctet = resultemailsanspiecejointerange > 1e3 ? resultemailsanspiecejointerange / 1e3 : resultemailsanspiecejointerange;
            resultemailsanspiecejointerange = parseInt(resultemailsanspiecejointerange) > 1e3 ? Math.round(parseInt(resultemailsanspiecejointerange) / 1e3) + " mo" : parseInt(resultemailsanspiecejointerange) + " ko";
            // $("#total_usage").find(".total_usage_value").text(resultemailsanspiecejointerange);
            var parts = resultemailsanspiecejointerange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $emailsanspiecejointerange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $emailsanspiecejointerange.attr("dataonkilooctet", data);
            }
            sum();
        }
    });
    // E-mails avec pièce jointe
    var $emailavecpiecejointerange = $('#emailavecpiecejointerange');
    var emailavecpiecejointerangeselect = 1;
    $emailavecpiecejointerange.rangeslider({
        polyfill: false,
        // Callback function
        onSlideEnd: function(position, value) {
            // Modifier la valeur pour (output);
            $('.emailavecpiecejointerange').text(this.value);
            //  Consommation mensuelle estimée
            var resultemailavecpiecejointerange = emailavecpiecejointerangeselect * parseInt($emailavecpiecejointerange.val()) * parseInt($emailavecpiecejointerange.attr("dataemailwithpiecej"));
            var dataonkilooctet = resultemailavecpiecejointerange < 1e3 ? resultemailavecpiecejointerange : compdataonkilooctet(resultemailavecpiecejointerange);
            resultemailavecpiecejointerange = resultemailavecpiecejointerange < 1e3 ? resultemailavecpiecejointerange + " ko" : comp(resultemailavecpiecejointerange);
            // $("#total_usage").find(".total_usage_value").text(resultemailavecpiecejointerange);
            var parts = resultemailavecpiecejointerange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $emailavecpiecejointerange.attr("dataonkilooctet", data);
            } else if (parts[1] == "Go") {
                //  Go
                var data = dataonkilooctet * 1000 * 1000;
                $emailavecpiecejointerange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $emailavecpiecejointerange.attr("dataonkilooctet", data);
            }
            sum();
        }
    })

    $("#emailavecpiecejointerangeselect").ddslick({
        data: ddData,
        width: 100 + '%',
        imagePosition: "left",
        onSelected: function(selectedData) {
            //  get value selected
            emailavecpiecejointerangeselect = selectedData.selectedData.value;
            // Initialize max rangeslider
            var attributes = {
                max: 2800
            };
            //  select par jour
            if (emailavecpiecejointerangeselect == 30.5) {
                attributes = {
                    max: 100
                };
                //  selet par jour
                if ($emailavecpiecejointerange.val() > 100) {
                    // Modifier la valeur pour (output);
                    $('.emailavecpiecejointerange').text(parseInt(100));
                }
            } else if (emailavecpiecejointerangeselect == 4) {
                attributes = {
                    max: 700
                };
                //  selet par jour
                if ($emailavecpiecejointerange.val() > 700) {
                    // Modifier la valeur pour (output);
                    $('.emailavecpiecejointerange').text(parseInt(700));    var $internetrange = $('#internetrange');
                    var $datainternet = parseInt($('#internetrange').attr("datainternet"));
                    var internetrangeselectval = 1;
                    var $nbredejourparmois = 30;
                    // sliderrange change
                    $internetrange.rangeslider({
                            polyfill: false,
                            onSlideEnd: function(position, value) {
                                // Modifier la valeur pour (output);
                                $('.internetrange').text(this.value);
                                //  Consommation mensuelle estimée
                                var resultinternetrange = parseInt($internetrange.val()) * parseInt($datainternet) * internetrangeselectval;
                                var dataonkilooctet = resultinternetrange > 1e3 ? resultinternetrange / 1e3 : resultinternetrange;
                                resultinternetrange = resultinternetrange > 1e3 ? Math.round(resultinternetrange / 1e3) + " Go" : resultinternetrange + " mo";
                
                                // $("#total_usage").find(".total_usage_value").text(resultinternetrange);
                                // data on kilo octet pou la somme
                                var parts = resultinternetrange.split(' ');
                                if (parts[1] == "Go") {
                                    //  Go
                                    var data = dataonkilooctet * 1000 * 1000;
                                    $internetrange.attr("dataonkilooctet", data);
                                } else {
                                    // octet
                                    var data = dataonkilooctet * 1000;
                                    $internetrange.attr("dataonkilooctet", data);
                                }
                
                                sum();
                            }
                        })
                        // select
                    $('#internetrangeselect').ddslick({
                        data: ddData,
                        width: 100 + '%',
                        imagePosition: "left",
                        onSelected: function(selectedData) {
                            //  get value selected
                            internetrangeselectval = selectedData.selectedData.value;
                
                            // Initialize max rangeslider
                            var attributes = {
                                max: parseInt($nbredejourparmois) * 24
                            };
                
                            //  select par jour
                            if (internetrangeselectval == 30.5) {
                                attributes = {
                                    max: 1 * 24
                                };
                                //  selet par semaine
                                if ($internetrange.val() > 24) {
                                    // Modifier la valeur pour (output);
                                    $('.internetrange').text(parseInt(24));
                                }
                            } else if (internetrangeselectval == 4) {
                                attributes = {
                                    max: 7 * 24
                                };
                                // select par mois
                                if ($internetrange.val() > 168) {
                                    // Modifier la valeur pour (output);
                                    $('.internetrange').text(parseInt(168));
                                }
                            } else {
                                attributes = {
                                    max: parseInt($nbredejourparmois) * 24
                                };
                            }
                
                            $internetrange.attr(attributes);
                            $internetrange.rangeslider('update', true);
                
                            //  Consommation mensuelle estimée
                            var resultinternetrange = parseInt($internetrange.val()) * parseInt($datainternet) * internetrangeselectval;
                            var dataonkilooctet = resultinternetrange > 1e3 ? resultinternetrange / 1e3 : resultinternetrange;
                            resultinternetrange = resultinternetrange > 1e3 ? Math.round(resultinternetrange / 1e3) + " Go" : resultinternetrange + " mo";
                            // $("#total_usage").find(".total_usage_value").text(resultinternetrange);
                
                            // data on kilo octet pou la somme
                            var parts = resultinternetrange.split(' ');
                            if (parts[1] == "Go") {
                                //  Go
                                var data = dataonkilooctet * 1000 * 1000;
                                $internetrange.attr("dataonkilooctet", data);
                            } else {
                                // octet
                                var data = dataonkilooctet * 1000;
                                $internetrange.attr("dataonkilooctet", data);
                            }
                            sum();
                        }
                    });
                }
            } else {
                attributes = {
                    max: 2800
                };
            }

            $emailavecpiecejointerange.attr(attributes);
            $emailavecpiecejointerange.rangeslider('update', true);
            //  Consommation mensuelle estimée
            var resultemailavecpiecejointerange = emailavecpiecejointerangeselect * parseInt($emailavecpiecejointerange.val()) * parseInt($emailavecpiecejointerange.attr("dataemailwithpiecej"));
            var dataonkilooctet = resultemailavecpiecejointerange < 1e3 ? resultemailavecpiecejointerange : compdataonkilooctet(resultemailavecpiecejointerange);
            resultemailavecpiecejointerange = resultemailavecpiecejointerange < 1e3 ? resultemailavecpiecejointerange + " ko" : comp(resultemailavecpiecejointerange);
            // $("#total_usage").find(".total_usage_value").text(resultemailavecpiecejointerange);
            var parts = resultemailavecpiecejointerange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $emailavecpiecejointerange.attr("dataonkilooctet", data);
            } else if (parts[1] == "Go") {
                //  Go
                var data = dataonkilooctet * 1000 * 1000;
                $emailavecpiecejointerange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $emailavecpiecejointerange.attr("dataonkilooctet", data);
            }
            sum();
        }
    });

    function comp(resultemailavecpiecejointerange) {
        var result = Math.round(resultemailavecpiecejointerange / 1e3);
        return result > 1e3 ? Math.round(result / 1e3) + " Go" : result + " mo";
    }

    function compdataonkilooctet(resultemailavecpiecejointerange) {
        var result = resultemailavecpiecejointerange / 1e3;
        return result > 1e3 ? result / 1e3 : result;
    }
    // Musique en streaming
    var $musicenstreamingrange = $('#musicenstreamingrange');
    var $datamusicenstreamingrange = parseInt($musicenstreamingrange.attr("datamusicenstreamingrange"));
    var musicenstreamingrangeselectval = 1;
    $('#musicenstreamingrange').rangeslider({
            polyfill: false,
            onSlideEnd: function(position, value) {
                // Modifier la valeur pour (output);
                $('.musicenstreamingrange').text(this.value);
                //  Consommation mensuelle estimée
                var resultmusicenstreamingrange = parseInt($musicenstreamingrange.val()) * parseInt($datamusicenstreamingrange) * musicenstreamingrangeselectval;
                var dataonkilooctet = resultmusicenstreamingrange > 1e3 ? resultmusicenstreamingrange / 1e3 : resultmusicenstreamingrange;
                resultmusicenstreamingrange = parseInt(resultmusicenstreamingrange) > 1e3 ? Math.round(parseInt(resultmusicenstreamingrange) / 1e3) + " Go" : parseInt(resultmusicenstreamingrange) + " mo";
                // $("#total_usage").find(".total_usage_value").text(resultmusicenstreamingrange);
                var parts = resultmusicenstreamingrange.split(' ');
                if (parts[1] == "mo") {
                    //  mo
                    var data = dataonkilooctet * 1000;
                    $musicenstreamingrange.attr("dataonkilooctet", data);
                } else if (parts[1] == "Go") {
                    //  Go
                    var data = dataonkilooctet * 1000 * 1000;
                    $musicenstreamingrange.attr("dataonkilooctet", data);
                } else {
                    // octet
                    var data = dataonkilooctet;
                    $musicenstreamingrange.attr("dataonkilooctet", data);
                }
                sum();
            }
        })
        // select
    $('#musicenstreamingrangeselect').ddslick({
        data: ddData,
        width: 100 + '%',
        imagePosition: "left",
        onSelected: function(selectedData) {
            //  get value selected
            musicenstreamingrangeselectval = selectedData.selectedData.value;

            // Initialize max rangeslider
            var attributes = {
                max: parseInt($nbredejourparmois) * 24
            };

            //  select par jour
            if (musicenstreamingrangeselectval == 30.5) {
                attributes = {
                    max: 1 * 24
                };
                //  selet par semaine
                if ($musicenstreamingrange.val() > 24) {
                    // Modifier la valeur pour (output);
                    $('.musicenstreamingrange').text(parseInt(24));
                }
            } else if (musicenstreamingrangeselectval == 4) {
                attributes = {
                    max: 7 * 24
                };
                // select par mois
                if ($musicenstreamingrange.val() > 168) {
                    // Modifier la valeur pour (output);
                    $('.musicenstreamingrange').text(parseInt(168));
                }
            } else {
                attributes = {
                    max: parseInt($nbredejourparmois) * 24
                };
            }

            $musicenstreamingrange.attr(attributes);
            $musicenstreamingrange.rangeslider('update', true);

            //  Consommation mensuelle estimée
            var resultmusicenstreamingrange = parseInt($musicenstreamingrange.val()) * parseInt($datamusicenstreamingrange) * musicenstreamingrangeselectval;
            var dataonkilooctet = resultmusicenstreamingrange > 1e3 ? resultmusicenstreamingrange / 1e3 : resultmusicenstreamingrange;
            resultmusicenstreamingrange = parseInt(resultmusicenstreamingrange) > 1e3 ? Math.round(parseInt(resultmusicenstreamingrange) / 1e3) + " Go" : parseInt(resultmusicenstreamingrange) + " mo";
            // $("#total_usage").find(".total_usage_value").text(resultmusicenstreamingrange);
            var parts = resultmusicenstreamingrange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $musicenstreamingrange.attr("dataonkilooctet", data);
            } else if (parts[1] == "Go") {
                //  Go
                var data = dataonkilooctet * 1000 * 1000;
                $musicenstreamingrange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $musicenstreamingrange.attr("dataonkilooctet", data);
            }
            sum();
        }
    });

    // //  Vidéo en streaming (SD)
    var $videoenstreamingrange = $('#videoenstreamingrange');
    var $datastreamingsd = parseInt($videoenstreamingrange.attr("datastreamingsd"));
    var videoenstreamingrangeselectval = 1;
    $videoenstreamingrange.rangeslider({
            polyfill: false, 
            onSlideEnd: function(position, value) {
                // Modifier la valeur pour (output);
                $('.videoenstreamingrange').text(this.value);
                //  Consommation mensuelle estimée
                var resultvideoenstreamingrange = parseInt($videoenstreamingrange.val()) * parseInt($datastreamingsd) * videoenstreamingrangeselectval;
                var dataonkilooctet = resultvideoenstreamingrange > 1e3 ? resultvideoenstreamingrange / 1e3 : resultvideoenstreamingrange;
                resultvideoenstreamingrange = parseInt(resultvideoenstreamingrange) > 1e3 ? Math.round(parseInt(resultvideoenstreamingrange) / 1e3) + " Go" : parseInt(resultvideoenstreamingrange) + " mo";
                // $("#total_usage").find(".total_usage_value").text(resultvideoenstreamingrange);
                var parts = resultvideoenstreamingrange.split(' ');
                if (parts[1] == "mo") {
                    //  mo
                    var data = dataonkilooctet * 1000;
                    $videoenstreamingrange.attr("dataonkilooctet", data);
                } else if (parts[1] == "Go") {
                    //  Go
                    var data = dataonkilooctet * 1000 * 1000;
                    $videoenstreamingrange.attr("dataonkilooctet", data);
                } else {
                    // octet
                    var data = dataonkilooctet;
                    $videoenstreamingrange.attr("dataonkilooctet", data);
                }
                sum();
            }
        })
        // select
    $('').ddslick({
        data: ddData,
        width: 100 + '%',
        imagePosition: "left",
        onSelected: function(selectedData) {
            //  get value selected
            videoenstreamingrangeselectval = selectedData.selectedData.value;

            // Initialize max rangeslider
            var attributes = {
                max: parseInt($nbredejourparmois) * 24
            };

            //  select par jour
            if (videoenstreamingrangeselectval == 30.5) {
                attributes = {
                    max: 1 * 24
                };
                //  selet par semaine
                if ($videoenstreamingrange.val() > 24) {
                    // Modifier la valeur pour (output);
                    $('.videoenstreamingrange').text(parseInt(24));
                }
            } else if (videoenstreamingrangeselectval == 4) {
                attributes = {
                    max: 7 * 24
                };
                // select par mois
                if ($videoenstreamingrange.val() > 168) {
                    // Modifier la valeur pour (output);
                    $('.videoenstreamingrange').text(parseInt(168));
                }
            } else {
                attributes = {
                    max: parseInt($nbredejourparmois) * 24
                };
            }

            $videoenstreamingrange.attr(attributes);
            $videoenstreamingrange.rangeslider('update', true);

            //  Consommation mensuelle estimée
            var resultvideoenstreamingrange = parseInt($videoenstreamingrange.val()) * parseInt($datastreamingsd) * videoenstreamingrangeselectval;
            var dataonkilooctet = resultvideoenstreamingrange > 1e3 ? resultvideoenstreamingrange / 1e3 : resultvideoenstreamingrange;
            resultvideoenstreamingrange = parseInt(resultvideoenstreamingrange) > 1e3 ? Math.round(parseInt(resultvideoenstreamingrange) / 1e3) + " Go" : parseInt(resultvideoenstreamingrange) + " mo";
            // $("#total_usage").find(".total_usage_value").text(resultvideoenstreamingrange);
            var parts = resultvideoenstreamingrange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $videoenstreamingrange.attr("dataonkilooctet", data);
            } else if (parts[1] == "Go") {
                //  Go
                var data = dataonkilooctet * 1000 * 1000;
                $videoenstreamingrange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $videoenstreamingrange.attr("dataonkilooctet", data);
            }
            // sum();
        }
    });


    //Partage de connexion
    // var $partage_range = $('#partage_range');
    // var $datastreamingsd = parseInt($partage_range.attr("datastreamingsd"));
    // var partage_rangeselectval = 1;
    // $partage_range.rangeslider({
    //         polyfill: false, 
    //         onSlideEnd: function(position, value) {
    //             // Modifier la valeur pour (output);
    //             $('.partage_range').text(this.value);
    //             //  Consommation mensuelle estimée
    //             var resultpartage_range = parseInt($partage_range.val()) * parseInt($datastreamingsd) * partage_rangeselectval;
    //             var dataonkilooctet = resultpartage_range > 1e3 ? resultpartage_range / 1e3 : resultpartage_range;
    //             resultpartage_range = parseInt(resultpartage_range) > 1e3 ? Math.round(parseInt(resultpartage_range) / 1e3) + " Go" : parseInt(resul_partage_range) + " mo";
    //             // $("#total_usage").find(".total_usage_value").text(resultpartage_range);
    //             var parts = resultpartage_range.split(' ');
    //             if (parts[1] == "mo") {
    //                 //  mo
    //                 var data = dataonkilooctet * 1000;
    //                 $partage_range.attr("dataonkilooctet", data);
    //             } else if (parts[1] == "Go") {
    //                 //  Go
    //                 var data = dataonkilooctet * 1000 * 1000;
    //                 $partage_range.attr("dataonkilooctet", data);
    //             } else {
    //                 // octet
    //                 var data = dataonkilooctet;
    //                 $partage_range.attr("dataonkilooctet", data);
    //             }
    //             sum();
    //         }
    //     })
    //     // select
    // $('#partage_range').ddslick({
    //     data: ddData,
    //     width: 100 + '%',
    //     imagePosition: "left",
    //     onSelected: function(selectedData) {
    //         //  get value selected
    //         partage_rangeselectval = selectedData.selectedData.value;

    //         // Initialize max rangeslider
    //         var attributes = {
    //             max: parseInt($nbredejourparmois) * 24
    //         };

    //         //  select par jour
    //         if (partage_rangeselectval == 30.5) {
    //             attributes = {
    //                 max: 1 * 24
    //             };
    //             //  selet par semaine
    //             if ($partage_range.val() > 24) {
    //                 // Modifier la valeur pour (output);
    //                 $('.partage').text(parseInt(24));
    //             }
    //         } else if (partage_rangeselectval == 4) {
    //             attributes = {
    //                 max: 7 * 24
    //             };
    //             // select par mois
    //             if ($partage_range.val() > 168) {
    //                 // Modifier la valeur pour (output);
    //                 $('.partage').text(parseInt(168));
    //             }
    //         } else {
    //             attributes = {
    //                 max: parseInt($nbredejourparmois) * 24
    //             };
    //         }

    //         $partage_range.attr(attributes);
    //         $partage_range.rangeslider('update', true);

    //         //  Consommation mensuelle estimée
    //         var resul_partage_range = parseInt($partage_range.val()) * parseInt($datastreamingsd) * partage_rangeselectval;
    //         var dataonkilooctet = resul_partage_range > 1e3 ? resul_partage_range / 1e3 : resul_partage_range;
    //         resul_partage_range = parseInt(resul_partage_range) > 1e3 ? Math.round(parseInt(resul_partage_range) / 1e3) + " Go" : parseInt(resul_partage_range) + " mo";
    //         // $("#total_usage").find(".total_usage_value").text(resul_partage_range);
    //         var parts = resul_partage_range.split(' ');
    //         if (parts[1] == "mo") {
    //             //  mo
    //             var data = dataonkilooctet * 1000;
    //             $partage_range.attr("dataonkilooctet", data);
    //         } else if (parts[1] == "Go") {
    //             //  Go
    //             var data = dataonkilooctet * 1000 * 1000;
    //             $partage_range.attr("dataonkilooctet", data);
    //         } else {
    //             // octet
    //             var data = dataonkilooctet;
    //             $partage_range.attr("dataonkilooctet", data);
    //         }
    //         sum();
    //     }
    // });


    $('.partage').click(function(){
        
        sum();

    })

    //calcul la moyenne en fonction du nombre de partage
    function number_user(ratio_moyen){
        
        //récupère le nombre de partage
        var nb_user = $('.partage').val();

        //indique le nombre total de personne connecter au partage
        $('.value_partage').text(nb_user);
        

        var ratio_moyen = parseInt(ratio_moyen);
    
        final_result = ratio_moyen*nb_user;

        // if (final_result >= 1000) {

        //     final_result = final_result.substr(0,1);
        
        //     return final_result;
        // }

        return final_result;
    }












    //  Vidéo en HD ou TV d’Orange
    var $videohdenstreamingrange = $('#videohdenstreamingrange');
    var $datastreaminghd = parseInt($videohdenstreamingrange.attr("datastreaminghd"));
    var videohdenstreamingrangeselectval = 1;
    $videohdenstreamingrange.rangeslider({
            polyfill: false,
            onSlideEnd: function(position, value) {
                // Modifier la valeur pour (output);
                $('.videohdenstreamingrange').text(this.value);
                //  Consommation mensuelle estimée
                var resultvideohdenstreamingrange = parseInt($videohdenstreamingrange.val()) * parseInt($datastreaminghd) * videohdenstreamingrangeselectval;
                var dataonkilooctet = resultvideohdenstreamingrange > 1e3 ? resultvideohdenstreamingrange / 1e3 : resultvideohdenstreamingrange;
                resultvideohdenstreamingrange = parseInt(resultvideohdenstreamingrange) > 1e3 ? Math.round(parseInt(resultvideohdenstreamingrange) / 1e3) + " Go" : parseInt(resultvideohdenstreamingrange) + " mo";
                // $("#total_usage").find(".total_usage_value").text(resultvideohdenstreamingrange);
                var parts = resultvideohdenstreamingrange.split(' ');
                if (parts[1] == "mo") {
                    //  mo
                    var data = dataonkilooctet * 1000;
                    $videohdenstreamingrange.attr("dataonkilooctet", data);
                } else if (parts[1] == "Go") {
                    //  Go
                    var data = dataonkilooctet * 1000 * 1000;
                    $videohdenstreamingrange.attr("dataonkilooctet", data);
                } else {
                    // octet
                    var data = dataonkilooctet;
                    $videohdenstreamingrange.attr("dataonkilooctet", data);
                }
                sum();
            }
        })
        // select
    $('#videohdenstreamingrangeselect').ddslick({
        data: ddData,
        width: 100 + '%',
        imagePosition: "left",
        onSelected: function(selectedData) {
            //  get value selected
            videohdenstreamingrangeselectval = selectedData.selectedData.value;
            // Initialize max rangeslider
            var attributes = {
                max: parseInt($nbredejourparmois) * 24
            };

            //  select par jour
            if (videohdenstreamingrangeselectval == 30.5) {
                attributes = {
                    max: 1 * 24
                };
                //  selet par semaine
                if ($videohdenstreamingrange.val() > 24) {
                    // Modifier la valeur pour (output);
                    $('.videohdenstreamingrange').text(parseInt(24));
                }
            } else if (videohdenstreamingrangeselectval == 4) {
                attributes = {
                    max: 7 * 24
                };
                // select par mois
                if ($videohdenstreamingrange.val() > 168) {
                    // Modifier la valeur pour (output);
                    $('.videohdenstreamingrange').text(parseInt(168));
                }
            } else {
                attributes = {
                    max: parseInt($nbredejourparmois) * 24
                };
            }

            $videohdenstreamingrange.attr(attributes);
            $videohdenstreamingrange.rangeslider('update', true);

            //  Consommation mensuelle estimée
            var resultvideohdenstreamingrange = parseInt($videohdenstreamingrange.val()) * parseInt($datastreaminghd) * videohdenstreamingrangeselectval;
            var dataonkilooctet = resultvideohdenstreamingrange > 1e3 ? resultvideohdenstreamingrange / 1e3 : resultvideohdenstreamingrange;
            resultvideohdenstreamingrange = parseInt(resultvideohdenstreamingrange) > 1e3 ? Math.round(parseInt(resultvideohdenstreamingrange) / 1e3) + " Go" : parseInt(resultvideohdenstreamingrange) + " mo";
            // $("#total_usage").find(".total_usage_value").text(resultvideohdenstreamingrange);
            var parts = resultvideohdenstreamingrange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $videohdenstreamingrange.attr("dataonkilooctet", data);
            } else if (parts[1] == "Go") {
                //  Go
                var data = dataonkilooctet * 1000 * 1000;
                $videohdenstreamingrange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $videohdenstreamingrange.attr("dataonkilooctet", data);
            }
            sum();
        }
    });


    //  Téléchargement
    var $telechargementrange = $('#telechargementrange');
    var $dataapplication = parseInt($telechargementrange.attr("dataaplication"));
    var telechargementrangeselectval = 1;
    $telechargementrange.rangeslider({
            polyfill: false,
            onSlideEnd: function(position, value) {
                // Modifier la valeur pour (output);
                $('.telechargementrange').text(this.value);
                //  Consommation mensuelle estimée
                var resulttelechargementrange = parseInt($telechargementrange.val()) * parseInt($dataapplication) * telechargementrangeselectval;
                var dataonkilooctet = resulttelechargementrange > 1e3 ? resulttelechargementrange / 1e3 : resulttelechargementrange;
                resulttelechargementrange = resulttelechargementrange > 1e3 ? Math.round(resulttelechargementrange / 1e3) + " Go" : resulttelechargementrange + " mo";
                // $("#total_usage").find(".total_usage_value").text(resulttelechargementrange);
                var parts = resulttelechargementrange.split(' ');
                if (parts[1] == "mo") {
                    //  mo
                    var data = dataonkilooctet * 1000;
                    $telechargementrange.attr("dataonkilooctet", data);
                } else if (parts[1] == "Go") {
                    //  Go
                    var data = dataonkilooctet * 1000 * 1000;
                    $telechargementrange.attr("dataonkilooctet", data);
                } else {
                    // octet
                    var data = dataonkilooctet;
                    $telechargementrange.attr("dataonkilooctet", data);
                }
                sum();
            }
        })
        // select
    $('#telechargementrangeselect').ddslick({
        data: ddData,
        width: 100 + '%',
        imagePosition: "left",
        onSelected: function(selectedData) {
            //  get value selected
            telechargementrangeselectval = selectedData.selectedData.value;

            // Initialize max rangeslider
            var attributes = {
                max: 200
            };

            //  select par jour
            if (telechargementrangeselectval == 30.5) {
                attributes = {
                    max: 10
                };
                //  selet par semaine
                if ($telechargementrange.val() > 10) {
                    // Modifier la valeur pour (output);
                    $('.telechargementrange').text(parseInt(10));
                }
            } else if (telechargementrangeselectval == 4) {
                attributes = {
                    max: 50
                };
                // select par mois
                if ($telechargementrange.val() > 50) {
                    // Modifier la valeur pour (output);
                    $('.telechargementrange').text(parseInt(50));
                }
            } else {
                attributes = {
                    max: 200
                };
            }

            $telechargementrange.attr(attributes);
            $telechargementrange.rangeslider('update', true);

            //  Consommation mensuelle estimée
            var resulttelechargementrange = parseInt($telechargementrange.val()) * parseInt($dataapplication) * telechargementrangeselectval;
            var dataonkilooctet = resulttelechargementrange > 1e3 ? resulttelechargementrange / 1e3 : resulttelechargementrange;
            resulttelechargementrange = resulttelechargementrange > 1e3 ? Math.round(resulttelechargementrange / 1e3) + " Go" : resulttelechargementrange + " mo";
            // $("#total_usage").find(".total_usage_value").text(resulttelechargementrange);
            var parts = resulttelechargementrange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $telechargementrange.attr("dataonkilooctet", data);
            } else if (parts[1] == "Go") {
                //  Go
                var data = dataonkilooctet * 1000 * 1000;
                $telechargementrange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $telechargementrange.attr("dataonkilooctet", data);
            }
            sum();
        }
    });
    // Tchat, messagerie instantanée
    var $tchatrange = $('#tchatrange');
    var $datatchat = parseInt($tchatrange.attr("datatchat"));
    var tchatrangeselectval = 1;
    $('#tchatrange').rangeslider({
            polyfill: false,
            onSlideEnd: function(position, value) {
                // Modifier la valeur pour (output);
                $('.tchatrange').text(this.value);
                //  Consommation mensuelle estimée
                var resulttchatrange = parseInt($tchatrange.val()) * parseInt($datatchat) * tchatrangeselectval;
                var dataonkilooctet = resulttchatrange > 1e3 ? resulttchatrange / 1e3 : resulttchatrange;
                resulttchatrange = resulttchatrange > 1e3 ? Math.round(resulttchatrange / 1e3) + " Go" : resulttchatrange + " mo";
                // $("#total_usage").find(".total_usage_value").text(resulttchatrange);
                var parts = resulttchatrange.split(' ');
                if (parts[1] == "mo") {
                    //  mo
                    var data = dataonkilooctet * 1000;
                    $tchatrange.attr("dataonkilooctet", data);
                } else if (parts[1] == "Go") {
                    //  Go
                    var data = dataonkilooctet * 1000 * 1000;
                    $tchatrange.attr("dataonkilooctet", data);
                } else {
                    // octet
                    var data = dataonkilooctet;
                    $tchatrange.attr("dataonkilooctet", data);
                }
                sum();
            }
        })
        // select
    $('#tchatrangeselect').ddslick({
        data: ddData,
        width: 100 + '%',
        imagePosition: "left",
        onSelected: function(selectedData) {
            //  get value selected
            tchatrangeselectval = selectedData.selectedData.value;

            // Initialize max rangeslider
            var attributes = {
                max: parseInt($nbredejourparmois) * 24
            };

            //  select par jour
            if (tchatrangeselectval == 30.5) {
                attributes = {
                    max: 1 * 24
                };
                //  selet par semaine
                if ($tchatrange.val() > 24) {
                    // Modifier la valeur pour (output);
                    $('.tchatrange').text(parseInt(24));
                }
            } else if (tchatrangeselectval == 4) {
                attributes = {
                    max: 7 * 24
                };
                // select par mois
                if ($tchatrange.val() > 168) {
                    // Modifier la valeur pour (output);
                    $('.tchatrange').text(parseInt(168));
                }
            } else {
                attributes = {
                    max: parseInt($nbredejourparmois) * 24
                };
            }

            $tchatrange.attr(attributes);
            $tchatrange.rangeslider('update', true);

            //  Consommation mensuelle estimée
            var resulttchatrange = parseInt($tchatrange.val()) * parseInt($datatchat) * tchatrangeselectval;
            var dataonkilooctet = resulttchatrange > 1e3 ? resulttchatrange / 1e3 : resulttchatrange;
            resulttchatrange = resulttchatrange > 1e3 ? Math.round(resulttchatrange / 1e3) + " Go" : resulttchatrange + " mo";
            // $("#total_usage").find(".total_usage_value").text(resulttchatrange);
            var parts = resulttchatrange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $tchatrange.attr("dataonkilooctet", data);
            } else if (parts[1] == "Go") {
                //  Go
                var data = dataonkilooctet * 1000 * 1000;
                $tchatrange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $tchatrange.attr("dataonkilooctet", data);
            }
            sum();
        }
    });



    // Post photo sur réseaux sociaux ou cloud
    var $photosrange = $('#photosrange');
    var $dataphoto = parseInt($photosrange.attr("dataphoto"));
    var photosrangeselectval = 1;
    $photosrange.rangeslider({
            polyfill: false,
            onSlideEnd: function(position, value) {
                // Modifier la valeur pour (output);
                $('.photosrange').text(this.value);
                //  Consommation mensuelle estimée
                var resultphotosrange = parseInt($photosrange.val()) * parseInt($dataphoto) * photosrangeselectval;
                var dataonkilooctet = resultphotosrange > 1e3 ? resultphotosrange / 1e3 : resultphotosrange;
                resultphotosrange = parseInt(resultphotosrange) > 1e3 ? Math.round(parseInt(resultphotosrange) / 1e3) + " Go" : parseInt(resultphotosrange) + " mo";
                // $("#total_usage").find(".total_usage_value").text(resultphotosrange);
                var parts = resultphotosrange.split(' ');
                if (parts[1] == "mo") {
                    //  mo
                    var data = dataonkilooctet * 1000;
                    $photosrange.attr("dataonkilooctet", data);
                } else if (parts[1] == "Go") {
                    //  Go
                    var data = dataonkilooctet * 1000 * 1000;
                    $photosrange.attr("dataonkilooctet", data);
                } else {
                    // octet
                    var data = dataonkilooctet;
                    $photosrange.attr("dataonkilooctet", data);
                }
                sum();
            }
        })
        // select
    $('#photosrangeselect').ddslick({
        data: ddData,
        width: 100 + '%',
        imagePosition: "left",
        onSelected: function(selectedData) {
            //  get value selected
            photosrangeselectval = selectedData.selectedData.value;
            // Initialize max rangeslider
            var attributes = {
                max: 200
            };

            //  select par jour
            if (photosrangeselectval == 30.5) {
                attributes = {
                    max: 10
                };
                //  selet par semaine
                if ($photosrange.val() > 24) {
                    // Modifier la valeur pour (output);
                    $('.photosrange').text(parseInt(10));
                }
            } else if (photosrangeselectval == 4) {
                attributes = {
                    max: 50
                };
                // select par mois
                if ($photosrange.val() > 168) {
                    // Modifier la valeur pour (output);
                    $('.photosrange').text(parseInt(50));
                }
            } else {
                attributes = {
                    max: 200
                };
            }

            $photosrange.attr(attributes);
            $photosrange.rangeslider('update', true);

            //  Consommation mensuelle estimée
            var resultphotosrange = parseInt($photosrange.val()) * parseInt($dataphoto) * photosrangeselectval;
            var dataonkilooctet = resultphotosrange > 1e3 ? resultphotosrange / 1e3 : resultphotosrange;
            resultphotosrange = parseInt(resultphotosrange) > 1e3 ? Math.round(parseInt(resultphotosrange) / 1e3) + " Go" : parseInt(resultphotosrange) + " mo";
            // $("#total_usage").find(".total_usage_value").text(resultphotosrange);
            var parts = resultphotosrange.split(' ');
            if (parts[1] == "mo") {
                //  mo
                var data = dataonkilooctet * 1000;
                $photosrange.attr("dataonkilooctet", data);
            } else if (parts[1] == "Go") {
                //  Go
                var data = dataonkilooctet * 1000 * 1000;
                $photosrange.attr("dataonkilooctet", data);
            } else {
                // octet
                var data = dataonkilooctet;
                $photosrange.attr("dataonkilooctet", data);
            }
            sum();
        }
    });

    // REMETTRE A ZERO
    $('.mettreazerosimulateur').click(function() {
        // REMETTRE A ZERO ALL INPUT THE TYPE RANGE
        $('input[type="range"]').val(0).change();
        // REMETTRE A ZERO (VALUE) ALL INPUT THE TYPE RANGE
        $('input[type="range"]').attr("value", 0);
        // REMETTRE A ZERO (OUTPUT) ALL INPUT THE TYPE RANGE
        $('.valuerange').find('.valueint').text(parseInt(0));
        // REMETTRE A ZERO (total_usage) ALL INPUT THE TYPE RANGE
        $('#total_usage').find('.total_usage_value').text(parseInt(0) + " mo");
        $('#total_usage').find('.total_usage_unite').text("mo");
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
        // REMETTRE A ZERO dataonkilooctet
        $('input[type="range"]').attr("dataonkilooctet", 0);

        // REMETTRE A 1 PARTAGE CONNEXIONS
        $('.value_partage').text('1');

        return false;
    })

    function sum() {
        var sum = parseInt(document.getElementById('internetrange').getAttribute("dataonkilooctet")) +
            parseInt(document.getElementById('emailsanspiecejointerange').getAttribute("dataonkilooctet")) +
            parseInt(document.getElementById('emailavecpiecejointerange').getAttribute("dataonkilooctet")) +
            parseInt(document.getElementById('musicenstreamingrange').getAttribute("dataonkilooctet"))+
            parseInt(document.getElementById('videohdenstreamingrange').getAttribute("dataonkilooctet")) +
            parseInt(document.getElementById('telechargementrange').getAttribute("dataonkilooctet")) +
            parseInt(document.getElementById('tchatrange').getAttribute("dataonkilooctet")) +
            parseInt(document.getElementById('photosrange').getAttribute("dataonkilooctet"));
        resultsum = sum < 1000 ? sum + " ko" : comp_sum(sum);

        final_result = number_user(resultsum);

        var unite_data = resultsum.substr(-2,2);

        $("#total_usage").find(".total_usage_value").text(final_result+' '+unite_data);
        
        return parseInt(final_result);  

    }

    function comp_sum(sum) {
        return sum >= 1000000 ? Math.round(Math.round(sum / 1e3) / 1000) + " Go" : Math.round(sum / 1e3) + " mo";
    }
    // window resize
    infobulle();
    $(window).resize(function() {
        infobulle();
    })

    function infobulle() {
        if ($(window).width() <= 801) {
            $(".zone-info").each(function() {
                $(this).removeClass('simulateur-icons-infobulle').addClass('zone-infomobile');
            })
        } else if ($(window).width() >= 801) {
            $(".zone-info").each(function() {
                $(this).removeClass('zone-infomobile').addClass('simulateur-icons-infobulle');
            })
        }
    }


})(jQuery);


