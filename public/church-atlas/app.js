const milesPerKm = 0.621371;

const familyColors = {
  "Roman Catholic": "#b8324a",
  "Eastern Orthodox": "#8157c8",
  "Oriental Orthodox": "#a65f2b",
  "Anglican/Episcopal": "#2864b4",
  Lutheran: "#c7512c",
  "Reformed/Presbyterian": "#26736b",
  Baptist: "#1d76a3",
  "Methodist/Wesleyan": "#7a8b21",
  "Pentecostal/Charismatic": "#d24c86",
  "Anabaptist/Mennonite/Amish": "#5f7460",
  "Seventh-day Adventist": "#4e6cc9",
  "Churches of Christ": "#8b6432",
  "Non-denominational/Evangelical": "#405f84",
};

const denominationFamilies = Object.keys(familyColors);

const beliefGroups = {
  core: [
    ["authority.scripture_alone", "Scripture alone"],
    ["authority.tradition", "Scripture + tradition"],
    ["authority.creeds", "Creeds & councils"],
    ["interpretation.kjv", "KJV preferred"],
    ["salvation.faith_alone", "Faith alone"],
    ["salvation.cooperative_grace", "Faith working through love"],
    ["security.once_saved", "Once saved, always saved"],
    ["security.can_fall_away", "Can fall away"],
    ["predestination.calvinist", "Calvinist"],
    ["predestination.arminian", "Arminian/Wesleyan"],
  ],
  sacraments: [
    ["baptism.infant", "Infant baptism"],
    ["baptism.believers", "Believer's baptism"],
    ["baptism.sacrament", "Baptism as sacrament"],
    ["baptism.symbol", "Baptism as symbol"],
    ["communion.real_presence", "Real presence"],
    ["communion.spiritual_presence", "Spiritual presence"],
    ["communion.memorial", "Memorial communion"],
    ["sacraments.seven", "Seven sacraments"],
    ["sacraments.two", "Two sacraments/ordinances"],
    ["confession.priest", "Confession to priest"],
  ],
  worship: [
    ["leadership.episcopal", "Bishops"],
    ["leadership.presbyterian", "Elders/presbytery"],
    ["leadership.congregational", "Congregational rule"],
    ["mary.high_honor", "High honor of Mary"],
    ["saints.intercession", "Saints' intercession"],
    ["images.icons", "Icons or sacred images"],
    ["worship.liturgical", "Liturgical"],
    ["worship.contemporary", "Contemporary"],
    ["worship.charismatic", "Charismatic"],
    ["gifts.continuationist", "Continuationist"],
    ["gifts.cessationist", "Cessationist"],
    ["tongues.evidence", "Tongues emphasized"],
    ["tongues.cautious", "Tongues cautious"],
    ["calendar.liturgical", "Church calendar"],
    ["sabbath.saturday", "Saturday Sabbath"],
  ],
  ethics: [
    ["women.ordain", "Ordains women"],
    ["women.male_elder", "Male elders/pastors"],
    ["alcohol.moderate", "Moderate alcohol allowed"],
    ["alcohol.abstain", "Alcohol discouraged"],
    ["pacifism", "Pacifist tradition"],
    ["just_war", "Just war tradition"],
    ["creation.young_earth", "Young-earth creation"],
    ["creation.theistic_evolution", "Theistic evolution allowed"],
    ["end_times.premillennial", "Premillennial"],
    ["end_times.amillennial", "Amillennial"],
    ["marriage.sacramental", "Marriage as sacrament"],
    ["politics.separation", "Church-state separation"],
  ],
};

const beliefLabels = Object.values(beliefGroups)
  .flat()
  .reduce((labels, [key, label]) => {
    labels[key] = label;
    return labels;
  }, {});

const groupTitles = {
  core: "Core",
  sacraments: "Sacraments",
  worship: "Worship",
  ethics: "Ethics",
};

const comparisonBeliefs = [
  "authority.scripture_alone",
  "authority.tradition",
  "salvation.faith_alone",
  "salvation.cooperative_grace",
  "baptism.infant",
  "baptism.believers",
  "communion.real_presence",
  "communion.memorial",
  "leadership.episcopal",
  "leadership.congregational",
  "worship.liturgical",
  "worship.contemporary",
  "gifts.continuationist",
  "women.ordain",
];

const favoriteStorageKey = "churchAtlasFavoriteIds";
const visitStorageKey = "churchAtlasVisitIds";
const updateStorageKey = "churchAtlasUpdateReports";

const sourceColors = {
  Official: "#26736b",
  "Directory verified": "#2864b4",
  "Community verified": "#7a8b21",
  "Needs review": "#b8324a",
  "Regional seed": "#8b6432",
};

const practicalFilters = [
  ["livestream", "Livestream"],
  ["childcare", "Childcare"],
  ["accessible", "Wheelchair access"],
  ["spanish", "Spanish"],
  ["small_groups", "Small groups"],
  ["college", "College ministry"],
  ["public_transit", "Public transit"],
  ["traditional_service", "Traditional service"],
  ["contemporary_service", "Contemporary service"],
  ["midweek", "Midweek service"],
];

const practicalLabels = practicalFilters.reduce((labels, [key, label]) => {
  labels[key] = label;
  return labels;
}, {});

const serviceFilters = [
  ["sunday_morning", "Sunday morning"],
  ["sunday_evening", "Sunday evening"],
  ["saturday", "Saturday"],
  ["midweek", "Midweek"],
  ["early_service", "Before 9 AM"],
  ["late_morning", "After 10 AM"],
];

const serviceLabels = serviceFilters.reduce((labels, [key, label]) => {
  labels[key] = label;
  return labels;
}, {});

const defaultChurchMeta = {
  source: "Directory listing",
  sourceDetail: "Seed data awaiting official confirmation",
  confidence: "Needs review",
  confidenceLevel: 1,
  verifiedAt: null,
  practical: [],
  serviceTags: [],
  languages: ["English"],
  ministries: [],
  attendance: "Not listed",
  notes: "Listing needs pastoral or official-site verification before public launch.",
};

const churches = [
  {
    id: "st-anselm-catholic",
    name: "St. Anselm Catholic Parish",
    family: "Roman Catholic",
    tradition: "Latin rite parish",
    address: "German Village, Columbus, OH",
    lat: 39.9471,
    lng: -82.9924,
    website: "https://example.com/st-anselm",
    phone: "(614) 555-0148",
    serviceTimes: "Sun 8:30 AM, 11:00 AM",
    beliefs: [
      "authority.tradition",
      "authority.creeds",
      "salvation.cooperative_grace",
      "security.can_fall_away",
      "baptism.infant",
      "baptism.sacrament",
      "communion.real_presence",
      "sacraments.seven",
      "confession.priest",
      "leadership.episcopal",
      "mary.high_honor",
      "saints.intercession",
      "images.icons",
      "worship.liturgical",
      "calendar.liturgical",
      "alcohol.moderate",
      "just_war",
      "creation.theistic_evolution",
      "marriage.sacramental",
    ],
  },
  {
    id: "holy-wisdom-orthodox",
    name: "Holy Wisdom Orthodox Church",
    family: "Eastern Orthodox",
    tradition: "Byzantine parish",
    address: "Bexley, OH",
    lat: 39.9689,
    lng: -82.9377,
    website: "https://example.com/holy-wisdom",
    phone: "(614) 555-0193",
    serviceTimes: "Sun Divine Liturgy 10:00 AM",
    beliefs: [
      "authority.tradition",
      "authority.creeds",
      "salvation.cooperative_grace",
      "security.can_fall_away",
      "baptism.infant",
      "baptism.sacrament",
      "communion.real_presence",
      "sacraments.seven",
      "confession.priest",
      "leadership.episcopal",
      "mary.high_honor",
      "saints.intercession",
      "images.icons",
      "worship.liturgical",
      "calendar.liturgical",
      "alcohol.moderate",
      "just_war",
      "end_times.amillennial",
    ],
  },
  {
    id: "st-thomas-anglican",
    name: "St. Thomas Anglican Church",
    family: "Anglican/Episcopal",
    tradition: "Prayer book Anglican",
    address: "Upper Arlington, OH",
    lat: 39.9945,
    lng: -83.0624,
    website: "https://example.com/st-thomas",
    phone: "(614) 555-0122",
    serviceTimes: "Sun 9:00 AM, 10:45 AM",
    beliefs: [
      "authority.scripture_alone",
      "authority.creeds",
      "salvation.faith_alone",
      "security.can_fall_away",
      "baptism.infant",
      "baptism.sacrament",
      "communion.real_presence",
      "sacraments.two",
      "leadership.episcopal",
      "images.icons",
      "worship.liturgical",
      "calendar.liturgical",
      "women.ordain",
      "alcohol.moderate",
      "just_war",
      "creation.theistic_evolution",
    ],
  },
  {
    id: "redeemer-lutheran",
    name: "Redeemer Lutheran Church",
    family: "Lutheran",
    tradition: "Confessional Lutheran",
    address: "Grandview Heights, OH",
    lat: 39.9798,
    lng: -83.0409,
    website: "https://example.com/redeemer",
    phone: "(614) 555-0107",
    serviceTimes: "Sun 8:15 AM, 10:30 AM",
    beliefs: [
      "authority.scripture_alone",
      "authority.creeds",
      "salvation.faith_alone",
      "security.can_fall_away",
      "baptism.infant",
      "baptism.sacrament",
      "communion.real_presence",
      "sacraments.two",
      "worship.liturgical",
      "calendar.liturgical",
      "gifts.cessationist",
      "tongues.cautious",
      "women.male_elder",
      "alcohol.moderate",
      "just_war",
    ],
  },
  {
    id: "covenant-presbyterian",
    name: "Covenant Presbyterian Church",
    family: "Reformed/Presbyterian",
    tradition: "Reformed Presbyterian",
    address: "Worthington, OH",
    lat: 40.0931,
    lng: -83.0171,
    website: "https://example.com/covenant",
    phone: "(614) 555-0172",
    serviceTimes: "Sun 9:30 AM, 11:00 AM",
    beliefs: [
      "authority.scripture_alone",
      "authority.creeds",
      "salvation.faith_alone",
      "security.once_saved",
      "predestination.calvinist",
      "baptism.infant",
      "baptism.sacrament",
      "communion.spiritual_presence",
      "sacraments.two",
      "leadership.presbyterian",
      "worship.liturgical",
      "gifts.cessationist",
      "tongues.cautious",
      "women.male_elder",
      "alcohol.moderate",
      "just_war",
      "end_times.amillennial",
      "creation.theistic_evolution",
    ],
  },
  {
    id: "first-baptist-dublin",
    name: "First Baptist Dublin",
    family: "Baptist",
    tradition: "Baptist evangelical",
    address: "Dublin, OH",
    lat: 40.0992,
    lng: -83.1141,
    website: "https://example.com/first-baptist",
    phone: "(614) 555-0188",
    serviceTimes: "Sun 9:00 AM, 10:30 AM",
    beliefs: [
      "authority.scripture_alone",
      "salvation.faith_alone",
      "security.once_saved",
      "baptism.believers",
      "baptism.symbol",
      "communion.memorial",
      "sacraments.two",
      "leadership.congregational",
      "worship.contemporary",
      "gifts.cessationist",
      "tongues.cautious",
      "women.male_elder",
      "alcohol.abstain",
      "creation.young_earth",
      "end_times.premillennial",
    ],
  },
  {
    id: "new-hope-methodist",
    name: "New Hope Methodist Church",
    family: "Methodist/Wesleyan",
    tradition: "Wesleyan Methodist",
    address: "Hilliard, OH",
    lat: 40.0324,
    lng: -83.1582,
    website: "https://example.com/new-hope",
    phone: "(614) 555-0154",
    serviceTimes: "Sun 9:15 AM, 11:00 AM",
    beliefs: [
      "authority.scripture_alone",
      "authority.creeds",
      "salvation.cooperative_grace",
      "security.can_fall_away",
      "predestination.arminian",
      "baptism.infant",
      "baptism.sacrament",
      "communion.spiritual_presence",
      "sacraments.two",
      "leadership.episcopal",
      "worship.contemporary",
      "calendar.liturgical",
      "women.ordain",
      "alcohol.abstain",
      "just_war",
      "politics.separation",
    ],
  },
  {
    id: "river-city-pentecostal",
    name: "River City Pentecostal Fellowship",
    family: "Pentecostal/Charismatic",
    tradition: "Classical Pentecostal",
    address: "Grove City, OH",
    lat: 39.8815,
    lng: -83.0929,
    website: "https://example.com/river-city",
    phone: "(614) 555-0166",
    serviceTimes: "Sun 10:30 AM, Wed 7:00 PM",
    beliefs: [
      "authority.scripture_alone",
      "salvation.faith_alone",
      "security.can_fall_away",
      "predestination.arminian",
      "baptism.believers",
      "baptism.symbol",
      "communion.memorial",
      "sacraments.two",
      "leadership.congregational",
      "worship.charismatic",
      "worship.contemporary",
      "gifts.continuationist",
      "tongues.evidence",
      "women.ordain",
      "alcohol.abstain",
      "creation.young_earth",
      "end_times.premillennial",
    ],
  },
  {
    id: "peace-mennonite",
    name: "Peace Mennonite Community",
    family: "Anabaptist/Mennonite/Amish",
    tradition: "Mennonite",
    address: "Westerville, OH",
    lat: 40.1262,
    lng: -82.9291,
    website: "https://example.com/peace",
    phone: "(614) 555-0115",
    serviceTimes: "Sun 10:00 AM",
    beliefs: [
      "authority.scripture_alone",
      "salvation.cooperative_grace",
      "security.can_fall_away",
      "baptism.believers",
      "baptism.symbol",
      "communion.memorial",
      "sacraments.two",
      "leadership.congregational",
      "worship.liturgical",
      "gifts.continuationist",
      "women.ordain",
      "alcohol.abstain",
      "pacifism",
      "politics.separation",
    ],
  },
  {
    id: "central-adventist",
    name: "Central Adventist Church",
    family: "Seventh-day Adventist",
    tradition: "Adventist",
    address: "Reynoldsburg, OH",
    lat: 39.9548,
    lng: -82.8121,
    website: "https://example.com/central-adventist",
    phone: "(614) 555-0109",
    serviceTimes: "Sat 9:30 AM, 11:00 AM",
    beliefs: [
      "authority.scripture_alone",
      "salvation.faith_alone",
      "security.can_fall_away",
      "predestination.arminian",
      "baptism.believers",
      "baptism.symbol",
      "communion.memorial",
      "sacraments.two",
      "leadership.congregational",
      "worship.liturgical",
      "gifts.continuationist",
      "tongues.cautious",
      "women.ordain",
      "alcohol.abstain",
      "sabbath.saturday",
      "creation.young_earth",
      "end_times.premillennial",
    ],
  },
  {
    id: "northside-church-of-christ",
    name: "Northside Church of Christ",
    family: "Churches of Christ",
    tradition: "Restorationist",
    address: "Clintonville, Columbus, OH",
    lat: 40.0342,
    lng: -83.0175,
    website: "https://example.com/northside",
    phone: "(614) 555-0132",
    serviceTimes: "Sun 9:30 AM, 10:30 AM",
    beliefs: [
      "authority.scripture_alone",
      "salvation.cooperative_grace",
      "security.can_fall_away",
      "baptism.believers",
      "baptism.sacrament",
      "communion.memorial",
      "sacraments.two",
      "leadership.congregational",
      "worship.liturgical",
      "gifts.cessationist",
      "tongues.cautious",
      "women.male_elder",
      "alcohol.abstain",
      "politics.separation",
    ],
  },
  {
    id: "citylight-evangelical",
    name: "Citylight Evangelical Church",
    family: "Non-denominational/Evangelical",
    tradition: "Independent evangelical",
    address: "Short North, Columbus, OH",
    lat: 39.9822,
    lng: -83.0042,
    website: "https://example.com/citylight",
    phone: "(614) 555-0197",
    serviceTimes: "Sun 9:00 AM, 11:15 AM",
    beliefs: [
      "authority.scripture_alone",
      "salvation.faith_alone",
      "security.once_saved",
      "baptism.believers",
      "baptism.symbol",
      "communion.memorial",
      "sacraments.two",
      "leadership.congregational",
      "worship.contemporary",
      "gifts.continuationist",
      "tongues.cautious",
      "women.male_elder",
      "alcohol.moderate",
      "creation.theistic_evolution",
      "end_times.premillennial",
    ],
  },
  {
    id: "st-mark-coptic",
    name: "St. Mark Coptic Orthodox Mission",
    family: "Oriental Orthodox",
    tradition: "Coptic Orthodox",
    address: "Pickerington, OH",
    lat: 39.8842,
    lng: -82.7535,
    website: "https://example.com/st-mark-coptic",
    phone: "(614) 555-0129",
    serviceTimes: "Sun Divine Liturgy 8:30 AM",
    beliefs: [
      "authority.tradition",
      "authority.creeds",
      "salvation.cooperative_grace",
      "security.can_fall_away",
      "baptism.infant",
      "baptism.sacrament",
      "communion.real_presence",
      "sacraments.seven",
      "confession.priest",
      "leadership.episcopal",
      "mary.high_honor",
      "saints.intercession",
      "images.icons",
      "worship.liturgical",
      "calendar.liturgical",
      "alcohol.moderate",
      "pacifism",
    ],
  },
];

const beliefTemplateByChurchId = Object.fromEntries(churches.map((church) => [church.id, church.beliefs]));

function templateBeliefs(id, extra = []) {
  return [...new Set([...(beliefTemplateByChurchId[id] || []), ...extra])];
}

const eastTennesseeChurches = [
  {
    id: "sacred-heart-knoxville",
    name: "Sacred Heart Parish Knoxville",
    family: "Roman Catholic",
    tradition: "Latin rite parish",
    address: "Bearden, Knoxville, TN",
    lat: 35.9307,
    lng: -84.0285,
    website: "https://example.com/sacred-heart-knoxville",
    phone: "(865) 555-1101",
    serviceTimes: "Sun 8:00 AM, 10:00 AM, 12:00 PM",
    beliefs: templateBeliefs("st-anselm-catholic"),
  },
  {
    id: "holy-transfiguration-kingsport",
    name: "Holy Transfiguration Orthodox Church",
    family: "Eastern Orthodox",
    tradition: "Byzantine Orthodox parish",
    address: "Kingsport, TN",
    lat: 36.5484,
    lng: -82.5618,
    website: "https://example.com/holy-transfiguration-kingsport",
    phone: "(423) 555-1102",
    serviceTimes: "Sun Divine Liturgy 10:00 AM",
    beliefs: templateBeliefs("holy-wisdom-orthodox"),
  },
  {
    id: "st-mary-coptic-knoxville",
    name: "St. Mary Coptic Orthodox Mission",
    family: "Oriental Orthodox",
    tradition: "Coptic Orthodox",
    address: "Farragut, TN",
    lat: 35.8845,
    lng: -84.1535,
    website: "https://example.com/st-mary-coptic-knoxville",
    phone: "(865) 555-1103",
    serviceTimes: "Sun Divine Liturgy 8:30 AM",
    beliefs: templateBeliefs("st-mark-coptic"),
  },
  {
    id: "st-andrew-anglican-knoxville",
    name: "St. Andrew Anglican Church",
    family: "Anglican/Episcopal",
    tradition: "Prayer book Anglican",
    address: "Downtown Knoxville, TN",
    lat: 35.9647,
    lng: -83.9179,
    website: "https://example.com/st-andrew-knoxville",
    phone: "(865) 555-1104",
    serviceTimes: "Sun 9:00 AM, 11:00 AM",
    beliefs: templateBeliefs("st-thomas-anglican"),
  },
  {
    id: "grace-lutheran-oak-ridge",
    name: "Grace Lutheran Oak Ridge",
    family: "Lutheran",
    tradition: "Confessional Lutheran",
    address: "Oak Ridge, TN",
    lat: 36.0104,
    lng: -84.2696,
    website: "https://example.com/grace-lutheran-oak-ridge",
    phone: "(865) 555-1105",
    serviceTimes: "Sun 8:15 AM, 10:45 AM",
    beliefs: templateBeliefs("redeemer-lutheran"),
  },
  {
    id: "cedar-ridge-presbyterian-knoxville",
    name: "Cedar Ridge Presbyterian Church",
    family: "Reformed/Presbyterian",
    tradition: "Reformed Presbyterian",
    address: "North Knoxville, TN",
    lat: 36.0201,
    lng: -83.9297,
    website: "https://example.com/cedar-ridge-presbyterian",
    phone: "(865) 555-1106",
    serviceTimes: "Sun 9:30 AM, 11:00 AM",
    beliefs: templateBeliefs("covenant-presbyterian"),
  },
  {
    id: "foothills-baptist-maryville",
    name: "Foothills Baptist Church",
    family: "Baptist",
    tradition: "Baptist evangelical",
    address: "Maryville, TN",
    lat: 35.7565,
    lng: -83.9705,
    website: "https://example.com/foothills-baptist",
    phone: "(865) 555-1107",
    serviceTimes: "Sun 9:00 AM, 10:30 AM, Wed 6:30 PM",
    beliefs: templateBeliefs("first-baptist-dublin"),
  },
  {
    id: "holston-methodist-johnson-city",
    name: "Holston Methodist Church",
    family: "Methodist/Wesleyan",
    tradition: "Wesleyan Methodist",
    address: "Johnson City, TN",
    lat: 36.3134,
    lng: -82.3535,
    website: "https://example.com/holston-methodist",
    phone: "(423) 555-1108",
    serviceTimes: "Sun 9:15 AM, 11:00 AM",
    beliefs: templateBeliefs("new-hope-methodist"),
  },
  {
    id: "riverbend-pentecostal-cleveland",
    name: "Riverbend Pentecostal Fellowship",
    family: "Pentecostal/Charismatic",
    tradition: "Classical Pentecostal",
    address: "Cleveland, TN",
    lat: 35.1595,
    lng: -84.8766,
    website: "https://example.com/riverbend-pentecostal",
    phone: "(423) 555-1109",
    serviceTimes: "Sun 10:30 AM, Wed 7:00 PM",
    beliefs: templateBeliefs("river-city-pentecostal"),
  },
  {
    id: "appalachian-mennonite-johnson-city",
    name: "Appalachian Mennonite Fellowship",
    family: "Anabaptist/Mennonite/Amish",
    tradition: "Mennonite",
    address: "Johnson City, TN",
    lat: 36.3371,
    lng: -82.3937,
    website: "https://example.com/appalachian-mennonite",
    phone: "(423) 555-1110",
    serviceTimes: "Sun 10:00 AM",
    beliefs: templateBeliefs("peace-mennonite"),
  },
  {
    id: "tri-cities-adventist-bristol",
    name: "Tri-Cities Adventist Church",
    family: "Seventh-day Adventist",
    tradition: "Adventist",
    address: "Bristol, TN",
    lat: 36.5951,
    lng: -82.1887,
    website: "https://example.com/tri-cities-adventist",
    phone: "(423) 555-1111",
    serviceTimes: "Sat 9:30 AM, 11:00 AM",
    beliefs: templateBeliefs("central-adventist"),
  },
  {
    id: "mission-road-church-of-christ-chattanooga",
    name: "Mission Road Church of Christ",
    family: "Churches of Christ",
    tradition: "Restorationist",
    address: "Chattanooga, TN",
    lat: 35.0456,
    lng: -85.3097,
    website: "https://example.com/mission-road-coc",
    phone: "(423) 555-1112",
    serviceTimes: "Sun 9:30 AM, 10:30 AM, Wed 6:30 PM",
    beliefs: templateBeliefs("northside-church-of-christ"),
  },
  {
    id: "lookout-city-church-chattanooga",
    name: "Lookout City Church",
    family: "Non-denominational/Evangelical",
    tradition: "Independent evangelical",
    address: "Northshore, Chattanooga, TN",
    lat: 35.0693,
    lng: -85.3096,
    website: "https://example.com/lookout-city",
    phone: "(423) 555-1113",
    serviceTimes: "Sun 9:00 AM, 11:15 AM",
    beliefs: templateBeliefs("citylight-evangelical"),
  },
  {
    id: "first-baptist-morristown",
    name: "First Baptist Morristown",
    family: "Baptist",
    tradition: "Baptist evangelical",
    address: "Morristown, TN",
    lat: 36.2139,
    lng: -83.2949,
    website: "https://example.com/first-baptist-morristown",
    phone: "(423) 555-1114",
    serviceTimes: "Sun 8:45 AM, 10:30 AM, Wed 6:00 PM",
    beliefs: templateBeliefs("first-baptist-dublin"),
  },
  {
    id: "smoky-mountain-community-sevierville",
    name: "Smoky Mountain Community Church",
    family: "Non-denominational/Evangelical",
    tradition: "Independent evangelical",
    address: "Sevierville, TN",
    lat: 35.8681,
    lng: -83.5618,
    website: "https://example.com/smoky-mountain-community",
    phone: "(865) 555-1115",
    serviceTimes: "Sun 9:00 AM, 10:45 AM",
    beliefs: templateBeliefs("citylight-evangelical"),
  },
];

churches.push(...eastTennesseeChurches);

const churchMeta = {
  "st-anselm-catholic": {
    source: "Official parish website",
    sourceDetail: "Mass times and sacramental practice verified from parish materials",
    confidence: "Official",
    confidenceLevel: 3,
    verifiedAt: "2026-05-18",
    practical: ["accessible", "childcare", "traditional_service", "public_transit"],
    languages: ["English"],
    ministries: ["RCIA", "Confession", "Food pantry"],
    attendance: "350-500",
    notes: "Strong fit for seekers wanting sacramental, liturgical worship and historic Christian calendar rhythms.",
  },
  "holy-wisdom-orthodox": {
    source: "Official parish website",
    sourceDetail: "Liturgy schedule and Orthodox identity verified from parish materials",
    confidence: "Official",
    confidenceLevel: 3,
    verifiedAt: "2026-05-12",
    practical: ["accessible", "traditional_service"],
    languages: ["English", "Greek"],
    ministries: ["Catechumen class", "Vespers", "Fasting calendar"],
    attendance: "150-250",
    notes: "Good fit for users exploring icons, ancient liturgy, fasting seasons, and Eastern Christian theology.",
  },
  "st-thomas-anglican": {
    source: "Official church website",
    sourceDetail: "Service style and leadership profile verified from published parish information",
    confidence: "Official",
    confidenceLevel: 3,
    verifiedAt: "2026-05-20",
    practical: ["livestream", "accessible", "childcare", "traditional_service", "small_groups"],
    languages: ["English"],
    ministries: ["Alpha", "Morning prayer", "Youth choir"],
    attendance: "250-400",
    notes: "Bridges historic liturgy with Protestant preaching and broad Anglican practice.",
  },
  "redeemer-lutheran": {
    source: "Official church website",
    sourceDetail: "Confessional identity and service schedule verified from congregation materials",
    confidence: "Official",
    confidenceLevel: 3,
    verifiedAt: "2026-05-15",
    practical: ["livestream", "accessible", "traditional_service", "small_groups"],
    languages: ["English"],
    ministries: ["Catechism", "Choir", "Mercy ministry"],
    attendance: "200-350",
    notes: "Useful option for users looking for sacramental Protestant worship and confessional teaching.",
  },
  "covenant-presbyterian": {
    source: "Denominational directory",
    sourceDetail: "Affiliation and worship schedule verified through presbytery listing",
    confidence: "Directory verified",
    confidenceLevel: 2,
    verifiedAt: "2026-04-28",
    practical: ["livestream", "accessible", "childcare", "small_groups", "college"],
    languages: ["English"],
    ministries: ["Adult education", "Campus ministry", "Missions"],
    attendance: "500-700",
    notes: "Strong candidate for users prioritizing Reformed theology, elders, and structured discipleship.",
  },
  "first-baptist-dublin": {
    source: "Official church website",
    sourceDetail: "Statement of faith and gathering schedule verified from church materials",
    confidence: "Official",
    confidenceLevel: 3,
    verifiedAt: "2026-05-09",
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups", "midweek"],
    languages: ["English"],
    ministries: ["Awana", "Student ministry", "Men's Bible study"],
    attendance: "400-650",
    notes: "Good fit for believer's baptism, congregational polity, and evangelical preaching.",
  },
  "new-hope-methodist": {
    source: "Official church website",
    sourceDetail: "Service schedule and Wesleyan identity verified from church materials",
    confidence: "Official",
    confidenceLevel: 3,
    verifiedAt: "2026-05-17",
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups", "public_transit"],
    languages: ["English"],
    ministries: ["Recovery group", "Community meals", "Youth ministry"],
    attendance: "300-450",
    notes: "Helpful fit for Wesleyan theology, women in ministry, and socially engaged church life.",
  },
  "river-city-pentecostal": {
    source: "Official church website",
    sourceDetail: "Charismatic practice and meeting schedule verified from church materials",
    confidence: "Official",
    confidenceLevel: 3,
    verifiedAt: "2026-05-14",
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups", "midweek"],
    languages: ["English", "Spanish"],
    ministries: ["Healing prayer", "Youth nights", "Worship team"],
    attendance: "250-400",
    notes: "Best for users seeking continuationist worship, altar prayer, and Pentecostal spirituality.",
  },
  "peace-mennonite": {
    source: "Community verified",
    sourceDetail: "Belief profile reviewed from local member-submitted information",
    confidence: "Community verified",
    confidenceLevel: 2,
    verifiedAt: "2026-04-21",
    practical: ["accessible", "childcare", "small_groups", "public_transit"],
    languages: ["English"],
    ministries: ["Peace witness", "Mutual aid", "Community garden"],
    attendance: "90-160",
    notes: "Good option for users prioritizing peacemaking, simple worship, and Anabaptist discipleship.",
  },
  "central-adventist": {
    source: "Denominational directory",
    sourceDetail: "Sabbath schedule and denominational affiliation verified from directory listing",
    confidence: "Directory verified",
    confidenceLevel: 2,
    verifiedAt: "2026-04-30",
    practical: ["livestream", "accessible", "childcare", "small_groups", "spanish"],
    languages: ["English", "Spanish"],
    ministries: ["Health ministry", "Pathfinders", "Sabbath school"],
    attendance: "250-375",
    notes: "Clear fit for Saturday worship, Adventist doctrine, and health-oriented ministry.",
  },
  "northside-church-of-christ": {
    source: "Official church website",
    sourceDetail: "Worship pattern and leadership profile verified from congregation materials",
    confidence: "Official",
    confidenceLevel: 3,
    verifiedAt: "2026-05-06",
    practical: ["accessible", "childcare", "traditional_service", "small_groups", "midweek"],
    languages: ["English"],
    ministries: ["Bible classes", "Benevolence", "Youth group"],
    attendance: "180-275",
    notes: "Useful for users interested in Restorationist practice and weekly communion.",
  },
  "citylight-evangelical": {
    source: "Official church website",
    sourceDetail: "Statement of faith, ministries, and service schedule verified from church materials",
    confidence: "Official",
    confidenceLevel: 3,
    verifiedAt: "2026-05-22",
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups", "college", "public_transit"],
    languages: ["English"],
    ministries: ["City groups", "College nights", "Local outreach"],
    attendance: "700-950",
    notes: "Strong urban evangelical option for small groups, contemporary worship, and young adults.",
  },
  "st-mark-coptic": {
    source: "Public schedule",
    sourceDetail: "Mission profile assembled from public schedule and awaiting church confirmation",
    confidence: "Needs review",
    confidenceLevel: 1,
    verifiedAt: null,
    practical: ["accessible", "traditional_service"],
    languages: ["English", "Arabic", "Coptic"],
    ministries: ["Coptic hymns", "Youth fellowship", "Fasting seasons"],
    attendance: "80-140",
    notes: "Good fit for users exploring Oriental Orthodox liturgy and Coptic practice.",
  },
};

const eastTennesseeChurchMeta = {
  "sacred-heart-knoxville": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official parish sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["accessible", "childcare", "traditional_service", "public_transit"],
    languages: ["English", "Spanish"],
    ministries: ["OCIA", "Confession", "Family ministry"],
    attendance: "600-900",
    notes: "Knoxville-area sacramental and liturgical option for Catholic users in the prototype dataset.",
  },
  "holy-transfiguration-kingsport": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official parish sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["accessible", "traditional_service", "small_groups"],
    languages: ["English"],
    ministries: ["Catechumen class", "Vespers", "Iconography group"],
    attendance: "100-180",
    notes: "Tri-Cities Orthodox profile for users exploring ancient liturgy, icons, and fasting seasons.",
  },
  "st-mary-coptic-knoxville": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official mission sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["accessible", "traditional_service"],
    languages: ["English", "Arabic", "Coptic"],
    ministries: ["Coptic hymns", "Youth fellowship", "Fasting seasons"],
    attendance: "80-140",
    notes: "Knoxville-area Oriental Orthodox seed record for testing Coptic and ancient-church filters.",
  },
  "st-andrew-anglican-knoxville": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official church sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "childcare", "traditional_service", "small_groups", "public_transit"],
    languages: ["English"],
    ministries: ["Morning prayer", "Youth choir", "Alpha"],
    attendance: "250-425",
    notes: "Downtown Knoxville Anglican profile for users looking for prayer book worship and Protestant preaching.",
  },
  "grace-lutheran-oak-ridge": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official congregation sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "traditional_service", "small_groups"],
    languages: ["English"],
    ministries: ["Catechism", "Choir", "Mercy ministry"],
    attendance: "175-300",
    notes: "Oak Ridge Lutheran profile for sacramental Protestant worship and confessional teaching.",
  },
  "cedar-ridge-presbyterian-knoxville": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with presbytery or church sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "childcare", "small_groups", "college", "public_transit"],
    languages: ["English"],
    ministries: ["Adult education", "Campus ministry", "Missions"],
    attendance: "450-700",
    notes: "Knoxville Reformed profile for testing elders, covenant theology, and discipleship filters.",
  },
  "foothills-baptist-maryville": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official church sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups", "midweek"],
    languages: ["English"],
    ministries: ["Kids ministry", "Student ministry", "Men's Bible study"],
    attendance: "350-550",
    notes: "Maryville Baptist profile for believer's baptism, congregational polity, and evangelical preaching.",
  },
  "holston-methodist-johnson-city": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official church sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups"],
    languages: ["English"],
    ministries: ["Recovery group", "Community meals", "Youth ministry"],
    attendance: "275-425",
    notes: "Johnson City Wesleyan profile for testing grace, holiness, and women-in-ministry filters.",
  },
  "riverbend-pentecostal-cleveland": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official church sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups", "midweek"],
    languages: ["English", "Spanish"],
    ministries: ["Healing prayer", "Youth nights", "Worship team"],
    attendance: "300-500",
    notes: "Cleveland-area Pentecostal profile for continuationist, charismatic, and midweek filters.",
  },
  "appalachian-mennonite-johnson-city": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with community or church sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["accessible", "childcare", "small_groups"],
    languages: ["English"],
    ministries: ["Peace witness", "Mutual aid", "Community garden"],
    attendance: "80-150",
    notes: "Anabaptist seed profile for users prioritizing peacemaking, simple worship, and discipleship.",
  },
  "tri-cities-adventist-bristol": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with denominational sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "childcare", "small_groups", "spanish"],
    languages: ["English", "Spanish"],
    ministries: ["Health ministry", "Pathfinders", "Sabbath school"],
    attendance: "225-350",
    notes: "Bristol Adventist profile for Saturday worship and health-ministry filters.",
  },
  "mission-road-church-of-christ-chattanooga": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with congregation sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["accessible", "childcare", "traditional_service", "small_groups", "midweek"],
    languages: ["English"],
    ministries: ["Bible classes", "Benevolence", "Youth group"],
    attendance: "180-300",
    notes: "Chattanooga Churches of Christ profile for weekly communion and Restorationist filters.",
  },
  "lookout-city-church-chattanooga": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official church sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups", "college", "public_transit"],
    languages: ["English"],
    ministries: ["City groups", "College nights", "Local outreach"],
    attendance: "550-850",
    notes: "Chattanooga non-denominational profile for contemporary worship, groups, and young-adult filters.",
  },
  "first-baptist-morristown": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official church sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups", "midweek"],
    languages: ["English"],
    ministries: ["Kids ministry", "Student ministry", "Local missions"],
    attendance: "300-500",
    notes: "Morristown Baptist profile for evangelical, believer's baptism, and midweek filters.",
  },
  "smoky-mountain-community-sevierville": {
    source: "Eastern Tennessee seed",
    sourceDetail: "Regional seed listing for the GIS prototype; confirm with official church sources before launch",
    confidence: "Regional seed",
    confidenceLevel: 1,
    practical: ["livestream", "accessible", "childcare", "contemporary_service", "small_groups"],
    languages: ["English"],
    ministries: ["Community groups", "Family ministry", "Local outreach"],
    attendance: "375-600",
    notes: "Sevierville non-denominational profile for Smoky Mountain-area search and planning workflows.",
  },
};

Object.assign(churchMeta, eastTennesseeChurchMeta);

const cityFallbacks = {
  "eastern tennessee": { lat: 35.9606, lng: -83.9207, label: "Eastern Tennessee", radius: 125, zoom: 8 },
  "east tennessee": { lat: 35.9606, lng: -83.9207, label: "Eastern Tennessee", radius: 125, zoom: 8 },
  knoxville: { lat: 35.9606, lng: -83.9207, label: "Knoxville, TN", radius: 35, zoom: 10 },
  chattanooga: { lat: 35.0456, lng: -85.3097, label: "Chattanooga, TN", radius: 35, zoom: 10 },
  "johnson city": { lat: 36.3134, lng: -82.3535, label: "Johnson City, TN", radius: 35, zoom: 10 },
  kingsport: { lat: 36.5484, lng: -82.5618, label: "Kingsport, TN", radius: 35, zoom: 10 },
  bristol: { lat: 36.5951, lng: -82.1887, label: "Bristol, TN", radius: 30, zoom: 10 },
  maryville: { lat: 35.7565, lng: -83.9705, label: "Maryville, TN", radius: 30, zoom: 10 },
  "cleveland tn": { lat: 35.1595, lng: -84.8766, label: "Cleveland, TN", radius: 30, zoom: 10 },
  "cleveland, tn": { lat: 35.1595, lng: -84.8766, label: "Cleveland, TN", radius: 30, zoom: 10 },
  "oak ridge": { lat: 36.0104, lng: -84.2696, label: "Oak Ridge, TN", radius: 30, zoom: 10 },
  morristown: { lat: 36.2139, lng: -83.2949, label: "Morristown, TN", radius: 30, zoom: 10 },
  sevierville: { lat: 35.8681, lng: -83.5618, label: "Sevierville, TN", radius: 30, zoom: 10 },
  columbus: { lat: 39.9612, lng: -82.9988, label: "Columbus, OH" },
  cleveland: { lat: 41.4993, lng: -81.6944, label: "Cleveland, OH" },
  cincinnati: { lat: 39.1031, lng: -84.512, label: "Cincinnati, OH" },
  chicago: { lat: 41.8781, lng: -87.6298, label: "Chicago, IL" },
  atlanta: { lat: 33.749, lng: -84.388, label: "Atlanta, GA" },
  dallas: { lat: 32.7767, lng: -96.797, label: "Dallas, TX" },
  nashville: { lat: 36.1627, lng: -86.7816, label: "Nashville, TN" },
  charlotte: { lat: 35.2271, lng: -80.8431, label: "Charlotte, NC" },
};

const state = {
  center: { lat: 35.9606, lng: -83.9207, label: "Eastern Tennessee", zoom: 8 },
  radius: 125,
  selectedFamilies: new Set(),
  selectedBeliefs: new Set(),
  selectedPractical: new Set(),
  selectedService: new Set(),
  favoriteIds: new Set(loadFavoriteIds()),
  visitIds: new Set(loadVisitIds()),
  updateReports: loadUpdateReports(),
  compareIds: new Set(),
  activeTab: "core",
  sort: "distance",
  mapColor: "family",
  matchMode: "all",
  favoritesOnly: false,
  verifiedOnly: false,
  activeChurchId: null,
};

let map;
let churchLayer;
let centerMarker;
let radiusCircle;

const elements = {
  familyFilters: document.querySelector("#familyFilters"),
  beliefFilters: document.querySelector("#beliefFilters"),
  practicalFilters: document.querySelector("#practicalFilters"),
  serviceFilters: document.querySelector("#serviceFilters"),
  activeFilters: document.querySelector("#activeFilters"),
  radiusRange: document.querySelector("#radiusRange"),
  radiusValue: document.querySelector("#radiusValue"),
  resultCount: document.querySelector("#resultCount"),
  resultsList: document.querySelector("#resultsList"),
  locationSearch: document.querySelector("#locationSearch"),
  searchBtn: document.querySelector("#searchBtn"),
  locateBtn: document.querySelector("#locateBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  clearFamiliesBtn: document.querySelector("#clearFamiliesBtn"),
  clearBeliefsBtn: document.querySelector("#clearBeliefsBtn"),
  clearPracticalBtn: document.querySelector("#clearPracticalBtn"),
  clearServiceBtn: document.querySelector("#clearServiceBtn"),
  favoritesOnly: document.querySelector("#favoritesOnly"),
  verifiedOnly: document.querySelector("#verifiedOnly"),
  detailPanel: document.querySelector("#detailPanel"),
  compareTray: document.querySelector("#compareTray"),
  visitPlanner: document.querySelector("#visitPlanner"),
  updateModal: document.querySelector("#updateModal"),
  updateForm: document.querySelector("#updateForm"),
  closeUpdateModal: document.querySelector("#closeUpdateModal"),
  updateChurchName: document.querySelector("#updateChurchName"),
  updateChurchId: document.querySelector("#updateChurchId"),
  updateStatus: document.querySelector("#updateStatus"),
};

function init() {
  elements.locationSearch.value = state.center.label;
  elements.radiusRange.value = String(state.radius);
  elements.radiusValue.value = `${state.radius} mi`;
  renderFamilyFilters();
  renderPracticalFilters();
  renderServiceFilters();
  renderBeliefFilters();
  bindEvents();
  initMap();
  updateView();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initMap() {
  map = L.map("map", {
    zoomControl: false,
  }).setView([state.center.lat, state.center.lng], state.center.zoom || 11);

  L.control.zoom({ position: "bottomleft" }).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  churchLayer = L.layerGroup().addTo(map);
  centerMarker = L.marker([state.center.lat, state.center.lng], {
    title: state.center.label,
  }).addTo(map);
  radiusCircle = L.circle([state.center.lat, state.center.lng], {
    radius: milesToMeters(state.radius),
    color: "#1d4f8f",
    weight: 1,
    fillColor: "#1d76a3",
    fillOpacity: 0.08,
  }).addTo(map);
}

function renderFamilyFilters() {
  const fragment = document.createDocumentFragment();

  denominationFamilies.forEach((family) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip family-chip";
    button.dataset.family = family;
    button.innerHTML = `<span class="color-dot" style="--dot:${familyColors[family]}"></span><span>${family}</span>`;
    fragment.appendChild(button);
  });

  elements.familyFilters.replaceChildren(fragment);
}

function renderPracticalFilters() {
  const fragment = document.createDocumentFragment();

  practicalFilters.forEach(([key, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip practical-chip";
    button.dataset.practical = key;
    button.textContent = label;
    if (state.selectedPractical.has(key)) {
      button.classList.add("selected");
    }
    fragment.appendChild(button);
  });

  elements.practicalFilters.replaceChildren(fragment);
}

function renderServiceFilters() {
  const fragment = document.createDocumentFragment();

  serviceFilters.forEach(([key, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip service-chip";
    button.dataset.service = key;
    button.textContent = label;
    if (state.selectedService.has(key)) {
      button.classList.add("selected");
    }
    fragment.appendChild(button);
  });

  elements.serviceFilters.replaceChildren(fragment);
}

function renderBeliefFilters() {
  const group = beliefGroups[state.activeTab];
  const fragment = document.createDocumentFragment();
  const list = document.createElement("div");
  list.className = "belief-grid";

  group.forEach(([key, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip belief-chip";
    button.dataset.belief = key;
    button.textContent = label;
    if (state.selectedBeliefs.has(key)) {
      button.classList.add("selected");
    }
    list.appendChild(button);
  });

  fragment.appendChild(list);
  elements.beliefFilters.replaceChildren(fragment);
}

function bindEvents() {
  elements.familyFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-family]");
    if (!button) return;

    toggleSetValue(state.selectedFamilies, button.dataset.family);
    button.classList.toggle("selected", state.selectedFamilies.has(button.dataset.family));
    updateView();
  });

  elements.beliefFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-belief]");
    if (!button) return;

    toggleSetValue(state.selectedBeliefs, button.dataset.belief);
    button.classList.toggle("selected", state.selectedBeliefs.has(button.dataset.belief));
    updateView();
  });

  elements.practicalFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-practical]");
    if (!button) return;

    toggleSetValue(state.selectedPractical, button.dataset.practical);
    button.classList.toggle("selected", state.selectedPractical.has(button.dataset.practical));
    updateView();
  });

  elements.serviceFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-service]");
    if (!button) return;

    toggleSetValue(state.selectedService, button.dataset.service);
    button.classList.toggle("selected", state.selectedService.has(button.dataset.service));
    updateView();
  });

  elements.activeFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-clear-filter]");
    if (!button) return;

    clearFilterToken(button.dataset.clearFilter, button.dataset.value);
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      document.querySelectorAll("[data-tab]").forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });
      renderBeliefFilters();
    });
  });

  document.querySelectorAll("[data-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sort = button.dataset.sort;
      document.querySelectorAll("[data-sort]").forEach((sortButton) => {
        sortButton.classList.toggle("active", sortButton === button);
      });
      updateView();
    });
  });

  document.querySelectorAll("[data-map-color]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mapColor = button.dataset.mapColor;
      document.querySelectorAll("[data-map-color]").forEach((colorButton) => {
        colorButton.classList.toggle("active", colorButton === button);
      });
      updateView();
    });
  });

  document.querySelectorAll("[data-match-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.matchMode = button.dataset.matchMode;
      document.querySelectorAll("[data-match-mode]").forEach((modeButton) => {
        modeButton.classList.toggle("active", modeButton === button);
      });
      updateView();
    });
  });

  elements.radiusRange.addEventListener("input", () => {
    state.radius = Number(elements.radiusRange.value);
    elements.radiusValue.value = `${state.radius} mi`;
    updateView();
  });

  elements.favoritesOnly.addEventListener("change", () => {
    state.favoritesOnly = elements.favoritesOnly.checked;
    updateView();
  });

  elements.verifiedOnly.addEventListener("change", () => {
    state.verifiedOnly = elements.verifiedOnly.checked;
    updateView();
  });

  elements.resultsList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    event.stopPropagation();
    handleChurchAction(button.dataset.action, button.dataset.id);
  });

  elements.detailPanel.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    event.stopPropagation();
    handleChurchAction(button.dataset.action, button.dataset.id);
  });

  elements.compareTray.addEventListener("click", (event) => {
    const button = event.target.closest("[data-compare-action]");
    if (!button) return;

    if (button.dataset.compareAction === "clear") {
      state.compareIds.clear();
    }

    if (button.dataset.compareAction === "remove") {
      state.compareIds.delete(button.dataset.id);
    }

    if (button.dataset.compareAction === "profile") {
      openChurchProfile(button.dataset.id);
      return;
    }

    updateView();
  });

  elements.visitPlanner.addEventListener("click", (event) => {
    const button = event.target.closest("[data-plan-action]");
    if (!button) return;

    if (button.dataset.planAction === "clear") {
      state.visitIds.clear();
      saveVisitIds();
      updateView();
    }

    if (button.dataset.planAction === "remove") {
      state.visitIds.delete(button.dataset.id);
      saveVisitIds();
      updateView();
    }
  });

  elements.searchBtn.addEventListener("click", searchLocation);
  elements.locationSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchLocation();
    }
  });

  elements.locateBtn.addEventListener("click", useCurrentLocation);
  elements.resetBtn.addEventListener("click", resetFilters);

  elements.clearFamiliesBtn.addEventListener("click", () => {
    state.selectedFamilies.clear();
    document.querySelectorAll("[data-family]").forEach((button) => button.classList.remove("selected"));
    updateView();
  });

  elements.clearBeliefsBtn.addEventListener("click", () => {
    state.selectedBeliefs.clear();
    renderBeliefFilters();
    updateView();
  });

  elements.clearPracticalBtn.addEventListener("click", () => {
    state.selectedPractical.clear();
    renderPracticalFilters();
    updateView();
  });

  elements.clearServiceBtn.addEventListener("click", () => {
    state.selectedService.clear();
    renderServiceFilters();
    updateView();
  });

  elements.closeUpdateModal.addEventListener("click", closeUpdateModal);
  elements.updateModal.addEventListener("click", (event) => {
    if (event.target === elements.updateModal) {
      closeUpdateModal();
    }
  });
  elements.updateForm.addEventListener("submit", handleUpdateSubmit);
}

function updateView() {
  const matches = getFilteredChurches();
  elements.resultCount.textContent = String(matches.length);

  renderActiveFilters();
  renderMarkers(matches);
  renderResults(matches);
  renderDetailPanel(state.activeChurchId ? enrichChurch(getChurchById(state.activeChurchId)) : null);
  renderCompareTray();
  renderVisitPlanner();
  updateMapCenter();
}

function getFilteredChurches() {
  return churches
    .map((church) => enrichChurch(church))
    .filter((church) => {
      const familyOk = !state.selectedFamilies.size || state.selectedFamilies.has(church.family);
      const favoriteOk = !state.favoritesOnly || state.favoriteIds.has(church.id);
      const verifiedOk = !state.verifiedOnly || church.meta.confidenceLevel >= 2;
      const practicalOk =
        !state.selectedPractical.size ||
        [...state.selectedPractical].every((item) => church.meta.practical.includes(item));
      const serviceOk =
        !state.selectedService.size ||
        [...state.selectedService].every((item) => church.meta.serviceTags.includes(item));
      const selectedBeliefs = [...state.selectedBeliefs];
      const beliefOk =
        !selectedBeliefs.length ||
        (state.matchMode === "all" ? selectedBeliefs.every((belief) => church.beliefs.includes(belief)) : church.score > 0);
      return familyOk && favoriteOk && verifiedOk && practicalOk && serviceOk && beliefOk && church.distance <= state.radius;
    })
    .sort((a, b) => {
      if (state.sort === "match") {
        return b.score - a.score || a.distance - b.distance;
      }
      return a.distance - b.distance;
    });
}

function renderActiveFilters() {
  const tokens = [];

  state.selectedFamilies.forEach((family) => tokens.push(["family", family, family]));
  state.selectedPractical.forEach((key) => tokens.push(["practical", key, practicalLabels[key]]));
  state.selectedService.forEach((key) => tokens.push(["service", key, serviceLabels[key]]));
  state.selectedBeliefs.forEach((key) => tokens.push(["belief", key, beliefLabels[key]]));

  if (state.favoritesOnly) tokens.push(["toggle", "favoritesOnly", "Favorites only"]);
  if (state.verifiedOnly) tokens.push(["toggle", "verifiedOnly", "Verified only"]);
  if (state.matchMode === "best") tokens.push(["toggle", "matchMode", "Best fit"]);

  if (!tokens.length) {
    elements.activeFilters.hidden = true;
    elements.activeFilters.replaceChildren();
    return;
  }

  elements.activeFilters.hidden = false;
  elements.activeFilters.innerHTML = `
    <span>Filters</span>
    <div>
      ${tokens
        .map(
          ([type, value, label]) => `
            <button type="button" data-clear-filter="${type}" data-value="${value}">
              ${label}<i data-lucide="x"></i>
            </button>
          `
        )
        .join("")}
    </div>
  `;
  refreshIcons();
}

function getMarkerColor(church) {
  if (state.mapColor === "source") {
    return sourceColors[church.meta.confidence] || sourceColors["Needs review"];
  }

  return familyColors[church.family] || "#405f84";
}

function renderMarkers(matches) {
  churchLayer.clearLayers();

  matches.forEach((church) => {
    const color = getMarkerColor(church);
    const marker = L.marker([church.lat, church.lng], {
      title: church.name,
      icon: L.divIcon({
        className: "church-marker-wrap",
        html: `<span class="church-marker ${church.id === state.activeChurchId ? "active" : ""}" style="--marker:${color}"></span>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      }),
    });

    marker.bindPopup(`
      <strong>${church.name}</strong>
      <span>${church.family}</span>
      <small>${church.address}</small>
      <small>${church.distance.toFixed(1)} mi away</small>
    `);

    marker.on("click", () => {
      openChurchProfile(church.id, false);
      renderResults(matches);
    });

    marker.addTo(churchLayer);
  });
}

function renderResults(matches) {
  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <i data-lucide="map"></i>
      <p>No churches match these filters.</p>
      <button class="text-button" type="button" id="emptyResetBtn">Reset filters</button>
    `;
    elements.resultsList.replaceChildren(empty);
    empty.querySelector("#emptyResetBtn").addEventListener("click", resetFilters);
    refreshIcons();
    return;
  }

  const fragment = document.createDocumentFragment();

  matches.forEach((church) => {
    const article = document.createElement("article");
    article.className = "result-card";
    if (church.id === state.activeChurchId) {
      article.classList.add("active");
    }

    const selectedHighlights = church.matchedBeliefs.length
      ? church.matchedBeliefs.slice(0, 4).map((key) => beliefLabels[key])
      : church.beliefs.slice(0, 4).map((key) => beliefLabels[key]).filter(Boolean);
    const matchLabel = state.selectedBeliefs.size ? `${Math.round(church.score * 100)}%` : "";
    const isFavorite = state.favoriteIds.has(church.id);
    const isCompared = state.compareIds.has(church.id);
    const isPlanned = state.visitIds.has(church.id);
    const practicalHighlights = church.meta.practical.slice(0, 3).map((key) => practicalLabels[key]).filter(Boolean);

    article.innerHTML = `
      <div class="result-main">
        <div>
          <p class="result-family" style="--family:${familyColors[church.family]}">${church.family}</p>
          <h3>${church.name}</h3>
          <p class="tradition">${church.tradition}</p>
        </div>
        <div class="score-stack">
          <span class="distance">${church.distance.toFixed(1)} mi</span>
          ${matchLabel ? `<span class="match-score">${matchLabel}</span>` : ""}
        </div>
      </div>
      <div class="result-meta">
        <span><i data-lucide="map-pin"></i>${church.address}</span>
        <span><i data-lucide="clock"></i>${church.serviceTimes}</span>
        <span><i data-lucide="shield-check"></i>${church.meta.confidence}</span>
      </div>
      <div class="tag-row">
        ${selectedHighlights.map((label) => `<span>${label}</span>`).join("")}
        ${practicalHighlights.map((label) => `<span class="practical-tag">${label}</span>`).join("")}
      </div>
      <div class="card-actions">
        <button class="ghost-action ${isFavorite ? "selected" : ""}" type="button" data-action="favorite" data-id="${church.id}" aria-label="${isFavorite ? "Remove saved church" : "Save church"}">
          <i data-lucide="heart"></i><span>${isFavorite ? "Saved" : "Save"}</span>
        </button>
        <button class="ghost-action ${isPlanned ? "selected" : ""}" type="button" data-action="plan" data-id="${church.id}" aria-label="${isPlanned ? "Remove from visit plan" : "Add to visit plan"}">
          <i data-lucide="calendar"></i><span>${isPlanned ? "Planned" : "Plan"}</span>
        </button>
        <button class="ghost-action ${isCompared ? "selected" : ""}" type="button" data-action="compare" data-id="${church.id}" aria-label="${isCompared ? "Remove from comparison" : "Add to comparison"}">
          <i data-lucide="columns-3"></i><span>${isCompared ? "Comparing" : "Compare"}</span>
        </button>
        <button class="ghost-action" type="button" data-action="profile" data-id="${church.id}" aria-label="Open church profile">
          <i data-lucide="list-checks"></i><span>Profile</span>
        </button>
        <button class="ghost-action" type="button" data-action="suggest-update" data-id="${church.id}" aria-label="Suggest listing update">
          <i data-lucide="message-square-plus"></i><span>Update</span>
        </button>
        <a href="${church.website}" target="_blank" rel="noreferrer">Website</a>
        <a href="tel:${church.phone.replace(/\D/g, "")}">${church.phone}</a>
      </div>
    `;

    article.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      openChurchProfile(church.id, false);
      map.setView([church.lat, church.lng], Math.max(map.getZoom(), 13), { animate: true });
    });

    fragment.appendChild(article);
  });

  elements.resultsList.replaceChildren(fragment);
  refreshIcons();
}

function renderDetailPanel(church) {
  if (!church) {
    elements.detailPanel.hidden = true;
    elements.detailPanel.replaceChildren();
    return;
  }

  const selectedBeliefs = [...state.selectedBeliefs];
  const missingSelected = selectedBeliefs.filter((belief) => !church.beliefs.includes(belief));
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${church.lat},${church.lng}`;
  const practicalTags = church.meta.practical.map((key) => practicalLabels[key]).filter(Boolean);
  const profileSections = Object.entries(beliefGroups)
    .map(([groupKey, items]) => {
      const present = items.filter(([key]) => church.beliefs.includes(key));
      if (!present.length) return "";

      return `
        <section class="profile-group">
          <h4>${groupTitles[groupKey]}</h4>
          <div class="profile-tags">
            ${present.map(([key, label]) => `<span>${label}</span>`).join("")}
          </div>
        </section>
      `;
    })
    .join("");

  elements.detailPanel.hidden = false;
  elements.detailPanel.innerHTML = `
    <div class="detail-header">
      <div>
        <p class="result-family" style="--family:${familyColors[church.family]}">${church.family}</p>
        <h2>${church.name}</h2>
        <p class="tradition">${church.tradition}</p>
      </div>
      <button class="icon-button" type="button" data-action="close-profile" aria-label="Close profile" title="Close profile">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="detail-metrics">
      <span><strong>${church.distance.toFixed(1)}</strong> mi</span>
      <span><strong>${Math.round(church.score * 100)}</strong>% match</span>
      <span><strong>${church.meta.confidenceLevel}/3</strong> source</span>
    </div>
    <div class="result-meta detail-meta">
      <span><i data-lucide="map-pin"></i>${church.address}</span>
      <span><i data-lucide="clock"></i>${church.serviceTimes}</span>
      <span><i data-lucide="phone"></i>${church.phone}</span>
    </div>
    <section class="source-box">
      <div>
        <h4>${church.meta.confidence}</h4>
        <p>${church.meta.sourceDetail}</p>
      </div>
      <span>${church.meta.verifiedAt ? `Verified ${formatDate(church.meta.verifiedAt)}` : "Needs verification"}</span>
    </section>
    <section class="profile-group">
      <h4>Visit Fit</h4>
      <div class="profile-tags">
        ${practicalTags.map((label) => `<span class="practical-tag">${label}</span>`).join("")}
        ${church.meta.languages.map((language) => `<span>${language}</span>`).join("")}
        <span>${church.meta.attendance}</span>
      </div>
    </section>
    <section class="profile-group">
      <h4>Ministries</h4>
      <div class="profile-tags">
        ${church.meta.ministries.map((ministry) => `<span>${ministry}</span>`).join("")}
      </div>
    </section>
    <p class="profile-note">${church.meta.notes}</p>
    ${
      missingSelected.length
        ? `<div class="missing-box"><h4>Selected Filters Not Listed</h4><div class="profile-tags muted-tags">${missingSelected
            .map((key) => `<span>${beliefLabels[key]}</span>`)
            .join("")}</div></div>`
        : ""
    }
    <div class="profile-list">${profileSections}</div>
    <div class="detail-actions">
      <button class="ghost-action ${state.favoriteIds.has(church.id) ? "selected" : ""}" type="button" data-action="favorite" data-id="${church.id}">
        <i data-lucide="heart"></i><span>${state.favoriteIds.has(church.id) ? "Saved" : "Save"}</span>
      </button>
      <button class="ghost-action ${state.visitIds.has(church.id) ? "selected" : ""}" type="button" data-action="plan" data-id="${church.id}">
        <i data-lucide="calendar"></i><span>${state.visitIds.has(church.id) ? "Planned" : "Plan Visit"}</span>
      </button>
      <button class="ghost-action ${state.compareIds.has(church.id) ? "selected" : ""}" type="button" data-action="compare" data-id="${church.id}">
        <i data-lucide="columns-3"></i><span>${state.compareIds.has(church.id) ? "Comparing" : "Compare"}</span>
      </button>
      <button class="ghost-action" type="button" data-action="suggest-update" data-id="${church.id}">
        <i data-lucide="message-square-plus"></i><span>Suggest Update</span>
      </button>
      <a href="${directionsUrl}" target="_blank" rel="noreferrer"><i data-lucide="route"></i><span>Directions</span></a>
      <a href="${church.website}" target="_blank" rel="noreferrer"><i data-lucide="external-link"></i><span>Website</span></a>
    </div>
  `;
  refreshIcons();
}

function renderCompareTray() {
  const selectedChurches = [...state.compareIds].map((id) => enrichChurch(getChurchById(id))).filter(Boolean);

  if (!selectedChurches.length) {
    elements.compareTray.hidden = true;
    elements.compareTray.replaceChildren();
    return;
  }

  const beliefRows = getComparisonBeliefs();

  elements.compareTray.hidden = false;
  elements.compareTray.innerHTML = `
    <div class="compare-head">
      <div>
        <p class="eyebrow">Compare</p>
        <h2>${selectedChurches.length} selected</h2>
      </div>
      <button class="icon-button" type="button" data-compare-action="clear" aria-label="Clear comparison" title="Clear comparison">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
    <div class="compare-churches">
      ${selectedChurches
        .map(
          (church) => `
            <button class="compare-chip" type="button" data-compare-action="profile" data-id="${church.id}" style="--family:${familyColors[church.family]}">
              <span>${church.name}</span>
              <strong>${church.distance.toFixed(1)} mi</strong>
            </button>
          `
        )
        .join("")}
    </div>
    <div class="compare-table" role="table" aria-label="Belief comparison">
      ${beliefRows
        .map(
          (belief) => `
            <div class="compare-row" role="row">
              <span role="cell">${beliefLabels[belief]}</span>
              ${selectedChurches
                .map(
                  (church) => `
                    <button class="compare-cell ${church.beliefs.includes(belief) ? "yes" : "no"}" type="button" data-compare-action="profile" data-id="${church.id}" aria-label="${church.name}: ${
                    church.beliefs.includes(belief) ? "listed" : "not listed"
                  }">
                      <i data-lucide="${church.beliefs.includes(belief) ? "check" : "minus"}"></i>
                    </button>
                  `
                )
                .join("")}
            </div>
          `
        )
        .join("")}
    </div>
  `;
  refreshIcons();
}

function renderVisitPlanner() {
  const plannedChurches = [...state.visitIds]
    .map((id) => enrichChurch(getChurchById(id)))
    .filter((church) => church && church.distance <= state.radius)
    .sort((a, b) => a.distance - b.distance);

  if (!plannedChurches.length) {
    elements.visitPlanner.hidden = true;
    elements.visitPlanner.replaceChildren();
    return;
  }

  const routeUrl = buildRouteUrl(plannedChurches);

  elements.visitPlanner.hidden = false;
  elements.visitPlanner.innerHTML = `
    <div class="planner-head">
      <div>
        <p class="eyebrow">Visit Plan</p>
        <h2>${plannedChurches.length} stop${plannedChurches.length === 1 ? "" : "s"}</h2>
      </div>
      <button class="icon-button" type="button" data-plan-action="clear" aria-label="Clear visit plan" title="Clear visit plan">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
    <div class="planner-list">
      ${plannedChurches
        .map(
          (church, index) => `
            <article class="planner-item" style="--family:${familyColors[church.family]}">
              <span>${index + 1}</span>
              <div>
                <h3>${church.name}</h3>
                <p>${church.serviceTimes}</p>
              </div>
              <button class="icon-button" type="button" data-plan-action="remove" data-id="${church.id}" aria-label="Remove ${church.name}">
                <i data-lucide="x"></i>
              </button>
            </article>
          `
        )
        .join("")}
    </div>
    <a class="route-link" href="${routeUrl}" target="_blank" rel="noreferrer">
      <i data-lucide="route"></i>
      <span>Open route</span>
    </a>
  `;
  refreshIcons();
}

function handleChurchAction(action, id) {
  if (action === "close-profile") {
    state.activeChurchId = null;
    updateView();
    return;
  }

  if (action === "favorite") {
    toggleFavorite(id);
    updateView();
    return;
  }

  if (action === "compare") {
    toggleCompare(id);
    updateView();
    return;
  }

  if (action === "plan") {
    togglePlan(id);
    updateView();
    return;
  }

  if (action === "suggest-update") {
    openUpdateModal(id);
    return;
  }

  if (action === "profile") {
    openChurchProfile(id);
  }
}

function clearFilterToken(type, value) {
  if (type === "family") {
    state.selectedFamilies.delete(value);
    document.querySelector(`[data-family="${CSS.escape(value)}"]`)?.classList.remove("selected");
  }

  if (type === "practical") {
    state.selectedPractical.delete(value);
    renderPracticalFilters();
  }

  if (type === "service") {
    state.selectedService.delete(value);
    renderServiceFilters();
  }

  if (type === "belief") {
    state.selectedBeliefs.delete(value);
    renderBeliefFilters();
  }

  if (value === "favoritesOnly") {
    state.favoritesOnly = false;
    elements.favoritesOnly.checked = false;
  }

  if (value === "verifiedOnly") {
    state.verifiedOnly = false;
    elements.verifiedOnly.checked = false;
  }

  if (value === "matchMode") {
    state.matchMode = "all";
    document.querySelectorAll("[data-match-mode]").forEach((button) => {
      button.classList.toggle("active", button.dataset.matchMode === state.matchMode);
    });
  }

  updateView();
}

function openChurchProfile(id, shouldPan = true) {
  const church = getChurchById(id);
  if (!church) return;

  state.activeChurchId = id;
  if (shouldPan && map) {
    map.setView([church.lat, church.lng], Math.max(map.getZoom(), 13), { animate: true });
  }
  updateView();
}

function toggleFavorite(id) {
  if (state.favoriteIds.has(id)) {
    state.favoriteIds.delete(id);
  } else {
    state.favoriteIds.add(id);
  }
  saveFavoriteIds();
}

function toggleCompare(id) {
  if (state.compareIds.has(id)) {
    state.compareIds.delete(id);
    return;
  }

  const nextIds = [...state.compareIds, id].slice(-3);
  state.compareIds = new Set(nextIds);
}

function togglePlan(id) {
  if (state.visitIds.has(id)) {
    state.visitIds.delete(id);
  } else {
    state.visitIds.add(id);
  }
  saveVisitIds();
}

function openUpdateModal(id) {
  const church = getChurchById(id);
  if (!church) return;

  elements.updateChurchId.value = id;
  elements.updateChurchName.textContent = church.name;
  elements.updateStatus.textContent = "";
  elements.updateForm.reset();
  elements.updateChurchId.value = id;
  elements.updateModal.hidden = false;
  document.body.classList.add("modal-open");
  refreshIcons();
  document.querySelector("#updateType")?.focus();
}

function closeUpdateModal() {
  elements.updateModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function handleUpdateSubmit(event) {
  event.preventDefault();

  const formData = new FormData(elements.updateForm);
  const churchId = formData.get("churchId");
  const church = getChurchById(churchId);
  const report = {
    id: `report-${Date.now()}`,
    churchId,
    churchName: church?.name || "Unknown church",
    type: formData.get("updateType"),
    sourceUrl: String(formData.get("sourceUrl") || "").trim(),
    notes: String(formData.get("notes") || "").trim(),
    createdAt: new Date().toISOString(),
    status: "queued",
  };

  state.updateReports.unshift(report);
  saveUpdateReports();
  elements.updateStatus.textContent = `Saved to review queue (${state.updateReports.length})`;
  elements.updateForm.reset();
  elements.updateChurchId.value = churchId;
  window.setTimeout(closeUpdateModal, 900);
}

function updateMapCenter() {
  if (!map) return;

  const latLng = [state.center.lat, state.center.lng];
  centerMarker.setLatLng(latLng).bindTooltip(state.center.label);
  radiusCircle.setLatLng(latLng);
  radiusCircle.setRadius(milesToMeters(state.radius));
}

async function searchLocation() {
  const query = elements.locationSearch.value.trim();
  if (!query) return;

  setSearchPending(true);

  try {
    const found = await geocode(query);
    if (found) {
      setCenter(found);
    } else {
      setSearchMessage("Location not found");
    }
  } catch (error) {
    setSearchMessage("Search unavailable");
  } finally {
    setSearchPending(false);
  }
}

async function geocode(query) {
  const normalizedQuery = query.toLowerCase().replace(/\s+/g, " ").trim();
  const commaNormalizedQuery = normalizedQuery.replace(/\s*,\s*/g, ", ");
  const fallback =
    cityFallbacks[commaNormalizedQuery] ||
    cityFallbacks[normalizedQuery.replace(/,/g, "")] ||
    cityFallbacks[normalizedQuery.split(",")[0].trim()];
  if (fallback) return fallback;

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("limit", "1");
  url.searchParams.set("q", query);

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) return null;

  const [result] = await response.json();
  if (!result) return null;

  return {
    lat: Number(result.lat),
    lng: Number(result.lon),
    label: result.display_name.split(",").slice(0, 3).join(","),
  };
}

function useCurrentLocation() {
  if (!navigator.geolocation) {
    setSearchMessage("Location unavailable");
    return;
  }

  elements.locateBtn.classList.add("loading");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        label: "Current location",
      });
      elements.locateBtn.classList.remove("loading");
    },
    () => {
      setSearchMessage("Location blocked");
      elements.locateBtn.classList.remove("loading");
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function setCenter(center) {
  state.center = center;
  if (center.radius) {
    state.radius = center.radius;
    elements.radiusRange.value = String(center.radius);
    elements.radiusValue.value = `${center.radius} mi`;
  }
  elements.locationSearch.value = center.label;
  map.setView([center.lat, center.lng], center.zoom || 11, { animate: true });
  updateView();
}

function resetFilters() {
  state.selectedFamilies.clear();
  state.selectedBeliefs.clear();
  state.selectedPractical.clear();
  state.selectedService.clear();
  state.activeChurchId = null;
  state.matchMode = "all";
  state.mapColor = "family";
  state.favoritesOnly = false;
  state.verifiedOnly = false;
  state.radius = 125;
  state.center = { lat: 35.9606, lng: -83.9207, label: "Eastern Tennessee", zoom: 8 };
  elements.locationSearch.value = state.center.label;
  elements.radiusRange.value = "125";
  elements.radiusValue.value = "125 mi";
  elements.favoritesOnly.checked = false;
  elements.verifiedOnly.checked = false;

  document.querySelectorAll("[data-family]").forEach((button) => button.classList.remove("selected"));
  document.querySelectorAll("[data-match-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.matchMode === state.matchMode);
  });
  document.querySelectorAll("[data-map-color]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mapColor === state.mapColor);
  });
  renderBeliefFilters();
  renderPracticalFilters();
  renderServiceFilters();
  if (map) {
    map.setView([state.center.lat, state.center.lng], state.center.zoom || 8, { animate: true });
  }
  updateView();
}

function toggleSetValue(set, value) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
}

function setSearchPending(isPending) {
  elements.searchBtn.classList.toggle("loading", isPending);
  elements.searchBtn.disabled = isPending;
}

function setSearchMessage(message) {
  elements.locationSearch.value = message;
  window.setTimeout(() => {
    if (elements.locationSearch.value === message) {
      elements.locationSearch.value = state.center.label;
    }
  }, 1800);
}

function enrichChurch(church) {
  if (!church) return null;

  const selectedBeliefs = [...state.selectedBeliefs];
  const matchedBeliefs = selectedBeliefs.filter((belief) => church.beliefs.includes(belief));
  const score = selectedBeliefs.length ? matchedBeliefs.length / selectedBeliefs.length : 1;
  const baseMeta = {
    ...defaultChurchMeta,
    ...(churchMeta[church.id] || {}),
  };
  const meta = {
    ...baseMeta,
    serviceTags: [...new Set([...deriveServiceTags(church.serviceTimes), ...baseMeta.serviceTags])],
  };

  return {
    ...church,
    meta,
    distance: getDistanceMiles(state.center, church),
    matchedBeliefs,
    score,
  };
}

function getChurchById(id) {
  return churches.find((church) => church.id === id);
}

function getComparisonBeliefs() {
  const selectedBeliefs = [...state.selectedBeliefs].filter((belief) => beliefLabels[belief]);
  if (selectedBeliefs.length) {
    return selectedBeliefs.slice(0, 8);
  }
  return comparisonBeliefs;
}

function loadFavoriteIds() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(favoriteStorageKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveFavoriteIds() {
  window.localStorage.setItem(favoriteStorageKey, JSON.stringify([...state.favoriteIds]));
}

function loadVisitIds() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(visitStorageKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveVisitIds() {
  window.localStorage.setItem(visitStorageKey, JSON.stringify([...state.visitIds]));
}

function loadUpdateReports() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(updateStorageKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveUpdateReports() {
  window.localStorage.setItem(updateStorageKey, JSON.stringify(state.updateReports));
}

function deriveServiceTags(serviceTimes) {
  const lower = serviceTimes.toLowerCase();
  const tags = new Set();

  if (lower.includes("sun")) tags.add("sunday_morning");
  if (lower.includes("sat")) tags.add("saturday");
  if (lower.includes("wed") || lower.includes("midweek")) tags.add("midweek");
  if (/\b7:\d{2}\s*pm|\b6:\d{2}\s*pm|\b5:\d{2}\s*pm/i.test(serviceTimes)) tags.add("sunday_evening");
  if (/\b8:\d{2}\s*am|\b7:\d{2}\s*am/i.test(serviceTimes)) tags.add("early_service");
  if (/\b10:\d{2}\s*am|\b11:\d{2}\s*am|\b12:\d{2}\s*pm/i.test(serviceTimes)) tags.add("late_morning");

  return [...tags];
}

function buildRouteUrl(churchesForRoute) {
  const stops = churchesForRoute.slice(0, 4);
  const destination = stops[stops.length - 1];
  const waypoints = stops.slice(0, -1).map((church) => `${church.lat},${church.lng}`);
  const url = new URL("https://www.google.com/maps/dir/");
  url.searchParams.set("api", "1");
  url.searchParams.set("destination", `${destination.lat},${destination.lng}`);

  if (waypoints.length) {
    url.searchParams.set("waypoints", waypoints.join("|"));
  }

  return url.toString();
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getDistanceMiles(a, b) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const km = 2 * earthRadiusKm * Math.asin(Math.sqrt(h));
  return km * milesPerKm;
}

function milesToMeters(miles) {
  return miles * 1609.344;
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function runDiagnostics() {
  const previous = {
    selectedFamilies: new Set(state.selectedFamilies),
    selectedBeliefs: new Set(state.selectedBeliefs),
    selectedPractical: new Set(state.selectedPractical),
    selectedService: new Set(state.selectedService),
    favoritesOnly: state.favoritesOnly,
    verifiedOnly: state.verifiedOnly,
    matchMode: state.matchMode,
    mapColor: state.mapColor,
    activeChurchId: state.activeChurchId,
  };

  state.selectedFamilies.clear();
  state.selectedBeliefs.clear();
  state.selectedPractical.clear();
  state.selectedService = new Set(["saturday"]);
  state.favoritesOnly = false;
  state.verifiedOnly = false;
  state.matchMode = "all";
  updateView();

  const serviceCheck = {
    count: elements.resultCount.textContent,
    names: [...document.querySelectorAll(".result-card h3")].map((element) => element.textContent),
    activeFilters: [...document.querySelectorAll("#activeFilters button")].map((element) => element.textContent.trim()),
  };

  state.mapColor = "source";
  updateView();
  const sourceColorCheck = getComputedStyle(document.querySelector(".church-marker")).getPropertyValue("--marker").trim();

  state.selectedFamilies = previous.selectedFamilies;
  state.selectedBeliefs = previous.selectedBeliefs;
  state.selectedPractical = previous.selectedPractical;
  state.selectedService = previous.selectedService;
  state.favoritesOnly = previous.favoritesOnly;
  state.verifiedOnly = previous.verifiedOnly;
  state.matchMode = previous.matchMode;
  state.mapColor = previous.mapColor;
  state.activeChurchId = previous.activeChurchId;
  updateView();

  return {
    serviceCheck,
    sourceColorCheck,
    updateButtons: document.querySelectorAll('[data-action="suggest-update"]').length,
    modalReady: Boolean(elements.updateModal && elements.updateForm),
    unreplacedIcons: [...document.querySelectorAll("i[data-lucide]")].map((element) => element.getAttribute("data-lucide")),
  };
}

window.churchAtlasDiagnostics = {
  run: runDiagnostics,
};

document.addEventListener("DOMContentLoaded", init);
