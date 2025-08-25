// 50 local Malaysian street foods
let localFoods = [
      { name: "Nasi Lemak", category: "Rice", area: "Kuala Lumpur", img: "image/istockphoto-1488263235-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/1488263235/photo/asian-cuisine-nasi-lemak-is-a-rice-dish-infused-with-coconut-milk.jpg?s=612x612&w=0&k=20&c=bOFAGd7R3XqHrMPJ05iVT2_Yv2CqceFN12rKWec-EEk=
      { name: "Char Kway Teow", category: "Noodles", area: "Penang", img: "image/istockphoto-1035944650-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1035944650/photo/char-kway-teow.jpg?s=612x612&w=0&k=20&c=KlrvhHrke1LXIpaBlumnl4nPxZNm2Hg5YWWkNCT_pF8=
      { name: "Roti Canai", category: "Bread", area: "Kuala Lumpur", img:  "image/istockphoto-1296798691-612x612.jpg",rating: 4 }, //https:media.istockphoto.com/id/1296798691/photo/roti-parata-or-roti-canai-with-lamb-curry-sauce-popular-malaysian-breakfast.jpg?s=612x612&w=0&k=20&c=wUVGfccFRGl1xvYIKhFQB4juHjF1pPOYHht0UAiuTBU=
      { name: "Cendol", category: "Dessert", area: "Melaka", img: "image/istockphoto-1283335828-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1283335828/photo/malaysian-desserts-called-cendol-cendol-is-made-from-crushed-ice-cubes-and-a-variety-of.jpg?s=612x612&w=0&k=20&c=-TXp9RHw4L1ggRAo8lrfi3xyAvdTYcGV-HAneWATuNs=
      { name: "Hokkien Mee", category: "Noodles", area: "Kuala Lumpur", img: "image/istockphoto-1277076119-612x612.jpg",rating: 5 },//https://media.istockphoto.com/id/1277076119/photo/steamy-fried-hokkien-mee-on-table-ready-to-eat.jpg?s=612x612&w=0&k=20&c=n5S48OH8HvM7TB7SFflAkzHlzyEqdObqCMKwMCFEdbc=
      { name: "Satay", category: "Snack", area: "Selangor", img:"image/istockphoto-527547742-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/527547742/photo/chicken-satay-shot-from-top-down.jpg?s=612x612&w=0&k=20&c=m4c13gl_xKRSa0mAKrIpksOg8m0Ca5pcqOXd7Zh5DnE=
      { name: "Rojak", category: "Snack", area: "Penang", img: "image/istockphoto-1154410694-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/1154410694/photo/popular-penang-fruit-rojak-served-with-prawn-paste-and-groundnuts.jpg?s=612x612&w=0&k=20&c=WnW0aIiFZ-UX4yAy0_V0QHVZAim9wrq_8CSGAk_kgRo
      { name: "Bak Kut Teh", category: "Soup", area: "Kuala Lumpur", img:  "image/istockphoto-1304718341-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1304718341/photo/close-up-bak-kut-teh-or-chinese-malaysian-broth-in-clay-pot.jpg?s=612x612&w=0&k=20&c=EOAM-SNv94Rkp0FwZTrTKXjTsJte_DHKyVc8yohzarQ=
      { name: "Nasi Kandar", category: "Rice", area: "Penang", img: "image/cropped-Nasi-Kandar.jpg", rating: 5 },//https://magazine.foodpanda.my/blog/recipe-nasi-kandar/
      { name: "Mee Goreng Mamak", category: "Noodles", area: "Selangor", img: "image/istockphoto-1699715253-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1699715253/photo/spicy-asian-style-stir-fried-noodles-mee-goreng-mamak.jpg?s=612x612&w=0&k=20&c=sGcGAfL26E-3PYXK9I1j6oqopyt6wWdy0I5pMzv8z2E=
      { name: "Apam Balik", category: "Dessert", area: "Perak", img: "image/istockphoto-1984299900-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/1984299900/photo/vendor-preparing-traditional-delicious-apam-balik-or-peanut-pancake-in-food-eatery.jpg?s=612x612&w=0&k=20&c=g82vZuJC_bm6F97loPW7PpxlQ85Mtr_ZJ8YJoHA9QPs=
      { name: "Kuih Lapis", category: "Dessert", area: "Melaka", img: "image/istockphoto-1313082219-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1313082219/photo/kuih-lapis-is-a-traditional-malay-nyonya-sweet-desert.jpg?s=612x612&w=0&k=20&c=cy5r7n-K85X27yTbO__Le1Clu5bdT_s_ZuuiKPsaU6k=
      { name: "Laksa Penang", category: "Noodles", area: "Penang", img: "image/istockphoto-1310708373-612x612.jpg", rating: 5 },//https://www.istockphoto.com/photo/assam-laksa-is-a-special-malaysian-popular-food-gm1310708373-400019440?searchscope=image%2Cfilm
      { name: "Teh Tarik", category: "Drink", area: "Kuala Lumpur", img: "image/istockphoto-1441160692-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1441160692/photo/tea-with-milk-or-popularly-known-as-teh-tarik-in-a-mug-on-the-table.jpg?s=612x612&w=0&k=20&c=gHoeeDbLzi5w4agroCw-J4vJNv5lPwFXSJEhvntRez0=
      { name: "Bandung", category: "Drink", area: "Selangor", img: "image/bandung drink.jpg", rating: 3 },//https://www.pinterest.com/pin/225883737530482381/
      { name: "Pulut Panggang", category: "Snack", area: "Johor", img: "image/istockphoto-1470005512-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1470005512/photo/a-close-up-of-lontong-traditional-food-from-indonesia-originating-from-rice-filled-with.jpg?s=612x612&w=0&k=20&c=9p9MG8-xI-JSvOrlfdShDc_lizP9loSE37ygH7PLdk4=
      { name: "Keropok Lekor", category: "Snack", area: "Terengganu", img: "image/istockphoto-896625906-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/896625906/photo/keropok-lekor-isolated-on-wooden-background.jpg?s=612x612&w=0&k=20&c=LYSXHq0D5WWKaFNs52mX8wSMFUaxB-fMT6hc4OGdXAU=
      { name: "Tau Fu Fa", category: "Dessert", area: "Johor", img: "image/istockphoto-2165980003-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/2165980003/photo/tau-fu-fah-a-desert-made-with-soy-product-and-caramel.jpg?s=612x612&w=0&k=20&c=ln9w_ooHScL-9OYY4vANDgXYKkzUia3h0VIy2Zi96I8=
      { name: "Hainanese Chicken Rice", category: "Rice", area: "Kuala Lumpur", img: "image2/authentic-hainenese-chicken-and-rice.jpg-1.jpg", rating: 5 },//https://fity.club/lists/suggestions/Hainan-Chicken-Rice/
      { name: "Ayam Percik", category: "Rice", area: "Kelantan", img: "image/ayam percik.jpeg", rating: 4 },//https://www.sasa.co.id/kreasisasa/recipe/ayam-percik
      { name: "Roti Jala", category: "Snack", area: "Kelantan", img: "image/roti jala.jpg", rating: 3 },//https://asianinspirations.com.au/recipes/malaysian-roti-jala/
      { name: "Mee Rebus", category: "Noodles", area: "Johor", img: "image/istockphoto-480739881-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/480739881/photo/mee-rebus-spicy-noodle-table-set.jpg?s=612x612&w=0&k=20&c=PcGvga8ntmEAAMP_E5EwPb4PXNUbWp9t96TLBIQOJL8=
      { name: "Mee Soto", category: "Noodles", area: "Johor", img: "image/Mee Soto.jpg", rating: 4 },//https://www.reddit.com/r/food/comments/cdx8cp/homemade_ayam_mee_soto_malay_chicken_noodle_soup/
      { name: "Lontong", category: "Rice", area: "Selangor", img: "image/lontongsayur.jpg", rating: 3 },//https://chikahunterappetite.blogspot.com/2016/11/resepi-lontong-kuah-lodeh.html
      { name: "Nasi Dagang", category: "Rice", area: "Terengganu", img: "image/istockphoto-1201106611-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/1201106611/photo/nasi-dagang-a-popular-malaysian-meal-on-the-east-coast-of-the-malaysian-peninsular.jpg?s=612x612&w=0&k=20&c=bJTD1-SKifOKe4peoRNTgtKp2tHS4J44HxmaM3o9qZI=
      { name: "Nasi Kerabu", category: "Rice", area: "Kelantan", img: "image/istockphoto-1312743970-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/179065177/photo/nasi-kerabu-or-ulam.jpg?s=612x612&w=0&k=20&c=p-qnOBKP-AgqoHYYGTmZkHhDPxDGau2NdZDmugZDhdk=
      { name: "Nasi Kuning", category: "Rice", area: "Johor", img: "image/Nasi Kuning.jpg", rating: 3 },//https://kreasimewah.blogspot.com/2021/11/inspirasi-populer-nasi-kuning-indonesia.html
      { name: "Popiah", category: "Snack", area: "Penang", img: "image/istockphoto-860900100-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/860900100/photo/teochew-popiah-the-chinese-fresh-vegetable-spring-roll-on-wooden-serving-block.jpg?s=612x612&w=0&k=20&c=2Ow6rjtTeN33yGlo8RWD6XOBu6Sdeukjbzh5C5AIln4=
      { name: "Kuih Ketayap", category: "Dessert", area: "Melaka", img: "image/Kuih Ketayap.jpg", rating: 3 },//https://bakecookeat.blogspot.com/2011/03/kuih-ketayapdadargulung-malaysian.html
      { name: "Pisang Goreng", category: "Snack", area: "Kuala Lumpur", img: "image/istockphoto-628659258-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/628659258/photo/pisang-goreng-fried-bananas-in-batter-on-plate-macro-horizontal.jpg?s=612x612&w=0&k=20&c=UQyfZc6XCDNs9WtJOlvceSNBoPi_jGUIJkVX5vPSuls=
      { name: "Rendang", category: "Rice", area: "Johor", img: "image2/Rendang.jpg", rating: 5 },//https://icone-inc.org/product/nasirendangpadang/
      { name: "Sambal Udang", category: "Rice", area: "Penang", img: "image/Sambal Udang.jpg", rating: 4 },//https://cookpad.com/id/resep/7887911
      { name: "Mee Kari", category: "Noodles", area: "Penang", img: "image/Mee Kari.jpg", rating: 4 },//https://violetredbubbles.blogspot.com/2014/08/resepi-mee-kari-newbie.html
      { name: "Teh Halia", category: "Drink", area: "Selangor", img: "image/ginger-milk-tea-1024x768.jpg", rating: 3 },//https://www.foodliteracycenter.org/recipe/ginger-milk-tea-teh-halia
      { name: "ABC (Ais Batu Campur)", category: "Dessert", area: "Melaka", img: "image/Ais Batu Campur.jpg", rating: 4 },//https://www.pinterest.com/pin/437201076300009703/
      { name: "Kueh Tutu", category: "Dessert", area: "Johor", img: "image/Kueh Tutu.jpg", rating: 3 },//https://www.hugedomains.com/domain_profile.cfm?d=beautytints.com
      { name: "Otah", category: "Snack", area: "Penang", img: "image/Otah.jpg", rating: 4 },//https://www.hougangotah.com/menu/otah/fish-head-otah-bones-raw/
      { name: "Curry Puff", category: "Snack", area: "Penang", img: "image/Curry Puff.jpg", rating: 4 },//https://www.foodpanda.my/contents/curry-puff-recipe
      { name: "Soto Ayam", category: "Soup", area: "Johor", img: "image/Soto Ayam.jpg", rating: 4 },//https://www.perumperindo.co.id/resep-soto-ayam/
      { name: "Sup Tulang", category: "Soup", area: "Penang", img: "image/up Tulang.jpg", rating: 5 },//https://maorisaid.blogspot.com/2015/06/sup-tulang-daging.html
      { name: "Teh O Limau", category: "Drink", area: "Kuala Lumpur", img: "image/Teh O Limau.jpg", rating: 4 },//https://cookpad.com/my/recipes/13758770
      { name: "Milo Ais", category: "Drink", area: "Selangor", img: "image/Milo Ais.jpg", rating: 3 },//https://forum.lowyat.net/topic/3092686/all
      { name: "Laksa Johor", category: "Noodles", area: "Johor", img: "image/istockphoto-2191416048-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/2191416048/photo/a-bowl-of-laksa-johor.jpg?s=612x612&w=0&k=20&c=Ky35TviV23G4aV0VoHxqJ79p2pf9PvAdIRTxx-E5PTo=
      { name: "Roti Bom", category: "Snack", area: "Melaka", img: "image/Roti Bom.jpg", rating: 4 },//https://bake.co.id/roti-boom-khas-malaysia-rasanya-gurih-manis/
      { name: "Kuih Lompang", category: "Dessert", area: "Kelantan", img: "image/kuih lompang.jpg", rating: 3 },//https://iluminasi.com/bm/resepi-kuih-lompang-pandan-mudah-dan-cepat.html
      { name: "Ayam Goreng Berempah", category: "Rice", area: "Kuala Lumpur", img: "image/Ayam Goreng Berempah.jpg", rating: 5 },//https://my-resepi.com/resepi-ayam-goreng-berempah-yang-garing-dan-sedap/
      { name: "Putu Piring", category: "Dessert", area: "Penang", img: "image/Putu Pirin.jpg", rating: 4 },//https://www.reddit.com/r/MalaysianFood/comments/qog9py/putu_piring_a_traditional_rice_cake_dessert_with/
      { name: "Kuih Seri Muka", category: "Dessert", area: "Melaka", img: "image/Kuih-Seri-Muka-2048x1365.jpg", rating: 4 },//https://mylovelyrecipes.com/recipes/nyonya-cuisine/kuih-seri-muka/
    ];


// Render function
function renderFoods(query = "") {
  $("#foods").empty();
  let filterRegion = $("#regionFilter").val().toLowerCase();
  let filterType = $("#typeFilter").val().toLowerCase();
  let filterRating = $("#ratingFilter").val();

  // Combine API + local foods
  let combined = [...localFoods];

  if(query) {
    $.getJSON(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`, function(data){
      if(data.meals) {
        data.meals.forEach(meal => {
          combined.push({
            name: meal.strMeal,
            category: meal.strCategory || "Unknown",
            area: meal.strArea || "Unknown",
            img: meal.strMealThumb,
            rating: 4
          });
        });
      }
      displayFoods(combined, filterRegion, filterType, filterRating);
    });
  } else {
    displayFoods(combined, filterRegion, filterType, filterRating);
  }
}

function displayFoods(arr, region, type, rating){
  let filtered = arr.filter(food => {
    let matchRegion = !region || (food.area && food.area.toLowerCase().includes(region));
    let matchType = !type || (food.category && food.category.toLowerCase().includes(type));
    let matchRating = !rating || (food.rating >= parseInt(rating));
    let matchSearch = $("#searchInput").val() === "" || food.name.toLowerCase().includes($("#searchInput").val().toLowerCase());
    return matchRegion && matchType && matchRating && matchSearch;
  });

  if(filtered.length === 0) $("#foods").html("<p>No results found.</p>");
  filtered.forEach(food => {
    let card = `<div class="food-card">
      <img src="${food.img}" alt="${food.name}">
      <h3>${food.name}</h3>
      <p class="food-type">Category: ${food.category}</p>
      <p class="food-area">Region: ${food.area}</p>
      <div class="rating">⭐ ${food.rating}/5</div>
    </div>`;
    $("#foods").append(card);
  });
}

// Event listeners
$("#searchBtn").on("click", function(){ renderFoods($("#searchInput").val()); });
$("#searchInput").on("keypress", function(e){ if(e.which===13) $("#searchBtn").click(); });
$("#regionFilter, #typeFilter, #ratingFilter").on("change", function(){ renderFoods($("#searchInput").val()); });

$(document).ready(function(){ renderFoods(); });
