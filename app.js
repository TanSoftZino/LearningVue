const app = Vue.createApp({
    //data, functions
  //  template : '<h1>inside app</h1>'
   data () {
    return {
        visible : true,
        books: [
          { title : "Dragon BallZ", author : "John State", img : "assets/pic1.jpg", isFav : true },
          { title : "Random Guy", author : "Anarchy Ransom", img : "assets/pic2.jpg", isFav : false},
          { title : "That one moment", author : "Lisian Anderson", img : "assets/pic3.jpg", isFav : false },
        ],
          x : 0,
          y : 0,
        
    };
   },
   methods: {
    changeTitle(title) {
        //this.title = "Words of Radiance";
        this.title = title;
    },
    toggleVisibility(){
      this.visible = !this.visible;
    },
    handleMouseEvent(e, data){
      console.log(e);
      if(data) {
        console.log(data);
      }
    },
    handleMouseMove(e){
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    favEvent(book) {
       //let favourite 
       book.isFav = !book.isFav;
    }

   },
   computed: {
    filterBooks() {
      return this.books.filter((book)=> book.isFav);
    }

   }
});

app.mount("#app");