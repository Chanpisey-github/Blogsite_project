<template>
    <div class="home-page">
        <section class="intro"> 
        <h1 > Get the latest tech News</h1>
        </section>   
        <PostList :posts="loadedPost"/>
    </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
export default {
    components: {
        PostList
    },
    asyncData(content, callback){
      console.log('asyncData is excuted');
      setTimeout(() =>{
        callback(null, {
          loadedPost: [
            {id: "1", 
          title: "The First Post" ,
          previewText: "Hello world" ,
          thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"},
          {id: "2", 
          title: "The second  Post" ,
          previewText: "Hello world" ,
          thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"},
          ]
        });
      },1000);
    },
   // data(){
    //  return{
    //   loadedPost: []
    //  };
    //},
    created() {}
      
};
</script>



<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}





</style>