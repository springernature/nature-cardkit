const layouts = require('./layouts/main');

module.exports = {
  image: {
    name: 'Image',
    type: 'image', 
    x: 0,
    y: 0,
    width: 1080,
    get height() { 
      return this.width;
    },
    src: '',
    preserveAspectRatio: 'xMinYMin', 
    draggable: true,
    opacity: 1,
    editable: {
      src: true, 
      width: {
        min: 50,
        max: 2000,
        step: 10
      },
      opacity: {
        min: 0,
        max: 1,
        step: 0.1
      }
    }
  },
  mask: {
    name: 'Image mask',
    type: 'rectangle',
    x: 0,
    y: 0,
    width: 0,
    height: 1080,
    fill: '#000000',
    opacity: 1,
    editable: {
      x: {
        min: 0,
        max: 1080,
        step: 10
      },
      y: {
        min: 0,
        max: 1080,
        step: 10
      },
      width: {
        min: 0,
        max: 1080,
        step: 10
      },
      height: {
        min: 0,
        max: 1080,
        step: 10
      },
      opacity: {
        min: 0,
        max: 1,
        step: 0.1
      },
      fill: true
    }
  },
  headline: {
    name: 'Main text',
    type: 'text',
    text: '"Welcome to the Nature\nsocial media image generator,\nplease upload an image and\ncustomise the design."',
    fontSize: 60,
    fontFamily: 'GlosaMath-Roman, Georgia, Times, \"Times New Roman\", serif',
    get lineHeight() {
      return this.fontSize * 1.2;
    },
    textAnchor: 'middle',
    smartQuotes: true,
    useAsFilename: true,
    draggable: true,
    editable: {
      text: true,
      textAnchor: true,
      fontSize: {
        min: 36,
        max: 90,
        step: 1
      },
      fill: true
    }
  },
  url: {
    name: 'url',
    type: 'text',
    text: 'bit.ly/xyxyxy',
    fontSize: 36,
    fontFamily: 'NewsGothicMTOT-Regular, Helvetica, sans-serif',
    fill: "#ffffff",
    editable: {
      text: true,
      fill: true
    }
  },
  credit: {
    name: 'credit on bottom',
    type: 'text',
    text: 'Image credit:',
    fontSize: 24,
    fontFamily: 'NewsGothicMTOT-Regular, Helvetica, sans-serif',
    editable: {
      text: true,
      fill: true,
    }
  },
  creditSide: {
    name: 'credit on side',
    type: 'text',
    text: 'Image credit:',
    fontSize: 24,
    fontFamily: 'NewsGothicMTOT-Regular, Helvetica, sans-serif',
    transform: 'rotate(90,0,0) translate(20,-40)',
    editable: {
      text: true,
      fill: true
    }
  },
  circleLogo: {
    name: 'Circle N Logo',
    type: 'path',
    opacity: 0.5,
    d: 'M90,45c0,24.9-20.1,45-45,45S0,69.9,0,45S20.1,0,45,0S90,20.1,90,45z M51.7,20.4c-10.2,0-14.6,8.5-16.5,8.5 c-0.6,0-0.8-0.8-0.8-1.5v-5.2c0-1.2-0.2-2.3-1-2.3c-0.5,0-1.2,0.5-1.6,0.9c-4.4,3.8-8.7,6.8-13.4,8.3c-0.5,0.2-0.8,0.3-0.8,0.9 c0,0.7,1,0.7,2.7,0.9c1.3,0.2,2.4,0.7,2.9,1.3c1,1.3,1,5.5,1,12.2c0,9.7-0.1,16-0.6,19.7c-0.4,2.4-1.6,2.8-4,3.4 c-1.9,0.5-3.5,0.6-3.5,1.6c0,0.7,0.5,0.8,1.9,0.8c0.8,0,9-0.4,10.9-0.4c1.9,0,9.5,0.4,10.6,0.4c1.1,0,2.5,0.1,2.5-0.9 c0-0.9-2.4-1.2-3.7-1.7c-1.6-0.7-3-1.6-3.3-3.2c-0.6-3-0.7-7.1-0.7-15.8c0-6.5,0.1-13.3,1.9-16.6c1.3-2.3,4.9-5.2,9-5.2 c4,0,6.5,0.8,8.8,3.5c2.3,2.7,2.3,8.6,2.3,18.5c0,8,0,12.1-0.4,15c-0.4,2.8-1.8,3.3-4,4.1c-1.8,0.6-4,0.5-4,1.6 c0,0.6,0.9,0.7,2.8,0.7c1.4,0,7.9-0.4,10.8-0.4c2.9,0,9,0.4,10.3,0.4c1.2,0,2.2-0.2,2.2-0.9c0-0.9-1.6-0.9-2.7-1.2 c-4.8-1.2-4.8-1-4.8-14.3c0-3.3,0.1-8,0.1-15.4c0-3.5-0.4-8.8-2.3-11.4C61.8,23.1,58,20.4,51.7,20.4z',
    editable: {
      fill: true
    }
  },
  natureLogo: {
    name: 'Nature Logo',
    type: 'path',
    x: 50,
    y: 100,
    d: 'M33.8,10c1.2,1.8,1.5,5.3,1.5,7.6c0,4.9-0.1,8.1-0.1,10.3c0,8.9,0,8.7,3.2,9.6c0.8,0.2,1.8,0.3,1.8,0.8 c0,0.5-0.6,0.6-1.5,0.6c-0.8,0-4.9-0.3-6.9-0.3s-6.3,0.3-7.2,0.3c-1.3,0-1.9-0.1-1.9-0.5c0-0.7,1.5-0.6,2.7-1 c1.5-0.5,2.4-0.9,2.7-2.8c0.3-1.9,0.3-4.7,0.3-10c0-6.6,0.1-10.5-1.5-12.3C25.3,10.5,23.7,10,21,10c-2.8,0-5.1,1.9-6,3.5 c-1.2,2.2-1.3,6.8-1.3,11.1c0,5.8,0.1,8.6,0.5,10.6c0.2,1.1,1.1,1.7,2.2,2.1c0.8,0.4,2.4,0.5,2.4,1.1c0,0.6-0.9,0.6-1.7,0.6 c-0.7,0-5.8-0.3-7.1-0.3s-6.8,0.3-7.3,0.3c-0.9,0-1.2-0.1-1.2-0.5c0-0.6,1.1-0.7,2.3-1c1.6-0.4,2.4-0.7,2.7-2.3 c0.4-2.4,0.4-6.7,0.4-13.2c0-4.5,0-7.3-0.7-8.2c-0.3-0.4-1-0.8-1.9-0.9c-1.1-0.2-1.8-0.2-1.8-0.6c0-0.4,0.2-0.5,0.5-0.6 c3.1-1,6-3,8.9-5.6c0.3-0.2,0.7-0.6,1.1-0.6c0.6,0,0.7,0.7,0.7,1.5v3.5c0,0.5,0.1,1,0.5,1c1.2,0,4.2-5.7,11-5.7 C29.6,5.8,32.1,7.6,33.8,10z M56.9,34.5c-1.7,2.4-4.8,5.2-9.3,5.2c-4.4,0-6.2-3.5-6.2-6c0-5.4,5.5-8,9.7-10.1 c6.8-3.4,6.9-2.5,6.9-9.6c0-2.1,0.1-3.7-0.4-4.6c-0.9-1.9-2.2-2.2-4-2.2c-4.8,0-6.3,4.4-7.4,7.9c-0.5,1.5-2.3,2.3-3.6,2.3 c-0.7,0-1.8-0.5-1.8-1.7c0-3.3,5.3-10.1,14.3-10.1c4.3,0,9.3,0.9,9.3,6.4c0,4.5-0.6,16.6-0.6,18.9c0,2.3,0.5,4.5,2.7,4.5 c2.3,0,3.5-1.9,4-1.9c0.3,0,0.4,0.3,0.4,0.6c0,1.3-2.8,5.3-7.4,5.3c-3.1,0-5.1-2.1-5.9-4.4c-0.1-0.3-0.2-0.5-0.4-0.5 C57,34.3,56.9,34.4,56.9,34.5z M56.4,22.8c-1,0-8.8,3.8-8.8,9.2c0,3,2.3,4.2,4,4.2c1.8,0,3.2-1,4.4-2.8c1.4-2,1.6-5.5,1.6-9.1 C57.5,23.2,57.1,22.8,56.4,22.8z M81.1,1.1c0,1.4-0.2,3.6-0.2,5c0,0.7,0.3,1.1,0.8,1.1l16-0.6c1.5-0.1,1.7,0.3,1.7,1.9 c0,3.1-0.1,6-0.2,20.5c0,3.6,1.7,6.1,6.7,6.1c2.8,0,5.6-1.3,6.7-3.4c0.8-1.5,0.9-6,0.9-9.7c0-7.8,0-11.6-0.9-12.4 c-0.7-0.7-1.9-0.8-3.2-0.9c-1.5-0.2-2.1-0.2-2.1-0.7c0-0.5,0.2-0.7,1.2-0.7L119,6.9c1.2-0.1,1.5,0.4,1.5,1.4 c0,2.7-0.5,11.4-0.5,18.3c0,4.2,0.1,7.2,0.6,8.2c0.4,0.7,1.1,0.9,2.6,0.9c0.5,0,1.7-0.1,2-0.1c0.3,0,0.5,0.2,0.5,0.5 c0,0.4-0.4,0.6-1.3,0.7c-1.4,0.3-7.1,1.7-9.5,2.7c-0.4,0.2-1.1,0.4-1.2,0.4c-0.5,0-0.7-0.4-0.7-1.2c0-1.1,0.1-2,0.1-3.4 c0-0.6-0.1-1.1-0.6-1.1c-0.8,0-4.8,5.5-11.1,5.5c-3.8,0-9.1-2.2-9.1-9.6c0-4.1,0.3-16.2,0.3-17.7c0-3-0.1-3-6-3 c-1.9,0-3.5,0.1-4.6,0.1c-1,0.1-1.2,0.2-1.3,1.9c-0.2,2.6-0.3,6.6-0.3,15.1c0,3.6-0.1,5.8,0.7,7.2c0.7,1.3,1.8,1.8,3.7,1.8 c2.4,0,5.1-1.3,5.4-1.3c0.3,0,0.4,0.2,0.4,0.4c0,0.7-4.9,5-10.1,5c-5.6,0-6.9-4.2-6.9-9.9c0-2.9,0.4-16.3,0.4-17.2 c0-0.9-0.1-2-1.6-2h-2.3c-0.3,0-0.6-0.1-0.6-0.4c0-0.7,0.6-0.7,1.7-1.5c2.5-1.8,6.2-4.7,8-7.3c0.4-0.6,0.6-1.1,1.1-1.1 S81.1,0.4,81.1,1.1z M127.2,12.8c-0.5-0.1-0.8-0.2-0.8-0.4c0-0.5,0.5-0.6,1.4-1c1.1-0.4,5.5-2.9,7.4-4.8c1-1,1.4-1.1,1.7-1.1 c0.4,0,0.7,0.3,0.7,1.2v3.7c0,0.7,0.2,0.8,0.4,0.8c1,0,3.6-5.6,8.5-5.6c2.8,0,4.6,2,4.6,4.5c0,2.5-1.9,4.1-4,4.1 c-2.8,0-3.4-2.9-5.9-2.9c-1.3,0-1.8,0.9-2.3,1.5c-1.3,1.5-1.4,5.6-1.4,11.7c0,5.7-0.1,10.1,0.6,11.2c0.8,1.3,4.1,1.8,5,2 c0.8,0.2,1.5,0.1,1.5,0.8c0,0.5-1,0.5-1.6,0.5c-0.6,0-6.1-0.3-8.5-0.3c-2.3,0-7.4,0.3-8,0.3s-1.5-0.1-1.5-0.5c0-0.6,0.9-0.7,1.7-0.9 c0.6-0.2,3-0.6,3.4-1.9c0.5-1.3,0.6-4.1,0.6-12.9C130.9,13.9,130.7,13,127.2,12.8z M175.4,17.9c-4.5,0-10.1-0.4-16.6-0.4 c-1.7,0-2.4,0.1-2.4,3.2c0,7.6,3.3,14.3,11.9,14.3c6.4,0,9.2-4.5,9.7-4.5c0.4,0,0.5,0.2,0.5,0.5c0,1.3-6.1,8.6-14.1,8.6 c-8.7,0-15.4-6.3-15.4-16.4c0-10.6,8-17.8,17.4-17.8c7,0,12.3,5.3,12.3,10.6C178.5,17.9,177.5,17.9,175.4,17.9z M165.9,7 c-5.8,0-8.7,5-8.7,7.5c0,0.9,1,1.2,4.6,1.2c4.2,0,10-0.3,10-4.1C171.8,10.2,170.2,7,165.9,7z',
    editable: {
      fill: true
    }
  }
};
