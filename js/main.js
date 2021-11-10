var pageTitle = new Vue(
    {
        el : '#title',

        data : {
            myTitle : 'Primi passi con VUE JS',
            titleColor : 'green'
        }
    
    }
);


var vuePhoto = new Vue(
    {
        el : '#vue-image',
        data : {
            divPos : 'dflex',
            photo : 'https://www.targetweb.it/wp-content/uploads/2019/01/vuejs.png',
            imgStyle : 'my-style'
        }
    }
)