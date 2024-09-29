const countryList = [
  { country: "Afghanistan", countryCode: "af" },
  { country: "Albania", countryCode: "al" },
  { country: "Algeria", countryCode: "dz" },
  //{ country: "Andorra", countryCode: "ad" },
  { country: "Angola", countryCode: "ao" },
  { country: "Antigua and Barbuda", countryCode: "ag" },
  { country: "Argentina", countryCode: "ar" },
  { country: "Armenia", countryCode: "am" },
  { country: "Australia", countryCode: "au" },
  { country: "Austria", countryCode: "at" },
  { country: "Azerbaijan", countryCode: "az" },
  { country: "Bahamas", countryCode: "bs" },
  { country: "Bahrain", countryCode: "bh" },
  { country: "Bangladesh", countryCode: "bd" },
  { country: "Barbados", countryCode: "bb" },
  { country: "Belarus", countryCode: "by" },
  { country: "Belgium", countryCode: "be" },
  { country: "Belize", countryCode: "bz" },
  { country: "Benin", countryCode: "bj" },
  { country: "Bhutan", countryCode: "bt" },
  { country: "Bolivia", countryCode: "bo" },
  { country: "Bosnia and Herzegovina", countryCode: "ba" },
  { country: "Botswana", countryCode: "bw" },
  { country: "Brazil", countryCode: "br" },
  { country: "Brunei", countryCode: "bn" },
  { country: "Bulgaria", countryCode: "bg" },
  { country: "Burkina Faso", countryCode: "bf" },
  { country: "Burundi", countryCode: "bi" },
  { country: "Cabo Verde", countryCode: "cv" },
  { country: "Cambodia", countryCode: "kh" },
  { country: "Cameroon", countryCode: "cm" },
  { country: "Canada", countryCode: "ca" },
  { country: "Central African Republic", countryCode: "cf" },
  { country: "Chad", countryCode: "td" },
  { country: "Chile", countryCode: "cl" },
  { country: "China", countryCode: "cn" },
  { country: "Colombia", countryCode: "co" },
  { country: "Comoros", countryCode: "km" },
  { country: "Democratic Republic of the Congo", countryCode: "cd" },
  { country: "Republic of the Congo", countryCode: "cg" },
  { country: "Costa Rica", countryCode: "cr" },
  { country: "Côte d'Ivoire", countryCode: "ci" },
  { country: "Croatia", countryCode: "hr" },
  { country: "Cuba", countryCode: "cu" },
  { country: "Cyprus", countryCode: "cy" },
  { country: "Czech Republic", countryCode: "cz" },
  { country: "Denmark", countryCode: "dk" },
  { country: "Djibouti", countryCode: "dj" },
  //{ country: "Dominica", countryCode: "dm" },
  { country: "Dominican Republic", countryCode: "do" },
  { country: "East Timor", countryCode: "tl" },
  { country: "Ecuador", countryCode: "ec" },
  { country: "Egypt", countryCode: "eg" },
  { country: "El Salvador", countryCode: "sv" },
  { country: "Equatorial Guinea", countryCode: "gq" },
  { country: "Eritrea", countryCode: "er" },
  { country: "Estonia", countryCode: "ee" },
  { country: "Eswatini", countryCode: "sz" },
  { country: "Ethiopia", countryCode: "et" },
  { country: "Fiji", countryCode: "fj" },
  { country: "Finland", countryCode: "fi" },
  { country: "France", countryCode: "fr" },
  { country: "Gabon", countryCode: "ga" },
  { country: "Gambia", countryCode: "gm" },
  { country: "Georgia", countryCode: "ge" },
  { country: "Germany", countryCode: "de" },
  { country: "Ghana", countryCode: "gh" },
  { country: "Greece", countryCode: "gr" },
  //{ country: "Grenada", countryCode: "gd" },
  { country: "Guatemala", countryCode: "gt" },
  { country: "Guinea", countryCode: "gn" },
  { country: "Guinea-Bissau", countryCode: "gw" },
  { country: "Guyana", countryCode: "gy" },
  { country: "Haiti", countryCode: "ht" },
  { country: "Honduras", countryCode: "hn" },
  { country: "Hungary", countryCode: "hu" },
  { country: "Iceland", countryCode: "is" },
  { country: "India", countryCode: "in" },
  { country: "Indonesia", countryCode: "id" },
  { country: "Iran", countryCode: "ir" },
  { country: "Iraq", countryCode: "iq" },
  { country: "Ireland", countryCode: "ie" },
  { country: "Israel", countryCode: "il" },
  { country: "Italy", countryCode: "it" },
  { country: "Jamaica", countryCode: "jm" },
  { country: "Japan", countryCode: "jp" },
  { country: "Jordan", countryCode: "jo" },
  { country: "Kazakhstan", countryCode: "kz" },
  { country: "Kenya", countryCode: "ke" },
  { country: "Kiribati", countryCode: "ki" },
  // Kosovo is not available from the API
  // { country: "Kosovo", countryCode: "xk" },
  { country: "Kuwait", countryCode: "kw" },
  { country: "Kyrgyzstan", countryCode: "kg" },
  { country: "Laos", countryCode: "la" },
  { country: "Latvia", countryCode: "lv" },
  { country: "Lebanon", countryCode: "lb" },
  { country: "Lesotho", countryCode: "ls" },
  { country: "Liberia", countryCode: "lr" },
  { country: "Libya", countryCode: "ly" },
  //{ country: "Liechtenstein", countryCode: "li" },
  { country: "Lithuania", countryCode: "lt" },
  { country: "Luxembourg", countryCode: "lu" },
  { country: "Madagascar", countryCode: "mg" },
  { country: "Malawi", countryCode: "mw" },
  { country: "Malaysia", countryCode: "my" },
  { country: "Maldives", countryCode: "mv" },
  { country: "Mali", countryCode: "ml" },
  { country: "Malta", countryCode: "mt" },
  //{ country: "Marshall Islands", countryCode: "mh" },
  { country: "Mauritania", countryCode: "mr" },
  { country: "Mauritius", countryCode: "mu" },
  { country: "Mexico", countryCode: "mx" },
  { country: "Micronesia", countryCode: "fm" },
  { country: "Moldova", countryCode: "md" },
  //{ country: "Monaco", countryCode: "mc" },
  { country: "Mongolia", countryCode: "mn" },
  { country: "Montenegro", countryCode: "me" },
  { country: "Morocco", countryCode: "ma" },
  { country: "Mozambique", countryCode: "mz" },
  { country: "Myanmar", countryCode: "mm" },
  { country: "Namibia", countryCode: "na" },
  //{ country: "Nauru", countryCode: "nr" },
  { country: "Nepal", countryCode: "np" },
  { country: "Netherlands", countryCode: "nl" },
  { country: "New Zealand", countryCode: "nz" },
  { country: "Nicaragua", countryCode: "ni" },
  { country: "Niger", countryCode: "ne" },
  { country: "Nigeria", countryCode: "ng" },
  { country: "North Korea", countryCode: "kp" },
  { country: "North Macedonia", countryCode: "mk" },
  { country: "Norway", countryCode: "no" },
  { country: "Oman", countryCode: "om" },
  { country: "Pakistan", countryCode: "pk" },
  //{ country: "Palau", countryCode: "pw" },
  { country: "Panama", countryCode: "pa" },
  { country: "Papua New Guinea", countryCode: "pg" },
  { country: "Paraguay", countryCode: "py" },
  { country: "Peru", countryCode: "pe" },
  { country: "Philippines", countryCode: "ph" },
  { country: "Poland", countryCode: "pl" },
  { country: "Portugal", countryCode: "pt" },
  { country: "Qatar", countryCode: "qa" },
  { country: "Romania", countryCode: "ro" },
  { country: "Russia", countryCode: "ru" },
  { country: "Rwanda", countryCode: "rw" },
  //{ country: "Saint Kitts and Nevis", countryCode: "kn" },
  { country: "Saint Lucia", countryCode: "lc" },
  { country: "Saint Vincent and the Grenadines", countryCode: "vc" },
  //{ country: "Samoa", countryCode: "ws" },
  //{ country: "San Marino", countryCode: "sm" },
  { country: "São Tomé and Príncipe", countryCode: "st" },
  { country: "Saudi Arabia", countryCode: "sa" },
  { country: "Senegal", countryCode: "sn" },
  { country: "Serbia", countryCode: "rs" },
  { country: "Seychelles", countryCode: "sc" },
  { country: "Sierra Leone", countryCode: "sl" },
  { country: "Singapore", countryCode: "sg" },
  { country: "Slovakia", countryCode: "sk" },
  { country: "Slovenia", countryCode: "si" },
  { country: "Solomon Islands", countryCode: "sb" },
  { country: "Somalia", countryCode: "so" },
  { country: "South Africa", countryCode: "za" },
  { country: "South Korea", countryCode: "kr" },
  { country: "South Sudan", countryCode: "ss" },
  { country: "Spain", countryCode: "es" },
  { country: "Sri Lanka", countryCode: "lk" },
  { country: "Sudan", countryCode: "sd" },
  { country: "Suriname", countryCode: "sr" },
  { country: "Sweden", countryCode: "se" },
  { country: "Switzerland", countryCode: "ch" },
  { country: "Syria", countryCode: "sy" },
  { country: "Tajikistan", countryCode: "tj" },
  { country: "Tanzania", countryCode: "tz" },
  { country: "Thailand", countryCode: "th" },
  { country: "Togo", countryCode: "tg" },
  { country: "Tonga", countryCode: "to" },
  { country: "Trinidad and Tobago", countryCode: "tt" },
  { country: "Tunisia", countryCode: "tn" },
  { country: "Turkey", countryCode: "tr" },
  { country: "Turkmenistan", countryCode: "tm" },
  //{ country: "Tuvalu", countryCode: "tv" },
  { country: "Uganda", countryCode: "ug" },
  { country: "Ukraine", countryCode: "ua" },
  { country: "United Arab Emirates", countryCode: "ae" },
  { country: "United Kingdom", countryCode: "gb" },
  { country: "United States", countryCode: "us" },
  { country: "Uruguay", countryCode: "uy" },
  { country: "Uzbekistan", countryCode: "uz" },
  { country: "Vanuatu", countryCode: "vu" },
  //{ country: "Vatican City", countryCode: "va" },
  { country: "Venezuela", countryCode: "ve" },
  { country: "Vietnam", countryCode: "vn" },
  { country: "Yemen", countryCode: "ye" },
  { country: "Zambia", countryCode: "zm" },
  { country: "Zimbabwe", countryCode: "zw" },
];

export default countryList;