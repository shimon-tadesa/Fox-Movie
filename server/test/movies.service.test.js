const movieServices = require('./../services/movies.service');

    test('test modal service TopMovies1,2,3 function ', async () => {
      var expectedStatus = 0;
      var data = {};

        const res = {
          status:function(x){
            expectedStatus = x;
              return {json:(y)=>{data = y;}}//my array with data
          } 
        }

       await  movieServices.getTopMovies1({},res);   
       await  movieServices.getTopMovies2({},res);   
       await  movieServices.getTopMovies3({},res); 
       
      
          

        expect(expectedStatus).toBe(200);
        expect(data.movies.length).toBe(20);
        
      });

      test('test modal service TopTvShow1,2,3 function ', async () => {
        var expectedStatus = 0;
        var data = {};
  
          const res = {
            status:function(x){
              expectedStatus = x;
                return {json:(y)=>{data = y;}}
            } 
          }
         
         await  movieServices.getTopTV1({},res);   
         await  movieServices.getTopTV2({},res);   
         await  movieServices.getTopTV3({},res);   
        
            
  
          expect(expectedStatus).toBe(200);
          expect(data.tvshow.length).toBe(20);
          
        });


      test('worning api keyy, get TopMovies1,2,3', async ()=>{
          var expectedStatus = 0;
          var data = {};

          
          const res = {
            status:function(x){
              expectedStatus = x;
                return {json:(y)=>{data = y;}}
            } 
          }
          
          movieServices.setApiKey("4435428648680428j");

          await  movieServices.getTopMovies1({},res);   
          await  movieServices.getTopMovies2({},res);  
          await  movieServices.getTopMovies3({},res);  

           expect(expectedStatus).toBe(500);

          
      });

      test('worning api keyy TopTvShow1,2,3', async ()=>{
        var expectedStatus = 0;
        var data = {};

        
        const res = {
          status:function(x){
            expectedStatus = x;
              return {json:(y)=>{data = y;}}
          } 
        }
        
        movieServices.setApiKey("4435428648680428j");

        await  movieServices.getTopTV1({},res);   
        await  movieServices.getTopTV2({},res);   
        await  movieServices.getTopTV3({},res);   

        
       
            
 
         expect(expectedStatus).toBe(500);

        
    });


