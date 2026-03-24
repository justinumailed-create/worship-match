export const radiusOptions = [5, 10, 25, 50, 100];

export const denominationOptions = [
  "Non-denominational",
  "Baptist",
  "Methodist",
  "Pentecostal",
  "Presbyterian",
  "Lutheran",
  "Catholic",
  "Episcopal",
  "Church of God",
  "Assemblies of God"
];

export const worshipStyleOptions = [
  "Contemporary",
  "Traditional",
  "Blended",
  "Gospel",
  "Charismatic"
];

export const preachingStyleOptions = [
  "Expository",
  "Biblical & practical",
  "Conversational",
  "Spirit-led",
  "Teaching-focused"
];

export const sizeOptions = ["Small", "Medium", "Large"];

export const ministryOptions = [
  "Kids",
  "Students",
  "Young Adults",
  "Women",
  "Men",
  "Seniors",
  "Missions",
  "Recovery",
  "Small Groups",
  "Outreach",
  "Choir",
  "Special Needs"
];

export const accessibilityOptions = [
  "Wheelchair Access",
  "ASL Interpretation",
  "Hearing Assistance",
  "Sensory-Friendly",
  "Spanish Translation"
];

export const churches = [
  {
    id: "new-welcome-baptist",
    slug: "new-welcome-baptist-detroit",
    name: "New Welcome Baptist Church",
    city: "Detroit",
    state: "MI",
    zip: "48214",
    address: "3090 Cadillac Blvd, Detroit, MI 48214",
    denomination: "Baptist",
    worshipStyle: "Gospel",
    preachingStyle: "Biblical & practical",
    size: "Medium",
    ministries: ["Kids", "Students", "Women", "Men", "Choir", "Outreach", "Recovery"],
    accessibility: ["Wheelchair Access", "Hearing Assistance"],
    online: true,
    serviceTimes: ["Sundays 10:30 AM", "Bible Study Wednesdays 6:30 PM"],
    email: "dockennethbrock@yhaoo.com",
    phone: "313 844-8875",
    website: "https://www.newwelcomebaptist.org",
    livestreamUrl: "https://www.newwelcomebaptist.org/live",
    description:
      "A warm and welcoming Baptist church in Detroit with a heart for Gospel worship and practical teaching.",
    lat: 42.368,
    lng: -83.001,
    approved: true
  },
  {
    id: "grace-harbor",
    slug: "grace-harbor-church-dallas",
    name: "Grace Harbor Church",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    address: "1450 Ross Ave, Dallas, TX 75201",
    denomination: "Non-denominational",
    worshipStyle: "Contemporary",
    preachingStyle: "Biblical & practical",
    size: "Large",
    ministries: ["Kids", "Students", "Young Adults", "Women", "Men", "Missions", "Small Groups"],
    accessibility: ["Wheelchair Access", "ASL Interpretation", "Sensory-Friendly"],
    online: true,
    serviceTimes: ["Sundays 9:00 AM", "Sundays 11:00 AM", "Wednesdays 7:00 PM"],
    email: "hello@graceharborchurch.org",
    phone: "(214) 555-0144",
    website: "https://www.graceharborchurch.org",
    livestreamUrl: "https://www.graceharborchurch.org/live",
    description:
      "A warm downtown church with practical Bible teaching, strong family ministries, and clear next steps for first-time guests.",
    lat: 32.7815,
    lng: -96.797,
    approved: true
  },
  {
    id: "new-mercy",
    slug: "new-mercy-baptist-atlanta",
    name: "New Mercy Baptist",
    city: "Atlanta",
    state: "GA",
    zip: "30303",
    address: "210 Peachtree St NW, Atlanta, GA 30303",
    denomination: "Baptist",
    worshipStyle: "Gospel",
    preachingStyle: "Expository",
    size: "Medium",
    ministries: ["Kids", "Students", "Women", "Men", "Choir", "Outreach", "Recovery"],
    accessibility: ["Wheelchair Access", "Hearing Assistance"],
    online: true,
    serviceTimes: ["Sundays 8:30 AM", "Sundays 10:30 AM", "Bible Study Wednesdays 6:30 PM"],
    email: "connect@newmercyatl.org",
    phone: "(404) 555-0182",
    website: "https://www.newmercyatl.org",
    livestreamUrl: "https://www.newmercyatl.org/watch",
    description:
      "A welcoming city church rooted in Gospel worship, community outreach, and verse-by-verse preaching.",
    lat: 33.7537,
    lng: -84.3879,
    approved: true
  },
  {
    id: "church-003",
    slug: "desert-light-fellowship-phoenix",
    name: "Desert Light Fellowship",
    city: "Phoenix",
    state: "AZ",
    zip: "85004",
    address: "515 E Monroe St, Phoenix, AZ 85004",
    denomination: "Assemblies of God",
    worshipStyle: "Charismatic",
    preachingStyle: "Spirit-led",
    size: "Large",
    ministries: ["Kids", "Students", "Young Adults", "Missions", "Recovery", "Outreach"],
    accessibility: ["Wheelchair Access", "Spanish Translation"],
    online: true,
    serviceTimes: ["Sundays 9:30 AM", "Sundays 12:00 PM", "Fridays 7:00 PM Prayer"],
    email: "hello@desertlight.church",
    phone: "(602) 555-0151",
    website: "https://www.desertlight.church",
    livestreamUrl: "https://www.desertlight.church/live",
    description:
      "A Spirit-filled church with vibrant worship, prayer gatherings, and wide-open room for new people to connect.",
    lat: 33.4484,
    lng: -112.074,
    approved: true
  },
  {
    id: "church-004",
    slug: "trinity-common-charlotte",
    name: "Trinity Common Church",
    city: "Charlotte",
    state: "NC",
    zip: "28202",
    address: "331 S Tryon St, Charlotte, NC 28202",
    denomination: "Presbyterian",
    worshipStyle: "Traditional",
    preachingStyle: "Teaching-focused",
    size: "Medium",
    ministries: ["Kids", "Women", "Men", "Seniors", "Small Groups", "Missions"],
    accessibility: ["Wheelchair Access", "Hearing Assistance"],
    online: true,
    serviceTimes: ["Sundays 9:00 AM", "Sundays 11:15 AM", "Sunday School 10:15 AM"],
    email: "office@trinitycommon.org",
    phone: "(704) 555-0129",
    website: "https://www.trinitycommon.org",
    livestreamUrl: "https://www.trinitycommon.org/stream",
    description:
      "Historic liturgy, thoughtful teaching, and a close-knit mid-size congregation in the heart of Charlotte.",
    lat: 35.2271,
    lng: -80.8431,
    approved: true
  },
  {
    id: "church-005",
    slug: "lakeview-community-chicago",
    name: "Lakeview Community Church",
    city: "Chicago",
    state: "IL",
    zip: "60601",
    address: "151 N Michigan Ave, Chicago, IL 60601",
    denomination: "Non-denominational",
    worshipStyle: "Blended",
    preachingStyle: "Biblical & practical",
    size: "Large",
    ministries: ["Kids", "Students", "Young Adults", "Women", "Men", "Small Groups", "Outreach"],
    accessibility: ["Wheelchair Access", "ASL Interpretation", "Hearing Assistance"],
    online: true,
    serviceTimes: ["Sundays 9:00 AM", "Sundays 11:00 AM", "Groups throughout the week"],
    email: "team@lakeviewcommunity.org",
    phone: "(312) 555-0174",
    website: "https://www.lakeviewcommunity.org",
    livestreamUrl: "https://www.lakeviewcommunity.org/live",
    description:
      "A multi-generational church blending worship styles with practical preaching and strong small group life.",
    lat: 41.8864,
    lng: -87.6231,
    approved: true
  },
  {
    id: "church-006",
    slug: "anthem-city-church-nashville",
    name: "Anthem City Church",
    city: "Nashville",
    state: "TN",
    zip: "37203",
    address: "910 Broadway, Nashville, TN 37203",
    denomination: "Church of God",
    worshipStyle: "Contemporary",
    preachingStyle: "Conversational",
    size: "Medium",
    ministries: ["Kids", "Students", "Young Adults", "Women", "Men", "Outreach"],
    accessibility: ["Wheelchair Access", "Sensory-Friendly"],
    online: true,
    serviceTimes: ["Sundays 10:00 AM", "Tuesdays 6:30 PM Prayer Night"],
    email: "connect@anthemcitytn.org",
    phone: "(615) 555-0132",
    website: "https://www.anthemcitytn.org",
    livestreamUrl: "https://www.anthemcitytn.org/watch",
    description:
      "An upbeat church with modern worship, honest teaching, and clear pathways for families and young adults.",
    lat: 36.1551,
    lng: -86.7845,
    approved: true
  },
  {
    id: "church-007",
    slug: "bay-hope-methodist-orlando",
    name: "Bay Hope Methodist",
    city: "Orlando",
    state: "FL",
    zip: "32801",
    address: "100 E Pine St, Orlando, FL 32801",
    denomination: "Methodist",
    worshipStyle: "Traditional",
    preachingStyle: "Biblical & practical",
    size: "Large",
    ministries: ["Kids", "Students", "Women", "Men", "Seniors", "Missions", "Choir"],
    accessibility: ["Wheelchair Access", "Spanish Translation"],
    online: true,
    serviceTimes: ["Sundays 8:00 AM", "Sundays 9:30 AM", "Sundays 11:15 AM"],
    email: "welcome@bayhopemethodist.org",
    phone: "(407) 555-0188",
    website: "https://www.bayhopemethodist.org",
    livestreamUrl: "https://www.bayhopemethodist.org/live",
    description:
      "A trusted church home known for rich hymns, strong volunteer teams, and practical teaching for everyday life.",
    lat: 28.5421,
    lng: -81.379,
    approved: true
  },
  {
    id: "church-008",
    slug: "foothills-faith-denver",
    name: "Foothills Faith Church",
    city: "Denver",
    state: "CO",
    zip: "80202",
    address: "1610 Wynkoop St, Denver, CO 80202",
    denomination: "Non-denominational",
    worshipStyle: "Contemporary",
    preachingStyle: "Expository",
    size: "Medium",
    ministries: ["Kids", "Students", "Young Adults", "Recovery", "Small Groups", "Missions"],
    accessibility: ["Wheelchair Access", "Hearing Assistance", "Sensory-Friendly"],
    online: true,
    serviceTimes: ["Sundays 9:00 AM", "Sundays 10:45 AM", "Thursday Bible Study 6:30 PM"],
    email: "hello@foothillsfaith.org",
    phone: "(303) 555-0169",
    website: "https://www.foothillsfaith.org",
    livestreamUrl: "https://www.foothillsfaith.org/live",
    description:
      "A Denver church with expository preaching, thoughtful discipleship, and a strong culture of healing and care.",
    lat: 39.7527,
    lng: -104.9992,
    approved: true
  },
  {
    id: "church-009",
    slug: "north-sound-lutheran-seattle",
    name: "North Sound Lutheran",
    city: "Seattle",
    state: "WA",
    zip: "98101",
    address: "1200 5th Ave, Seattle, WA 98101",
    denomination: "Lutheran",
    worshipStyle: "Traditional",
    preachingStyle: "Teaching-focused",
    size: "Small",
    ministries: ["Kids", "Women", "Men", "Seniors", "Choir", "Outreach"],
    accessibility: ["Wheelchair Access", "Hearing Assistance"],
    online: false,
    serviceTimes: ["Sundays 10:00 AM", "Thursday Communion 6:00 PM"],
    email: "office@northsoundlutheran.org",
    phone: "(206) 555-0194",
    website: "https://www.northsoundlutheran.org",
    livestreamUrl: "",
    description:
      "A reverent and intimate congregation with thoughtful liturgy, pastoral care, and a strong volunteer spirit.",
    lat: 47.6062,
    lng: -122.3321,
    approved: true
  },
  {
    id: "church-010",
    slug: "harbor-house-la",
    name: "Harbor House Church",
    city: "Los Angeles",
    state: "CA",
    zip: "90012",
    address: "300 N Los Angeles St, Los Angeles, CA 90012",
    denomination: "Pentecostal",
    worshipStyle: "Charismatic",
    preachingStyle: "Spirit-led",
    size: "Large",
    ministries: ["Kids", "Students", "Young Adults", "Women", "Men", "Recovery", "Outreach"],
    accessibility: ["Wheelchair Access", "Spanish Translation", "Sensory-Friendly"],
    online: true,
    serviceTimes: ["Sundays 9:30 AM", "Sundays 12:30 PM", "Friday Worship 7:00 PM"],
    email: "team@harborhousechurch.com",
    phone: "(213) 555-0105",
    website: "https://www.harborhousechurch.com",
    livestreamUrl: "https://www.harborhousechurch.com/watch",
    description:
      "A high-energy church with bold worship, prayer gatherings, and compassionate outreach throughout Los Angeles.",
    lat: 34.0537,
    lng: -118.2428,
    approved: true
  },
  {
    id: "church-011",
    slug: "cathedral-of-hope-philadelphia",
    name: "Cathedral of Hope Parish",
    city: "Philadelphia",
    state: "PA",
    zip: "19107",
    address: "915 Market St, Philadelphia, PA 19107",
    denomination: "Catholic",
    worshipStyle: "Traditional",
    preachingStyle: "Teaching-focused",
    size: "Large",
    ministries: ["Kids", "Women", "Men", "Seniors", "Missions", "Choir", "Outreach"],
    accessibility: ["Wheelchair Access", "Hearing Assistance", "Spanish Translation"],
    online: true,
    serviceTimes: ["Saturday Vigil 5:00 PM", "Sundays 8:30 AM", "Sundays 11:00 AM"],
    email: "parish@cathedralofhopepa.org",
    phone: "(215) 555-0121",
    website: "https://www.cathedralofhopepa.org",
    livestreamUrl: "https://www.cathedralofhopepa.org/live",
    description:
      "A downtown parish with reverent worship, compassionate ministries, and wide community support.",
    lat: 39.9526,
    lng: -75.1652,
    approved: true
  },
  {
    id: "church-012",
    slug: "riverstone-chapel-minneapolis",
    name: "Riverstone Chapel",
    city: "Minneapolis",
    state: "MN",
    zip: "55401",
    address: "210 3rd Ave S, Minneapolis, MN 55401",
    denomination: "Episcopal",
    worshipStyle: "Blended",
    preachingStyle: "Conversational",
    size: "Small",
    ministries: ["Kids", "Women", "Men", "Small Groups", "Outreach", "Choir"],
    accessibility: ["Wheelchair Access", "ASL Interpretation"],
    online: true,
    serviceTimes: ["Sundays 9:30 AM", "Wednesday Evening Prayer 6:00 PM"],
    email: "office@riverstonechapel.org",
    phone: "(612) 555-0118",
    website: "https://www.riverstonechapel.org",
    livestreamUrl: "https://www.riverstonechapel.org/live",
    description:
      "A beautiful liturgical church with blended worship, pastoral warmth, and a strong neighborhood feel.",
    lat: 44.9833,
    lng: -93.2666,
    approved: true
  },
  {
    id: "church-013",
    slug: "crossing-point-kansas-city",
    name: "Crossing Point Church",
    city: "Kansas City",
    state: "MO",
    zip: "64106",
    address: "500 Grand Blvd, Kansas City, MO 64106",
    denomination: "Baptist",
    worshipStyle: "Contemporary",
    preachingStyle: "Expository",
    size: "Medium",
    ministries: ["Kids", "Students", "Young Adults", "Men", "Women", "Missions", "Small Groups"],
    accessibility: ["Wheelchair Access", "Sensory-Friendly"],
    online: true,
    serviceTimes: ["Sundays 9:15 AM", "Sundays 11:00 AM", "Wednesday Midweek 6:30 PM"],
    email: "hello@crossingpointkc.org",
    phone: "(816) 555-0111",
    website: "https://www.crossingpointkc.org",
    livestreamUrl: "https://www.crossingpointkc.org/live",
    description:
      "A Scripture-centered church with contemporary worship and a strong discipleship rhythm for families.",
    lat: 39.0997,
    lng: -94.5786,
    approved: true
  },
  {
    id: "church-014",
    slug: "mesa-grace-albuquerque",
    name: "Mesa Grace Community",
    city: "Albuquerque",
    state: "NM",
    zip: "87102",
    address: "600 Central Ave SW, Albuquerque, NM 87102",
    denomination: "Methodist",
    worshipStyle: "Blended",
    preachingStyle: "Biblical & practical",
    size: "Small",
    ministries: ["Kids", "Recovery", "Outreach", "Small Groups", "Seniors"],
    accessibility: ["Wheelchair Access", "Spanish Translation", "Hearing Assistance"],
    online: false,
    serviceTimes: ["Sundays 10:00 AM", "Tuesday Recovery 7:00 PM"],
    email: "care@mesagrace.org",
    phone: "(505) 555-0148",
    website: "https://www.mesagrace.org",
    livestreamUrl: "",
    description:
      "A compassionate neighborhood church known for practical preaching, recovery support, and deep care.",
    lat: 35.0844,
    lng: -106.6504,
    approved: true
  },
  {
    id: "church-015",
    slug: "oak-and-light-columbus",
    name: "Oak & Light Church",
    city: "Columbus",
    state: "OH",
    zip: "43215",
    address: "75 E State St, Columbus, OH 43215",
    denomination: "Non-denominational",
    worshipStyle: "Contemporary",
    preachingStyle: "Conversational",
    size: "Large",
    ministries: ["Kids", "Students", "Young Adults", "Women", "Men", "Small Groups", "Special Needs"],
    accessibility: ["Wheelchair Access", "Sensory-Friendly", "ASL Interpretation"],
    online: true,
    serviceTimes: ["Sundays 9:00 AM", "Sundays 10:45 AM", "Young Adults Thursdays 7:00 PM"],
    email: "team@oakandlight.church",
    phone: "(614) 555-0179",
    website: "https://www.oakandlight.church",
    livestreamUrl: "https://www.oakandlight.church/live",
    description:
      "A church designed for easy connection with family support, approachable preaching, and vibrant worship.",
    lat: 39.9612,
    lng: -82.9988,
    approved: true
  },
  {
    id: "church-016",
    slug: "common-table-richmond",
    name: "Common Table Church",
    city: "Richmond",
    state: "VA",
    zip: "23219",
    address: "301 E Broad St, Richmond, VA 23219",
    denomination: "Episcopal",
    worshipStyle: "Traditional",
    preachingStyle: "Conversational",
    size: "Small",
    ministries: ["Young Adults", "Women", "Men", "Missions", "Outreach", "Choir"],
    accessibility: ["Wheelchair Access", "Spanish Translation"],
    online: true,
    serviceTimes: ["Sundays 10:00 AM", "Compline Wednesdays 6:00 PM"],
    email: "hello@commontablerva.org",
    phone: "(804) 555-0192",
    website: "https://www.commontablerva.org",
    livestreamUrl: "https://www.commontablerva.org/watch",
    description:
      "A downtown congregation with historic worship, thoughtful conversation, and a missional heart.",
    lat: 37.5407,
    lng: -77.436,
    approved: true
  },
  {
    id: "church-017",
    slug: "coastline-bible-san-diego",
    name: "Coastline Bible Church",
    city: "San Diego",
    state: "CA",
    zip: "92101",
    address: "777 Front St, San Diego, CA 92101",
    denomination: "Presbyterian",
    worshipStyle: "Blended",
    preachingStyle: "Expository",
    size: "Medium",
    ministries: ["Kids", "Students", "Young Adults", "Women", "Men", "Missions"],
    accessibility: ["Wheelchair Access", "Hearing Assistance", "Sensory-Friendly"],
    online: true,
    serviceTimes: ["Sundays 9:00 AM", "Sundays 11:00 AM", "Friday Young Adults 7:00 PM"],
    email: "connect@coastlinebible.org",
    phone: "(619) 555-0158",
    website: "https://www.coastlinebible.org",
    livestreamUrl: "https://www.coastlinebible.org/live",
    description:
      "A balanced church for families and young adults with strong preaching and an easy on-ramp for newcomers.",
    lat: 32.7157,
    lng: -117.1611,
    approved: true
  },
  {
    id: "restoration-temple",
    slug: "restoration-temple-detroit",
    name: "Restoration Temple",
    city: "Detroit",
    state: "MI",
    zip: "48226",
    address: "101 W Fort St, Detroit, MI 48226",
    denomination: "Pentecostal",
    worshipStyle: "Gospel",
    preachingStyle: "Spirit-led",
    size: "Large",
    ministries: ["Kids", "Students", "Women", "Men", "Choir", "Recovery", "Outreach"],
    accessibility: ["Wheelchair Access", "Hearing Assistance"],
    online: true,
    serviceTimes: ["Sundays 9:30 AM", "Sundays 12:00 PM", "Friday Revival 7:30 PM"],
    email: "care@restorationtemple.org",
    phone: "(313) 555-0115",
    website: "https://www.restorationtemple.org",
    livestreamUrl: "https://www.restorationtemple.org/watch",
    description:
      "A deeply welcoming church with powerful worship, prayer ministry, and strong recovery and outreach teams.",
    lat: 42.3314,
    lng: -83.0458,
    approved: true
  },
  {
    id: "church-019",
    slug: "beacon-hill-parish-boston",
    name: "Beacon Hill Parish",
    city: "Boston",
    state: "MA",
    zip: "02108",
    address: "15 Beacon St, Boston, MA 02108",
    denomination: "Catholic",
    worshipStyle: "Traditional",
    preachingStyle: "Teaching-focused",
    size: "Medium",
    ministries: ["Kids", "Women", "Men", "Seniors", "Missions", "Choir"],
    accessibility: ["Wheelchair Access", "Spanish Translation"],
    online: false,
    serviceTimes: ["Saturday Vigil 4:30 PM", "Sundays 9:00 AM", "Daily Mass 12:10 PM"],
    email: "parish@beaconhillparish.org",
    phone: "(617) 555-0191",
    website: "https://www.beaconhillparish.org",
    livestreamUrl: "",
    description:
      "A historic Catholic parish offering reverent services, weekday rhythms, and long-standing pastoral care.",
    lat: 42.3601,
    lng: -71.0589,
    approved: true
  },
  {
    id: "church-020",
    slug: "crescent-city-faith-new-orleans",
    name: "Crescent City Faith",
    city: "New Orleans",
    state: "LA",
    zip: "70112",
    address: "800 Canal St, New Orleans, LA 70112",
    denomination: "Baptist",
    worshipStyle: "Gospel",
    preachingStyle: "Biblical & practical",
    size: "Medium",
    ministries: ["Kids", "Students", "Women", "Men", "Choir", "Missions", "Outreach"],
    accessibility: ["Wheelchair Access", "Spanish Translation", "Hearing Assistance"],
    online: true,
    serviceTimes: ["Sundays 9:00 AM", "Sundays 11:00 AM", "Wednesday Prayer 6:30 PM"],
    email: "hello@crescentcityfaith.org",
    phone: "(504) 555-0180",
    website: "https://www.crescentcityfaith.org",
    livestreamUrl: "https://www.crescentcityfaith.org/live",
    description:
      "A musical and deeply hospitable church with strong community outreach and practical discipleship.",
    lat: 29.9511,
    lng: -90.0715,
    approved: true
  },
  {
    id: "church-021",
    slug: "anthem-prairie-oklahoma-city",
    name: "Anthem Prairie Church",
    city: "Oklahoma City",
    state: "OK",
    zip: "73102",
    address: "201 N Walker Ave, Oklahoma City, OK 73102",
    denomination: "Church of God",
    worshipStyle: "Contemporary",
    preachingStyle: "Biblical & practical",
    size: "Large",
    ministries: ["Kids", "Students", "Young Adults", "Women", "Men", "Recovery", "Small Groups"],
    accessibility: ["Wheelchair Access", "Sensory-Friendly"],
    online: true,
    serviceTimes: ["Sundays 9:30 AM", "Sundays 11:15 AM", "Tuesday Prayer 6:30 PM"],
    email: "team@anthemprairie.org",
    phone: "(405) 555-0165",
    website: "https://www.anthemprairie.org",
    livestreamUrl: "https://www.anthemprairie.org/watch",
    description:
      "A family-focused church with approachable preaching, modern worship, and real care for recovery journeys.",
    lat: 35.4676,
    lng: -97.5164,
    approved: true
  },
  {
    id: "church-022",
    slug: "gathering-place-tulsa",
    name: "Gathering Place Church",
    city: "Tulsa",
    state: "OK",
    zip: "74103",
    address: "400 S Boston Ave, Tulsa, OK 74103",
    denomination: "Non-denominational",
    worshipStyle: "Contemporary",
    preachingStyle: "Teaching-focused",
    size: "Medium",
    ministries: ["Kids", "Students", "Young Adults", "Women", "Men", "Small Groups", "Special Needs"],
    accessibility: ["Wheelchair Access", "ASL Interpretation", "Sensory-Friendly"],
    online: true,
    serviceTimes: ["Sundays 9:00 AM", "Sundays 10:45 AM", "Wednesday Teams 6:30 PM"],
    email: "hello@gatheringplacetulsa.org",
    phone: "(918) 555-0108",
    website: "https://www.gatheringplacetulsa.org",
    livestreamUrl: "https://www.gatheringplacetulsa.org/live",
    description:
      "A clean, modern church platforming strong family ministries, sensory-friendly support, and clear teaching.",
    lat: 36.15398,
    lng: -95.99278,
    approved: true
  },
  {
    id: "church-023",
    slug: "sacred-trails-sacramento",
    name: "Sacred Trails Fellowship",
    city: "Sacramento",
    state: "CA",
    zip: "95814",
    address: "1123 J St, Sacramento, CA 95814",
    denomination: "Methodist",
    worshipStyle: "Blended",
    preachingStyle: "Conversational",
    size: "Small",
    ministries: ["Kids", "Women", "Men", "Seniors", "Outreach", "Recovery"],
    accessibility: ["Wheelchair Access", "Spanish Translation", "Sensory-Friendly"],
    online: false,
    serviceTimes: ["Sundays 10:00 AM", "Thursday Community Dinner 6:00 PM"],
    email: "connect@sacredtrails.org",
    phone: "(916) 555-0124",
    website: "https://www.sacredtrails.org",
    livestreamUrl: "",
    description:
      "A gentle, neighborhood church with blended worship, recovery support, and a strong culture of welcome.",
    lat: 38.5816,
    lng: -121.4944,
    approved: true
  },
  {
    id: "church-024",
    slug: "three-rivers-church-pittsburgh",
    name: "Three Rivers Church",
    city: "Pittsburgh",
    state: "PA",
    zip: "15222",
    address: "601 Liberty Ave, Pittsburgh, PA 15222",
    denomination: "Presbyterian",
    worshipStyle: "Traditional",
    preachingStyle: "Expository",
    size: "Medium",
    ministries: ["Kids", "Students", "Women", "Men", "Missions", "Small Groups", "Choir"],
    accessibility: ["Wheelchair Access", "Hearing Assistance", "ASL Interpretation"],
    online: true,
    serviceTimes: ["Sundays 9:00 AM", "Sundays 11:00 AM", "Wednesday Bible Study 6:30 PM"],
    email: "office@threeriverschurch.org",
    phone: "(412) 555-0199",
    website: "https://www.threeriverschurch.org",
    livestreamUrl: "https://www.threeriverschurch.org/live",
    description:
      "A Scripture-rich church with classic worship, strong choir and missions pathways, and welcoming hosts.",
    lat: 40.4406,
    lng: -79.9959,
    approved: true
  },
  {
    id: "church-025",
    slug: "river-renewal-tempe",
    name: "River Renewal Church",
    city: "Tempe",
    state: "AZ",
    zip: "85281",
    address: "501 S Mill Ave, Tempe, AZ 85281",
    denomination: "Non-denominational",
    worshipStyle: "Contemporary",
    preachingStyle: "Conversational",
    size: "Medium",
    ministries: ["Students", "Young Adults", "Women", "Men", "Outreach", "Small Groups"],
    accessibility: ["Wheelchair Access", "Sensory-Friendly"],
    online: true,
    serviceTimes: ["Sundays 10:00 AM", "Thursday YA Night 7:00 PM"],
    email: "hello@riverrenewal.church",
    phone: "(480) 555-0133",
    website: "https://www.riverrenewal.church",
    livestreamUrl: "https://www.riverrenewal.church/live",
    description:
      "A college-city church with modern worship and lots of student and young adult connection points.",
    lat: 33.4255,
    lng: -111.94,
    approved: false
  },
  {
    id: "church-026",
    slug: "harvest-parish-jacksonville",
    name: "Harvest Parish",
    city: "Jacksonville",
    state: "FL",
    zip: "32202",
    address: "100 N Laura St, Jacksonville, FL 32202",
    denomination: "Catholic",
    worshipStyle: "Traditional",
    preachingStyle: "Teaching-focused",
    size: "Small",
    ministries: ["Kids", "Women", "Men", "Seniors", "Choir"],
    accessibility: ["Wheelchair Access", "Hearing Assistance"],
    online: false,
    serviceTimes: ["Sundays 10:30 AM", "Daily Mass 12:00 PM"],
    email: "parish@harvestparish.org",
    phone: "(904) 555-0142",
    website: "https://www.harvestparish.org",
    livestreamUrl: "",
    description:
      "A quiet parish with consistent weekday rhythms, pastoral care, and a close small congregation.",
    lat: 30.3322,
    lng: -81.6557,
    approved: false
  }
];

const extraZipLocations = {
  "48214": { lat: 42.368, lng: -83.001, city: "Detroit", state: "MI" },
  "10001": { lat: 40.7506, lng: -73.9972, city: "New York", state: "NY" },
  "77002": { lat: 29.7569, lng: -95.3625, city: "Houston", state: "TX" },
  "63101": { lat: 38.627, lng: -90.1994, city: "St. Louis", state: "MO" },
  "96813": { lat: 21.307, lng: -157.8584, city: "Honolulu", state: "HI" },
  "84101": { lat: 40.7565, lng: -111.899, city: "Salt Lake City", state: "UT" },
  "27601": { lat: 35.7796, lng: -78.6382, city: "Raleigh", state: "NC" },
  "89101": { lat: 36.1716, lng: -115.1391, city: "Las Vegas", state: "NV" }
};

const zipLocations = churches.reduce((accumulator, church) => {
  accumulator[church.zip] = {
    lat: church.lat,
    lng: church.lng,
    city: church.city,
    state: church.state
  };

  return accumulator;
}, extraZipLocations);

export function normalizeMultiValue(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function normalizeZip(zip) {
  return String(zip || "")
    .replace(/\D/g, "")
    .slice(0, 5);
}

export function getApprovedChurches() {
  return churches.filter((church) => church.approved);
}

export function getChurchBySlug(slug) {
  return getApprovedChurches().find((church) => church.slug === slug) || null;
}

export function resolveZipLocation(zip) {
  const normalized = normalizeZip(zip);
  const entries = Object.entries(zipLocations);

  if (!normalized || entries.length === 0) {
    return null;
  }

  if (zipLocations[normalized]) {
    return { zip: normalized, ...zipLocations[normalized] };
  }

  const firstThree = normalized.slice(0, 3);
  const sameRegion = entries.filter(([entryZip]) => entryZip.slice(0, 3) === firstThree);
  const candidates = sameRegion.length > 0 ? sameRegion : entries;

  const nearest = candidates.reduce((closest, current) => {
    const distance = Math.abs(Number(current[0]) - Number(normalized));

    if (!closest || distance < closest.distance) {
      return { distance, zip: current[0], data: current[1] };
    }

    return closest;
  }, null);

  return nearest ? { zip: nearest.zip, ...nearest.data, approximate: true } : null;
}

export function milesBetween(lat1, lng1, lat2, lng2) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadiusMiles = 3958.8;
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(deltaLng / 2) *
      Math.sin(deltaLng / 2);

  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(a));
}

function createReasons(church, preferences, scoreBreakdown) {
  const reasons = [];

  if (scoreBreakdown.distanceScore > 0) {
    const milesAway = Math.round(scoreBreakdown.distanceMiles);
    reasons.push(
      milesAway <= preferences.radius
        ? `Within about ${milesAway} miles of your ZIP`
        : `Still reachable at about ${milesAway} miles away`
    );
  }

  if (scoreBreakdown.denominationScore > 0) {
    reasons.push(`Matches your ${church.denomination} preference`);
  }

  if (scoreBreakdown.worshipScore > 0) {
    reasons.push(`${church.worshipStyle} worship fits what you selected`);
  }

  if (scoreBreakdown.preachingScore > 0) {
    reasons.push(`${church.preachingStyle} preaching style aligns with your preference`);
  }

  if (scoreBreakdown.sizeScore > 0) {
    reasons.push(`${church.size} congregation size matches what you asked for`);
  }

  if (scoreBreakdown.ministryScore > 0) {
    reasons.push(`Shared ministries: ${scoreBreakdown.ministryMatches.slice(0, 3).join(", ")}`);
  }

  if (scoreBreakdown.accessibilityMatches.length > 0) {
    reasons.push(`Accessibility fit: ${scoreBreakdown.accessibilityMatches.join(", ")}`);
  }

  if (preferences.onlinePreference === "yes" && church.online) {
    reasons.push("Offers online worship and livestream access");
  }

  if (reasons.length < 2 && church.serviceTimes[0]) {
    reasons.push(`Easy next step with ${church.serviceTimes[0]}`);
  }

  return reasons.slice(0, 3);
}

export function computeMatches(preferences, churchList = getApprovedChurches()) {
  const radius = Number(preferences.radius || 25);
  const location = resolveZipLocation(preferences.zip);
  const selectedMinistries = normalizeMultiValue(preferences.ministries);
  const selectedAccessibility = normalizeMultiValue(preferences.accessibility);
  const maxScore =
    30 +
    (preferences.denomination ? 10 : 0) +
    (preferences.worshipStyle ? 15 : 0) +
    (preferences.preachingStyle ? 10 : 0) +
    (preferences.size ? 10 : 0) +
    (selectedMinistries.length > 0 ? 25 : 0);

  return churchList
    .filter(church => church.approved) // Only match approved churches
    .map((church) => {
      const distanceMiles = location ? milesBetween(location.lat, location.lng, church.lat, church.lng) : 0;
      const distanceScore = location ? Math.max(0, Math.round(30 * (1 - distanceMiles / (radius * 2)))) : 0;
      const denominationScore =
        preferences.denomination && church.denomination === preferences.denomination ? 10 : 0;
      const worshipScore =
        preferences.worshipStyle && church.worshipStyle === preferences.worshipStyle ? 15 : 0;
      const preachingScore =
        preferences.preachingStyle && church.preachingStyle === preferences.preachingStyle ? 10 : 0;
      const sizeScore = preferences.size && church.size === preferences.size ? 10 : 0;
      const ministryMatches = selectedMinistries.filter((ministry) => church.ministries.includes(ministry));
      const ministryScore =
        selectedMinistries.length > 0
          ? Math.round((ministryMatches.length / selectedMinistries.length) * 25)
          : 0;
      const accessibilityMatches = selectedAccessibility.filter((need) =>
        church.accessibility.includes(need)
      );
      const onlineAligned =
        preferences.onlinePreference === "no-preference" ||
        !preferences.onlinePreference ||
        (preferences.onlinePreference === "yes" && church.online) ||
        (preferences.onlinePreference === "no" && !church.online);

      const totalScore =
        distanceScore +
        denominationScore +
        worshipScore +
        preachingScore +
        sizeScore +
        ministryScore;

      const breakdown = {
        distanceMiles,
        distanceScore,
        denominationScore,
        worshipScore,
        preachingScore,
        sizeScore,
        ministryScore,
        ministryMatches,
        accessibilityMatches
      };

      return {
        ...church,
        distanceMiles,
        totalScore,
        onlineAligned,
        accessibilityMatches,
        reasons: createReasons(church, { ...preferences, radius }, breakdown),
        matchPercent: maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
      };
    })
    .sort((left, right) => {
      if (right.totalScore !== left.totalScore) {
        return right.totalScore - left.totalScore;
      }

      if (Number(right.onlineAligned) !== Number(left.onlineAligned)) {
        return Number(right.onlineAligned) - Number(left.onlineAligned);
      }

      if (right.accessibilityMatches.length !== left.accessibilityMatches.length) {
        return right.accessibilityMatches.length - left.accessibilityMatches.length;
      }

      return left.distanceMiles - right.distanceMiles;
    });
}

export function filterChurches({ search = "", denomination = "", worshipStyle = "", size = "" }) {
  const term = search.trim().toLowerCase();

  return getApprovedChurches().filter((church) => {
    const matchesSearch =
      !term ||
      [
        church.name,
        church.city,
        church.state,
        church.denomination,
        church.worshipStyle,
        church.description
      ]
        .join(" ")
        .toLowerCase()
        .includes(term);
    const matchesDenomination = !denomination || church.denomination === denomination;
    const matchesWorship = !worshipStyle || church.worshipStyle === worshipStyle;
    const matchesSize = !size || church.size === size;

    return matchesSearch && matchesDenomination && matchesWorship && matchesSize;
  });
}

export const featuredChurches = getApprovedChurches().slice(0, 3);
