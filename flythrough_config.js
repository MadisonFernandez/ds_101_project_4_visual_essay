// OpenStreetMap-based Flythrough Configuration
// No API tokens required - uses free OpenStreetMap tiles via Leaflet

var config = {
    // =============================================================================
    // MAP STYLE SETTINGS
    // To change style: comment out current tileLayer and uncomment your choice
    // =============================================================================
    
    // Positron Light (clean minimal style, perfect for data visualization)
    tileLayer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    
    // Dark Positron (dark theme)
    // tileLayer: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    
    // Standard OpenStreetMap (classic map style)
    // tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    
    // Terrain (topographic map)
    // tileLayer: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    
    // =============================================================================
    // COLOR SCALE SETTINGS (Choose one - Plotly inspired)
    // =============================================================================
    
    colorScale: 'RdYlGn',  // Options: 'RdYlGn' (Red-Yellow-Green) or 'Portland' (Blue-White-Red)
    
    // =============================================================================
    // STORY CHAPTERS
    // Students: Fill in with your data
    // - Coordinates: Get from your CSV file (latitude, longitude columns)
    // - Post counts & sentiment scores: Look up in your whitepaper visualizations
    // =============================================================================
    
    chapters: [
        {
            // CHAPTER 1: Overview of both locations
            id: 'intro',
            title: 'Reddit Sentiment Analysis: UVA & JMU',
            description: 'Exploring how students discuss their campuses on Reddit - comparing JMU in Harrisonburg, VA and UVA in Charlottesville, VA.',
            image: './images/jmu_first.jpg',
            duration: 3000,
            
            // Camera position (where to fly)
            camera: {
                latitude: 38.2,             // Midpoint between JMU and UNC
                longitude: -78.7,
                zoom: 8                     // Wide view showing both locations
            },
            
            showData: 'all_locations'       // Show all locations from both schools
        },
        
        {
            // CHAPTER 2: JMU Campus Overview
            id: 'jmu-campus',
            title: 'JMU Campus Overview',
            description: 'James Madison University in Harrisonburg, Virginia. Three key locations emerge from student discussions: The Quad, D-Hall, and The Village.',
            image: './images/jmu_overview.jpg',
            duration: 2500,
            
            // Camera position
            camera: {
                latitude: 38.4365,
                longitude: -78.8705,
                zoom: 14
            },
            
            showData: 'jmu_locations'       // Show only JMU locations
        },
        
        {
            // CHAPTER 3: JMU Location 1
            id: 'jmu-location-1',
            title: 'JMU Location 1: D-Hall',
            description:  'A prominent and frequently visited dining hall, centrally location on Main Campus, D-Hall serves food to much of the student population. With an average sentiment score of 17.488, and total post count of 41, D-hall sparked conversations about renovations to the building and food preferences at the dining hall.',
            image: './images/jmu_dhall.jpg',
            duration: 2000,
            
            // Camera position
            camera: {
                latitude: 38.4374,           // Replace with coordinates from CSV
                longitude: -78.8721,
                zoom: 17
            },
            
            // Location data (creates the marker on map)
            location: {
                name: 'JMU Location 1',      // Replace with location name from CSV
                latitude: 38.4374,           // Must match camera coordinates
                longitude: -78.8721,
                postCount: 41,               // Look up in your whitepaper visualizations
                robertaScore: -0.286,          // Look up in your whitepaper visualizations
                isJMU: true
            },
            
            showData: 'individual'           // Highlight only this location
        },
        
        {
            // CHAPTER 4: JMU Location 2
            id: 'jmu-location-2',
            title: 'JMU Location 2: The Village',
            description: 'A popular dormitory area amongst freshmen, The Village dorms are a cluster of nine buildings on Main Campus. With an average sentiment score or 15.06 and post count of 16, conversations about The Village include renovations to the area, lack of air conditioning in the dorms, and the stereotypes of social students who live there. ',
            image: './images/jmu_village.jpg',
            duration: 2000,
            
            camera: {
                latitude: 38.4362,
                longitude:  -78.8691,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 2',
                latitude: 38.4362,
                longitude:  -78.8691,
                postCount: 16,
                robertaScore: -0.428,
                isJMU: true
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 5: JMU Location 3
            id: 'jmu-location-3',
            title: 'JMU Location 3: The Quad',
            description: 'The rectangular lawn with academic buildings and dorms on its perimeter, serves as the central hub for students in the heart of Main Campus. With an average sentiment score of 27.26, and post count of 15, conversations about The Quad revolve around the scenery of the space and on-campus housing in the area.',
            image: './images/jmu_quad.jpg',
            duration: 2000,
            
            camera: {
                latitude: 38.4385,
                longitude: -78.8738,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 3',
                latitude: 38.4385,
                longitude: -78.8738,
                postCount: 15,
                robertaScore: 0.271,
                isJMU: true
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 6: UVA Campus Overview
            id: 'uva-campus',
            title: 'UVA Campus Overview',
            description: 'University of Virginia at Charlottesville, VA. Three key locations emerge from student discussions: Gaza, Palestine, and Israel.',
            image: './images/uva_overview.jpg',
            duration: 2500,
            
            camera: {
                latitude: 38.0339,
                longitude: -78.5080,
                zoom: 14
            },
            
            showData: 'non_jmu_locations'    // Show only UVA locations
        },
        
        {
            // CHAPTER 7: UVA Location 1
            id: 'uva-location-1',
            title: 'UVA Location 1: Gaza',
            description: 'The site of a mass genocide and war between Isreal and Palestine. With an average sentiment score of -.54 and post count of 16, key themes amongst UVA students include protesting, sending aid, and death.',
            image: './images/uva_gaza.jpg',
            duration: 5000,
            
            camera: {
                latitude: 31.5016,
                longitude: 34.4667,
                zoom: 12
            },
            
            location: {
                name: 'UVA Location 1',
                latitude: 31.5106,
                longitude: 34.4667,
                postCount: 16,
                robertaScore: -0.544,
                isJMU: false                 // UVA location
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 8: UVA Location 2
            id: 'uva-location-2',
            title: 'UVA Location 2: Palestine',
            description: 'The country is frequently discussed by UVA students in relation to the war between Israel and Palestine. With an average sentiment score of -.35 and post count of 23,  key themes discussed about Palestine include war and freeing Palestine.',
            image: './images/uva_palestine.jpg',
            duration: 5000,
            
            camera: {
                latitude: 31.9216,
                longitude: 35.2033,
                zoom: 12
            },
            
            location: {
                name: 'UVA Location 2',
                latitude: 31.9216,
                longitude: 35.2033,
                postCount: 23,
                robertaScore: -0.351,
                isJMU: false
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 9: UVA Location 3
            id: 'uva-location-3',
            title: 'UVA Location 3: Israel',
            description: '',
            image: './images/uva_israel.jpg',
            duration: 3000,
            
            camera: {
                latitude: 30.8336,
                longitude: 34.8572,
                zoom: 12
            },
            
            location: {
                name: 'UVA Location 3',
                latitude: 30.8336,
                longitude: 34.8572,
                postCount: 62,
                robertaScore: -0.484,
                isJMU: false
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 10: Final zoom out
            id: 'conclusion',
            title: 'Conclusion: Comparing Campus Sentiment',
            description: 'Our analysis reveals both similarities and differences in how students experience and discuss these two universities.',
            image: './images/uva_last.jpg',
            duration: 3000,
            
            camera: {
                latitude: 38.2213,
                longitude: -78.7455,
                zoom: 8
            },
            
            showData: 'all_locations'
        }
    ]
};
