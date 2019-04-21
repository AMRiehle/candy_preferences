d3.csv("candy.csv", function(csv) {
    for (var i=0; i<csv.length; ++i) {
        csv[i].Age = Number(csv[i].Age);
        csv[i].Any_full_sized_candy_bar = Number(csv[i].Any_full_sized_candy_bar);
        csv[i].Butterfinger = Number(csv[i].Butterfinger);
        csv[i].Candy_Corn = Number(csv[i].Candy_Corn);
        csv[i].Chiclets = Number(csv[i].Chiclets);
        csv[i].Dots = Number(csv[i].Dots);
        csv[i].Fuzzy_Peaches = Number(csv[i].Fuzzy_Peaches);
        csv[i].Good_N_Plenty = Number(csv[i].Good_N_Plenty);
        csv[i].Gummy_Bears = Number(csv[i].Gummy_Bears);
        csv[i].Healthy_Fruit = Number(csv[i].Healthy_Fruit);
        csv[i].Heath_Bar = Number(csv[i].Heath_Bar);
        csv[i].Hersheys_Dark_Chocolate = Number(csv[i].Hersheys_Dark_Chocolate)
        csv[i].Hersheys_Kisses = Number(csv[i].Hersheys_Kisses)
        csv[i].Hersheys_Milk_Chocolate = Number(csv[i].Hersheys_Milk_Chocolate)
        csv[i].Jolly_Rancher_bad_flavor = Number(csv[i].Jolly_Rancher_bad_flavor)
        csv[i].Jolly_Ranchers_good_flavor = Number(csv[i].Jolly_Ranchers_good_flavor)
        csv[i].Junior_Mints = Number(csv[i].Junior_Mints)
        csv[i].Kit_Kat = Number(csv[i].Kit_Kat)
        csv[i].LaffyTaffy = Number(csv[i].LaffyTaffy)
        csv[i].LemonHeads = Number(csv[i].LemonHeads)
        csv[i].Licorice_black = Number(csv[i].Licorice_black)
        csv[i].Licorice_not_black = Number(csv[i].Licorice_not_black)
        csv[i].Lollipops = Number(csv[i].Lollipops)
        csv[i].Mike_and_Ike = Number(csv[i].Mike_and_Ike)
        csv[i].Milk_Duds = Number(csv[i].Milk_Duds)
        csv[i].Milky_Way = Number(csv[i].Milky_Way)
        csv[i].Mint_Kisses = Number(csv[i].Mint_Kisses)
        csv[i].Mr_Goodbar = Number(csv[i].Mr_Goodbar)
        csv[i].Nerds = Number(csv[i].Nerds)
        csv[i].Nestle_Crunch = Number(csv[i].Nestle_Crunch)
        csv[i].Peanut_M_Ms = Number(csv[i].Peanut_M_Ms)
        csv[i].Peeps = Number(csv[i].Peeps)
        csv[i].Pixy_Stix = Number(csv[i].Pixy_Stix)
        csv[i].Reeses_Peanut_Butter_Cups = Number(csv[i].Reeses_Peanut_Butter_Cups)
        csv[i].Reeses_Pieces = Number(csv[i].Reeses_Pieces)
        csv[i].Regular_M_Ms = Number(csv[i].Regular_M_Ms)
        csv[i].Rolos = Number(csv[i].Rolos)
        csv[i].Skittles = Number(csv[i].Skittles)
        csv[i].Snickers = Number(csv[i].Snickers)
        csv[i].Sourpatch_Kids = Number(csv[i].Sourpatch_Kids)
        csv[i].Starburst = Number(csv[i].Starburst)
        csv[i].Swedish_Fish = Number(csv[i].Swedish_Fish)
        csv[i].Three_Musketeers = Number(csv[i].Three_Musketeers)
        csv[i].Tic_Tacs = Number(csv[i].Tic_Tacs)
        csv[i].Toblerone = Number(csv[i].Toblerone)
        csv[i].Trail_Mix = Number(csv[i].Trail_Mix)
        csv[i].Twix = Number(csv[i].Twix)
        csv[i].Whatchamacallit_Bars = Number(csv[i].Whatchamacallit_Bars)
        csv[i].York_Peppermint_Patties = Number(csv[i].York_Peppermint_Patties)
    }

main_data = []

for (var i=0; i<csv.length; ++i) {
    main_data.push(csv[i])
}

        var Any_full_sized_candy_bar = [];
        var Butterfinger = []
        var Candy_Corn = []
        var Chiclets = []
        var Dots = []
        var Fuzzy_Peaches = []
        var Good_N_Plenty = []
        var Gummy_Bears = []
        var Healthy_Fruit = []
        var Heath_Bar = []
        var Hersheys_Dark_Chocolate = []
        var Hersheys_Kisses = []
        var Hersheys_Milk_Chocolate = []
        var Jolly_Rancher_bad_flavor = []
        var Jolly_Ranchers_good_flavor = []
        var Junior_Mints = []
        var Kit_Kat = []
        var LaffyTaffy = []
        var LemonHeads = []
        var Licorice_black = []
        var Licorice_not_black = []
        var Lollipops = []
        var Mike_and_Ike = []
        var Milk_Duds = []
        var Milky_Way = []
        var Mint_Kisses = []
        var Mr_Goodbar = []
        var Nerds = []
        var Nestle_Crunch = []
        var Peanut_M_Ms = []
        var Peeps = []
        var Pixy_Stix = []
        var Reeses_Peanut_Butter_Cups = []
        var Reeses_Pieces = []
        var Regular_M_Ms = []
        var Rolos = []
        var Skittles = []
        var Snickers = []
        var Sourpatch_Kids = []
        var Starburst = []
        var Swedish_Fish = []
        var Three_Musketeers = []
        var Tic_Tacs = []
        var Toblerone = []
        var Trail_Mix = []
        var Twix = []
        var Whatchamacallit_Bars = []
        var York_Peppermint_Patties = []

    for (var i=0; i<csv.length; ++i) {
        Any_full_sized_candy_bar.push(Number(csv[i].Any_full_sized_candy_bar));
        Butterfinger.push(Number(csv[i].Butterfinger));
        Candy_Corn.push(Number(csv[i].Candy_Corn));
        Chiclets.push(Number(csv[i].Chiclets));
        Dots.push(Number(csv[i].Dots));
        Fuzzy_Peaches.push(Number(csv[i].Fuzzy_Peaches));
        Good_N_Plenty.push(Number(csv[i].Good_N_Plenty));
        Gummy_Bears.push(Number(csv[i].Gummy_Bears));
        Healthy_Fruit.push(Number(csv[i].Healthy_Fruit));
        Heath_Bar.push(Number(csv[i].Heath_Bar));
        Hersheys_Dark_Chocolate.push(Number(csv[i].Hersheys_Dark_Chocolate))
        Hersheys_Kisses.push(Number(csv[i].Hersheys_Kisses))
        Hersheys_Milk_Chocolate.push(Number(csv[i].Hersheys_Milk_Chocolate))
        Jolly_Rancher_bad_flavor.push(Number(csv[i].Jolly_Rancher_bad_flavor))
        Jolly_Ranchers_good_flavor.push(Number(csv[i].Jolly_Ranchers_good_flavor))
        Junior_Mints.push(Number(csv[i].Junior_Mints))
        Kit_Kat.push(Number(csv[i].Kit_Kat))
        LaffyTaffy.push(Number(csv[i].LaffyTaffy))
        LemonHeads.push(Number(csv[i].LemonHeads))
        Licorice_black.push(Number(csv[i].Licorice_black))
        Licorice_not_black.push(Number(csv[i].Licorice_not_black))
        Lollipops.push(Number(csv[i].Lollipops))
        Mike_and_Ike.push(Number(csv[i].Mike_and_Ike))
        Milk_Duds.push(Number(csv[i].Milk_Duds))
        Milky_Way.push(Number(csv[i].Milky_Way))
        Mint_Kisses.push(Number(csv[i].Mint_Kisses))
        Mr_Goodbar.push(Number(csv[i].Mr_Goodbar))
        Nerds.push(Number(csv[i].Nerds))
        Nestle_Crunch.push(Number(csv[i].Nestle_Crunch))
        Peanut_M_Ms.push(Number(csv[i].Peanut_M_Ms))
        Peeps.push(Number(csv[i].Peeps))
        Pixy_Stix.push(Number(csv[i].Pixy_Stix))
        Reeses_Peanut_Butter_Cups.push(Number(csv[i].Reeses_Peanut_Butter_Cups))
        Reeses_Pieces.push(Number(csv[i].Reeses_Pieces))
        Regular_M_Ms.push(Number(csv[i].Regular_M_Ms))
        Rolos.push(Number(csv[i].Rolos))
        Skittles.push(Number(csv[i].Skittles))
        Snickers.push(Number(csv[i].Snickers))
        Sourpatch_Kids.push(Number(csv[i].Sourpatch_Kids))
        Starburst.push(Number(csv[i].Starburst))
        Swedish_Fish.push(Number(csv[i].Swedish_Fish))
        Three_Musketeers.push(Number(csv[i].Three_Musketeers))
        Tic_Tacs.push(Number(csv[i].Tic_Tacs))
        Toblerone.push(Number(csv[i].Toblerone))
        Trail_Mix.push(Number(csv[i].Trail_Mix))
        Twix.push(Number(csv[i].Twix))
        Whatchamacallit_Bars.push(Number(csv[i].Whatchamacallit_Bars))
        York_Peppermint_Patties.push(Number(csv[i].York_Peppermint_Patties))}

    candy_nest = {}
        candy_nest["Any full-sized candy bar"] = d3.mean(Any_full_sized_candy_bar);
        candy_nest["Butterfinger"] = d3.mean(Butterfinger);
        candy_nest["Candy Corn"] = d3.mean(Candy_Corn);
        candy_nest["Chiclets"] = d3.mean(Chiclets);
        candy_nest["Dots"] = d3.mean(Dots);
        candy_nest["Fuzzy Peaches"] = d3.mean(Fuzzy_Peaches);
        candy_nest["Good & Plenty"] = d3.mean(Good_N_Plenty);
        candy_nest["Gummy Bears"] = d3.mean(Gummy_Bears);
        candy_nest["Healthy Fruit"] = d3.mean(Healthy_Fruit);
        candy_nest["Heath Bar"] = d3.mean(Heath_Bar);
        candy_nest["Hershey's Dark Chocolate"] = d3.mean(Hersheys_Dark_Chocolate)
        candy_nest["Hershey's Kisses"] = d3.mean(Hersheys_Kisses)
        candy_nest["Hershey's Milk Chocolate"] = d3.mean(Hersheys_Milk_Chocolate)
        candy_nest["Jolly Rancher (bad flavor)"] = d3.mean(Jolly_Rancher_bad_flavor)
        candy_nest["Jolly Ranchers (good flavor)"] = d3.mean(Jolly_Ranchers_good_flavor)
        candy_nest["Junior Mints"] = d3.mean(Junior_Mints)
        candy_nest["Kit Kat"] = d3.mean(Kit_Kat)
        candy_nest["LaffyTaffy"] = d3.mean(LaffyTaffy)
        candy_nest["LemonHeads"] = d3.mean(LemonHeads)
        candy_nest["Licorice (black)"] = d3.mean(Licorice_black)
        candy_nest["Licorice (other)"] = d3.mean(Licorice_not_black)
        candy_nest["Lollipops"] = d3.mean(Lollipops)
        candy_nest["Mike and Ike"] = d3.mean(Mike_and_Ike)
        candy_nest["Milk Duds"] = d3.mean(Milk_Duds)
        candy_nest["Milky Way"] = d3.mean(Milky_Way)
        candy_nest["Mint Kisses"] = d3.mean(Mint_Kisses)
        candy_nest["Mr. Goodbar"] = d3.mean(Mr_Goodbar)
        candy_nest["Nerds"] = d3.mean(Nerds)
        candy_nest["Nestle Crunch"] = d3.mean(Nestle_Crunch)
        candy_nest["Peanut M&Ms"] = d3.mean(Peanut_M_Ms)
        candy_nest["Peeps"] = d3.mean(Peeps)
        candy_nest["Pixy Stix"] = d3.mean(Pixy_Stix)
        candy_nest["Reeses Peanut Butter Cups"] = d3.mean(Reeses_Peanut_Butter_Cups)
        candy_nest["Reeses Pieces"] = d3.mean(Reeses_Pieces)
        candy_nest["Regular M&Ms"] = d3.mean(Regular_M_Ms)
        candy_nest["Rolos"] = d3.mean(Rolos)
        candy_nest["Skittles"] = d3.mean(Skittles)
        candy_nest["Snickers"] = d3.mean(Snickers)
        candy_nest["Sourpatch Kids"] = d3.mean(Sourpatch_Kids)
        candy_nest["Starburst"] = d3.mean(Starburst)
        candy_nest["Swedish Fish"] = d3.mean(Swedish_Fish)
        candy_nest["Three Musketeers"] = d3.mean(Three_Musketeers)
        candy_nest["Tic Tacs"] = d3.mean(Tic_Tacs)
        candy_nest["Toblerone"] = d3.mean(Toblerone)
        candy_nest["Trail Mix"] = d3.mean(Trail_Mix)
        candy_nest["Twix"] = d3.mean(Twix)
        candy_nest["Whatchamacallit Bars"] = d3.mean(Whatchamacallit_Bars)
        candy_nest["York Peppermint Patties"] = d3.mean(York_Peppermint_Patties)

candies = Object.keys(candy_nest)
candy_means = Object.values(candy_nest)
candy_agg = []

for (var i=0; i<candies.length; ++i)
{
    candy_agg.push({"key": candies[i], "value": candy_means[i]})
}

var age_nest = d3.nest()
.key(function(d) {return d.Age_Bracket;})
.rollup(function(leaves) {return leaves.length})
.entries(csv);

gender_nest = d3.nest()
.key(function(d) {return d.Gender})
.rollup(function(leaves) {return leaves.length})
.entries(csv)

var country_priority = ["United States", "Canada", "Other"]
var country_nest = d3.nest()
.key(function(d) {return d.Country})
.sortKeys(function(a, b) {return country_priority.indexOf(a) - country_priority.indexOf(b)})
.rollup(function(leaves) {return leaves.length})
.entries(csv)

function consolidate_data(csv) {
age_nest = d3.nest()
.key(function(d) {return d.Age_Bracket;})
.rollup(function(leaves) {return leaves.length})
.entries(csv);

gender_nest = d3.nest()
.key(function(d) {return d.Gender})
.rollup(function(leaves) {return leaves.length})
.entries(csv)

var country_priority = ["United States", "Canada", "Other"]
country_nest = d3.nest()
.key(function(d) {return d.Country})
.sortKeys(function(a, b) {return country_priority.indexOf(a) - country_priority.indexOf(b)})
.rollup(function(leaves) {return leaves.length})
.entries(csv)

xScale_age.domain([0, d3.max(age_nest, function(d) {return d.value})])
xScale_gender.domain([0, d3.max(gender_nest, function(d) {return d.value})])
xScale_country.domain([0, d3.max(country_nest, function(d) {return d.value})])

x_axis_age = d3.axisBottom(xScale_age)
x_axis_gender = d3.axisBottom(xScale_gender)
x_axis_country = d3.axisBottom(xScale_country)

d3.select('.x_axis_age')
.transition()
.duration(500)
.delay(0)
.call(x_axis_age)

d3.select('.x_axis_gender')
.transition()
.duration(500)
.delay(0)
.call(x_axis_gender)

d3.select('.x_axis_country')
.transition()
.duration(500)
.delay(0)
.call(x_axis_country)

ages = []
genders = []
countries = []

for (i = 0; i < age_nest.length; i++) {
    ages.push(age_nest[i].key)
}

for (i = 0; i < gender_nest.length; i++) {
    genders.push(gender_nest[i].key)
}

for (i = 0; i < country_nest.length; i++) {
    countries.push(country_nest[i].key)
}

if (genders.includes("Male")) {
    i = genders.indexOf("Male")
    d3.select("#Male")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_gender(gender_nest[i].value))
}
else {
    d3.select("#Male")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (genders.includes("Female")) {
    i = genders.indexOf("Female")
    d3.select("#Female")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_gender(gender_nest[i].value))
}
else {
    d3.select("#Female")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (genders.includes("Unknown")) {
    i = genders.indexOf("Unknown")
    d3.select("#Unknown")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_gender(gender_nest[i].value))
}
else {
    d3.select("#Unknown")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (countries.includes("Canada")) {
    i = countries.indexOf("Canada")
    d3.select("#Canada")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_country(country_nest[i].value))
}
else {
    d3.select("#Canada")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (countries.includes("Other")) {
    i = countries.indexOf("Other")
    d3.select("#Other")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_country(country_nest[i].value))
}
else {
    d3.select("#Other")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (countries.includes("United States")) {
    i = countries.indexOf("United States")
    d3.select(".country_bar[name_val='United']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_country(country_nest[i].value))
}
else {
    d3.select(".country_bar[name_val='United']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (ages.includes("0-17")) {
    i = ages.indexOf("0-17")
    d3.select(".age_bar[age_num='1']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_age(age_nest[i].value))
}
else {
    d3.select(".age_bar[age_num='1']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (ages.includes("18-29")) {
    i = ages.indexOf("18-29")
    d3.select(".age_bar[age_num='2']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_age(age_nest[i].value))
}
else {
    d3.select(".age_bar[age_num='2']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (ages.includes("30-39")) {
    i = ages.indexOf("30-39")
    d3.select(".age_bar[age_num='3']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_age(age_nest[i].value))
}
else {
    d3.select(".age_bar[age_num='3']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (ages.includes("40-49")) {
    i = ages.indexOf("40-49")
    d3.select(".age_bar[age_num='4']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_age(age_nest[i].value))
}
else {
    d3.select(".age_bar[age_num='4']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (ages.includes("50-64")) {
    i = ages.indexOf("50-64")
    d3.select(".age_bar[age_num='5']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_age(age_nest[i].value))
}
else {
    d3.select(".age_bar[age_num='5']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

if (ages.includes("65+")) {
    i = ages.indexOf("65+")
    d3.select(".age_bar[age_num='6']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", xScale_age(age_nest[i].value))
}
else {
    d3.select(".age_bar[age_num='6']")
    .transition()
    .duration(500)
    .delay(0)
    .attr("width", 0)
}

}

  var xScale_age = d3.scaleLinear()
  .range([0, 400])
  .domain([0, d3.max(age_nest, function(d) {return d.value})])

  var xScale_gender = d3.scaleLinear()
  .range([0, 400])
  .domain([0, d3.max(gender_nest, function(d) {return d.value})])

  var xScale_country = d3.scaleLinear()
  .range([0, 400])
  .domain([0, d3.max(country_nest, function(d) {return d.value})])

  var xScale_candy = d3.scaleLinear()
  .range([10, 390])
  .domain([-1, 1])

  var yScale_age = d3.scaleBand()
  .range([65, 250])
  .domain(age_nest.map(function(d) {return d.key}))

  var yScale_gender = d3.scaleBand()
  .range([65, 175])
  .domain(gender_nest.map(function(d) {return d.key}))

  var yScale_country = d3.scaleBand()
  .range([65, 175])
  .domain(country_nest.map(function(d) {return d.key}))

  var yScale_candy = d3.scaleBand()
  .range([33, 675])
  .padding(0.1)
  .domain(candies)

    var svg_age = d3.select("#age_box");
    var svg_gender = d3.select("#gender_box");
    var svg_country = d3.select("#country_box");
    var svg_candy = d3.select("#candy_box");

    d3.select("#age-clear-box")
    .attr("fill", "rgba(0,0,0,0)")
    .on("mouseover", function() {
        d3.select(this).attr("fill", "rgba(1,0,0,0.1)")
    })
    .on("mouseout", function() {
        d3.select(this).attr("fill", "rgba(0,0,0,0")
    })
    .on("click", function() {
        ageClicked = false;
        d3.selectAll(".age_bar").attr("fill", "rgba(0,0,0,0.3)")
        d3.selectAll(".candy_bar").remove()
            if(genderClicked && countryClicked) {
                gc_data = csv.filter(function(d) {
                    return d.Gender == gender_val && d.Country == country_val
                })
                consolidate_data(gc_data)
                make_candy_bars(gc_data)
                d3.select("#num_participants").text(gc_data.length)
            }
            else if(genderClicked) {
                gender_data = csv.filter(function(d) {
                    return d.Gender == gender_val
                })
                consolidate_data(gender_data)
                make_candy_bars(gender_data)
                d3.select("#num_participants").text(gender_data.length)
            }
            else if(countryClicked) {
                country_data = csv.filter(function(d) {
                    return d.Country == country_val
                })
                consolidate_data(country_data)
                make_candy_bars(country_data)
                d3.select("#num_participants").text(country_data.length)
            }
            else {
                consolidate_data(csv)
                make_candy_bars(csv)
                d3.select("#num_participants").text(csv.length)
            }
    })

    d3.select("#gender-clear-box")
    .attr("fill", "rgba(0,0,0,0)")
    .on("mouseover", function() {
        d3.select(this).attr("fill", "rgba(0,0,0,0.1)")
    })
    .on("mouseout", function() {
        d3.select(this).attr("fill", "rgba(0,0,0,0")
    })
    .on("click", function() {
        genderClicked = false;
        d3.selectAll(".gender_bar").attr("fill", "rgba(0,0,0,0.3)")
        d3.selectAll(".candy_bar").remove()
            if(ageClicked && countryClicked) {
                ac_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Country == country_val
                })
                consolidate_data(ac_data)
                make_candy_bars(ac_data)
                d3.select("#num_participants").text(ac_data.length)
            }
            else if(ageClicked) {
                age_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val
                })
                consolidate_data(age_data)
                make_candy_bars(age_data)
                d3.select("#num_participants").text(age_data.length)
            }
            else if(countryClicked) {
                country_data = csv.filter(function(d) {
                    return d.Country == country_val
                })
                consolidate_data(country_data)
                make_candy_bars(country_data)
                d3.select("#num_participants").text(country_data.length)
            }
            else {
                consolidate_data(csv)
                make_candy_bars(csv)
                d3.select("#num_participants").text(csv.length)
            }
    })

    d3.select("#country-clear-box")
    .attr("fill", "rgba(0,0,0,0)")
    .on("mouseover", function() {
        d3.select(this).attr("fill", "rgba(0,0,0,0.1)")
    })
    .on("mouseout", function() {
        d3.select(this).attr("fill", "rgba(0,0,0,0")
    })
    .on("click", function() {
        countryClicked = false;
        d3.selectAll(".country_bar").attr("fill", "rgba(0,0,0,0.3)")
        d3.selectAll(".candy_bar").remove()
            if(ageClicked && genderClicked) {
                ag_data = csv.filter(function(d) {
                    return d.Gender == gender_val && d.Age_Bracket == age_val
                })
                consolidate_data(ag_data)
                make_candy_bars(ag_data)
                d3.select("#num_participants").text(ag_data.length)
            }
            else if(genderClicked) {
                gender_data = csv.filter(function(d) {
                    return d.Gender == gender_val
                })
                consolidate_data(gender_data)
                make_candy_bars(gender_data)
                d3.select("#num_participants").text(gender_data.length)
            }
            else if(ageClicked) {
                age_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val
                })
                consolidate_data(age_data)
                make_candy_bars(age_data)
                d3.select("#num_participants").text(age_data.length)
            }
            else {
                consolidate_data(csv)
                make_candy_bars(csv)
                d3.select("#num_participants").text(csv.length)
            }
    })

    d3.select("#candy-clear-box")
    .attr("fill", "rgba(0,0,0,0)")
    .on("mouseover", function() {
        d3.select(this).attr("fill", "rgba(0,0,0,0.1)")
    })
    .on("mouseout", function() {
        d3.select(this).attr("fill", "rgba(0,0,0,0")
    })
    .on("click", function() {
        candyClicked = false;
        d3.selectAll(".candy_bar")
        .each(function(d) {
            d3.select(this).attr("opacity", function() {
                opacity = d3.select(this).attr("opacity")
                if (opacity < 0.5) {
                    return 0.2
                }
                else {
                    return 0.5
                }
            })
        })
        d3.select("#candy_type-text").style("opacity", 0.3)
        d3.select("#overall_sentiment-text").style("opacity", 0.3)
        d3.select("#overall-like-text").style("opacity", 0.3)
        d3.select("#overall-dislike-text").style("opacity", 0.3)
        d3.select("#overall-indifferent-text").style("opacity", 0.3)
        d3.select("#candy_type").text("")
        d3.select("#overall_sentiment").text("")
        d3.select("#overall-like").text("")
        d3.select("#overall-dislike").text("")
        d3.select("#overall-indifferent").text("")
        d3.select("#young-like").text("")
        d3.select("#young-dislike").text("")
        d3.select("#twenties-like").text("")
        d3.select("#twenties-dislike").text("")
        d3.select("#thirties-like").text("")
        d3.select("#thirties-dislike").text("")
        d3.select("#forties-like").text("")
        d3.select("#forties-dislike").text("")
        d3.select("#fifties-like").text("")
        d3.select("#fifties-dislike").text("")
        d3.select("#seniors-like").text("")
        d3.select("#seniors-dislike").text("")
        d3.select("#women-like").text("")
        d3.select("#women-dislike").text("")
        d3.select("#men-like").text("")
        d3.select("#men-dislike").text("")
        d3.select("#gender_unknown-like").text("")
        d3.select("#gender_unknown_dislike").text("")
        d3.select("#americans-like").text("")
        d3.select("#americans-dislike").text("")
        d3.select("#canadians-like").text("")
        d3.select("#canadians-dislike").text("")
        d3.select("#other_countries-like").text("")
        d3.select("#other_countries-dislike").text("")
        d3.select("#young-preferences").style("opacity", 0.3)
        d3.select("#twenties-preferences").style("opacity", 0.3)
        d3.select("#thirties-preferences").style("opacity", 0.3)
        d3.select("#forties-preferences").style("opacity", 0.3)
        d3.select("#fifties-preferences").style("opacity", 0.3)
        d3.select("#seniors-preferences").style("opacity", 0.3)
        d3.select("#men-preferences").style("opacity", 0.3)
        d3.select("#women-preferences").style("opacity", 0.3)
        d3.select("#gender_unknown-preferences").style("opacity", 0.3)
        d3.select("#americans-preferences").style("opacity", 0.3)
        d3.select("#canadians-preferences").style("opacity", 0.3)
        d3.select("#other_countries-preferences").style("opacity", 0.3)
    })

    d3.select("#clear-all-box")
    .attr("fill", "rgba(0,0,0,0)")
    .on("mouseover", function() {
        d3.select(this).attr("fill", "rgba(0,0,0,0.1)")
    })
    .on("mouseout", function() {
        d3.select(this).attr("fill", "rgba(0,0,0,0")
    })
    .on("click", function() {
        ageClicked = false;
        genderClicked = false;
        countryClicked = false;
        candyClicked = false;
        d3.selectAll(".age_bar").attr("fill", "rgba(0,0,0,0.3)")
        d3.selectAll(".gender_bar").attr("fill", "rgba(0,0,0,0.3)")
        d3.selectAll(".country_bar").attr("fill", "rgba(0,0,0,0.3)")
        d3.selectAll(".candy_bar").remove()
        d3.select("#candy_type-text").style("opacity", 0.3)
        d3.select("#overall_sentiment-text").style("opacity", 0.3)
        d3.select("#overall-like-text").style("opacity", 0.3)
        d3.select("#overall-dislike-text").style("opacity", 0.3)
        d3.select("#overall-indifferent-text").style("opacity", 0.3)
        d3.select("#candy_type").text("")
        d3.select("#overall_sentiment").text("")
        d3.select("#overall-like").text("")
        d3.select("#overall-dislike").text("")
        d3.select("#overall-indifferent").text("")
        d3.select("#young-like").text("")
        d3.select("#young-dislike").text("")
        d3.select("#twenties-like").text("")
        d3.select("#twenties-dislike").text("")
        d3.select("#thirties-like").text("")
        d3.select("#thirties-dislike").text("")
        d3.select("#forties-like").text("")
        d3.select("#forties-dislike").text("")
        d3.select("#fifties-like").text("")
        d3.select("#fifties-dislike").text("")
        d3.select("#seniors-like").text("")
        d3.select("#seniors-dislike").text("")
        d3.select("#women-like").text("")
        d3.select("#women-dislike").text("")
        d3.select("#men-like").text("")
        d3.select("#men-dislike").text("")
        d3.select("#gender_unknown-like").text("")
        d3.select("#gender_unknown_dislike").text("")
        d3.select("#americans-like").text("")
        d3.select("#americans-dislike").text("")
        d3.select("#canadians-like").text("")
        d3.select("#canadians-dislike").text("")
        d3.select("#other_countries-like").text("")
        d3.select("#other_countries-dislike").text("")
        d3.select("#young-preferences").style("opacity", 0.3)
        d3.select("#twenties-preferences").style("opacity", 0.3)
        d3.select("#thirties-preferences").style("opacity", 0.3)
        d3.select("#forties-preferences").style("opacity", 0.3)
        d3.select("#fifties-preferences").style("opacity", 0.3)
        d3.select("#seniors-preferences").style("opacity", 0.3)
        d3.select("#men-preferences").style("opacity", 0.3)
        d3.select("#women-preferences").style("opacity", 0.3)
        d3.select("#gender_unknown-preferences").style("opacity", 0.3)
        d3.select("#americans-preferences").style("opacity", 0.3)
        d3.select("#canadians-preferences").style("opacity", 0.3)
        d3.select("#other_countries-preferences").style("opacity", 0.3)
        d3.select("#num_participants").text(csv.length)
        consolidate_data(csv)
        make_candy_bars(csv)
    })

    y_axis_age = d3.axisLeft(yScale_age)
    y_axis_gender = d3.axisLeft(yScale_gender)
    y_axis_country = d3.axisLeft(yScale_country)
    y_axis_candy = d3.axisLeft(yScale_candy)

    x_axis_age = d3.axisBottom(xScale_age)
    x_axis_gender = d3.axisBottom(xScale_gender)
    x_axis_country = d3.axisBottom(xScale_country)
    x_axis_candy = d3.axisBottom(xScale_candy)

    svg_age.append('g')
    .attr('class', 'y_axis_age')
    .attr('transform', 'translate(80, 0)')
    .call(y_axis_age)

    svg_age.append('g')
    .attr('class', 'x_axis_age')
    .attr('transform', 'translate(80, 250)')
    .call(x_axis_age)

    svg_gender.append('g')
    .attr('class', 'y_axis_gender')
    .attr('transform', 'translate(80, 0)')
    .call(y_axis_gender)

    svg_gender.append('g')
    .attr('class', 'x_axis_gender')
    .attr('transform', 'translate(80, 175)')
    .call(x_axis_gender)

    svg_country.append('g')
    .attr('class', 'y_axis_country')
    .attr('transform', 'translate(80, 0)')
    .call(y_axis_country)

    svg_country.append('g')
    .attr('class', 'x_axis_country')
    .attr('transform', 'translate(80, 175)')
    .call(x_axis_country)

    svg_candy.append('g')
    .attr('class', 'x_axis_candy')
    .attr('transform', 'translate(0, 705)')
    .call(x_axis_candy)

    svg_candy.append('g')
    .attr('class', 'y_axis_candy')
    .attr('transform', 'translate(200, 30)')
    .call(y_axis_candy)
    .style('font-weight', "bold")

var ageClicked = false;
var genderClicked = false
var countryClicked = false

d3.select("#num_participants").text(csv.length)

    svg_age.append('g')
    .selectAll(".age_bar")
    .data(age_nest)
    .enter()
    .append("rect")
    .attr("class", "age_bar")
    .attr("x", 80)
    .attr("y", function(d) {return yScale_age(d.key)})
    .attr("width", function(d) {return xScale_age(d.value)})
    .attr("height", function(d) {return yScale_age.bandwidth()})
    .attr("fill", "rgba(0,0,0,0.3)")
    .attr("stroke-width", 1)
    .attr("stroke", "rgba(0,0,0,1)")
    .attr("id", function(d) {return d.key})
    .attr("age_num", function(d) {
        if (d.key == "0-17") {
            return "1"
        }
        else if (d.key == "18-29") {
            return "2"
        }
        else if (d.key == "30-39") {
            return "3"
        }
        else if (d.key == "40-49") {
            return "4"
        }
        else if (d.key == "50-64") {
            return "5"
        }
        else {
            return "6"
        }
    })
    .attr("value", function(d) {return d.value})
    .on("mouseover", function() {
        if(!ageClicked) {
        split_val = d3.select(this).attr("id")
        d3.select(this).attr("fill", "rgba(0,0,0,1)")
        if(genderClicked && countryClicked) {
        new_data = gc_data.filter(function(d) {
            return d.Age_Bracket == split_val
        })
    }
        else if (genderClicked) {
        new_data = gender_data.filter(function(d) {
            return d.Age_Bracket == split_val
        })
    }
        else if (countryClicked) {
        new_data = country_data.filter(function(d) {
            return d.Age_Bracket == split_val
        })
        }
        else {
        new_data = csv.filter(function(d) {
            return d.Age_Bracket == split_val
        })
        }
        d3.selectAll(".candy_bar").remove()
        make_candy_bars(new_data)
        d3.select("#num_participants").text(new_data.length)
    }
    })
    .on("mouseout", function() {
        if(!ageClicked) {
        d3.select(this).attr("fill", "rgba(0,0,0,0.3)")
        d3.selectAll(".candy_bar").remove()
        if (genderClicked && countryClicked) {
            make_candy_bars(gc_data)
            d3.select("#num_participants").text(gc_data.length)
        }
        else if (genderClicked) {
            make_candy_bars(gender_data)
            d3.select("#num_participants").text(gender_data.length)
        }
        else if (countryClicked) {
            make_candy_bars(country_data)
            d3.select("#num_participants").text(country_data.length)
        }
        else {
            make_candy_bars(csv)
            d3.select("#num_participants").text(csv.length)
        }
    }
    })
    .on("click", function() {
        if(!ageClicked) {
            ageClicked = true;
            age_val = d3.select(this).attr("id")
            if(genderClicked && countryClicked) {
                agc_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Gender == gender_val && d.Country == country_val
                })
                consolidate_data(agc_data)
            }
            else if(genderClicked) {
                ag_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Gender == gender_val
                })
                consolidate_data(ag_data)
            }
            else if(countryClicked) {
                ac_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Country == country_val
                })
                consolidate_data(ac_data)
            }
            else {
                age_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val
                })
                consolidate_data(age_data)
            }
        }
        else {
            ageClicked = false;
            if(genderClicked && countryClicked) {
                gc_data = csv.filter(function(d) {
                    return d.Gender == gender_val && d.Country == country_val
                })
                consolidate_data(gc_data)
            }
            else if(genderClicked) {
                gender_data = csv.filter(function(d) {
                    return d.Gender == gender_val
                })
                consolidate_data(gender_data)
            }
            else if(countryClicked) {
                country_data = csv.filter(function(d) {
                    return d.Country == country_val
                })
                consolidate_data(country_data)
            }
            else {
                consolidate_data(csv)
            }
        }
    })

    svg_gender.append('g')
    .selectAll(".gender_bar")
    .data(gender_nest)
    .enter()
    .append("rect")
    .attr("class", "gender_bar")
    .attr("id", function(d) {return d.key})
    .attr("x", 80)
    .attr("y", function(d) {return yScale_gender(d.key)})
    .attr("width", function(d) {return xScale_gender(d.value)})
    .attr("height", function(d) {return yScale_gender.bandwidth()})
    .attr("fill", "rgba(0,0,0,0.3)")
    .attr("stroke-width", 1)
    .attr("stroke", "rgba(0,0,0,1)")
    .on("mouseover", function() {
        if(!genderClicked) {
        split_val = d3.select(this).attr("id")
        if (ageClicked && countryClicked) {
        new_data = ac_data.filter(function(d) {
            return d.Gender == split_val
        })
    }
        else if (ageClicked) {
        new_data = age_data.filter(function(d) {
            return d.Gender == split_val
        })
        }
        else if (countryClicked) {
        new_data = country_data.filter(function(d) {
            return d.Gender == split_val
        })
        }
        else {
        new_data = csv.filter(function(d) {
            return d.Gender == split_val
        })
        }
        d3.selectAll(".candy_bar").remove()
        make_candy_bars(new_data)
        d3.select(this).attr("fill", "rgba(0,0,0,1)")
    }
    })
    .on("mouseout", function() {
        if(!genderClicked) {
        d3.select(this).attr("fill", "rgba(0,0,0,0.3)")
        d3.selectAll(".candy_bar").remove()
        if (ageClicked && countryClicked) {
            make_candy_bars(ac_data)
        }
        else if (ageClicked) {
            make_candy_bars(age_data)
        }
        else if (countryClicked) {
            make_candy_bars(country_data)
        }
        else {
        make_candy_bars(csv)
    }
}
    })
    .on("click", function() {
        if(!genderClicked) {
            genderClicked = true;
            gender_val = d3.select(this).attr("id")
            if(ageClicked && countryClicked) {
                agc_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Gender == gender_val && d.Country == country_val
                })
                consolidate_data(agc_data)
            }
            else if(ageClicked) {
                ag_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Gender == gender_val
                })
                consolidate_data(ag_data)
            }
            else if(countryClicked) {
                gc_data = csv.filter(function(d) {
                    return d.Gender == gender_val && d.Country == country_val
                })
                consolidate_data(gc_data)
            }
            else {
                gender_data = csv.filter(function(d) {
                    return d.Gender == gender_val
                })
                consolidate_data(gender_data)
            }
        }
        else {
            genderClicked = false;
            if(ageClicked && countryClicked) {
                ac_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Country == country_val
                })
                consolidate_data(ac_data)
            }
            else if(ageClicked) {
                age_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val
                })
                consolidate_data(age_data)
            }
            else if(countryClicked) {
                country_data = csv.filter(function(d) {
                    return d.Country == country_val
                })
                consolidate_data(country_data)
            }
            else {
                consolidate_data(csv)
            }
        }
    })

    svg_country.append('g')
    .selectAll(".country_bar")
    .data(country_nest)
    .enter()
    .append("rect")
    .attr("class", "country_bar")
    .attr("id", function(d) {return d.key})
    .attr("name_val", function(d) {return d.key.split(" ")[0]})
    .attr("x", 80)
    .attr("y", function(d) {return yScale_country(d.key)})
    .attr("width", function(d) {return xScale_country(d.value)})
    .attr("height", function(d) {return yScale_country.bandwidth()})
    .attr("fill", "rgba(0,0,0,0.3)")
    .attr("stroke-width", 1)
    .attr("stroke", "rgba(0,0,0,1)")
    .on("mouseover", function() {
        if(!countryClicked) {
        d3.select(this).attr("fill", "rgba(0,0,0,1)")
        split_val = d3.select(this).attr("id")
        if (ageClicked && genderClicked) {
        new_data = ag_data.filter(function(d) {
            return d.Country == split_val
        })
    }
        else if (ageClicked) {
        new_data = age_data.filter(function(d) {
            return d.Country == split_val
        })
        }
        else if (genderClicked) {
        new_data = gender_data.filter(function(d) {
            return d.Country == split_val
        })
        }
        else {
        new_data = csv.filter(function(d) {
            return d.Country == split_val
        })
        }
        d3.selectAll(".candy_bar").remove()
        make_candy_bars(new_data)
    }
    })
    .on("mouseout", function() {
        if(!countryClicked) {
        d3.select(this).attr("fill", "rgba(0,0,0,0.3)")
        d3.selectAll(".candy_bar").remove()
        if (ageClicked && genderClicked) {
            make_candy_bars(ag_data)
        }
        else if (ageClicked) {
            make_candy_bars(age_data)
        }
        else if (genderClicked) {
            make_candy_bars(gender_data)
        }
        else {
            make_candy_bars(csv)
        }
    }
    })
    .on("click", function() {
        if(!countryClicked) {
            countryClicked = true;
            country_val = d3.select(this).attr("id")
            if(genderClicked && ageClicked) {
                agc_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Gender == gender_val && d.Country == country_val
                })
                consolidate_data(agc_data)
            }
            else if(genderClicked) {
                gc_data = csv.filter(function(d) {
                    return d.Country == country_val && d.Gender == gender_val
                })
                consolidate_data(gc_data)
            }
            else if(ageClicked) {
                ac_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Country == country_val
                })
                consolidate_data(ac_data)
            }
            else {
                country_data = csv.filter(function(d) {
                    return d.Country == country_val
                })
                consolidate_data(country_data)
            }
        }
        else {
            countryClicked = false;
            if(genderClicked && ageClicked) {
                ag_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val && d.Gender == gender_val
                })
                consolidate_data(ag_data)
            }
            else if(genderClicked) {
                gender_data = csv.filter(function(d) {
                    return d.Gender == gender_val
                })
                consolidate_data(gender_data)
            }
            else if(ageClicked) {
                age_data = csv.filter(function(d) {
                    return d.Age_Bracket == age_val
                })
                consolidate_data(age_data)
            }
            else {
                consolidate_data(csv)
            }
        }
    })

candyClicked = false;

    svg_candy.append('g')
    .selectAll(".candy_bar")
    .data(candy_agg)
    .enter()
    .append("rect")
    .attr("class", "candy_bar")
    .attr("x", function(d) { return xScale_candy(Math.min(0, d.value)); })
    .attr("y", function(d) {return yScale_candy(d.key) + 29.5})
    .attr("width", function(d) {return Math.abs(xScale_candy(d.value) - xScale_candy(0))})
    .attr("height", function(d) {return yScale_candy.bandwidth()})
    .attr("opacity", function(d) {
        if(d.value < 0) {
            return 0.2
        }
        else {
            return 0.5
        }
    })
    .attr("fill", function(d) {
        if(d.value < 0) {
            return "red"
        }
        else {
            return "green"
        }
    })
    .on("mouseover", function(d) {
        if(!candyClicked) {
        d3.select(this).attr("opacity", function(d) {
            if(d.value < 0) {
                return 0.4
            }
            else {
                return 1
            }
        })
        candy_type = d.key;
        d3.select("#candy_type").text(candy_type)
        candy_types = ["Any full-sized candy bar", "Butterfinger", "Candy Corn", "Chiclets", "Dots", "Fuzzy Peaches", "Good & Plenty", "Gummy Bears", "Healthy Fruit", "Heath Bar", "Hershey's Dark Chocolate", "Hershey's Kisses", "Hershey's Milk Chocolate", "Jolly Rancher (bad flavor)", "Jolly Ranchers (good flavor)", "Junior Mints", "Kit Kat", "LaffyTaffy", "LemonHeads", "Licorice (black)", "Licorice (other)", "Lollipops", "Mike and Ike", "Milk Duds", "Milky Way", "Mint Kisses", "Mr. Goodbar", "Nerds", "Nestle Crunch", "Peanut M&Ms", "Peeps", "Pixy Stix", "Reeses Peanut Butter Cups", "Reeses Pieces", "Regular M&Ms", "Rolos", "Skittles", "Snickers", "Sourpatch Kids", "Starburst", "Swedish Fish", "Three Musketeers", "Tic Tacs", "Toblerone", "Trail Mix", "Twix", "Whatchamacallit Bars", "York Peppermint Patties"]
        candy_codes = ["Any_full_sized_candy_bar", "Butterfinger", "Candy_Corn", "Chiclets", "Dots", "Fuzzy_Peaches", "Good_N_Plenty", "Gummy_Bears", "Healthy_Fruit", "Heath_Bar", "Hersheys_Dark_Chocolate", "Hersheys_Kisses", "Hersheys_Milk_Chocolate", "Jolly_Rancher_bad_flavor", "Jolly_Ranchers_good_flavor", "Junior_Mints", "Kit_Kat", "LaffyTaffy", "LemonHeads", "Licorice_black", "Licorice_not_black", "Lollipops", "Mike_and_Ike", "Milk_Duds", "Milky_Way", "Mint_Kisses", "Mr_Goodbar", "Nerds", "Nestle_Crunch", "Peanut_M_Ms", "Peeps", "Pixy_Stix", "Reeses_Peanut_Butter_Cups", "Reeses_Pieces", "Regular_M_Ms", "Rolos", "Skittles", "Snickers", "Sourpatch_Kids", "Starburst", "Swedish_Fish", "Three_Musketeers", "Tic_Tacs", "Toblerone", "Trail_Mix", "Twix", "Whatchamacallit_Bars", "York_Peppermint_Patties"]
        i = candy_types.indexOf(candy_type)
        chosen_candy = candy_types[i]
        chosen_candy_col = candy_codes[i]

        overall_like = csv.filter(function(d) {
            return d[chosen_candy_col] == 1
        }).length / csv.length

        overall_dislike = csv.filter(function(d) {
            return d[chosen_candy_col] == -1
        }).length / csv.length

        overall_indifferent = csv.filter(function(d) {
            return d[chosen_candy_col] == 0
        }).length / csv.length

        overall_like_rounded = d3.format(".2f")(overall_like * 100)
        overall_dislike_rounded = d3.format(".2f")(overall_dislike * 100)
        overall_indifferent_rounded = d3.format(".2f")(overall_indifferent * 100)

        d3.select("#overall-like").text(overall_like_rounded + "%")
        d3.select("#overall-dislike").text(overall_dislike_rounded + "%")
        d3.select("#overall-indifferent").text(overall_indifferent_rounded + "%")

        d3.select("#overall-like-text").style("opacity", 1)
        d3.select("#overall-dislike-text").style("opacity", 1)
        d3.select("#overall-indifferent-text").style("opacity", 1)

        if (csv.filter(function(d) {
                return d.Age_Bracket == "0-17"
            }).length > 0) {

           young_like = csv.filter(function(d) {
                return d.Age_Bracket == "0-17" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "0-17"}).length

           young_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "0-17" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "0-17"}).length

            young_like_rounded = d3.format(".2f")(young_like * 100)
            young_dislike_rounded = d3.format(".2f")(young_dislike * 100)
            young_text = d3.select("#young-like").text(young_like_rounded + "%")
            d3.select("#young-dislike").text(young_dislike_rounded + "%")
            d3.select("#young-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "18-29"
            }).length > 0) {

           twenties_like = csv.filter(function(d) {
                return d.Age_Bracket == "18-29" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "18-29"}).length

           twenties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "18-29" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "18-29"}).length

            twenties_like_rounded = d3.format(".2f")(twenties_like * 100)
            twenties_dislike_rounded = d3.format(".2f")(twenties_dislike * 100)
            d3.select("#twenties-like").text(twenties_like_rounded + "%")
            d3.select("#twenties-dislike").text(twenties_dislike_rounded + "%")
            d3.select("#twenties-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "30-39"
            }).length > 0) {

           thirties_like = csv.filter(function(d) {
                return d.Age_Bracket == "30-39" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "30-39"}).length

           thirties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "30-39" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "30-39"}).length

            thirties_like_rounded = d3.format(".2f")(thirties_like * 100)
            thirties_dislike_rounded = d3.format(".2f")(thirties_dislike * 100)
            d3.select("#thirties-like").text(thirties_like_rounded + "%")
            d3.select("#thirties-dislike").text(thirties_dislike_rounded + "%")
            d3.select("#thirties-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "40-49"
            }).length > 0) {

           forties_like = csv.filter(function(d) {
                return d.Age_Bracket == "40-49" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "40-49"}).length

           forties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "40-49" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "40-49"}).length

            forties_like_rounded = d3.format(".2f")(forties_like * 100)
            forties_dislike_rounded = d3.format(".2f")(forties_dislike * 100)
            d3.select("#forties-like").text(forties_like_rounded + "%")
            d3.select("#forties-dislike").text(forties_dislike_rounded + "%")
            d3.select("#forties-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "50-64"
            }).length > 0) {

           fifties_like = csv.filter(function(d) {
                return d.Age_Bracket == "50-64" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "50-64"}).length

           fifties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "50-64" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "50-64"}).length

            fifties_like_rounded = d3.format(".2f")(fifties_like * 100)
            fifties_dislike_rounded = d3.format(".2f")(fifties_dislike * 100)
            d3.select("#fifties-like").text(fifties_like_rounded + "%")
            d3.select("#fifties-dislike").text(fifties_dislike_rounded + "%")
            d3.select("#fifties-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "65+"
            }).length > 0) {

           seniors_like = csv.filter(function(d) {
                return d.Age_Bracket == "65+" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "65+"}).length

           seniors_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "65+" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "65+"}).length

            seniors_like_rounded = d3.format(".2f")(seniors_like * 100)
            seniors_dislike_rounded = d3.format(".2f")(seniors_dislike * 100)
            d3.select("#seniors-like").text(seniors_like_rounded + "%")
            d3.select("#seniors-dislike").text(seniors_dislike_rounded + "%")
            d3.select("#seniors-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Gender == "Male"
            }).length > 0) {

           men_like = csv.filter(function(d) {
                return d.Gender == "Male" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Gender == "Male"}).length

           men_dislike = csv.filter(function(d) {
                return d.Gender == "Male" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Gender == "Male"}).length

            men_like_rounded = d3.format(".2f")(men_like * 100)
            men_dislike_rounded = d3.format(".2f")(men_dislike * 100)
            d3.select("#men-like").text(men_like_rounded + "%")
            d3.select("#men-dislike").text(men_dislike_rounded + "%")
            d3.select("#men-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Gender == "Female"
            }).length > 0) {

           women_like = csv.filter(function(d) {
                return d.Gender == "Female" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Gender == "Female"}).length

           women_dislike = csv.filter(function(d) {
                return d.Gender == "Female" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Gender == "Female"}).length

            women_like_rounded = d3.format(".2f")(women_like * 100)
            women_dislike_rounded = d3.format(".2f")(women_dislike * 100)
            d3.select("#women-like").text(women_like_rounded + "%")
            d3.select("#women-dislike").text(women_dislike_rounded + "%")
            d3.select("#women-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Gender == "Unknown"
            }).length > 0) {

           gender_unknown_like = csv.filter(function(d) {
                return d.Gender == "Unknown" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Gender == "Unknown"}).length

           gender_unknown_dislike = csv.filter(function(d) {
                return d.Gender == "Unknown" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Gender == "Unknown"}).length

            gender_unknown_like_rounded = d3.format(".2f")(gender_unknown_like * 100)
            gender_unknown_dislike_rounded = d3.format(".2f")(gender_unknown_dislike * 100)
            d3.select("#gender_unknown-like").text(gender_unknown_like_rounded + "%")
            d3.select("#gender_unknown-dislike").text(gender_unknown_dislike_rounded + "%")
            d3.select("#gender_unknown-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Country == "United States"
            }).length > 0) {

           americans_like = csv.filter(function(d) {
                return d.Country == "United States" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Country == "United States"}).length

           americans_dislike = csv.filter(function(d) {
                return d.Country == "United States" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Country == "United States"}).length

            americans_like_rounded = d3.format(".2f")(americans_like * 100)
            americans_dislike_rounded = d3.format(".2f")(americans_dislike * 100)
            d3.select("#americans-like").text(americans_like_rounded + "%")
            d3.select("#americans-dislike").text(americans_dislike_rounded + "%")
            d3.select("#americans-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Country == "Canada"
            }).length > 0) {

           canadians_like = csv.filter(function(d) {
                return d.Country == "Canada" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Country == "Canada"}).length

           canadians_dislike = csv.filter(function(d) {
                return d.Country == "Canada" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Country == "Canada"}).length

            canadians_like_rounded = d3.format(".2f")(canadians_like * 100)
            canadians_dislike_rounded = d3.format(".2f")(canadians_dislike * 100)
            d3.select("#canadians-like").text(canadians_like_rounded + "%")
            d3.select("#canadians-dislike").text(canadians_dislike_rounded + "%")
            d3.select("#canadians-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Country == "Other"
            }).length > 0) {

           other_countries_like = csv.filter(function(d) {
                return d.Country == "Other" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Country == "Other"}).length

           other_countries_dislike = csv.filter(function(d) {
                return d.Country == "Other" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Country == "Other"}).length

            other_countries_like_rounded = d3.format(".2f")(other_countries_like * 100)
            other_countries_dislike_rounded = d3.format(".2f")(other_countries_dislike * 100)
            d3.select("#other_countries-like").text(other_countries_like_rounded + "%")
            d3.select("#other_countries-dislike").text(other_countries_dislike_rounded + "%")
            d3.select("#other_countries-preferences").style("opacity", 1)
        }

            sentiment = d.value
            rounded_sentiment = d3.format(".2f")(sentiment)
            d3.select("#overall_sentiment").text(rounded_sentiment)
            d3.select("#candy_type-text").style("opacity", 1)
            d3.select("#overall_sentiment-text").style("opacity", 1)
    }
    })
    .on("mouseout", function(d) {
        if(!candyClicked) {
        d3.select(this).attr("opacity", function(d) {
            if(d.value < 0) {
                return 0.2
            }
            else {
                return 0.5
            }
        })
        d3.select("#candy_type-text").style("opacity", 0.3)
        d3.select("#overall_sentiment-text").style("opacity", 0.3)
        d3.select("#overall-like-text").style("opacity", 0.3)
        d3.select("#overall-dislike-text").style("opacity", 0.3)
        d3.select("#overall-indifferent-text").style("opacity", 0.3)
        d3.select("#candy_type").text("")
        d3.select("#overall_sentiment").text("")
        d3.select("#overall-like").text("")
        d3.select("#overall-dislike").text("")
        d3.select("#overall-indifferent").text("")
        d3.select("#young-like").text("")
        d3.select("#young-dislike").text("")
        d3.select("#twenties-like").text("")
        d3.select("#twenties-dislike").text("")
        d3.select("#thirties-like").text("")
        d3.select("#thirties-dislike").text("")
        d3.select("#forties-like").text("")
        d3.select("#forties-dislike").text("")
        d3.select("#fifties-like").text("")
        d3.select("#fifties-dislike").text("")
        d3.select("#seniors-like").text("")
        d3.select("#seniors-dislike").text("")
        d3.select("#women-like").text("")
        d3.select("#women-dislike").text("")
        d3.select("#men-like").text("")
        d3.select("#men-dislike").text("")
        d3.select("#gender_unknown-like").text("")
        d3.select("#gender_unknown_dislike").text("")
        d3.select("#americans-like").text("")
        d3.select("#americans-dislike").text("")
        d3.select("#canadians-like").text("")
        d3.select("#canadians-dislike").text("")
        d3.select("#other_countries-like").text("")
        d3.select("#other_countries-dislike").text("")
        d3.select("#young-preferences").style("opacity", 0.3)
        d3.select("#twenties-preferences").style("opacity", 0.3)
        d3.select("#thirties-preferences").style("opacity", 0.3)
        d3.select("#forties-preferences").style("opacity", 0.3)
        d3.select("#fifties-preferences").style("opacity", 0.3)
        d3.select("#seniors-preferences").style("opacity", 0.3)
        d3.select("#men-preferences").style("opacity", 0.3)
        d3.select("#women-preferences").style("opacity", 0.3)
        d3.select("#gender_unknown-preferences").style("opacity", 0.3)
        d3.select("#americans-preferences").style("opacity", 0.3)
        d3.select("#canadians-preferences").style("opacity", 0.3)
        d3.select("#other_countries-preferences").style("opacity", 0.3)
    }
    })
.on("click", function() {
    if (!candyClicked) {
        candyClicked = true;
    }
    else {
        candyClicked = false;
    }
})

function make_candy_bars(csv) {

        var Any_full_sized_candy_bar = [];
        var Butterfinger = []
        var Candy_Corn = []
        var Chiclets = []
        var Dots = []
        var Fuzzy_Peaches = []
        var Good_N_Plenty = []
        var Gummy_Bears = []
        var Healthy_Fruit = []
        var Heath_Bar = []
        var Hersheys_Dark_Chocolate = []
        var Hersheys_Kisses = []
        var Hersheys_Milk_Chocolate = []
        var Jolly_Rancher_bad_flavor = []
        var Jolly_Ranchers_good_flavor = []
        var Junior_Mints = []
        var Kit_Kat = []
        var LaffyTaffy = []
        var LemonHeads = []
        var Licorice_black = []
        var Licorice_not_black = []
        var Lollipops = []
        var Mike_and_Ike = []
        var Milk_Duds = []
        var Milky_Way = []
        var Mint_Kisses = []
        var Mr_Goodbar = []
        var Nerds = []
        var Nestle_Crunch = []
        var Peanut_M_Ms = []
        var Peeps = []
        var Pixy_Stix = []
        var Reeses_Peanut_Butter_Cups = []
        var Reeses_Pieces = []
        var Regular_M_Ms = []
        var Rolos = []
        var Skittles = []
        var Snickers = []
        var Sourpatch_Kids = []
        var Starburst = []
        var Swedish_Fish = []
        var Three_Musketeers = []
        var Tic_Tacs = []
        var Toblerone = []
        var Trail_Mix = []
        var Twix = []
        var Whatchamacallit_Bars = []
        var York_Peppermint_Patties = []

    for (var i=0; i<csv.length; ++i) {
        Any_full_sized_candy_bar.push(Number(csv[i].Any_full_sized_candy_bar));
        Butterfinger.push(Number(csv[i].Butterfinger));
        Candy_Corn.push(Number(csv[i].Candy_Corn));
        Chiclets.push(Number(csv[i].Chiclets));
        Dots.push(Number(csv[i].Dots));
        Fuzzy_Peaches.push(Number(csv[i].Fuzzy_Peaches));
        Good_N_Plenty.push(Number(csv[i].Good_N_Plenty));
        Gummy_Bears.push(Number(csv[i].Gummy_Bears));
        Healthy_Fruit.push(Number(csv[i].Healthy_Fruit));
        Heath_Bar.push(Number(csv[i].Heath_Bar));
        Hersheys_Dark_Chocolate.push(Number(csv[i].Hersheys_Dark_Chocolate))
        Hersheys_Kisses.push(Number(csv[i].Hersheys_Kisses))
        Hersheys_Milk_Chocolate.push(Number(csv[i].Hersheys_Milk_Chocolate))
        Jolly_Rancher_bad_flavor.push(Number(csv[i].Jolly_Rancher_bad_flavor))
        Jolly_Ranchers_good_flavor.push(Number(csv[i].Jolly_Ranchers_good_flavor))
        Junior_Mints.push(Number(csv[i].Junior_Mints))
        Kit_Kat.push(Number(csv[i].Kit_Kat))
        LaffyTaffy.push(Number(csv[i].LaffyTaffy))
        LemonHeads.push(Number(csv[i].LemonHeads))
        Licorice_black.push(Number(csv[i].Licorice_black))
        Licorice_not_black.push(Number(csv[i].Licorice_not_black))
        Lollipops.push(Number(csv[i].Lollipops))
        Mike_and_Ike.push(Number(csv[i].Mike_and_Ike))
        Milk_Duds.push(Number(csv[i].Milk_Duds))
        Milky_Way.push(Number(csv[i].Milky_Way))
        Mint_Kisses.push(Number(csv[i].Mint_Kisses))
        Mr_Goodbar.push(Number(csv[i].Mr_Goodbar))
        Nerds.push(Number(csv[i].Nerds))
        Nestle_Crunch.push(Number(csv[i].Nestle_Crunch))
        Peanut_M_Ms.push(Number(csv[i].Peanut_M_Ms))
        Peeps.push(Number(csv[i].Peeps))
        Pixy_Stix.push(Number(csv[i].Pixy_Stix))
        Reeses_Peanut_Butter_Cups.push(Number(csv[i].Reeses_Peanut_Butter_Cups))
        Reeses_Pieces.push(Number(csv[i].Reeses_Pieces))
        Regular_M_Ms.push(Number(csv[i].Regular_M_Ms))
        Rolos.push(Number(csv[i].Rolos))
        Skittles.push(Number(csv[i].Skittles))
        Snickers.push(Number(csv[i].Snickers))
        Sourpatch_Kids.push(Number(csv[i].Sourpatch_Kids))
        Starburst.push(Number(csv[i].Starburst))
        Swedish_Fish.push(Number(csv[i].Swedish_Fish))
        Three_Musketeers.push(Number(csv[i].Three_Musketeers))
        Tic_Tacs.push(Number(csv[i].Tic_Tacs))
        Toblerone.push(Number(csv[i].Toblerone))
        Trail_Mix.push(Number(csv[i].Trail_Mix))
        Twix.push(Number(csv[i].Twix))
        Whatchamacallit_Bars.push(Number(csv[i].Whatchamacallit_Bars))
        York_Peppermint_Patties.push(Number(csv[i].York_Peppermint_Patties))}

    candy_nest = {}
        candy_nest["Any full-sized candy bar"] = d3.mean(Any_full_sized_candy_bar);
        candy_nest["Butterfinger"] = d3.mean(Butterfinger);
        candy_nest["Candy Corn"] = d3.mean(Candy_Corn);
        candy_nest["Chiclets"] = d3.mean(Chiclets);
        candy_nest["Dots"] = d3.mean(Dots);
        candy_nest["Fuzzy Peaches"] = d3.mean(Fuzzy_Peaches);
        candy_nest["Good & Plenty"] = d3.mean(Good_N_Plenty);
        candy_nest["Gummy Bears"] = d3.mean(Gummy_Bears);
        candy_nest["Healthy Fruit"] = d3.mean(Healthy_Fruit);
        candy_nest["Heath Bar"] = d3.mean(Heath_Bar);
        candy_nest["Hershey's Dark Chocolate"] = d3.mean(Hersheys_Dark_Chocolate)
        candy_nest["Hershey's Kisses"] = d3.mean(Hersheys_Kisses)
        candy_nest["Hershey's Milk Chocolate"] = d3.mean(Hersheys_Milk_Chocolate)
        candy_nest["Jolly Rancher (bad flavor)"] = d3.mean(Jolly_Rancher_bad_flavor)
        candy_nest["Jolly Ranchers (good flavor)"] = d3.mean(Jolly_Ranchers_good_flavor)
        candy_nest["Junior Mints"] = d3.mean(Junior_Mints)
        candy_nest["Kit Kat"] = d3.mean(Kit_Kat)
        candy_nest["LaffyTaffy"] = d3.mean(LaffyTaffy)
        candy_nest["LemonHeads"] = d3.mean(LemonHeads)
        candy_nest["Licorice (black)"] = d3.mean(Licorice_black)
        candy_nest["Licorice (other)"] = d3.mean(Licorice_not_black)
        candy_nest["Lollipops"] = d3.mean(Lollipops)
        candy_nest["Mike and Ike"] = d3.mean(Mike_and_Ike)
        candy_nest["Milk Duds"] = d3.mean(Milk_Duds)
        candy_nest["Milky Way"] = d3.mean(Milky_Way)
        candy_nest["Mint Kisses"] = d3.mean(Mint_Kisses)
        candy_nest["Mr. Goodbar"] = d3.mean(Mr_Goodbar)
        candy_nest["Nerds"] = d3.mean(Nerds)
        candy_nest["Nestle Crunch"] = d3.mean(Nestle_Crunch)
        candy_nest["Peanut M&Ms"] = d3.mean(Peanut_M_Ms)
        candy_nest["Peeps"] = d3.mean(Peeps)
        candy_nest["Pixy Stix"] = d3.mean(Pixy_Stix)
        candy_nest["Reeses Peanut Butter Cups"] = d3.mean(Reeses_Peanut_Butter_Cups)
        candy_nest["Reeses Pieces"] = d3.mean(Reeses_Pieces)
        candy_nest["Regular M&Ms"] = d3.mean(Regular_M_Ms)
        candy_nest["Rolos"] = d3.mean(Rolos)
        candy_nest["Skittles"] = d3.mean(Skittles)
        candy_nest["Snickers"] = d3.mean(Snickers)
        candy_nest["Sourpatch Kids"] = d3.mean(Sourpatch_Kids)
        candy_nest["Starburst"] = d3.mean(Starburst)
        candy_nest["Swedish Fish"] = d3.mean(Swedish_Fish)
        candy_nest["Three Musketeers"] = d3.mean(Three_Musketeers)
        candy_nest["Tic Tacs"] = d3.mean(Tic_Tacs)
        candy_nest["Toblerone"] = d3.mean(Toblerone)
        candy_nest["Trail Mix"] = d3.mean(Trail_Mix)
        candy_nest["Twix"] = d3.mean(Twix)
        candy_nest["Whatchamacallit Bars"] = d3.mean(Whatchamacallit_Bars)
        candy_nest["York Peppermint Patties"] = d3.mean(York_Peppermint_Patties)

if (candyClicked) {
    sentiment_val = candy_nest[chosen_candy]
    sentiment_val_rounded = d3.format(".2f")(sentiment_val)
    d3.select("#overall_sentiment").text(sentiment_val_rounded)

        overall_like = csv.filter(function(d) {
            return d[chosen_candy_col] == 1
        }).length / csv.length

        overall_dislike = csv.filter(function(d) {
            return d[chosen_candy_col] == -1
        }).length / csv.length

        overall_indifferent = csv.filter(function(d) {
            return d[chosen_candy_col] == 0
        }).length / csv.length

        overall_like_rounded = d3.format(".2f")(overall_like * 100)
        overall_dislike_rounded = d3.format(".2f")(overall_dislike * 100)
        overall_indifferent_rounded = d3.format(".2f")(overall_indifferent * 100)

        d3.select("#overall-like").text(overall_like_rounded + "%")
        d3.select("#overall-dislike").text(overall_dislike_rounded + "%")
        d3.select("#overall-indifferent").text(overall_indifferent_rounded + "%")

        if (csv.filter(function(d) {
                return d.Age_Bracket == "0-17"
            }).length > 0) {

           young_like = csv.filter(function(d) {
                return d.Age_Bracket == "0-17" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "0-17"}).length

           young_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "0-17" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "0-17"}).length

            young_like_rounded = d3.format(".2f")(young_like * 100)
            young_dislike_rounded = d3.format(".2f")(young_dislike * 100)
            young_text = d3.select("#young-like").text(young_like_rounded + "%")
            d3.select("#young-dislike").text(young_dislike_rounded + "%")
            d3.select("#young-preferences").style("opacity", 1)
        }
        else {
            d3.select("#young-dislike").text("N/A")
            d3.select("#young-like").text("N/A")
            d3.select("#young-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "18-29"
            }).length > 0) {

           twenties_like = csv.filter(function(d) {
                return d.Age_Bracket == "18-29" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "18-29"}).length

           twenties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "18-29" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "18-29"}).length

            twenties_like_rounded = d3.format(".2f")(twenties_like * 100)
            twenties_dislike_rounded = d3.format(".2f")(twenties_dislike * 100)
            d3.select("#twenties-like").text(twenties_like_rounded + "%")
            d3.select("#twenties-dislike").text(twenties_dislike_rounded + "%")
            d3.select("#twenties-preferences").style("opacity", 1)
        }
        else {
            d3.select("#twenties-like").text("N/A")
            d3.select("#twenties-dislike").text("N/A")
            d3.select("#twenties-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "30-39"
            }).length > 0) {

           thirties_like = csv.filter(function(d) {
                return d.Age_Bracket == "30-39" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "30-39"}).length

           thirties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "30-39" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "30-39"}).length

            thirties_like_rounded = d3.format(".2f")(thirties_like * 100)
            thirties_dislike_rounded = d3.format(".2f")(thirties_dislike * 100)
            d3.select("#thirties-like").text(thirties_like_rounded + "%")
            d3.select("#thirties-dislike").text(thirties_dislike_rounded + "%")
            d3.select("#thirties-preferences").style("opacity", 1)
        }
        else {
            d3.select("#thirties-like").text("N/A")
            d3.select("#thirties-dislike").text("N/A")
            d3.select("#thirties-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "40-49"
            }).length > 0) {

           forties_like = csv.filter(function(d) {
                return d.Age_Bracket == "40-49" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "40-49"}).length

           forties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "40-49" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "40-49"}).length

            forties_like_rounded = d3.format(".2f")(forties_like * 100)
            forties_dislike_rounded = d3.format(".2f")(forties_dislike * 100)
            d3.select("#forties-like").text(forties_like_rounded + "%")
            d3.select("#forties-dislike").text(forties_dislike_rounded + "%")
            d3.select("#forties-preferences").style("opacity", 1)
        }
        else {
            d3.select("#forties-like").text("N/A")
            d3.select("#forties-dislike").text("N/A")
            d3.select("#forties-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "50-64"
            }).length > 0) {

           fifties_like = csv.filter(function(d) {
                return d.Age_Bracket == "50-64" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "50-64"}).length

           fifties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "50-64" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "50-64"}).length

            fifties_like_rounded = d3.format(".2f")(fifties_like * 100)
            fifties_dislike_rounded = d3.format(".2f")(fifties_dislike * 100)
            d3.select("#fifties-like").text(fifties_like_rounded + "%")
            d3.select("#fifties-dislike").text(fifties_dislike_rounded + "%")
            d3.select("#fifties-preferences").style("opacity", 1)
        }
        else {
            d3.select("#fifties-like").text("N/A")
            d3.select("#fifties-dislike").text("N/A")
            d3.select("#fifties-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "65+"
            }).length > 0) {

           seniors_like = csv.filter(function(d) {
                return d.Age_Bracket == "65+" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "65+"}).length

           seniors_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "65+" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "65+"}).length

            seniors_like_rounded = d3.format(".2f")(seniors_like * 100)
            seniors_dislike_rounded = d3.format(".2f")(seniors_dislike * 100)
            d3.select("#seniors-like").text(seniors_like_rounded + "%")
            d3.select("#seniors-dislike").text(seniors_dislike_rounded + "%")
            d3.select("#seniors-preferences").style("opacity", 1)
        }
        else {
            d3.select("#seniors-like").text("N/A")
            d3.select("#seniors-dislike").text("N/A")
            d3.select("#seniors-preferences").style("opacity", 1)
        }

            if (csv.filter(function(d) {
                return d.Gender == "Male"
            }).length > 0) {

           men_like = csv.filter(function(d) {
                return d.Gender == "Male" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Gender == "Male"}).length

           men_dislike = csv.filter(function(d) {
                return d.Gender == "Male" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Gender == "Male"}).length

            men_like_rounded = d3.format(".2f")(men_like * 100)
            men_dislike_rounded = d3.format(".2f")(men_dislike * 100)
            d3.select("#men-like").text(men_like_rounded + "%")
            d3.select("#men-dislike").text(men_dislike_rounded + "%")
            d3.select("#men-preferences").style("opacity", 1)
        }
        else {
            d3.select("#men-like").text("N/A")
            d3.select("#men-dislike").text("N/A")
            d3.select("#men-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Gender == "Female"
            }).length > 0) {

           women_like = csv.filter(function(d) {
                return d.Gender == "Female" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Gender == "Female"}).length

           women_dislike = csv.filter(function(d) {
                return d.Gender == "Female" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Gender == "Female"}).length

            women_like_rounded = d3.format(".2f")(women_like * 100)
            women_dislike_rounded = d3.format(".2f")(women_dislike * 100)
            d3.select("#women-like").text(women_like_rounded + "%")
            d3.select("#women-dislike").text(women_dislike_rounded + "%")
            d3.select("#women-preferences").style("opacity", 1)
        }
        else {
            d3.select("#women-like").text("N/A")
            d3.select("#women-dislike").text("N/A")
            d3.select("#women-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Gender == "Unknown"
            }).length > 0) {

           gender_unknown_like = csv.filter(function(d) {
                return d.Gender == "Unknown" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Gender == "Unknown"}).length

           gender_unknown_dislike = csv.filter(function(d) {
                return d.Gender == "Unknown" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Gender == "Unknown"}).length

            gender_unknown_like_rounded = d3.format(".2f")(gender_unknown_like * 100)
            gender_unknown_dislike_rounded = d3.format(".2f")(gender_unknown_dislike * 100)
            d3.select("#gender_unknown-like").text(gender_unknown_like_rounded + "%")
            d3.select("#gender_unknown-dislike").text(gender_unknown_dislike_rounded + "%")
            d3.select("#gender_unknown-preferences").style("opacity", 1)
        }
        else {
            d3.select("#gender_unknown-like").text("N/A")
            d3.select("#gender_unknown-dislike").text("N/A")
            d3.select("#gender_unknown-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Country == "United States"
            }).length > 0) {

           americans_like = csv.filter(function(d) {
                return d.Country == "United States" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Country == "United States"}).length

           americans_dislike = csv.filter(function(d) {
                return d.Country == "United States" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Country == "United States"}).length

            americans_like_rounded = d3.format(".2f")(americans_like * 100)
            americans_dislike_rounded = d3.format(".2f")(americans_dislike * 100)
            d3.select("#americans-like").text(americans_like_rounded + "%")
            d3.select("#americans-dislike").text(americans_dislike_rounded + "%")
            d3.select("#americans-preferences").style("opacity", 1)
        }
        else {
            d3.select("#americans-like").text("N/A")
            d3.select("#americans-dislike").text("N/A")
            d3.select("#americans-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Country == "Canada"
            }).length > 0) {

           canadians_like = csv.filter(function(d) {
                return d.Country == "Canada" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Country == "Canada"}).length

           canadians_dislike = csv.filter(function(d) {
                return d.Country == "Canada" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Country == "Canada"}).length

            canadians_like_rounded = d3.format(".2f")(canadians_like * 100)
            canadians_dislike_rounded = d3.format(".2f")(canadians_dislike * 100)
            d3.select("#canadians-like").text(canadians_like_rounded + "%")
            d3.select("#canadians-dislike").text(canadians_dislike_rounded + "%")
            d3.select("#canadians-preferences").style("opacity", 1)
        }
        else {
            d3.select("#canadians-like").text("N/A")
            d3.select("#canadians-dislike").text("N/A")
            d3.select("#canadians-preferences").style("opacity", 0.3)
        }

            if (csv.filter(function(d) {
                return d.Country == "Other"
            }).length > 0) {

           other_countries_like = csv.filter(function(d) {
                return d.Country == "Other" && d[chosen_candy_col] == 1
            }).length / csv.filter(function(d) {
                return d.Country == "Other"}).length

           other_countries_dislike = csv.filter(function(d) {
                return d.Country == "Other" && d[chosen_candy_col] == -1
            }).length / csv.filter(function(d) {
                return d.Country == "Other"}).length

            other_countries_like_rounded = d3.format(".2f")(other_countries_like * 100)
            other_countries_dislike_rounded = d3.format(".2f")(other_countries_dislike * 100)
            d3.select("#other_countries-like").text(other_countries_like_rounded + "%")
            d3.select("#other_countries-dislike").text(other_countries_dislike_rounded + "%")
            d3.select("#other_countries-preferences").style("opacity", 1)
        }
        else {
            d3.select("#other_countries-like").text("N/A")
            d3.select("#other_countries-dislike").text("N/A")
            d3.select("#other_countries-preferences").style("opacity", 0.3)
        }

}

candies = Object.keys(candy_nest)
candy_means = Object.values(candy_nest)
candy_agg = []

for (var i=0; i<candies.length; ++i)
{
    candy_agg.push({"key": candies[i], "value": candy_means[i]})
}

  var xScale_candy = d3.scaleLinear()
  .range([10, 390])
  .domain([-1, 1])

  var yScale_candy = d3.scaleBand()
  .range([33, 675])
  .padding(0.1)
  .domain(candies)

    svg_candy.append('g')
    .selectAll(".candy_bar")
    .data(candy_agg)
    .enter()
    .append("rect")
    .attr("class", "candy_bar")
    .attr("x", function(d) { return xScale_candy(Math.min(0, d.value)); })
    .attr("y", function(d) {return yScale_candy(d.key) + 29.5})
    .attr("width", function(d) {return Math.abs(xScale_candy(d.value) - xScale_candy(0))})
    .attr("height", function(d) {return yScale_candy.bandwidth()})
    .attr("opacity", function(d) {
            if(d.value < 0) {
                if (candyClicked) {
                    if (d.key == chosen_candy) {
                        return 0.4
                    }
                    else {
                        return 0.2
                    }
                }
                else {
                return 0.2
            }
        }
            else {
                if (candyClicked) {
                    if (d.key == chosen_candy) {
                        return 1
                    }
                    else {
                        return 0.5
                    }
                }
                else {
                return 0.5
            }
            }
    })
    .attr("fill", function(d) {
        if(d.value < 0) {
            return "red"
        }
        else {
            return "green"
        }
    })
    .on("mouseover", function(d) {
        if (!candyClicked) {
        d3.select(this).attr("opacity", function(d) {
            if(d.value < 0) {
                return 0.4
            }
            else {
                return 1
            }
        })
        candy_type = d.key;
        d3.select("#candy_type").text(candy_type)
        candy_types = ["Any full-sized candy bar", "Butterfinger", "Candy Corn", "Chiclets", "Dots", "Fuzzy Peaches", "Good & Plenty", "Gummy Bears", "Healthy Fruit", "Heath Bar", "Hershey's Dark Chocolate", "Hershey's Kisses", "Hershey's Milk Chocolate", "Jolly Rancher (bad flavor)", "Jolly Ranchers (good flavor)", "Junior Mints", "Kit Kat", "LaffyTaffy", "LemonHeads", "Licorice (black)", "Licorice (other)", "Lollipops", "Mike and Ike", "Milk Duds", "Milky Way", "Mint Kisses", "Mr. Goodbar", "Nerds", "Nestle Crunch", "Peanut M&Ms", "Peeps", "Pixy Stix", "Reeses Peanut Butter Cups", "Reeses Pieces", "Regular M&Ms", "Rolos", "Skittles", "Snickers", "Sourpatch Kids", "Starburst", "Swedish Fish", "Three Musketeers", "Tic Tacs", "Toblerone", "Trail Mix", "Twix", "Whatchamacallit Bars", "York Peppermint Patties"]
        i = candy_types.indexOf(candy_type)
        candy_codes = ["Any_full_sized_candy_bar", "Butterfinger", "Candy_Corn", "Chiclets", "Dots", "Fuzzy_Peaches", "Good_N_Plenty", "Gummy_Bears", "Healthy_Fruit", "Heath_Bar", "Hersheys_Dark_Chocolate", "Hersheys_Kisses", "Hersheys_Milk_Chocolate", "Jolly_Rancher_bad_flavor", "Jolly_Ranchers_good_flavor", "Junior_Mints", "Kit_Kat", "LaffyTaffy", "LemonHeads", "Licorice_black", "Licorice_not_black", "Lollipops", "Mike_and_Ike", "Milk_Duds", "Milky_Way", "Mint_Kisses", "Mr_Goodbar", "Nerds", "Nestle_Crunch", "Peanut_M_Ms", "Peeps", "Pixy_Stix", "Reeses_Peanut_Butter_Cups", "Reeses_Pieces", "Regular_M_Ms", "Rolos", "Skittles", "Snickers", "Sourpatch_Kids", "Starburst", "Swedish_Fish", "Three_Musketeers", "Tic_Tacs", "Toblerone", "Trail_Mix", "Twix", "Whatchamacallit_Bars", "York_Peppermint_Patties"]
        chosen_candy_col = candy_codes[i]

        overall_like = csv.filter(function(d) {
            return d[chosen_candy_col] == 1
        }).length / csv.length

        overall_dislike = csv.filter(function(d) {
            return d[chosen_candy_col] == -1
        }).length / csv.length

        overall_indifferent = csv.filter(function(d) {
            return d[chosen_candy_col] == 0
        }).length / csv.length

        overall_like_rounded = d3.format(".2f")(overall_like * 100)
        overall_dislike_rounded = d3.format(".2f")(overall_dislike * 100)
        overall_indifferent_rounded = d3.format(".2f")(overall_indifferent * 100)

        d3.select("#overall-like").text(overall_like_rounded + "%")
        d3.select("#overall-dislike").text(overall_dislike_rounded + "%")
        d3.select("#overall-indifferent").text(overall_indifferent_rounded + "%")

        d3.select("#overall-like-text").style("opacity", 1)
        d3.select("#overall-dislike-text").style("opacity", 1)
        d3.select("#overall-indifferent-text").style("opacity", 1)

        if (csv.filter(function(d) {
                return d.Age_Bracket == "0-17"
            }).length > 0) {

           young_like = csv.filter(function(d) {
                return d.Age_Bracket == "0-17" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "0-17"}).length

           young_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "0-17" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "0-17"}).length

            young_like_rounded = d3.format(".2f")(young_like * 100)
            young_dislike_rounded = d3.format(".2f")(young_dislike * 100)
            young_text = d3.select("#young-like").text(young_like_rounded + "%")
            d3.select("#young-dislike").text(young_dislike_rounded + "%")
            d3.select("#young-preferences").style("opacity", 1)
        }
        else {
            d3.select("#young-dislike").text("N/A")
            d3.select("#young-like").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "18-29"
            }).length > 0) {

           twenties_like = csv.filter(function(d) {
                return d.Age_Bracket == "18-29" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "18-29"}).length

           twenties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "18-29" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "18-29"}).length

            twenties_like_rounded = d3.format(".2f")(twenties_like * 100)
            twenties_dislike_rounded = d3.format(".2f")(twenties_dislike * 100)
            d3.select("#twenties-like").text(twenties_like_rounded + "%")
            d3.select("#twenties-dislike").text(twenties_dislike_rounded + "%")
            d3.select("#twenties-preferences").style("opacity", 1)
        }
        else {
            d3.select("#twenties-like").text("N/A")
            d3.select("#twenties-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "30-39"
            }).length > 0) {

           thirties_like = csv.filter(function(d) {
                return d.Age_Bracket == "30-39" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "30-39"}).length

           thirties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "30-39" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "30-39"}).length

            thirties_like_rounded = d3.format(".2f")(thirties_like * 100)
            thirties_dislike_rounded = d3.format(".2f")(thirties_dislike * 100)
            d3.select("#thirties-like").text(thirties_like_rounded + "%")
            d3.select("#thirties-dislike").text(thirties_dislike_rounded + "%")
            d3.select("#thirties-preferences").style("opacity", 1)
        }
        else {
            d3.select("#thirties-like").text("N/A")
            d3.select("#thirties-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "40-49"
            }).length > 0) {

           forties_like = csv.filter(function(d) {
                return d.Age_Bracket == "40-49" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "40-49"}).length

           forties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "40-49" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "40-49"}).length

            forties_like_rounded = d3.format(".2f")(forties_like * 100)
            forties_dislike_rounded = d3.format(".2f")(forties_dislike * 100)
            d3.select("#forties-like").text(forties_like_rounded + "%")
            d3.select("#forties-dislike").text(forties_dislike_rounded + "%")
            d3.select("#forties-preferences").style("opacity", 1)
        }
        else {
            d3.select("#forties-like").text("N/A")
            d3.select("#forties-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "50-64"
            }).length > 0) {

           fifties_like = csv.filter(function(d) {
                return d.Age_Bracket == "50-64" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "50-64"}).length

           fifties_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "50-64" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "50-64"}).length

            fifties_like_rounded = d3.format(".2f")(fifties_like * 100)
            fifties_dislike_rounded = d3.format(".2f")(fifties_dislike * 100)
            d3.select("#fifties-like").text(fifties_like_rounded + "%")
            d3.select("#fifties-dislike").text(fifties_dislike_rounded + "%")
            d3.select("#fifties-preferences").style("opacity", 1)
        }
        else {
            d3.select("#fifties-like").text("N/A")
            d3.select("#fifties-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Age_Bracket == "65+"
            }).length > 0) {

           seniors_like = csv.filter(function(d) {
                return d.Age_Bracket == "65+" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "65+"}).length

           seniors_dislike = csv.filter(function(d) {
                return d.Age_Bracket == "65+" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Age_Bracket == "65+"}).length

            seniors_like_rounded = d3.format(".2f")(seniors_like * 100)
            seniors_dislike_rounded = d3.format(".2f")(seniors_dislike * 100)
            d3.select("#seniors-like").text(seniors_like_rounded + "%")
            d3.select("#seniors-dislike").text(seniors_dislike_rounded + "%")
            d3.select("#seniors-preferences").style("opacity", 1)
        }
        else {
            d3.select("#seniors-like").text("N/A")
            d3.select("#seniors-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Gender == "Male"
            }).length > 0) {

           men_like = csv.filter(function(d) {
                return d.Gender == "Male" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Gender == "Male"}).length

           men_dislike = csv.filter(function(d) {
                return d.Gender == "Male" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Gender == "Male"}).length

            men_like_rounded = d3.format(".2f")(men_like * 100)
            men_dislike_rounded = d3.format(".2f")(men_dislike * 100)
            d3.select("#men-like").text(men_like_rounded + "%")
            d3.select("#men-dislike").text(men_dislike_rounded + "%")
            d3.select("#men-preferences").style("opacity", 1)
        }
        else {
            d3.select("#men-like").text("N/A")
            d3.select("#men-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Gender == "Female"
            }).length > 0) {

           women_like = csv.filter(function(d) {
                return d.Gender == "Female" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Gender == "Female"}).length

           women_dislike = csv.filter(function(d) {
                return d.Gender == "Female" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Gender == "Female"}).length

            women_like_rounded = d3.format(".2f")(women_like * 100)
            women_dislike_rounded = d3.format(".2f")(women_dislike * 100)
            d3.select("#women-like").text(women_like_rounded + "%")
            d3.select("#women-dislike").text(women_dislike_rounded + "%")
            d3.select("#women-preferences").style("opacity", 1)
        }
        else {
            d3.select("#women-like").text("N/A")
            d3.select("#women-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Gender == "Unknown"
            }).length > 0) {

           gender_unknown_like = csv.filter(function(d) {
                return d.Gender == "Unknown" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Gender == "Unknown"}).length

           gender_unknown_dislike = csv.filter(function(d) {
                return d.Gender == "Unknown" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Gender == "Unknown"}).length

            gender_unknown_like_rounded = d3.format(".2f")(gender_unknown_like * 100)
            gender_unknown_dislike_rounded = d3.format(".2f")(gender_unknown_dislike * 100)
            d3.select("#gender_unknown-like").text(gender_unknown_like_rounded + "%")
            d3.select("#gender_unknown-dislike").text(gender_unknown_dislike_rounded + "%")
            d3.select("#gender_unknown-preferences").style("opacity", 1)
        }
        else {
            d3.select("#gender_unknown-like").text("N/A")
            d3.select("#gender_unknown-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Country == "United States"
            }).length > 0) {

           americans_like = csv.filter(function(d) {
                return d.Country == "United States" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Country == "United States"}).length

           americans_dislike = csv.filter(function(d) {
                return d.Country == "United States" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Country == "United States"}).length

            americans_like_rounded = d3.format(".2f")(americans_like * 100)
            americans_dislike_rounded = d3.format(".2f")(americans_dislike * 100)
            d3.select("#americans-like").text(americans_like_rounded + "%")
            d3.select("#americans-dislike").text(americans_dislike_rounded + "%")
            d3.select("#americans-preferences").style("opacity", 1)
        }
        else {
            d3.select("#americans-like").text("N/A")
            d3.select("#americans-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Country == "Canada"
            }).length > 0) {

           canadians_like = csv.filter(function(d) {
                return d.Country == "Canada" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Country == "Canada"}).length

           canadians_dislike = csv.filter(function(d) {
                return d.Country == "Canada" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Country == "Canada"}).length

            canadians_like_rounded = d3.format(".2f")(canadians_like * 100)
            canadians_dislike_rounded = d3.format(".2f")(canadians_dislike * 100)
            d3.select("#canadians-like").text(canadians_like_rounded + "%")
            d3.select("#canadians-dislike").text(canadians_dislike_rounded + "%")
            d3.select("#canadians-preferences").style("opacity", 1)
        }
        else {
            d3.select("#canadians-like").text("N/A")
            d3.select("#canadians-dislike").text("N/A")
        }

            if (csv.filter(function(d) {
                return d.Country == "Other"
            }).length > 0) {

           other_countries_like = csv.filter(function(d) {
                return d.Country == "Other" && d[candy_codes[i]] == 1
            }).length / csv.filter(function(d) {
                return d.Country == "Other"}).length

           other_countries_dislike = csv.filter(function(d) {
                return d.Country == "Other" && d[candy_codes[i]] == -1
            }).length / csv.filter(function(d) {
                return d.Country == "Other"}).length

            other_countries_like_rounded = d3.format(".2f")(other_countries_like * 100)
            other_countries_dislike_rounded = d3.format(".2f")(other_countries_dislike * 100)
            d3.select("#other_countries-like").text(other_countries_like_rounded + "%")
            d3.select("#other_countries-dislike").text(other_countries_dislike_rounded + "%")
            d3.select("#other_countries-preferences").style("opacity", 1)
        }
        else {
            d3.select("#other_countries-like").text("N/A")
            d3.select("#other_countries-dislike").text("N/A")
        }

            sentiment = d.value
            rounded_sentiment = d3.format(".2f")(sentiment)
            d3.select("#overall_sentiment").text(rounded_sentiment)
            d3.select("#candy_type-text").style("opacity", 1)
            d3.select("#overall_sentiment-text").style("opacity", 1)
        }
    })
    .on("mouseout", function(d) {
        if (!candyClicked) {
        d3.select(this).attr("opacity", function(d) {
            if(d.value < 0) {
                return 0.2
            }
            else {
                return 0.5
            }
        })
        d3.select("#candy_type-text").style("opacity", 0.3)
        d3.select("#overall_sentiment-text").style("opacity", 0.3)
        d3.select("#overall-like-text").style("opacity", 0.3)
        d3.select("#overall-dislike-text").style("opacity", 0.3)
        d3.select("#overall-indifferent-text").style("opacity", 0.3)
        d3.select("#candy_type").text("")
        d3.select("#overall_sentiment").text("")
        d3.select("#overall-like").text("")
        d3.select("#overall-dislike").text("")
        d3.select("#overall-indifferent").text("")
        d3.select("#young-like").text("")
        d3.select("#young-dislike").text("")
        d3.select("#twenties-like").text("")
        d3.select("#twenties-dislike").text("")
        d3.select("#thirties-like").text("")
        d3.select("#thirties-dislike").text("")
        d3.select("#forties-like").text("")
        d3.select("#forties-dislike").text("")
        d3.select("#fifties-like").text("")
        d3.select("#fifties-dislike").text("")
        d3.select("#seniors-like").text("")
        d3.select("#seniors-dislike").text("")
        d3.select("#women-like").text("")
        d3.select("#women-dislike").text("")
        d3.select("#men-like").text("")
        d3.select("#men-dislike").text("")
        d3.select("#gender_unknown-like").text("")
        d3.select("#gender_unknown_dislike").text("")
        d3.select("#americans-like").text("")
        d3.select("#americans-dislike").text("")
        d3.select("#canadians-like").text("")
        d3.select("#canadians-dislike").text("")
        d3.select("#other_countries-like").text("")
        d3.select("#other_countries-dislike").text("")
        d3.select("#young-preferences").style("opacity", 0.3)
        d3.select("#twenties-preferences").style("opacity", 0.3)
        d3.select("#thirties-preferences").style("opacity", 0.3)
        d3.select("#forties-preferences").style("opacity", 0.3)
        d3.select("#fifties-preferences").style("opacity", 0.3)
        d3.select("#seniors-preferences").style("opacity", 0.3)
        d3.select("#men-preferences").style("opacity", 0.3)
        d3.select("#women-preferences").style("opacity", 0.3)
        d3.select("#gender_unknown-preferences").style("opacity", 0.3)
        d3.select("#americans-preferences").style("opacity", 0.3)
        d3.select("#canadians-preferences").style("opacity", 0.3)
        d3.select("#other_countries-preferences").style("opacity", 0.3)
    }
    })
.on("click", function() {
    if (!candyClicked) {
        candyClicked = true;
    }
    else {
        candyClicked = false;
    }
})

}
})
