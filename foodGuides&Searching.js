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
      { name: "Nasi Kandar", category: "Rice", area: "Penang", img: "image/istockphoto-2219608764-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/2219608764/photo/delicious-malaysian-nasi-kandar-with-fried-chicken-okra-curry-and-boiled-egg-on-rice.jpg?s=612x612&w=0&k=20&c=e6lSrLkU7Anfnc4QXbF5UVRF4rXo7umptlFJxJKMYdA=
      { name: "Apam Balik", category: "Dessert", area: "Perak", img: "image/istockphoto-1984299900-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/1984299900/photo/vendor-preparing-traditional-delicious-apam-balik-or-peanut-pancake-in-food-eatery.jpg?s=612x612&w=0&k=20&c=g82vZuJC_bm6F97loPW7PpxlQ85Mtr_ZJ8YJoHA9QPs=
      { name: "Kuih Lapis", category: "Dessert", area: "Melaka", img: "image/istockphoto-1313082219-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1313082219/photo/kuih-lapis-is-a-traditional-malay-nyonya-sweet-desert.jpg?s=612x612&w=0&k=20&c=cy5r7n-K85X27yTbO__Le1Clu5bdT_s_ZuuiKPsaU6k=
      { name: "Laksa Penang", category: "Noodles", area: "Penang", img: "image/istockphoto-1310708373-612x612.jpg", rating: 5 },//https://www.istockphoto.com/photo/assam-laksa-is-a-special-malaysian-popular-food-gm1310708373-400019440?searchscope=image%2Cfilm
      { name: "Teh Tarik", category: "Drink", area: "Kuala Lumpur", img: "image/istockphoto-1441160692-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1441160692/photo/tea-with-milk-or-popularly-known-as-teh-tarik-in-a-mug-on-the-table.jpg?s=612x612&w=0&k=20&c=gHoeeDbLzi5w4agroCw-J4vJNv5lPwFXSJEhvntRez0=
      { name: "Bandung", category: "Drink", area: "Selangor", img: "image/istockphoto-2221161531-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/2221161531/photo/fried-rice-served-with-stir-fried-vegetables-crackers-and-pickles-on-a-pink-square-plate.jpg?s=612x612&w=0&k=20&c=qYpiaVCyCYb3iKN-4wYUIUhFMoWiMW9DY_WEuYN5eYE=
      { name: "Pulut Panggang", category: "Snack", area: "Johor", img: "image/istockphoto-1470005512-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1470005512/photo/a-close-up-of-lontong-traditional-food-from-indonesia-originating-from-rice-filled-with.jpg?s=612x612&w=0&k=20&c=9p9MG8-xI-JSvOrlfdShDc_lizP9loSE37ygH7PLdk4=
      { name: "Keropok Lekor", category: "Snack", area: "Terengganu", img: "image/istockphoto-896625906-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/896625906/photo/keropok-lekor-isolated-on-wooden-background.jpg?s=612x612&w=0&k=20&c=LYSXHq0D5WWKaFNs52mX8wSMFUaxB-fMT6hc4OGdXAU=
      { name: "Tau Fu Fa", category: "Dessert", area: "Johor", img: "image/istockphoto-2165980003-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/2165980003/photo/tau-fu-fah-a-desert-made-with-soy-product-and-caramel.jpg?s=612x612&w=0&k=20&c=ln9w_ooHScL-9OYY4vANDgXYKkzUia3h0VIy2Zi96I8=
      { name: "Hainanese Chicken Rice", category: "Rice", area: "Kuala Lumpur", img: "image/istockphoto-1302272289-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/1302272289/photo/roasted-chicken-rice-from-a-hawker-stall-in-malaysia.jpg?s=612x612&w=0&k=20&c=OMo1a-4Kvx1C7AOqbA_nZyitA8HdtZsu_wNdcq6jzfg=
      { name: "Ayam Percik", category: "Rice", area: "Kelantan", img: "image/istockphoto-2219604694-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/2219604694/photo/nasi-kerabu-with-ayam-percik.jpg?s=612x612&w=0&k=20&c=8YS19SGJyDQD0CpA0xpAFO7NqeWQSDhJwpqz5ufUYO4=
      { name: "Roti Jala", category: "Snack", area: "Kelantan", img: "image/istockphoto-1214781336-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/1214781336/photo/homemade-malaysian-net-crepe-roti-jala.jpg?s=612x612&w=0&k=20&c=MR4j27t6Xe9xy1eax-7TPkwztW6WTOUhScSQxNIOvlQ=
      { name: "Mee Rebus", category: "Noodles", area: "Johor", img: "image/istockphoto-480739881-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/480739881/photo/mee-rebus-spicy-noodle-table-set.jpg?s=612x612&w=0&k=20&c=PcGvga8ntmEAAMP_E5EwPb4PXNUbWp9t96TLBIQOJL8=
      { name: "Mee Soto", category: "Noodles", area: "Johor", img: "image/istockphoto-1166957908-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1166957908/photo/prawn-and-fish-in-indonesian-spicy-soup-rice-noodle.jpg?s=612x612&w=0&k=20&c=XenLX-_ogCsvebhtc0EMzZy9WdzzbMJ_PuZwNabpKx8=
      { name: "Lontong", category: "Rice", area: "Selangor", img: "image/istockphoto-2148696403-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/2148696403/photo/tourists-are-enjoying-popular-malaysian-street-food-including-mee-soto-nasi-lemak-and-mee.jpg?s=612x612&w=0&k=20&c=QqA1ONJtj_MJGuYzNcs5Px6sWFZ-Z51dJavPU58ouIQ=
      { name: "Nasi Dagang", category: "Rice", area: "Terengganu", img: "image/istockphoto-1201106611-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/1201106611/photo/nasi-dagang-a-popular-malaysian-meal-on-the-east-coast-of-the-malaysian-peninsular.jpg?s=612x612&w=0&k=20&c=bJTD1-SKifOKe4peoRNTgtKp2tHS4J44HxmaM3o9qZI=
      { name: "Nasi Kerabu", category: "Rice", area: "Kelantan", img: "image/istockphoto-1312743970-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/179065177/photo/nasi-kerabu-or-ulam.jpg?s=612x612&w=0&k=20&c=p-qnOBKP-AgqoHYYGTmZkHhDPxDGau2NdZDmugZDhdk=
      { name: "Nasi Kuning", category: "Rice", area: "Johor", img: "image/istockphoto-2224904191-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/2224904191/photo/overhead-shot-of-nasi-kuning-dish.jpg?s=612x612&w=0&k=20&c=UQMhhnee1q7APHpg5GSBjaQwVxfI0GkyMx_6A-7-cK4=
      { name: "Popiah", category: "Snack", area: "Penang", img: "image/istockphoto-860900100-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/860900100/photo/teochew-popiah-the-chinese-fresh-vegetable-spring-roll-on-wooden-serving-block.jpg?s=612x612&w=0&k=20&c=2Ow6rjtTeN33yGlo8RWD6XOBu6Sdeukjbzh5C5AIln4=
      { name: "Kuih Ketayap", category: "Dessert", area: "Melaka", img: "image/istockphoto-2194638431-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/2194638431/photo/kuih-melayu.jpg?s=612x612&w=0&k=20&c=waHKsNTN0j8QaTD-A0-AXAbPIfE3wUhg1MXdbNPRxeY=
      { name: "Pisang Goreng", category: "Snack", area: "Kuala Lumpur", img: "image/istockphoto-628659258-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/628659258/photo/pisang-goreng-fried-bananas-in-batter-on-plate-macro-horizontal.jpg?s=612x612&w=0&k=20&c=UQyfZc6XCDNs9WtJOlvceSNBoPi_jGUIJkVX5vPSuls=
      { name: "Rendang", category: "Rice", area: "Johor", img: "image/istockphoto-2161659672-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/2161659672/photo/rendang-pork.jpg?s=612x612&w=0&k=20&c=ABVwWMxyq-e-Od6xdUsiC-NaO4vkC2dBrgfpXXy_vAY=
      { name: "Sambal Udang", category: "Rice", area: "Penang", img: "image/istockphoto-2190651052-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/2190651052/photo/fried-shrimps-also-known-as-udang-penyet-served-with-tomato-chili-sambal-fried-garlic.jpg?s=612x612&w=0&k=20&c=U2kwlAOq_hZbHKjLb0MnAob1PxAwTYp10La-1-MIMnM=
      { name: "Mee Kari", category: "Noodles", area: "Penang", img: "image/istockphoto-2209579682-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/2209579682/photo/a-bowl-of-curry-noodles.jpg?s=612x612&w=0&k=20&c=cMLuMMMQp0AoWY6NX8cl_dl0kKipAKpsOjnLHpSCJiY=
      { name: "Teh Halia", category: "Drink", area: "Selangor", img: "image/istockphoto-185880323-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/517966628/photo/ginger-coffee.jpg?s=612x612&w=0&k=20&c=ulprzcoJGaON71Wc50RLa8yjKL4x9cWFfqc6yrT63W8=
      { name: "ABC (Ais Batu Campur)", category: "Dessert", area: "Melaka", img: "image/istockphoto-2206115764-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/2206115764/photo/es-buah-or-sop-buah-is-an-indonesian-iced-fruit-cocktail-dessert-this-cold-and-sweet-beverage.jpg?s=612x612&w=0&k=20&c=QDjZsX65htxEyxIiYvVv_gzrw5l63LNpIdl_sTh5XvU=
      { name: "Kueh Tutu", category: "Dessert", area: "Johor", img: "image/istockphoto-584215334-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/584215334/photo/tutu-kueh-with-sweet-coconut-on-wooden-block.jpg?s=612x612&w=0&k=20&c=uQjbee9E5aCIRKc-Gulfy1lPzsySNxPQNErN7ncVn1s=
      { name: "Otah", category: "Snack", area: "Penang", img: "image/istockphoto-1247859466-612x612.jpg", rating: 4 },//https:https://media.istockphoto.com/id/1247859466/photo/delicious-fresh-street-food-of-southeast-asia-otah.jpg?s=612x612&w=0&k=20&c=pTgzXOvHS6PMIGNoA8PrSQZRZPQUSZxNb7ly3prwmd4=
      { name: "Curry Puff", category: "Snack", area: "Penang", img: "image/istockphoto-2160551649-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/2160551649/photo/closeup-of-flavorful-curry-chicken-filling-thai-curry-puff.jpg?s=612x612&w=0&k=20&c=on1nNJ_y3g-oXOSS-uPVnz_ch8wrwM34VHKz1mZlTks=
      { name: "Soto Ayam", category: "Soup", area: "Johor", img: "image/istockphoto-1505693807-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1505693807/photo/soto-semarang-is-a-typical-soto-dish-from-semarang-indonesia-soto-semarang-is-known-for-its.jpg?s=612x612&w=0&k=20&c=upDsV8ltF0lPOT-zJCYQVbhMaeCCw3yh7kpoW_m0AKA=
      { name: "Sup Tulang", category: "Soup", area: "Penang", img: "image/istockphoto-2154732545-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/2154732545/photo/singapore-mutton-soup-tulang.jpg?s=612x612&w=0&k=20&c=wxF1TolNqpNBRKs9tZD-0PcvBrnuh_DQD0Cx3gGshEI=
      { name: "Teh O Limau", category: "Drink", area: "Kuala Lumpur", img: "image/istockphoto-685492198-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/685492198/photo/glass-of-fresh-lime-tea-with-lemongrass-on-white-background.jpg?s=612x612&w=0&k=20&c=Zd4nHdg_MnlDvb5yMkwnm5V0HZm0xKW48d2YHnf4tFw=
      { name: "Milo Ais", category: "Drink", area: "Selangor", img: "image/istockphoto-1571060229-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/1571060229/photo/close-up-of-breakfast-with-cold-chocolate-drink-or-milo-ais.jpg?s=612x612&w=0&k=20&c=xinoBmF_cKTt9ZDe21lRMh3hq3nAck3il_v47ToInsE=
      { name: "Laksa Johor", category: "Noodles", area: "Johor", img: "image/istockphoto-2191416048-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/2191416048/photo/a-bowl-of-laksa-johor.jpg?s=612x612&w=0&k=20&c=Ky35TviV23G4aV0VoHxqJ79p2pf9PvAdIRTxx-E5PTo=
      { name: "Roti Bom", category: "Snack", area: "Melaka", img: "image/istockphoto-854361942-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/854361942/photo/crispy-roti-served-with-sugar-and-sweetened-condensed-milk.jpg?s=612x612&w=0&k=20&c=H-_huWv_8piph9Z7DljEyIJ_vLApr_QUkGnt0kjprGk=
      { name: "Kuih Lompang", category: "Dessert", area: "Kelantan", img: "image/istockphoto-2153956473-612x612.jpg", rating: 3 },//https://media.istockphoto.com/id/2153956473/photo/kue-nona-manis-traditional-cake-from-indonesia.jpg?s=612x612&w=0&k=20&c=E5sHluYUUNQ2HzFYx6ZRSkP-njfKpk0fhtQqutWa5PY=
      { name: "Ayam Goreng Berempah", category: "Rice", area: "Kuala Lumpur", img: "image/istockphoto-1142551973-612x612.jpg", rating: 5 },//https://media.istockphoto.com/id/1142551973/photo/a-plate-of-ayam-goreng-berempah.jpg?s=612x612&w=0&k=20&c=GP7Qfjy0Wqnsz2mawQxqtpDmDUw_iON2fli46eakrr8=
      { name: "Putu Piring", category: "Dessert", area: "Penang", img: "image/istockphoto-1491244721-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/1491244721/photo/kaya-toast-butter-traditional-oriental-and-vintage-kopitiam-breakfast-style.jpg?s=612x612&w=0&k=20&c=RHxS5s2UGnecvf2pSAZO3jIHSagk-Lhm5YWFRsYIZFc=
      { name: "Kuih Seri Muka", category: "Dessert", area: "Melaka", img: "image/istockphoto-887064276-612x612.jpg", rating: 4 },//https://media.istockphoto.com/id/887064276/photo/pumpkin-talam-cake.jpg?s=612x612&w=0&k=20&c=6qhv8BwXKeAAjA_rNm7EOBJvQt3zWG4-_GBVYWa_XO4=
    ];

    let isLoading = false;

    function showLoading() {
      $("#foods").html(`
        <div class="loading">
          <div class="spinner"></div>
          <p>Searching for delicious food...</p>
        </div>
      `);
    }

    function renderFoods(query = "") {
      if (isLoading) return;
      
      isLoading = true;
      showLoading();

      setTimeout(() => {
        $("#foods").empty();
        let filterRegion = $("#regionFilter").val().toLowerCase();
        let filterType = $("#typeFilter").val().toLowerCase();
        let filterRating = $("#ratingFilter").val();

        let combined = [...localFoods];

        if (query) {
          $.getJSON(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .done(function(data) {
              if (data.meals) {
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
              isLoading = false;
            })
            .fail(function() {
              displayFoods(combined, filterRegion, filterType, filterRating);
              isLoading = false;
            });
        } else {
          displayFoods(combined, filterRegion, filterType, filterRating);
          isLoading = false;
        }
      }, 500);
    }

    function displayFoods(arr, region, type, rating) {
      let filtered = arr.filter(food => {
        let matchRegion = !region || (food.area && food.area.toLowerCase().includes(region));
        let matchType = !type || (food.category && food.category.toLowerCase().includes(type));
        let matchRating = !rating || (food.rating >= parseInt(rating));
        let matchSearch = $("#searchInput").val() === "" || food.name.toLowerCase().includes($("#searchInput").val().toLowerCase());
        return matchRegion && matchType && matchRating && matchSearch;
      });

      if (filtered.length === 0) {
        $("#foods").html('<div class="no-results">No delicious matches found. Try different filters!</div>');
        return;
      }

      filtered.forEach((food, index) => {
        let card = `
          <div class="food-card" style="animation-delay: ${index * 0.1}s">
            <img src="${food.img}" alt="${food.name}" loading="lazy">
            <h3>${food.name}</h3>
            <div class="food-details">
              <span class="food-type">${food.category}</span>
              <span class="food-area">${food.area}</span>
            </div>
            <div class="rating">${food.rating}/5</div>
          </div>
        `;
        $("#foods").append(card);
      });
    }

    // Enhanced event listeners with debouncing
    let searchTimeout;
    
    $("#searchBtn").on("click", function() {
      if (!isLoading) {
        renderFoods($("#searchInput").val());
      }
    });

    $("#searchInput").on("input", function() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        if (!isLoading) {
          renderFoods($(this).val());
        }
      }, 300);
    });

    $("#searchInput").on("keypress", function(e) {
      if (e.which === 13 && !isLoading) {
        $("#searchBtn").click();
      }
    });

    $("#regionFilter, #typeFilter, #ratingFilter").on("change", function() {
      if (!isLoading) {
        renderFoods($("#searchInput").val());
      }
    });

    // Add click effects to search button
    $("#searchBtn").on("mousedown", function() {
      $(this).css("transform", "translateY(-1px) scale(0.98)");
    });

    $("#searchBtn").on("mouseup mouseleave", function() {
      $(this).css("transform", "translateY(-3px) scale(1)");
    });

    // Initialize
    $(document).ready(function() {
      renderFoods();
    });