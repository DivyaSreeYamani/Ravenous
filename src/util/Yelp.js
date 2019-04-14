const apiKey = '6NXbZ0WdgLTYYJ3vaYPZOeX_YSSFYDKfsUKXdGBGgPOzO9fkftm68qIUVvlXeP6hWHbtUOJkZkHE-fAiKkp48bjITo0jsHqiLbTyAKdQ08ybIN7ejpV_yYIJFFk6XHYx';
const clientSecret = 'ndTjijHEVvAAE3-SjSE7Aw';
const Yelp = {
  searchYelp(term, location, sortBy){
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => ({
            // console.log(business);
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};
export default Yelp;
