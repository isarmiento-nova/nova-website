const LiquidButton = class LiquidButton {
    constructor(svg) {
      // console.log(svg.id);
      const options = svg.dataset;
      this.id = this.constructor.id || (this.constructor.id = 1);
      this.constructor.id++;
      this.xmlns = 'http://www.w3.org/2000/svg';
      this.tension = options.tension * 1 || 0.4;
      // this.width   = options.width   * 1 || 120;
      this.height  = options.height  * 1 ||  120;
      this.width   = this.height;
      this.margin  = options.margin  ||  30;
      this.hoverFactor = options.hoverFactor || -10;
      this.gap     = options.gap     ||   5;
      this.debug   = options.debug   || false;
      this.forceFactor = options.forceFactor || 0.2;
      this.color1 = options.color1 || '#33ccd9';
      this.color2 = options.color2 || '#ffffff';
      this.color3 = options.color3 || '#ffffff';
      this.textColor = options.textColor || '#FFFFFF';
      this.text = options.text    || '';
      this.svg = svg;
      this.layers = [
          {
        points: [],
        viscosity: 0.5,
        mouseForce: 100,
        forceLimit: 2,
      },
      {
        points: [],
        viscosity: 0.8,
        mouseForce: 150,
        forceLimit: 3,
      }];
      for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
        const layer = this.layers[layerIndex];
        layer.viscosity = options['layer-' + (layerIndex + 1) + 'Viscosity'] * 1 || layer.viscosity;
        layer.mouseForce = options['layer-' + (layerIndex + 1) + 'MouseForce'] * 1 || layer.mouseForce;
        layer.forceLimit = options['layer-' + (layerIndex + 1) + 'ForceLimit'] * 1 || layer.forceLimit;
        layer.path = document.createElementNS(this.xmlns, 'path');
        this.svg.appendChild(layer.path);
      }
    //   console.log(this.layers[0].path)
      this.wrapperElement = options.wrapperElement || document.body;
      if (!this.svg.parentElement) {
        this.wrapperElement.append(this.svg);
      }
  
      this.svgText = document.createElementNS(this.xmlns, 'text');
      this.svgText.setAttribute('x', '50%');
      this.svgText.setAttribute('y', '50%');
      this.svgText.setAttribute('dy', ~~(this.height / 8) + 'px');
      this.svgText.setAttribute('font-size', ~~(this.height / 3));
      this.svgText.style.fontFamily = 'sans-serif';
      this.svgText.setAttribute('text-anchor', 'middle');
      this.svgText.setAttribute('pointer-events', 'none');
      this.svg.appendChild(this.svgText);
  
      this.svgDefs = document.createElementNS(this.xmlns, 'defs')
      this.svg.appendChild(this.svgDefs);
  
      this.touches = [];
      this.noise = options.noise || 0;
      document.body.addEventListener('touchstart', this.touchHandler);
      document.body.addEventListener('touchmove', this.touchHandler);
      document.body.addEventListener('touchend', this.clearHandler);
      document.body.addEventListener('touchcancel', this.clearHandler);
      this.svg.addEventListener('mousemove', this.mouseHandler);
      this.svg.addEventListener('mouseout', this.clearHandler);
      this.initOrigins(svg.id);
      this.animate();
    }
  
    get mouseHandler() {
      return (e) => {
        this.touches = [{
          x: e.offsetX,
          y: e.offsetY,
          force: 1,
        }];
      };
    }
  
    get touchHandler() {
      return (e) => {
        this.touches = [];
        const rect = this.svg.getBoundingClientRect();
        for (let touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {
          const touch = e.changedTouches[touchIndex];
          const x = touch.pageX - rect.left;
          const y = touch.pageY - rect.top;
          if (x > 0 && y > 0 && x < this.svgWidth && y < this.svgHeight) {
            this.touches.push({x, y, force: touch.force || 1});
          }
        }
        e.preventDefault();
      };
    }
  
    get clearHandler() {
      return (e) => {
        this.touches = [];
      };
    }
  
    get raf() {
      return this.__raf || (this.__raf = (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback){ setTimeout(callback, 10)}
      ).bind(window));
    }
  
    distance(p1, p2) {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }
  
    update() {
      for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
        const layer = this.layers[layerIndex];
        const points = layer.points;
        for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
          const point = points[pointIndex];
          const dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
          const dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
          const d = Math.sqrt(dx * dx + dy * dy);
          const f = d * this.forceFactor;
          point.vx += f * ((dx / d) || 0);
          point.vy += f * ((dy / d) || 0);
          for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
            const touch = this.touches[touchIndex];
            let mouseForce = layer.mouseForce;
            if (
              touch.x > this.margin &&
              touch.x < this.margin + this.width &&
              touch.y > this.margin &&
              touch.y < this.margin + this.height
            ) {
              mouseForce *= -this.hoverFactor;
            }
            const mx = point.x - touch.x;
            const my = point.y - touch.y;
            const md = Math.sqrt(mx * mx + my * my);
            const mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, (mouseForce * touch.force) / md));
            point.vx += mf * ((mx / md) || 0);
            point.vy += mf * ((my / md) || 0);
          }
          point.vx *= layer.viscosity;
          point.vy *= layer.viscosity;
          point.x += point.vx;
          point.y += point.vy;
        }
        for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
          const prev = points[(pointIndex + points.length - 1) % points.length]; 
          const point = points[pointIndex];
          const next = points[(pointIndex + points.length + 1) % points.length];
          const dPrev = this.distance(point, prev);
          const dNext = this.distance(point, next);
  
          const line = {
            x: next.x - prev.x,
            y: next.y - prev.y,
          };
          const dLine = Math.sqrt(line.x * line.x + line.y * line.y);
  
          point.cPrev = {
            x: point.x - (line.x / dLine) * dPrev * this.tension,
            y: point.y - (line.y / dLine) * dPrev * this.tension,
          };
          point.cNext = {
            x: point.x + (line.x / dLine) * dNext * this.tension,
            y: point.y + (line.y / dLine) * dNext * this.tension,
          };
        }
      }
    }
  
    animate() {
      this.raf(() => {
        this.update();
        this.draw();
        this.animate();
      });
    }
  
    get svgWidth() {
      return this.width + this.margin * 2;
    }
  
    get svgHeight() {
      return this.height + this.margin * 2;
    }
  
    draw() {
      for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
        const layer = this.layers[layerIndex];
        if (layerIndex === 1) {
          if (this.touches.length > 0) {
            while (this.svgDefs.firstChild) {
              this.svgDefs.removeChild(this.svgDefs.firstChild);
            }
            for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
              const touch = this.touches[touchIndex];
              const gradient = document.createElementNS(this.xmlns, 'radialGradient');
              gradient.id = 'liquid-gradient-' + this.id + '-' + touchIndex;
              const start = document.createElementNS(this.xmlns, 'stop');
              start.setAttribute('stop-color', this.color3);
              start.setAttribute('offset', '0%');
              const stop = document.createElementNS(this.xmlns, 'stop');
              stop.setAttribute('stop-color', this.color2);
              stop.setAttribute('offset', '100%');
              gradient.appendChild(start);
              gradient.appendChild(stop);
              this.svgDefs.appendChild(gradient);
              gradient.setAttribute('cx', touch.x / this.svgWidth);
              gradient.setAttribute('cy', touch.y / this.svgHeight);
              gradient.setAttribute('r', touch.force);
              layer.path.style.fill = 'url(#' + gradient.id + ')';
            }
          } else {
            layer.path.style.fill = this.color2;
          }
        } else {
          layer.path.style.fill = this.color1;
        }
        const points = layer.points;
        // console.log(laye)
        const commands = [];
        commands.push('M', points[0].x, points[0].y);
        for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
          commands.push('C',
            points[(pointIndex + 0) % points.length].cNext.x,
            points[(pointIndex + 0) % points.length].cNext.y,
            points[(pointIndex + 1) % points.length].cPrev.x,
            points[(pointIndex + 1) % points.length].cPrev.y,
            points[(pointIndex + 1) % points.length].x,
            points[(pointIndex + 1) % points.length].y
          );
        }
        commands.push('Z');
        layer.path.setAttribute('d', commands.join(' '));
      }
      this.svgText.textContent = this.text;
      this.svgText.style.fill = this.textColor;
    }
  
    createPoint(x, y) {
      return {
        x: x,
        y: y,
        ox: x,
        oy: y,
        vx: 0,
        vy: 0,
      };
    }
  
    initOrigins(characterId) {
      this.svg.setAttribute('width', this.svgWidth);
      this.svg.setAttribute('height', this.svgHeight);

      let ajusteEsquina = this.height/120;


      for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
        const layer = this.layers[layerIndex];
        const points = [];

        // console.log('height',this.height);  //120
        // console.log('width',this.width);    //120
        // console.log('margin',this.margin);  //50
        // console.log('gap',this.gap);        //5


        // LOGO EN FUNCION MATEMATICA
        // LOGO EN FUNCION MATEMATICA
        // LOGO EN FUNCION MATEMATICA
        // LOGO EN FUNCION MATEMATICA

        //N
        if(characterId === "liquid-button-n"){
          //1
          for (let x = ~~(0); x <  ~~(this.height/2); x += this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin
            ));
          }
          //2
          for (let alpha = ~~(this.height * 1.25); alpha >= ~~(this.height * 1.25/2); alpha -= this.gap) {
            const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
            points.push(this.createPoint(
              Math.sin(angle) * this.height / 2 + this.margin + this.height / 2,
              Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
            ));
          }
          //3
          for (let x =  ~~(this.height/2); x <  ~~(this.height); x += this.gap) {
            points.push(this.createPoint(
              this.margin+ this.height,
              x + this.margin
            ));
          }
          //4
          for (let x = ~~(this.height) - ajusteEsquina; x >= ~~(this.height *3/ 4); x -= this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin + this.height
            ));
          }
          //5
          for (let x =  ~~(this.height); x > ~~(this.height/2) ; x -= this.gap) {
            points.push(this.createPoint(
              this.margin + this.height*3/ 4,
              x + this.margin
            ));
          }
          //6
          for (let alpha = ~~(this.height * 1.25/2); alpha <= ~~(this.height * 1.25); alpha += this.gap) {
            const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
            points.push(this.createPoint(
              Math.sin(angle) * this.height / 4 + this.margin + this.height/2,
              Math.cos(angle) * this.height / 4 + this.margin + this.height / 2
            ));
          }
          //7
          for (let x = ~~(this.height*2/4) - ajusteEsquina; x >= ~~(this.height *1/ 4); x -= this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin + this.height/4
            ));
          }
          //8
          for (let x =  ~~(this.height/4); x <  ~~(this.height); x += this.gap) {
            points.push(this.createPoint(
              this.margin+ this.height/4,
              x + this.margin
            ));
          }
          //9
          for (let x = ~~(this.height/4) - ajusteEsquina; x >= ~~(0); x -= this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin + this.height
            ));
          }
          //10
          for (let x =  ~~(this.height); x > ~~(0) ; x -= this.gap) {
            points.push(this.createPoint(
              this.margin ,
              x + this.margin
            ));
          }
        }


        //O
        else if(characterId === "liquid-button-o"){
          //1
          for (let alpha = ~~(this.height * 1.25); alpha >= ~~(this.height * -1.25); alpha -= this.gap) {
            const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
            points.push(this.createPoint(
              Math.sin(angle) * this.height / 2 + this.margin + this.height / 2,
              Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
            ));
          }
          //3
          for (let x =  ~~(0); x <  ~~(this.height/4); x += this.gap) {
            points.push(this.createPoint(
              this.margin+ this.height/2,
              x + this.margin
            ));
          }
          //2
          for (let alpha = ~~(this.height * -1.25); alpha <= ~~(this.height * 1.25); alpha += this.gap) {
            const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
            points.push(this.createPoint(
              Math.sin(angle) * this.height / 4 + this.margin + this.height/2,
              Math.cos(angle) * this.height / 4 + this.margin + this.height / 2
            ));
          }
          //5
          for (let x =  ~~(this.height/4); x > ~~(0) ; x -= this.gap) {
            points.push(this.createPoint(
              this.margin + this.height/2,
              x + this.margin
            ));
          }

        }


        //V
        else if(characterId === "liquid-button-v"){
          //1
          for (let x = ~~(-this.height/12 - ajusteEsquina*3); x <  ~~(this.height/4-this.height/12 + ajusteEsquina); x += this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin
            ));
          }
          //2
          for (let x = ~~(this.height/4-this.height/12 ); x <  ~~(this.height/2 + ajusteEsquina); x += this.gap) {
            points.push(this.createPoint(
              x + this.margin ,
              (x-(this.height/4-this.height/12))*1.6 + this.margin 
            ));
          }
          //3
          for (let x =  ~~(this.height/2); x < ~~(this.height*3/4+this.height/12) ; x += this.gap) {
            points.push(this.createPoint(
              x + this.margin ,
              -(x-this.height/2)*1.7 + this.margin + this.height/2
            ));
          }
          //4
          for (let x = ~~(this.height*3/4+this.height/12- ajusteEsquina) ; x <  ~~(this.height+this.height/12); x += this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin
            ));
          }
          //5
          for (let x =  ~~(this.height+this.height/12); x > ~~(this.height/2 - ajusteEsquina) ; x -= this.gap) {
            points.push(this.createPoint(
              x + this.margin ,
              -(x-this.height/2)*1.7 + this.margin + this.height 
            ));
          }
          //6
          for (let x =  ~~(this.height/2); x > ~~(-this.height/12 - ajusteEsquina) ; x -= this.gap) {
            points.push(this.createPoint(
              x + this.margin ,
              (x-this.height/2)*1.6 + this.margin + this.height 
            ));
          }
          // //7
          // for (let x =  ~~(this.height); x > ~~(0) ; x -= this.gap) {
          //   points.push(this.createPoint(
          //    this.margin -this.height/12,
          //      x +  this.margin
          //   ));
          // }
          
          
          
        }


        //A
        else if(characterId === "liquid-button-a"){

          //1
          for (let alpha = ~~(this.height * 1.25); alpha >= ~~(this.height * 1.25/2); alpha -= this.gap) {
            const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
            points.push(this.createPoint(
              Math.sin(angle) * this.height / 2 + this.margin + this.height / 2,
              Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
            ));
          }
          //2
          for (let x =  ~~(this.height/2); x <  ~~(this.height); x += this.gap) {
            points.push(this.createPoint(
              this.margin+ this.height,
              x + this.margin
            ));
          }
          //3
          for (let x = ~~(this.height - ajusteEsquina/2); x >= ~~(this.height /2); x -= this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin + this.height
            ));
          }
          //4
          for (let alpha = 0; alpha >= ~~(this.height * -1.25); alpha -= this.gap) {
            const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
            points.push(this.createPoint(
              Math.sin(angle) * this.height / 2 + this.margin + this.height / 2,
              Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
            ));
          }
          //3
          for (let x =  ~~(0); x <  ~~(this.height/4); x += this.gap) {
            points.push(this.createPoint(
              this.margin+ this.height/2,
              x + this.margin
            ));
          }

          //5
          for (let alpha = ~~(this.height * -1.25); alpha <= 0; alpha += this.gap) {
            const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
            points.push(this.createPoint(
              Math.sin(angle) * this.height / 4 + this.margin + this.height/2,
              Math.cos(angle) * this.height / 4 + this.margin + this.height / 2
            ));
          }
          //6
          for (let x = ~~(this.height/2); x <  ~~(this.height*3/4); x += this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin + this.height*3/4
            ));
          }
          //7
          for (let x =  ~~(this.height*3/4); x > ~~(this.height/2) ; x -= this.gap) {
            points.push(this.createPoint(
              this.margin + this.height*3/ 4,
              x + this.margin
            ));
          }
          //8
          for (let alpha = ~~(this.height * 1.25/2); alpha <= ~~(this.height * 1.25); alpha += this.gap) {
            const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
            points.push(this.createPoint(
              Math.sin(angle) * this.height / 4 + this.margin + this.height/2,
              Math.cos(angle) * this.height / 4 + this.margin + this.height / 2
            ));
          }
          //5
          for (let x =  ~~(this.height/4); x > ~~(0) ; x -= this.gap) {
            points.push(this.createPoint(
              this.margin + this.height/2,
              x + this.margin
            ));
          }


        }


        //CUADRADITO
        else if(characterId === "liquid-button-c"){

          //1
          for (let x = ~~(0); x <  ~~(this.height + ajusteEsquina); x += this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin
            ));
          }
          //2
          for (let x =  ~~(0); x <  ~~(this.height); x += this.gap) {
            points.push(this.createPoint(
              this.margin+ this.height,
              x + this.margin
            ));
          }
          //3
          for (let x = ~~(this.height ); x >= 0; x -= this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin + this.height
            ));
          }
          //4
          for (let x =  ~~(this.height); x > ~~(ajusteEsquina) ; x -= this.gap) {
            points.push(this.createPoint(
              this.margin ,
              x + this.margin
            ));
          }

        }


        //CUADRADITO 2
        else if(characterId === "liquid-button-c2"){

          //1
          for (let x = ~~(0); x <  ~~(this.height + ajusteEsquina); x += this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin
            ));
          }
          //2
          for (let x =  ~~(0); x <  ~~(this.height); x += this.gap) {
            points.push(this.createPoint(
              this.margin+ this.height,
              x + this.margin
            ));
          }
          //3
          for (let x = ~~(this.height ); x >= 0; x -= this.gap) {
            points.push(this.createPoint(
              x + this.margin,
              this.margin + this.height
            ));
          }
          //4
          for (let x =  ~~(this.height); x > ~~(ajusteEsquina) ; x -= this.gap) {
            points.push(this.createPoint(
              this.margin ,
              x + this.margin
            ));
          }

        }
        



        //BUTTON

        // for (let x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.gap) {
        //   points.push(this.createPoint(
        //     x + this.margin,
        //     this.margin
        //   ));
        // }

        // for (let alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
        //   const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
        //   points.push(this.createPoint(
        //     Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2,
        //     Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
        //   ));
        // }

        // for (let x = this.width - ~~(this.height / 2) - 1; x >= ~~(this.height / 2); x -= this.gap) {
        //   points.push(this.createPoint(
        //     x + this.margin,
        //     this.margin + this.height
        //   ));
        // }
        
        // for (let alpha = 0; alpha <= ~~(this.height * 1.25); alpha += this.gap) {
        //   const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
        //   points.push(this.createPoint(
        //     (this.height - Math.sin(angle) * this.height / 2) + this.margin - this.height / 2,
        //     Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
        //   ));
        // }












        layer.points = points;
      }

    }
  }
  
  
  const redraw = () => {
    buttonN.liquidButton.initOrigins("liquid-button-n");
    buttonO.liquidButton.initOrigins("liquid-button-o");
    buttonV.liquidButton.initOrigins("liquid-button-v");
    buttonA.liquidButton.initOrigins("liquid-button-a");
    buttonC.liquidButton.initOrigins("liquid-button-c");
    buttonC2.liquidButton.initOrigins("liquid-button-c2");
  };
  
  const buttonN = document.getElementById('liquid-button-n');
  buttonN.liquidButton = new LiquidButton(buttonN);
  // console.log("buttonN.width");

  const buttonO = document.getElementById('liquid-button-o');
  buttonO.liquidButton = new LiquidButton(buttonO);
  
  const buttonV = document.getElementById('liquid-button-v');
  buttonV.liquidButton = new LiquidButton(buttonV);

  const buttonA = document.getElementById('liquid-button-a');
  buttonA.liquidButton = new LiquidButton(buttonA);

  const buttonC = document.getElementById('liquid-button-c');
  buttonC.liquidButton = new LiquidButton(buttonC);

  const buttonC2 = document.getElementById('liquid-button-c2');
  buttonC2.liquidButton = new LiquidButton(buttonC2);


  // const buttons = document.getElementsByClassName('liquid-button-n');
  // for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
  //   const button = buttons[buttonIndex];
  //   button.liquidButton = new LiquidButton(button);
  // }


  function resizeCharacters(heightDiv) {
    // console.log("resizeCharacters");
    // console.log(buttonN.liquidButton.height);
    buttonN.liquidButton.height = heightDiv;
    buttonO.liquidButton.height = heightDiv;
    buttonV.liquidButton.height = heightDiv;
    buttonA.liquidButton.height = heightDiv;
    buttonC.liquidButton.height = heightDiv/4;
    buttonC2.liquidButton.height = heightDiv/4;

    buttonN.liquidButton.width = heightDiv;
    buttonO.liquidButton.width = heightDiv;
    buttonV.liquidButton.width = heightDiv;
    buttonA.liquidButton.width = heightDiv;
    buttonC.liquidButton.width = heightDiv/4;
    buttonC2.liquidButton.width = heightDiv/4;

    buttonN.liquidButton.margin = heightDiv/4;
    buttonO.liquidButton.margin = heightDiv/4;
    buttonV.liquidButton.margin = heightDiv/4;
    buttonA.liquidButton.margin = heightDiv/4;
    buttonC.liquidButton.margin = heightDiv/16;
    buttonC2.liquidButton.margin = heightDiv/16;

    redraw();
  
  }
  


