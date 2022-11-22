var global_context = null;
            var tileW = 40;
            var tileH = 40;
            var mapW = 10;
            var mapH = 10;
            var borderX = tileW*(mapW-1)+8
            var borderY = tileH*(mapH-1)+8
            var tilemap =[];
            
           
           
            var gameMap = [
            0,0,0,0,0,0,0,0,0,0,
            0,0,0,1,1,0,0,1,0,0,
            0,0,1,1,0,0,0,1,1,0,
            0,1,1,1,1,1,1,1,0,0,
            0,0,0,0,1,0,1,1,0,0,
            0,0,1,1,1,1,1,0,0,0,
            0,1,1,0,0,0,1,0,0,0,
            0,0,1,0,0,0,1,0,0,0,
            0,1,1,0,0,0,1,1,1,0,
            0,0,0,0,0,0,0,0,0,0,
            ];
            window.onload = function(){
                global_context = document.getElementById('game').getContext('2d');
                
                requestAnimationFrame(Game);
                global_context - 'bold 10pt sans-serif';
               
            };
         

            function Game(){
                if(global_context==null){
                    return;
                }
               for(var i = 0; i < mapH; i++){
                    for(var x = 0; x < mapW; x++){
                        switch(gameMap[((i*mapW)+ x)])
                        {
                            case 0:
                                global_context.fillStyle = '#000000';
                                var n = 0;
                                break;
                            default:
                                global_context.fillStyle = "#59ff00";
                                var n = 1;
                        }
                        global_context.fillRect(x*tileW, i*tileH, tileW, tileH);
                        var tl = new tile(x*tileW, i*tileH,n);
                        tilemap.push(tl);
                    }
                }
              
                
                

                global_context.fillStyle = "#ff0000";
               

                requestAnimationFrame(Game);

            }


            function isCollide(a, b) {
              return !(
                  ((a.y + a.height) < (b.y)) ||
                  (a.y > (b.y + b.height)) ||
                  ((a.x + a.width) < b.x) ||
                  (a.x > (b.x + b.width))
              );
          }

          function playerupdate(x, y) {
            $("#player").css('left', x + 'px');
            $("#player").css('top', y + 'px');

            $("#txt").html('x: ' + x + ' y: ' + y);
        }
         function checktile(t){
            if((t.x == player_obj.x)&&(t.y == player_obj.y)){
                if(t.type == 1){
                    alert('test');
                    playerupdate(player_obj.past_x,player_obj.past_y);
                }
            }
         }
      
            class playerobj{
              constructor(obj){
                this.x = parseInt($(obj).css('left'));
                this.y = parseInt($(obj).css('top'));
                this.width = $(obj).width();
                this.height = $(obj).height();
                this.past_x = this.x;
                this.past_y = this.y;
                this.battery = 100;
                this.health = 100;
              }
            }


            class tile{
                constructor(x, y, num){
                  this.x = x;
                  this.y = y;
                  this.type = num;
                }
              }


            var player_obj = new playerobj("#player");
            $(document).ready(function(){
                
                player_obj.x = 8;
                player_obj.y = 8;
                playerupdate(player_obj.x,player_obj.y);
                
                
            });
            
          
              $(document).keydown(function(e){
                  
                  var key_code = e.which || e.keyCode;
                  switch (key_code) {
                    case 37: //left arrow key
                    if (player_obj.x > 8){
                    player_obj.past_x = player_obj.x;
                    player_obj.x -= 40;
                    playerupdate(player_obj.x,player_obj.y);
                }
                    break;
                case 38: //Up arrow key
                    if (player_obj.y > 8){
                    player_obj.past_y = player_obj.y;
                    player_obj.y -= 40;
                    playerupdate(player_obj.x,player_obj.y);
                }
                    break;
                case 39: //right arrow key
                    if (player_obj.x < borderX){
                    player_obj.past_x = player_obj.x;
                    player_obj.x += 40;
                    playerupdate(player_obj.x,player_obj.y);
                }
                    break;
                case 40: //down arrow key
                    if (player_obj.y < borderY){
                    player_obj.past_y = player_obj.y;
                    player_obj.y += 40;
                    playerupdate(player_obj.x,player_obj.y);
                }
                    break;
              }
              tilemap.forEach(checktile)
          });