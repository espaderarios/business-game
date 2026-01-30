// Game state
const gameState = {
    balance: 250,
    totalEarnings: 0,
    currentStage: 'Beginner',
    stageProgress: 0,
    ventures: {
        lemonade:    { owned: false, cost: 500,        income: 50,        purchased: false, manager: false, managerCost: 2500, level: 1, upgradeCost: 1000, baseIncome: 50, baseCost: 500, quantity: 0 },
        kiosk:       { owned: false, cost: 2000,       income: 150,       purchased: false, manager: false, managerCost: 10000, level: 1, upgradeCost: 4000, baseIncome: 150, baseCost: 2000, quantity: 0 },
        foodtruck:   { owned: false, cost: 50000,      income: 2500,      purchased: false, manager: false, managerCost: 250000, level: 1, upgradeCost: 100000, baseIncome: 2500, baseCost: 50000, quantity: 0 },
        smallstore:  { owned: false, cost: 100000,     income: 4000,      purchased: false, manager: false, managerCost: 500000, level: 1, upgradeCost: 200000, baseIncome: 4000, baseCost: 100000, quantity: 0 },
        boutique:    { owned: false, cost: 150000,     income: 6000,      purchased: false, manager: false, managerCost: 750000, level: 1, upgradeCost: 300000, baseIncome: 6000, baseCost: 150000, quantity: 0 },
        restaurant:  { owned: false, cost: 300000,     income: 12000,     purchased: false, manager: false, managerCost: 1500000, level: 1, upgradeCost: 600000, baseIncome: 12000, baseCost: 300000, quantity: 0 },
        cafe:        { owned: false, cost: 600000,     income: 20000,     purchased: false, manager: false, managerCost: 3000000, level: 1, upgradeCost: 1200000, baseIncome: 20000, baseCost: 600000, quantity: 0 },
        bar:         { owned: false, cost: 900000,     income: 30000,     purchased: false, manager: false, managerCost: 4500000, level: 1, upgradeCost: 1800000, baseIncome: 30000, baseCost: 900000, quantity: 0 },
        salon:       { owned: false, cost: 1200000,    income: 40000,     purchased: false, manager: false, managerCost: 6000000, level: 1, upgradeCost: 2400000, baseIncome: 40000, baseCost: 1200000, quantity: 0 },
        gym:         { owned: false, cost: 1500000,    income: 45000,     purchased: false, manager: false, managerCost: 7500000, level: 1, upgradeCost: 3000000, baseIncome: 45000, baseCost: 1500000, quantity: 0 },
        hotel:       { owned: false, cost: 3500000,    income: 90000,     purchased: false, manager: false, managerCost: 17500000, level: 1, upgradeCost: 7000000, baseIncome: 90000, baseCost: 3500000, quantity: 0 },
        nightclub:   { owned: false, cost: 6000000,    income: 150000,    purchased: false, manager: false, managerCost: 30000000, level: 1, upgradeCost: 12000000, baseIncome: 150000, baseCost: 6000000, quantity: 0 },
        mall:        { owned: false, cost: 10000000,   income: 250000,    purchased: false, manager: false, managerCost: 50000000, level: 1, upgradeCost: 20000000, baseIncome: 250000, baseCost: 10000000, quantity: 0 },
        casino:      { owned: false, cost: 15000000,   income: 350000,    purchased: false, manager: false, managerCost: 75000000, level: 1, upgradeCost: 30000000, baseIncome: 350000, baseCost: 15000000, quantity: 0 },
        techstartup: { owned: false, cost: 25000000,   income: 600000,    purchased: false, manager: false, managerCost: 125000000, level: 1, upgradeCost: 50000000, baseIncome: 600000, baseCost: 25000000, quantity: 0 },
        crypto:      { owned: false, cost: 50000000,   income: 1200000,   purchased: false, manager: false, managerCost: 250000000, level: 1, upgradeCost: 100000000, baseIncome: 1200000, baseCost: 50000000, quantity: 0 },
        realestate:  { owned: false, cost: 100000000,  income: 2200000,   purchased: false, manager: false, managerCost: 500000000, level: 1, upgradeCost: 200000000, baseIncome: 2200000, baseCost: 100000000, quantity: 0 },
        stockmarket: { owned: false, cost: 200000000,  income: 4000000,   purchased: false, manager: false, managerCost: 1000000000, level: 1, upgradeCost: 400000000, baseIncome: 4000000, baseCost: 200000000, quantity: 0 },
        airport:     { owned: false, cost: 500000000,  income: 9000000,   purchased: false, manager: false, managerCost: 2500000000, level: 1, upgradeCost: 1000000000, baseIncome: 9000000, baseCost: 500000000, quantity: 0 },
        spaceline:   { owned: false, cost: 750000000,  income: 12000000,  purchased: false, manager: false, managerCost: 3750000000, level: 1, upgradeCost: 1500000000, baseIncome: 12000000, baseCost: 750000000, quantity: 0 },
        satellite:   { owned: false, cost: 1000000000, income: 15000000,  purchased: false, manager: false, managerCost: 5000000000, level: 1, upgradeCost: 2000000000, baseIncome: 15000000, baseCost: 1000000000, quantity: 0 },
        megacorp:     { owned: false, cost: 2500000000, income: 35000000,  purchased: false, manager: false, managerCost: 12500000000, level: 1, upgradeCost: 5000000000, baseIncome: 35000000, baseCost: 2500000000, quantity: 0 },
        globalbank:   { owned: false, cost: 5000000000, income: 70000000,  purchased: false, manager: false, managerCost: 25000000000, level: 1, upgradeCost: 10000000000, baseIncome: 70000000, baseCost: 5000000000, quantity: 0 },
        spacemining:  { owned: false, cost: 10000000000, income: 140000000, purchased: false, manager: false, managerCost: 50000000000, level: 1, upgradeCost: 20000000000, baseIncome: 140000000, baseCost: 10000000000, quantity: 0 },
        quantumtech:  { owned: false, cost: 25000000000, income: 350000000, purchased: false, manager: false, managerCost: 125000000000, level: 1, upgradeCost: 50000000000, baseIncome: 350000000, baseCost: 25000000000, quantity: 0 },
        interstellar: { owned: false, cost: 50000000000, income: 700000000, purchased: false, manager: false, managerCost: 250000000000, level: 1, upgradeCost: 100000000000, baseIncome: 700000000, baseCost: 50000000000, quantity: 0 },
        dysonsphere:  { owned: false, cost: 100000000000, income: 1400000000, purchased: false, manager: false, managerCost: 500000000000, level: 1, upgradeCost: 200000000000, baseIncome: 1400000000, baseCost: 100000000000, quantity: 0 },
        galaxywide:   { owned: false, cost: 250000000000, income: 3500000000, purchased: false, manager: false, managerCost: 1250000000000, level: 1, upgradeCost: 500000000000, baseIncome: 3500000000, baseCost: 250000000000, quantity: 0 },
        universal:    { owned: false, cost: 500000000000, income: 7000000000, purchased: false, manager: false, managerCost: 2500000000000, level: 1, upgradeCost: 1000000000000, baseIncome: 7000000000, baseCost: 500000000000, quantity: 0 },
        multiverse:   { owned: false, cost: 1000000000000, income: 14000000000, purchased: false, manager: false, managerCost: 5000000000000, level: 1, upgradeCost: 2000000000000, baseIncome: 14000000000, baseCost: 1000000000000, quantity: 0 }
    },
    assets: {
        house: { level: 1, upgradeCost: 2000, maxLevel: 5, icon: '🏠' },
        clothes: { level: 1, upgradeCost: 500, maxLevel: 5, icon: '👔' },
        car: { level: 0, upgradeCost: 10000, maxLevel: 8, icon: '🚗' },
        watch: { level: 1, upgradeCost: 1000, maxLevel: 5, icon: '⌚' },
        plane: { level: 0, upgradeCost: 500000, maxLevel: 4, icon: '✈️' },
        yacht: { level: 0, upgradeCost: 250000, maxLevel: 3, icon: '🛥️' },
        jewelry: { level: 0, upgradeCost: 5000, maxLevel: 6, icon: '💎' },
        art: { level: 0, upgradeCost: 10000, maxLevel: 5, icon: '🖼️' }
    },
    carCollection: [],
    planeCollection: [],
    luxuryCollection: [],
    cryptoHoldings: {
        bitcoin: { amount: 0, invested: 0 },
        ethereum: { amount: 0, invested: 0 },
        dogecoin: { amount: 0, invested: 0 },
        nft: { amount: 0, invested: 0 },
        cardano: { amount: 0, invested: 0 },
        polkadot: { amount: 0, invested: 0 },
        chainlink: { amount: 0, invested: 0 },
        solana: { amount: 0, invested: 0 },
        avalanche: { amount: 0, invested: 0 },
        polygon: { amount: 0, invested: 0 }
    },
    cryptoBalance: 0, // Total crypto balance in USD equivalent
    stockHoldings: {}, // Stock holdings
    stockBalance: 0, // Total stock balance in USD
    prestige: {
        level: 0,
        points: 0,
        multiplier: 1.0,
        totalPrestigeEarnings: 0,
        badges: []
    },
    lifeStats: {
        health: 80,
        happiness: 70,
        social: 60,
        intelligence: 75
    },
    loveLife: {
        relationship: 'Single',
        partnerName: '',
        relationshipLevel: 0,
        dates: 0,
        gifts: 0
    },
    lastSave: Date.now(),
    notifications: [],
    currentCity: 'New York',
    unlockedCities: ['New York'],
    ventureUpgrades: {}, // Will store purchased upgrades for each venture
    character: {
        name: 'Your Name',
        avatar: 'avatar-male-1',
        accessory: ''
    },
    adsWatched: {
        today: new Date().toDateString(),
        count: 0
    },
    activeQuests: [], // Track active NPC quests
    currentNPCs: [] // Track dynamically generated NPCs
};

// Venture-specific upgrades
const ventureUpgrades = {
    lemonade: [
        { id: 'lemonade_tables', name: 'Add Tables', description: 'Add seating area for customers', icon: '🪑', cost: 800, incomeBonus: 25 },
        { id: 'lemonade_sign', name: 'Neon Sign', description: 'Attract more customers', icon: '💡', cost: 1200, incomeBonus: 30 },
        { id: 'lemonade_menu', name: 'Expand Menu', description: 'Offer more flavors', icon: '📋', cost: 1500, incomeBonus: 40 }
    ],
    kiosk: [
        { id: 'kiosk_shelves', name: 'Add Shelves', description: 'Stock more products', icon: '📦', cost: 3000, incomeBonus: 50 },
        { id: 'kiosk_display', name: 'Digital Display', description: 'Show product ads', icon: '📺', cost: 5000, incomeBonus: 60 },
        { id: 'kiosk_cooler', name: 'Refrigerator', description: 'Sell cold drinks', icon: '🧊', cost: 7000, incomeBonus: 75 }
    ],
    foodtruck: [
        { id: 'truck_grill', name: 'Upgrade Grill', description: 'Cook faster', icon: '🍳', cost: 75000, incomeBonus: 500 },
        { id: 'truck_branding', name: 'Food Truck Wrap', description: 'Eye-catching design', icon: '🎨', cost: 100000, incomeBonus: 600 },
        { id: 'truck_equipment', name: 'Pro Equipment', description: 'Better cooking tools', icon: '🔪', cost: 150000, incomeBonus: 800 }
    ],
    smallstore: [
        { id: 'store_layout', name: 'Optimize Layout', description: 'Better customer flow', icon: '🗺️', cost: 150000, incomeBonus: 800 },
        { id: 'store_ac', name: 'Air Conditioning', description: 'Comfortable shopping', icon: '❄️', cost: 200000, incomeBonus: 1000 },
        { id: 'store_security', name: 'Security System', description: 'Prevent losses', icon: '🔒', cost: 250000, incomeBonus: 1200 }
    ],
    boutique: [
        { id: 'boutique_mirrors', name: 'Full-Length Mirrors', description: 'Better try-on experience', icon: '🪞', cost: 225000, incomeBonus: 1200 },
        { id: 'boutique_lighting', name: 'Designer Lighting', description: 'Showcase products', icon: '💡', cost: 300000, incomeBonus: 1500 },
        { id: 'boutique_brands', name: 'Premium Brands', description: 'Stock luxury items', icon: '👗', cost: 400000, incomeBonus: 2000 }
    ],
    restaurant: [
        { id: 'restaurant_tables', name: 'Add Tables', description: 'Serve more guests', icon: '🍽️', cost: 450000, incomeBonus: 2400 },
        { id: 'restaurant_kitchen', name: 'Upgrade Kitchen', description: 'Faster service', icon: '👨‍🍳', cost: 600000, incomeBonus: 3000 },
        { id: 'restaurant_chef', name: 'Hire Head Chef', description: 'Better quality food', icon: '⭐', cost: 800000, incomeBonus: 4000 },
        { id: 'restaurant_bar', name: 'Add Bar', description: 'Serve drinks', icon: '🍷', cost: 1000000, incomeBonus: 5000 }
    ],
    cafe: [
        { id: 'cafe_machines', name: 'Espresso Machine', description: 'Premium coffee', icon: '☕', cost: 900000, incomeBonus: 4000 },
        { id: 'cafe_pastries', name: 'Bakery Section', description: 'Sell pastries', icon: '🥐', cost: 1200000, incomeBonus: 5000 },
        { id: 'cafe_wifi', name: 'Free WiFi', description: 'Attract remote workers', icon: '📶', cost: 1500000, incomeBonus: 6000 },
        { id: 'cafe_terrace', name: 'Outdoor Terrace', description: 'Al fresco seating', icon: '🌤️', cost: 1800000, incomeBonus: 7000 }
    ],
    bar: [
        { id: 'bar_cocktails', name: 'Cocktail Menu', description: 'Craft cocktails', icon: '🍸', cost: 1350000, incomeBonus: 6000 },
        { id: 'bar_music', name: 'Live Music', description: 'Entertainment', icon: '🎵', cost: 1800000, incomeBonus: 7500 },
        { id: 'bar_vip', name: 'VIP Section', description: 'Premium area', icon: '💎', cost: 2250000, incomeBonus: 9000 }
    ],
    salon: [
        { id: 'salon_chairs', name: 'Extra Chairs', description: 'More clients', icon: '💺', cost: 1800000, incomeBonus: 8000 },
        { id: 'salon_products', name: 'Premium Products', description: 'Better results', icon: '💄', cost: 2400000, incomeBonus: 10000 },
        { id: 'salon_spa', name: 'Spa Services', description: 'Expand services', icon: '🧖', cost: 3000000, incomeBonus: 12000 }
    ],
    gym: [
        { id: 'gym_equipment', name: 'More Equipment', description: 'Modern machines', icon: '🏋️', cost: 2250000, incomeBonus: 9000 },
        { id: 'gym_trainers', name: 'Personal Trainers', description: 'Expert guidance', icon: '💪', cost: 3000000, incomeBonus: 11250 },
        { id: 'gym_pool', name: 'Swimming Pool', description: 'Aquatic fitness', icon: '🏊', cost: 3750000, incomeBonus: 13500 }
    ],
    hotel: [
        { id: 'hotel_rooms', name: 'Add Rooms', description: '20 more rooms', icon: '🛏️', cost: 5250000, incomeBonus: 18000 },
        { id: 'hotel_restaurant', name: 'Hotel Restaurant', description: 'On-site dining', icon: '🍴', cost: 7000000, incomeBonus: 22500 },
        { id: 'hotel_spa', name: 'Luxury Spa', description: 'Premium amenity', icon: '💆', cost: 8750000, incomeBonus: 27000 },
        { id: 'hotel_rooftop', name: 'Rooftop Bar', description: 'Scenic views', icon: '🌃', cost: 10500000, incomeBonus: 31500 }
    ],
    nightclub: [
        { id: 'club_sound', name: 'Sound System', description: 'Premium audio', icon: '🔊', cost: 9000000, incomeBonus: 30000 },
        { id: 'club_lights', name: 'LED Lighting', description: 'Amazing visuals', icon: '💡', cost: 12000000, incomeBonus: 37500 },
        { id: 'club_dj', name: 'Celebrity DJ', description: 'Draw big crowds', icon: '🎧', cost: 15000000, incomeBonus: 45000 }
    ],
    mall: [
        { id: 'mall_stores', name: 'Add Stores', description: '10 more retailers', icon: '🏬', cost: 15000000, incomeBonus: 50000 },
        { id: 'mall_parking', name: 'Parking Garage', description: 'Easy access', icon: '🅿️', cost: 20000000, incomeBonus: 62500 },
        { id: 'mall_cinema', name: 'Movie Theater', description: 'Entertainment hub', icon: '🎬', cost: 25000000, incomeBonus: 75000 }
    ],
    casino: [
        { id: 'casino_slots', name: 'More Slot Machines', description: '100 new slots', icon: '🎰', cost: 22500000, incomeBonus: 70000 },
        { id: 'casino_tables', name: 'Table Games', description: 'Poker, Blackjack', icon: '🃏', cost: 30000000, incomeBonus: 87500 },
        { id: 'casino_hotel', name: 'Casino Hotel', description: 'All-in-one resort', icon: '🏨', cost: 37500000, incomeBonus: 105000 }
    ],
    techstartup: [
        { id: 'tech_office', name: 'Bigger Office', description: 'More developers', icon: '🏢', cost: 37500000, incomeBonus: 120000 },
        { id: 'tech_servers', name: 'Server Farm', description: 'Better infrastructure', icon: '💻', cost: 50000000, incomeBonus: 150000 },
        { id: 'tech_rd', name: 'R&D Department', description: 'Innovation', icon: '🔬', cost: 62500000, incomeBonus: 180000 }
    ],
    crypto: [
        { id: 'crypto_miners', name: 'Mining Rigs', description: 'Mine cryptocurrency', icon: '⛏️', cost: 75000000, incomeBonus: 240000 },
        { id: 'crypto_trading', name: 'Trading Bots', description: 'Automated trading', icon: '🤖', cost: 100000000, incomeBonus: 300000 },
        { id: 'crypto_exchange', name: 'Own Exchange', description: 'Trading platform', icon: '💱', cost: 125000000, incomeBonus: 360000 }
    ],
    realestate: [
        { id: 'real_properties', name: 'More Properties', description: '10 rental units', icon: '🏘️', cost: 150000000, incomeBonus: 440000 },
        { id: 'real_commercial', name: 'Commercial Buildings', description: 'Higher returns', icon: '🏢', cost: 200000000, incomeBonus: 550000 },
        { id: 'real_luxury', name: 'Luxury Condos', description: 'Premium market', icon: '🏙️', cost: 250000000, incomeBonus: 660000 }
    ],
    stockmarket: [
        { id: 'stock_portfolio', name: 'Diverse Portfolio', description: 'More stocks', icon: '📊', cost: 300000000, incomeBonus: 800000 },
        { id: 'stock_advisors', name: 'Financial Advisors', description: 'Expert tips', icon: '👔', cost: 400000000, incomeBonus: 1000000 },
        { id: 'stock_hedge', name: 'Hedge Fund', description: 'Professional management', icon: '💼', cost: 500000000, incomeBonus: 1200000 }
    ],
    airport: [
        { id: 'airport_terminal', name: 'New Terminal', description: 'More capacity', icon: '🏢', cost: 750000000, incomeBonus: 1800000 },
        { id: 'airport_runway', name: 'Extra Runway', description: 'More flights', icon: '🛫', cost: 1000000000, incomeBonus: 2250000 },
        { id: 'airport_cargo', name: 'Cargo Facility', description: 'Freight operations', icon: '📦', cost: 1250000000, incomeBonus: 2700000 },
        { id: 'airport_airplanes', name: 'Buy Airplanes', description: 'Own fleet', icon: '✈️', cost: 1500000000, incomeBonus: 3150000 }
    ],
    spaceline: [
        { id: 'space_rockets', name: 'More Rockets', description: 'Increase launches', icon: '🚀', cost: 1125000000, incomeBonus: 2400000 },
        { id: 'space_station', name: 'Space Station', description: 'Orbital hub', icon: '🛸', cost: 1500000000, incomeBonus: 3000000 },
        { id: 'space_tourism', name: 'Space Tourism', description: 'Commercial flights', icon: '👨‍🚀', cost: 1875000000, incomeBonus: 3600000 }
    ],
    satellite: [
        { id: 'sat_network', name: 'Satellite Network', description: '10 more satellites', icon: '📡', cost: 1500000000, incomeBonus: 3000000 },
        { id: 'sat_5g', name: '5G Coverage', description: 'High-speed internet', icon: '📶', cost: 2000000000, incomeBonus: 3750000 },
        { id: 'sat_gps', name: 'GPS Services', description: 'Navigation system', icon: '🗺️', cost: 2500000000, incomeBonus: 4500000 }
    ],
    megacorp: [
        { id: 'mega_branches', name: 'Global Branches', description: '50 offices worldwide', icon: '🌍', cost: 3750000000, incomeBonus: 7000000 },
        { id: 'mega_brands', name: 'Acquire Brands', description: 'Buy competitors', icon: '🏷️', cost: 5000000000, incomeBonus: 8750000 },
        { id: 'mega_research', name: 'Research Labs', description: 'Innovation centers', icon: '🔬', cost: 6250000000, incomeBonus: 10500000 }
    ],
    globalbank: [
        { id: 'bank_branches', name: 'International Branches', description: '100 locations', icon: '🏦', cost: 7500000000, incomeBonus: 14000000 },
        { id: 'bank_investment', name: 'Investment Division', description: 'Asset management', icon: '💰', cost: 10000000000, incomeBonus: 17500000 },
        { id: 'bank_digital', name: 'Digital Banking', description: 'Online platform', icon: '💳', cost: 12500000000, incomeBonus: 21000000 }
    ],
    spacemining: [
        { id: 'mining_asteroids', name: 'Asteroid Mining', description: 'Rare minerals', icon: '☄️', cost: 15000000000, incomeBonus: 28000000 },
        { id: 'mining_fleet', name: 'Mining Fleet', description: '10 mining ships', icon: '🚀', cost: 20000000000, incomeBonus: 35000000 },
        { id: 'mining_refinery', name: 'Space Refinery', description: 'Process materials', icon: '⚙️', cost: 25000000000, incomeBonus: 42000000 }
    ],
    quantumtech: [
        { id: 'quantum_computer', name: 'Quantum Computer', description: 'Advanced computing', icon: '💻', cost: 37500000000, incomeBonus: 70000000 },
        { id: 'quantum_lab', name: 'Research Lab', description: 'Breakthrough tech', icon: '🔬', cost: 50000000000, incomeBonus: 87500000 },
        { id: 'quantum_ai', name: 'Quantum AI', description: 'Next-gen AI', icon: '🤖', cost: 62500000000, incomeBonus: 105000000 }
    ],
    interstellar: [
        { id: 'inter_ships', name: 'Interstellar Ships', description: 'Deep space travel', icon: '🛸', cost: 75000000000, incomeBonus: 140000000 },
        { id: 'inter_colonies', name: 'Space Colonies', description: 'Habitable stations', icon: '🏙️', cost: 100000000000, incomeBonus: 175000000 },
        { id: 'inter_trade', name: 'Trade Routes', description: 'Interstellar commerce', icon: '🛰️', cost: 125000000000, incomeBonus: 210000000 }
    ],
    dysonsphere: [
        { id: 'dyson_panels', name: 'Solar Panels', description: 'Capture star energy', icon: '☀️', cost: 150000000000, incomeBonus: 280000000 },
        { id: 'dyson_grid', name: 'Energy Grid', description: 'Power distribution', icon: '⚡', cost: 200000000000, incomeBonus: 350000000 },
        { id: 'dyson_complete', name: 'Complete Sphere', description: 'Full coverage', icon: '🌟', cost: 250000000000, incomeBonus: 420000000 }
    ],
    galaxywide: [
        { id: 'galaxy_empire', name: 'Galactic Empire', description: '1000 systems', icon: '👑', cost: 375000000000, incomeBonus: 700000000 },
        { id: 'galaxy_fleet', name: 'Armada Fleet', description: 'Massive fleet', icon: '🚀', cost: 500000000000, incomeBonus: 875000000 },
        { id: 'galaxy_capital', name: 'Capital World', description: 'Empire headquarters', icon: '🌍', cost: 625000000000, incomeBonus: 1050000000 }
    ],
    universal: [
        { id: 'universal_portal', name: 'Portal Network', description: 'Instant travel', icon: '🌀', cost: 750000000000, incomeBonus: 1400000000 },
        { id: 'universal_matter', name: 'Matter Replicator', description: 'Create anything', icon: '⚛️', cost: 1000000000000, incomeBonus: 1750000000 },
        { id: 'universal_godmode', name: 'Universe Control', description: 'Ultimate power', icon: '💫', cost: 1250000000000, incomeBonus: 2100000000 }
    ],
    multiverse: [
        { id: 'multi_dimensions', name: 'Dimensional Travel', description: 'Access all realities', icon: '🌌', cost: 1500000000000, incomeBonus: 2800000000 },
        { id: 'multi_timelines', name: 'Timeline Control', description: 'Alter time', icon: '⏰', cost: 2000000000000, incomeBonus: 3500000000 },
        { id: 'multi_omnipotence', name: 'Omnipotence', description: 'Become all-powerful', icon: '👁️', cost: 2500000000000, incomeBonus: 4200000000 }
    ]
};

// Cities configuration
const cities = [
    { name: 'New York', unlockStage: 'Beginner', bonus: 1.0, icon: '🏙️' },
    { name: 'Los Angeles', unlockStage: 'Entrepreneur', bonus: 1.2, icon: '🌴' },
    { name: 'Miami', unlockStage: 'Tycoon', bonus: 1.5, icon: '🏖️' },
    { name: 'Tokyo', unlockStage: 'Magnate', bonus: 1.8, icon: '🗼' },
    { name: 'Dubai', unlockStage: 'Legend', bonus: 2.0, icon: '🏰' },
    { name: 'Monaco', unlockStage: 'Billionaire', bonus: 2.5, icon: '🎰' }
];

// Life activities
const lifeActivities = [
    { name: 'Exercise', cost: 0, effect: { health: 15, happiness: 5 }, icon: '🏃' },
    { name: 'Gym', cost: 50, effect: { health: 20, happiness: 10 }, icon: '💪' },
    { name: 'Spa', cost: 500, effect: { health: 25, happiness: 30 }, icon: '🧖' },
    { name: 'Meditation', cost: 0, effect: { happiness: 8, intelligence: 3 }, icon: '🧘' },
    { name: 'Read', cost: 0, effect: { intelligence: 8, happiness: 5 }, icon: '📖' },
    { name: 'Course', cost: 1000, effect: { intelligence: 25 }, icon: '🎓' },
    { name: 'CoffeeHangout', cost: 100, effect: { social: 12, happiness: 8 }, icon: '☕' },
    { name: 'Party', cost: 200, effect: { happiness: 12, social: 10 }, icon: '🎉' },
    { name: 'Concert', cost: 500, effect: { happiness: 18, social: 15 }, icon: '🎵' },
    { name: 'Yacht', cost: 5000, effect: { happiness: 35, social: 25, health: 15 }, icon: '🛥️' },
    { name: 'VacationResort', cost: 10000, effect: { health: 40, happiness: 40, social: 20 }, icon: '🏝️' },
    { name: 'SpaceTrip', cost: 100000, effect: { happiness: 50, social: 30, intelligence: 20 }, icon: '🚀' },
    { name: 'Study Course', cost: 500, effect: { intelligence: 15 }, icon: '📚' },
    { name: 'Spa Day', cost: 300, effect: { health: 15, happiness: 20 }, icon: '💆' },
    { name: 'Networking', cost: 100, effect: { social: 15, intelligence: 5 }, icon: '🤝' }
];

// Love activities
const loveActivities = [
    { name: 'Coffee Date', cost: 50, effect: { relationship: 5 }, icon: '☕' },
    { name: 'Dinner Date', cost: 200, effect: { relationship: 10 }, icon: '🍽️' },
    { name: 'Movie Night', cost: 80, effect: { relationship: 7 }, icon: '🎬' },
    { name: 'Shopping Spree', cost: 500, effect: { relationship: 15 }, icon: '🎁' },
    { name: 'Weekend Trip', cost: 1000, effect: { relationship: 25 }, icon: '✈️' },
    { name: 'Concert', cost: 150, effect: { relationship: 12 }, icon: '🎵' }
];

// Potential partners
const partners = [
    { name: 'Alex', personality: 'Ambitious', interest: 20, icon: '💼' },
    { name: 'Sarah', personality: 'Creative', interest: 25, icon: '🎨' },
    { name: 'Mike', personality: 'Adventurous', interest: 18, icon: '🏔️' },
    { name: 'Emma', personality: 'Intellectual', interest: 22, icon: '📖' },
    { name: 'David', personality: 'Charming', interest: 30, icon: '😊' },
    { name: 'Lisa', personality: 'Fun-loving', interest: 28, icon: '🎭' }
];

// Dynamic NPC generation system with families
const npcTemplates = {
    firstNames: {
        male: ['John', 'Sarah', 'Mike', 'Emma', 'David', 'Lisa', 'James', 'Maria', 'Robert', 'Anna', 'William', 'Sophia', 'Richard', 'Olivia', 'Joseph', 'Charlotte', 'Thomas', 'Amelia', 'Charles', 'Isabella', 'Daniel', 'Emily', 'Matthew', 'Mia', 'Anthony', 'Abigail', 'Mark', 'Madison', 'Steven', 'Chloe'],
        female: ['Sarah', 'Emma', 'Lisa', 'Maria', 'Anna', 'Sophia', 'Olivia', 'Charlotte', 'Amelia', 'Isabella', 'Emily', 'Mia', 'Abigail', 'Madison', 'Chloe', 'Grace', 'Lily', 'Ava', 'Zoe', 'Natalie', 'Hannah', 'Lillian', 'Addison', 'Leah', 'Audrey', 'Brooklyn', 'Victoria', 'Evelyn', 'Penelope']
    },
    lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen'],
    
    personalities: ['friendly', 'wise', 'strict', 'energetic', 'calm', 'nervous', 'cheerful', 'serious', 'playful', 'professional', 'casual', 'formal', 'mysterious', 'helpful', 'grumpy'],
    
    familyRoles: ['father', 'mother', 'brother', 'sister', 'uncle', 'aunt', 'cousin', 'grandfather', 'grandmother'],
    
    types: {
        business: ['business_mentor', 'investor', 'banker', 'realtor', 'consultant', 'manager', 'executive', 'entrepreneur'],
        service: ['mechanic', 'tech_support', 'doctor', 'police', 'delivery_guy', 'security_guard', 'cleaner', 'maintenance'],
        shop: ['shopkeeper', 'food_vendor', 'barista', 'jeweler', 'fashion_boutique', 'pharmacist', 'bookseller', 'electronics'],
        entertainment: ['musician', 'artist', 'chef', 'pilot', 'tour_guide', 'photographer', 'writer', 'actor'],
        community: ['neighbor', 'teacher', 'trainer', 'volunteer', 'activist', 'organizer', 'coach', 'mentor']
    },
    
    locations: ['downtown', 'financial_district', 'shopping_mall', 'residential', 'park', 'hospital', 'school', 'restaurant', 'coffee_shop', 'bank', 'everywhere'],
    
    icons: ['👔', '💼', '🏦', '🏠', '🔧', '💻', '🩺', '👮', '📦', '☕', '🏪', '🍔', '👗', '💎', '🎵', '✈️', '👨‍🍳', '🎨', '🗺️', '👵', '💪', '🎓', '⛪', '🏎️', '🛥️', '🍷', '🖼️'],
    
    dialogueTemplates: {
        business: [
            "Success comes to those who work hard and smart!",
            "I only invest in ventures with solid ROI.",
            "The market rewards the bold and the prepared.",
            "Business is about solving problems for people.",
            "Always think long-term in your decisions."
        ],
        service: [
            "I can help you with that!",
            "Quality service is my priority.",
            "How can I assist you today?",
            "I'm here to help solve your problems.",
            "Customer satisfaction is everything."
        ],
        shop: [
            "Everything you need, right here!",
            "We have the best selection in town.",
            "Quality products at fair prices.",
            "Welcome! Let me know if you need anything.",
            "Take your time and browse around."
        ],
        entertainment: [
            "Life is too short for boring entertainment!",
            "Art and music make life worth living.",
            "Let me show you something amazing!",
            "Creativity is the spice of life.",
            "Experience the extraordinary!"
        ],
        community: [
            "It takes a village to build success.",
            "Community is everything.",
            "I'm here to support our neighborhood.",
            "Together we can achieve great things.",
            "Looking out for each other is what matters."
        ]
    },
    
    questTemplates: {
        business: ['business_consultation', 'investment_opportunity', 'market_research', 'partnership_deal', 'expansion_plan'],
        service: ['repair_service', 'maintenance_task', 'delivery_service', 'security_check', 'health_checkup'],
        shop: ['special_order', 'product_recommendation', 'inventory_help', 'customer_service', 'promotion_event'],
        entertainment: ['performance_booking', 'creative_project', 'event_planning', 'art_commission', 'show_ticket'],
        community: ['neighborhood_help', 'volunteer_work', 'community_event', 'fundraising', 'local_support']
    }
};

// Family generation system
function generateFamily(citizenship, familyType) {
    const lastName = npcTemplates.lastNames[Math.floor(Math.random() * npcTemplates.lastNames.length)];
    const familyWealth = familyType.wealthBonus;
    
    // Generate family members
    const familyMembers = [];
    const memberCount = Math.floor(Math.random() * 4) + 3; // 3-6 family members
    
    // Always include parents
    const father = generateFamilyMember('male', lastName, citizenship, 'father', familyWealth);
    const mother = generateFamilyMember('female', lastName, citizenship, 'mother', familyWealth);
    familyMembers.push(father, mother);
    
    // Add other family members
    const otherRoles = ['brother', 'sister', 'uncle', 'aunt', 'cousin', 'grandfather', 'grandmother'];
    for (let i = 2; i < memberCount && i < 6; i++) {
        const role = otherRoles[Math.floor(Math.random() * otherRoles.length)];
        const gender = (role === 'brother' || role === 'uncle' || role === 'grandfather') ? 'male' : 'female';
        const member = generateFamilyMember(gender, lastName, citizenship, role, familyWealth);
        familyMembers.push(member);
    }
    
    return {
        lastName: lastName,
        citizenship: citizenship,
        familyType: familyType.type,
        wealth: familyWealth,
        members: familyMembers,
        reputation: Math.floor(Math.random() * 50) + 50, // 50-100 reputation
        connections: Math.floor(Math.random() * 10) + 5 // 5-15 business connections
    };
}

function generateFamilyMember(gender, lastName, citizenship, role, familyWealth) {
    const firstNames = npcTemplates.firstNames[gender];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const personality = npcTemplates.personalities[Math.floor(Math.random() * npcTemplates.personalities.length)];
    
    // Select type based on role and random chance
    let typeCategory;
    const roleTypeMap = {
        'father': 'business',
        'mother': 'community',
        'brother': 'business',
        'sister': 'entertainment',
        'uncle': 'business',
        'aunt': 'shop',
        'cousin': 'service',
        'grandfather': 'business',
        'grandmother': 'community'
    };
    
    typeCategory = roleTypeMap[role] || 'community';
    const types = npcTemplates.types[typeCategory];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const location = npcTemplates.locations[Math.floor(Math.random() * npcTemplates.locations.length)];
    
    // Gender-specific emoji selection
    let icon;
    if (gender === 'male') {
        const maleIcons = ['👨', '👨‍💼', '👨‍🏫', '👨‍⚕️', '👨‍🔧', '👨‍🎓', '👨‍🏭', '👨‍🌾', '👨‍🍳', '👨‍🎨'];
        icon = maleIcons[Math.floor(Math.random() * maleIcons.length)];
    } else {
        const femaleIcons = ['👩', '👩‍💼', '👩‍🏫', '👩‍⚕️', '👩‍🔧', '👩‍🎓', '👩‍🏭', '👩‍🌾', '👩‍🍳', '👩‍🎨'];
        icon = femaleIcons[Math.floor(Math.random() * femaleIcons.length)];
    }
    
    const dialogues = npcTemplates.dialogueTemplates[typeCategory];
    const dialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
    
    const quests = npcTemplates.questTemplates[typeCategory];
    const quest = quests[Math.floor(Math.random() * quests.length)];
    
    // Adjust wealth based on family wealth and role
    let personalWealth = familyWealth;
    if (role === 'father' || role === 'mother') {
        personalWealth = familyWealth;
    } else if (role === 'grandfather' || role === 'grandmother') {
        personalWealth = familyWealth * 0.8;
    } else {
        personalWealth = familyWealth * (0.3 + Math.random() * 0.4); // 30-70% of family wealth
    }
    
    return {
        name: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        role: role,
        citizenship: citizenship,
        type: type,
        location: location,
        personality: personality,
        dialogue: dialogue,
        icon: icon,
        quest: quest,
        wealth: Math.floor(personalWealth),
        age: generateAgeForRole(role),
        relationship: getRelationshipToPlayer(role),
        generated: true,
        eventId: Date.now() + Math.random()
    };
}

function generateAgeForRole(role) {
    const ageRanges = {
        'father': [35, 65],
        'mother': [33, 60],
        'brother': [18, 40],
        'sister': [16, 38],
        'uncle': [40, 70],
        'aunt': [38, 68],
        'cousin': [15, 45],
        'grandfather': [60, 85],
        'grandmother': [58, 83]
    };
    
    const range = ageRanges[role] || [25, 75];
    return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
}

function getRelationshipToPlayer(role) {
    const relationships = {
        'father': 'Father',
        'mother': 'Mother',
        'brother': 'Brother',
        'sister': 'Sister',
        'uncle': 'Uncle',
        'aunt': 'Aunt',
        'cousin': 'Cousin',
        'grandfather': 'Grandfather',
        'grandmother': 'Grandmother'
    };
    
    return relationships[role] || 'Relative';
}

// Enhanced player life generation with family
function generatePlayerLifeWithFamily() {
    const selectedCountry = countries[Math.floor(Math.random() * countries.length)];
    const selectedFamily = familyTypes[Math.floor(Math.random() * familyTypes.length)];
    
    // Generate player's family
    const playerFamily = generateFamily(selectedCountry.code, selectedFamily);
    
    // Generate player details
    const isMale = Math.random() > 0.5;
    const playerFirstName = generateRandomFirstName(selectedCountry.code, isMale);
    const playerAge = Math.floor(Math.random() * 30) + 18; // 18-47 years old
    
    // Generate player skills based on family
    const playerSkills = {};
    Object.keys(skills).forEach(skillKey => {
        const baseSkill = selectedFamily.skillBonus[skillKey] || 0;
        const randomBonus = Math.floor(Math.random() * 20);
        playerSkills[skillKey] = Math.min(baseSkill + randomBonus, 80); // Max 80 starting
    });
    
    return {
        name: `${playerFirstName} ${playerFamily.lastName}`,
        firstName: playerFirstName,
        lastName: playerFamily.lastName,
        age: playerAge,
        gender: isMale ? 'male' : 'female',
        country: selectedCountry,
        citizenship: selectedCountry.code,
        family: selectedFamily,
        familyData: playerFamily,
        wealth: selectedFamily.wealthBonus,
        skills: playerSkills,
        premiumUnlocked: false
    };
}

// Dynamic NPC generator (updated)
function generateRandomNPC(eventType = null, existingFamily = null) {
    // If we have an existing family, generate a family member
    if (existingFamily && Math.random() < 0.7) { // 70% chance to generate family member
        const availableMembers = existingFamily.members.filter(member => 
            !gameState.currentNPCs?.some(npc => npc.name === member.name)
        );
        
        if (availableMembers.length > 0) {
            return availableMembers[Math.floor(Math.random() * availableMembers.length)];
        }
    }
    
    // Generate random NPC
    const gender = Math.random() > 0.5 ? 'male' : 'female';
    const firstName = npcTemplates.firstNames[gender][Math.floor(Math.random() * npcTemplates.firstNames[gender].length)];
    const lastName = npcTemplates.lastNames[Math.floor(Math.random() * npcTemplates.lastNames.length)];
    const personality = npcTemplates.personalities[Math.floor(Math.random() * npcTemplates.personalities.length)];
    
    // Select type based on event or random
    let typeCategory;
    if (eventType) {
        const typeMap = {
            'venture_purchase': 'business',
            'upgrade': 'service',
            'date': 'entertainment',
            'life_activity': 'community',
            'investment': 'business'
        };
        typeCategory = typeMap[eventType] || 'community';
    } else {
        const categories = Object.keys(npcTemplates.types);
        typeCategory = categories[Math.floor(Math.random() * categories.length)];
    }
    
    const types = npcTemplates.types[typeCategory];
    const type = types[Math.floor(Math.random() * types.length)];
    const location = npcTemplates.locations[Math.floor(Math.random() * npcTemplates.locations.length)];
    const icon = npcTemplates.icons[Math.floor(Math.random() * npcTemplates.icons.length)];
    
    const dialogues = npcTemplates.dialogueTemplates[typeCategory];
    const dialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
    
    const quests = npcTemplates.questTemplates[typeCategory];
    const quest = quests[Math.floor(Math.random() * quests.length)];
    
    // Random citizenship
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    
    // Gender-specific emoji selection
    let npcIcon;
    if (gender === 'male') {
        const maleIcons = ['👨', '👨‍💼', '👨‍🏫', '👨‍⚕️', '👨‍🔧', '👨‍🎓', '👨‍🏭', '👨‍🌾', '👨‍🍳', '👨‍🎨'];
        npcIcon = maleIcons[Math.floor(Math.random() * maleIcons.length)];
    } else {
        const femaleIcons = ['👩', '👩‍💼', '👩‍🏫', '👩‍⚕️', '👩‍🔧', '👩‍🎓', '👩‍🏭', '👩‍🌾', '👩‍🍳', '👩‍🎨'];
        npcIcon = femaleIcons[Math.floor(Math.random() * femaleIcons.length)];
    }
    
    // Role-specific personality and type preferences
    let npcPersonality, npcType, npcLocation;
    
    if (Math.random() < 0.5) {
        npcPersonality = ['wise', 'strict', 'professional', 'calm'][Math.floor(Math.random() * 4)];
        npcType = ['business_owner', 'investor', 'mentor', 'professional'][Math.floor(Math.random() * 4)];
    } else {
        npcPersonality = npcTemplates.personalities[Math.floor(Math.random() * npcTemplates.personalities.length)];
        npcType = Object.keys(npcTemplates.types)[Math.floor(Math.random() * Object.keys(npcTemplates.types).length)];
    }
    
    npcLocation = npcTemplates.locations[Math.floor(Math.random() * npcTemplates.locations.length)];
    
    // Generate dialogue based on role and personality
    const npcDialogue = dialogue;
    const npcQuest = quest;
    
    return {
        name: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        icon: npcIcon,
        type: type,
        location: location,
        personality: personality,
        dialogue: npcDialogue,
        quest: npcQuest,
        citizenship: randomCountry.code,
        wealth: Math.floor(Math.random() * 1000000) + 10000, // $10K - $1M
        age: Math.floor(Math.random() * 50) + 18, // 18-67 years old
        generated: true,
        eventId: Date.now() + Math.random()
    };
}

// ...
// NPC event system
function createNPCEvent(eventType, context = {}) {
    const npc = generateRandomNPC(eventType, gameState.life?.familyData);
    
    // Store NPC in current events
    if (!gameState.currentNPCs) {
        gameState.currentNPCs = [];
    }
    
    // Remove old NPCs (keep only last 10)
    if (gameState.currentNPCs.length >= 10) {
        gameState.currentNPCs = gameState.currentNPCs.slice(-9);
    }
    
    gameState.currentNPCs.push(npc);
    
    // Show NPC interaction
    showNPCEvent(npc, eventType, context);
    
    return npc;
}

function showNPCEvent(npc, eventType, context) {
    // Create event-specific content
    let eventContent = '';
    
    switch(eventType) {
        case 'venture_purchase':
            eventContent = `I see you're expanding your business! ${npc.dialogue}`;
            break;
        case 'upgrade':
            eventContent = `Upgrading your equipment? ${npc.dialogue}`;
            break;
        case 'date':
            eventContent = `On a date? How romantic! ${npc.dialogue}`;
            break;
        case 'life_activity':
            eventContent = `Taking care of yourself? ${npc.dialogue}`;
            break;
        case 'investment':
            eventContent = `Making smart investments! ${npc.dialogue}`;
            break;
        default:
            eventContent = npc.dialogue;
    }
    
    // Add family relationship if applicable
    let relationshipInfo = '';
    let familyLabel = '';
    if (npc.relationship && npc.relationship !== 'Relative') {
        relationshipInfo = `<p class="npc-relationship">Your ${npc.relationship}</p>`;
        familyLabel = `<div class="family-label">👨‍👩‍👧‍👦 FAMILY</div>`;
    }
    
    // Create modal content
    const modalContent = `
        <div class="npc-modal-content ${familyLabel ? 'family-member' : ''}">
            ${familyLabel}
            <div class="npc-header">
                <div class="npc-avatar">${npc.icon}</div>
                <div class="npc-info">
                    <h3>${npc.name}</h3>
                    <p class="npc-type">${npc.type.replace('_', ' ').toUpperCase()}</p>
                    <p class="npc-location">📍 ${npc.location.replace('_', ' ').toUpperCase()}</p>
                    <p class="npc-citizenship">🌍 ${npc.citizenship}</p>
                    ${npc.age ? `<p class="npc-age">Age: ${npc.age}</p>` : ''}
                    <p class="npc-personality">Personality: ${npc.personality}</p>
                    ${relationshipInfo}
                </div>
            </div>
            <div class="npc-dialogue">
                <p>"${eventContent}"</p>
            </div>
            <div class="npc-actions">
                <button class="npc-btn primary" onclick="startNPCQuest('${npc.quest}', '${npc.name}', '${npc.eventId}')">
                    🎯 Start Quest
                </button>
                <button class="npc-btn secondary" onclick="closeNPCModal()">
                    👋 Nice to Meet You
                </button>
            </div>
        </div>
    `;
    
    // Create and show modal
    const modal = document.createElement('div');
    modal.className = 'npc-modal-only';
    modal.id = 'npcModal';
    modal.innerHTML = modalContent;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Auto-close after 5 seconds if no interaction
    setTimeout(() => {
        if (document.getElementById('npcModal')) {
            closeNPCModal();
        }
    }, 5000);
}

// Enhanced quest system for generated NPCs
function startNPCQuest(questId, npcName, eventId) {
    closeNPCModal();
    showNotification(`Quest started with ${npcName}!`, 'success');
    
    // Add quest to game state
    if (!gameState.activeQuests) {
        gameState.activeQuests = [];
    }
    
    // Check if quest already exists
    const existingQuest = gameState.activeQuests.find(q => q.npc === npcName && q.quest === questId);
    if (existingQuest) {
        showNotification('You already have this quest!', 'warning');
        return;
    }
    
    gameState.activeQuests.push({
        id: questId + '_' + eventId,
        npc: npcName,
        quest: questId,
        started: Date.now(),
        eventId: eventId,
        completed: false
    });
    
    updateQuestsList();
    updateUI();
}

// Random encounter system
function triggerRandomNPCEncounter() {
    const chance = Math.random();
    if (chance < 0.3) { // 30% chance of NPC encounter
        const events = ['venture_purchase', 'upgrade', 'life_activity', 'investment'];
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        createNPCEvent(randomEvent);
    }
}

// Update the existing NPCs array to be empty (we'll generate dynamically)
const npcs = []; // Empty - NPCs will be generated dynamically

// NPC interaction functions
function interactWithNPC(npcName) {
    const npc = gameState.currentNPCs.find(n => n.name === npcName);
    if (!npc) {
        showNotification('NPC not found!', 'error');
        return;
    }
    
    // Show NPC dialogue modal
    showNPCDialogue(npc);
}

function showNPCDialogue(npc) {
    // Add family relationship if applicable
    let relationshipInfo = '';
    let familyLabel = '';
    if (npc.relationship && npc.relationship !== 'Relative') {
        relationshipInfo = `<p class="npc-relationship">Your ${npc.relationship}</p>`;
        familyLabel = `<div class="family-label">👨‍👩‍👧‍👦 FAMILY</div>`;
    }
    
    // Create modal content
    const modalContent = `
        <div class="npc-modal-content ${familyLabel ? 'family-member' : ''}">
            ${familyLabel}
            <div class="npc-header">
                <div class="npc-avatar">${npc.icon}</div>
                <div class="npc-info">
                    <h3>${npc.name}</h3>
                    <p class="npc-type">${npc.type.replace('_', ' ').toUpperCase()}</p>
                    <p class="npc-location">📍 ${npc.location.replace('_', ' ').toUpperCase()}</p>
                    <p class="npc-citizenship">🌍 ${npc.citizenship}</p>
                    ${npc.age ? `<p class="npc-age">Age: ${npc.age}</p>` : ''}
                    <p class="npc-personality">Personality: ${npc.personality}</p>
                    ${relationshipInfo}
                </div>
            </div>
            <div class="npc-dialogue">
                <p>"${npc.dialogue}"</p>
            </div>
            <div class="npc-actions">
                <button class="npc-btn primary" onclick="startNPCQuest('${npc.quest}', '${npc.name}', '${npc.eventId}')">
                    🎯 Start Quest
                </button>
                <button class="npc-btn secondary" onclick="closeNPCModal()">
                    💬 Just Talking
                </button>
            </div>
        </div>
    `;
    
    // Create and show modal
    const modal = document.createElement('div');
    modal.className = 'npc-modal-only';
    modal.id = 'npcModal';
    modal.innerHTML = modalContent;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

function startNPCQuest(questId, npcName) {
    closeNPCModal();
    showNotification(`Quest started with ${npcName}!`, 'success');
    
    // Add quest to game state
    if (!gameState.activeQuests) {
        gameState.activeQuests = [];
    }
    gameState.activeQuests.push({
        id: questId,
        npc: npcName,
        started: Date.now(),
        completed: false
    });
    
    updateUI();
}

function closeNPCModal() {
    const modal = document.getElementById('npcModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

function getRandomNPC(location = null) {
    let availableNPCs = npcs;
    if (location) {
        availableNPCs = npcs.filter(npc => npc.location === location);
    }
    return availableNPCs[Math.floor(Math.random() * availableNPCs.length)];
}

// Initialize NPCs tab
function initializeNPCTab() {
    populateNPCsGrid('all');
    setupLocationTabs();
    updateQuestsList();
}

function populateNPCsGrid(location) {
    const npcsGrid = document.getElementById('npcsGrid');
    if (!npcsGrid) return;
    
    npcsGrid.innerHTML = '';
    
    let filteredNPCs = gameState.currentNPCs || [];
    if (location !== 'all') {
        filteredNPCs = filteredNPCs.filter(npc => npc.location === location);
    }
    
    if (filteredNPCs.length === 0) {
        npcsGrid.innerHTML = '<div class="no-npcs">No NPCs encountered yet. Complete activities to meet people!</div>';
        return;
    }
    
    filteredNPCs.forEach(npc => {
        const npcCard = document.createElement('div');
        npcCard.className = 'npc-card';
        npcCard.onclick = () => interactWithNPC(npc.name);
        
        // Add family relationship label if applicable
        let familyLabel = '';
        if (npc.relationship && npc.relationship !== 'Relative') {
            familyLabel = `<div class="npc-card-family">${npc.relationship.toUpperCase()}</div>`;
        }
        
        npcCard.innerHTML = `
            ${familyLabel}
            <div class="npc-avatar">${npc.icon}</div>
            <div class="npc-name">${npc.name}</div>
            <div class="npc-type">${npc.type.replace('_', ' ').toUpperCase()}</div>
            <div class="npc-location">📍 ${npc.location.replace('_', ' ').toUpperCase()}</div>
        `;
        
        npcsGrid.appendChild(npcCard);
    });
}

function setupLocationTabs() {
    const locationTabs = document.querySelectorAll('.location-tab');
    locationTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Remove active class from all tabs
            locationTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            e.target.classList.add('active');
            // Populate NPCs grid with selected location
            populateNPCsGrid(e.target.dataset.location);
        });
    });
}

function updateQuestsList() {
    const questsList = document.getElementById('questsList');
    if (!questsList) return;
    
    if (!gameState.activeQuests || gameState.activeQuests.length === 0) {
        questsList.innerHTML = '<div class="no-quests">No active quests. Talk to NPCs to start quests!</div>';
        return;
    }
    
    // Filter out invalid quests
    const validQuests = gameState.activeQuests.filter(quest => quest && quest.quest && quest.npc);
    
    if (validQuests.length === 0) {
        questsList.innerHTML = '<div class="no-quests">No active quests. Talk to NPCs to start quests!</div>';
        return;
    }
    
    questsList.innerHTML = '';
    validQuests.forEach(quest => {
        const questItem = document.createElement('div');
        questItem.className = 'quest-item';
        
        questItem.innerHTML = `
            <div class="quest-info">
                <div class="quest-name">${quest.quest.replace('_', ' ').toUpperCase()}</div>
                <div class="quest-npc">Given by: ${quest.npc}</div>
            </div>
            <button class="npc-btn secondary" onclick="completeQuest('${quest.id}')">
                Complete
            </button>
        `;
        
        questsList.appendChild(questItem);
    });
}

function completeQuest(questId) {
    if (!gameState.activeQuests) {
        gameState.activeQuests = [];
    }
    
    const questIndex = gameState.activeQuests.findIndex(q => q.id === questId);
    if (questIndex === -1) {
        showNotification('Quest not found!', 'error');
        return;
    }
    
    const quest = gameState.activeQuests[questIndex];
    const reward = Math.floor(Math.random() * 5000) + 1000; // $1K - $6K reward
    
    // Complete quest
    gameState.balance += reward;
    gameState.activeQuests.splice(questIndex, 1);
    
    showNotification(`Quest completed! Earned $${formatNumber(reward)}`, 'success');
    
    // Update UI
    updateUI();
    updateQuestsList();
    
    // Auto-save
    autoSave();
}

// Car collection
const carTypes = [
    { name: 'Used Sedan', cost: 10000, income: 50, icon: '🚗', level: 1 },
    { name: 'Sports Car', cost: 50000, income: 200, icon: '🏎️', level: 2 },
    { name: 'Luxury SUV', cost: 80000, income: 300, icon: '🚙', level: 3 },
    { name: 'Supercar', cost: 200000, income: 600, icon: '🏁', level: 4 },
    { name: 'Classic Vintage', cost: 350000, income: 800, icon: '🚘', level: 5 },
    { name: 'Hypercar', cost: 1000000, income: 2000, icon: '🏆', level: 6 },
    { name: 'Electric Supercar', cost: 2500000, income: 4000, icon: '⚡', level: 7 },
    { name: 'Concept Car', cost: 5000000, income: 8000, icon: '🚀', level: 8 }
];

// Plane collection
const planeTypes = [
    { name: 'Private Jet', cost: 500000, income: 2000, icon: '✈️', level: 1 },
    { name: 'Business Jet', cost: 2000000, income: 6000, icon: '💺', level: 2 },
    { name: 'Luxury Jet', cost: 10000000, income: 25000, icon: '🛩️', level: 3 },
    { name: 'Private Airliner', cost: 50000000, income: 100000, icon: '✈️', level: 4 }
];

// Luxury items collection
const luxuryItems = [
    { name: 'Diamond Ring', cost: 5000, income: 20, icon: '💍', category: 'jewelry' },
    { name: 'Gold Watch', cost: 15000, income: 50, icon: '⌚', category: 'watch' },
    { name: 'Designer Bag', cost: 8000, income: 30, icon: '👜', category: 'fashion' },
    { name: 'Rare Painting', cost: 50000, income: 200, icon: '🖼️', category: 'art' },
    { name: 'Vintage Wine', cost: 25000, income: 100, icon: '🍷', category: 'collection' },
    { name: 'Platinum Necklace', cost: 30000, income: 120, icon: '📿', category: 'jewelry' },
    { name: 'Sculpture', cost: 75000, income: 300, icon: '🗿', category: 'art' },
    { name: 'Rare Books', cost: 20000, income: 80, icon: '📚', category: 'collection' },
    { name: 'Yacht', cost: 250000, income: 1000, icon: '🛥️', category: 'vehicle' },
    { name: 'Helicopter', cost: 800000, income: 3000, icon: '🚁', category: 'vehicle' },
    { name: 'Submarine', cost: 5000000, income: 15000, icon: '🚤', category: 'vehicle' },
    { name: 'Space Ticket', cost: 10000000, income: 50000, icon: '🚀', category: 'experience' }
];

// Crypto investments
const cryptoInvestments = {
    bitcoin: { 
        name: 'Bitcoin', 
        symbol: '₿', 
        price: 45000, 
        icon: '₿',
        change: 5.2,
        volatility: 0.05
    },
    ethereum: { 
        name: 'Ethereum', 
        symbol: 'Ξ', 
        price: 3000, 
        icon: 'Ξ',
        change: 8.7,
        volatility: 0.08
    },
    dogecoin: { 
        name: 'Dogecoin', 
        symbol: '🐕', 
        price: 0.08, 
        icon: '🐕',
        change: 12.3,
        volatility: 0.15
    },
    nft: { 
        name: 'NFT Collection', 
        symbol: '🎨', 
        price: 5000, 
        icon: '🎨',
        change: 15.8,
        volatility: 0.20
    },
    cardano: {
        name: 'Cardano',
        symbol: '₳',
        price: 0.45,
        icon: '₳',
        change: -3.2,
        volatility: 0.06
    },
    polkadot: {
        name: 'Polkadot',
        symbol: '●',
        price: 7.50,
        icon: '●',
        change: 4.1,
        volatility: 0.07
    },
    chainlink: {
        name: 'Chainlink',
        symbol: '🔗',
        price: 14.20,
        icon: '🔗',
        change: -1.8,
        volatility: 0.09
    },
    solana: {
        name: 'Solana',
        symbol: '◎',
        price: 98.50,
        icon: '◎',
        change: 18.5,
        volatility: 0.12
    },
    avalanche: {
        name: 'Avalanche',
        symbol: '🔺',
        price: 35.80,
        icon: '🔺',
        change: 6.7,
        volatility: 0.10
    },
    polygon: {
        name: 'Polygon',
        symbol: '⬡',
        price: 0.85,
        icon: '⬡',
        change: -5.4,
        volatility: 0.11
    }
};

// Stock market data (fictional companies)
const stockMarket = {
    nykor: {
        displayName: 'Nykor Athletics',
        sector: 'Sports & Fitness',
        basePrice: 120.00,
        currentPrice: 120.00,
        volatility: 0.15,
        growthRate: 0.08,
        risk: 'Medium',
        description: 'Athletic footwear and sports apparel company',
        icon: '👟'
    },
    techflow: {
        displayName: 'TechFlow Solutions',
        sector: 'Technology',
        basePrice: 250.50,
        currentPrice: 250.50,
        volatility: 0.25,
        growthRate: 0.15,
        risk: 'High',
        description: 'Cloud computing and AI software provider',
        icon: '💻'
    },
    greenenergy: {
        displayName: 'GreenEnergy Corp',
        sector: 'Energy',
        basePrice: 85.75,
        currentPrice: 85.75,
        volatility: 0.20,
        growthRate: 0.12,
        risk: 'Medium',
        description: 'Renewable energy and solar power systems',
        icon: '🌱'
    },
    foodchain: {
        displayName: 'FoodChain Inc',
        sector: 'Food & Beverage',
        basePrice: 65.25,
        currentPrice: 65.25,
        volatility: 0.12,
        growthRate: 0.06,
        risk: 'Low',
        description: 'Restaurant chain and food delivery service',
        icon: '🍔'
    },
    healthplus: {
        displayName: 'HealthPlus Medical',
        sector: 'Healthcare',
        basePrice: 180.90,
        currentPrice: 180.90,
        volatility: 0.18,
        growthRate: 0.10,
        risk: 'Medium',
        description: 'Pharmaceutical and medical devices company',
        icon: '🏥'
    },
    automax: {
        displayName: 'AutoMax Motors',
        sector: 'Automotive',
        basePrice: 95.40,
        currentPrice: 95.40,
        volatility: 0.22,
        growthRate: 0.07,
        risk: 'Medium',
        description: 'Electric vehicle and autonomous driving technology',
        icon: '🚗'
    },
    retailpro: {
        displayName: 'RetailPro Group',
        sector: 'Retail',
        basePrice: 45.80,
        currentPrice: 45.80,
        volatility: 0.16,
        growthRate: 0.05,
        risk: 'Medium',
        description: 'E-commerce and retail management platform',
        icon: '🛍️'
    },
    cryptofin: {
        displayName: 'CryptoFin Bank',
        sector: 'Finance',
        basePrice: 320.15,
        currentPrice: 320.15,
        volatility: 0.35,
        growthRate: 0.20,
        risk: 'High',
        description: 'Digital banking and cryptocurrency services',
        icon: '🏦'
    },
    spacex: {
        displayName: 'SpaceX Ventures',
        sector: 'Aerospace',
        basePrice: 450.00,
        currentPrice: 450.00,
        volatility: 0.30,
        growthRate: 0.18,
        risk: 'High',
        description: 'Space exploration and satellite technology',
        icon: '🚀'
    },
    biogen: {
        displayName: 'BioGen Labs',
        sector: 'Biotechnology',
        basePrice: 275.60,
        currentPrice: 275.60,
        volatility: 0.28,
        growthRate: 0.16,
        risk: 'High',
        description: 'Genetic research and biotechnology solutions',
        icon: '🧬'
    },
    gaming: {
        displayName: 'GamingWorld Inc',
        sector: 'Entertainment',
        basePrice: 125.30,
        currentPrice: 125.30,
        volatility: 0.24,
        growthRate: 0.14,
        risk: 'High',
        description: 'Video games and esports platform',
        icon: '🎮'
    },
    realest: {
        displayName: 'RealEstate Plus',
        sector: 'Real Estate',
        basePrice: 85.20,
        currentPrice: 85.20,
        volatility: 0.14,
        growthRate: 0.08,
        risk: 'Low',
        description: 'Property management and real estate investment',
        icon: '🏢'
    },
    logistic: {
        displayName: 'LogiFast Solutions',
        sector: 'Logistics',
        basePrice: 95.75,
        currentPrice: 95.75,
        volatility: 0.18,
        growthRate: 0.09,
        risk: 'Medium',
        description: 'Supply chain and logistics management',
        icon: '🚚'
    },
    telecom: {
        displayName: 'TeleCom Networks',
        sector: 'Telecommunications',
        basePrice: 155.85,
        currentPrice: 155.85,
        volatility: 0.16,
        growthRate: 0.07,
        risk: 'Low',
        description: '5G networks and telecommunications services',
        icon: '📡'
    },
    mining: {
        displayName: 'MiningCorp Industries',
        sector: 'Mining',
        basePrice: 75.40,
        currentPrice: 75.40,
        volatility: 0.26,
        growthRate: 0.11,
        risk: 'High',
        description: 'Mining and natural resources extraction',
        icon: '⛏️'
    },
    education: {
        displayName: 'EduTech Academy',
        sector: 'Education',
        basePrice: 65.90,
        currentPrice: 65.90,
        volatility: 0.15,
        growthRate: 0.10,
        risk: 'Medium',
        description: 'Online education and learning platforms',
        icon: '🎓'
    },
    peartech: {
        displayName: 'PearTech',
        sector: 'Technology',
        basePrice: 250.00,
        currentPrice: 250.00,
        volatility: 0.25,
        growthRate: 0.15,
        risk: 'High',
        description: 'Mobile technology and consumer electronics',
        icon: '📱'
    }
};

// Stages configuration
const stages = [
    { name: 'Beginner', target: 100000, reward: 'House Level 2', rewardIcon: '🏠' },
    { name: 'Entrepreneur', target: 500000, reward: 'Premium Wardrobe', rewardIcon: '👔' },
    { name: 'Business Owner', target: 1000000, reward: 'Sports Car', rewardIcon: '🚗' },
    { name: 'Tycoon', target: 5000000, reward: 'Mansion', rewardIcon: '🏰' },
    { name: 'Magnate', target: 10000000, reward: 'Private Jet', rewardIcon: '✈️' },
    { name: 'Legend', target: 50000000, reward: 'Private Island', rewardIcon: '🏝️' },
    { name: 'Billionaire', target: 100000000, reward: 'Yacht Collection', rewardIcon: '🛥️' }
];

// Venture names for display
const ventureNames = {
    lemonade: 'Lemonade Stand', kiosk: 'Kiosk', foodtruck: 'Food Truck', smallstore: 'Small Store',
    boutique: 'Boutique', restaurant: 'Restaurant', cafe: 'Cafe', bar: 'Bar', salon: 'Salon',
    gym: 'Gym', hotel: 'Hotel', nightclub: 'Nightclub', mall: 'Mall', casino: 'Casino',
    techstartup: 'Tech Startup', crypto: 'Crypto Trading', realestate: 'Real Estate',
    stockmarket: 'Stock Market', airport: 'Airport', spaceline: 'Space Line', satellite: 'Satellite',
    megacorp: 'Mega Corp', globalbank: 'Global Bank', spacemining: 'Space Mining',
    quantumtech: 'Quantum Tech', interstellar: 'Interstellar Corp', dysonsphere: 'Dyson Sphere',
    galaxywide: 'Galaxy Wide', universal: 'Universal Corp', multiverse: 'Multiverse Inc'
};

// DOM Elements
const balanceElement = document.getElementById('balance');
const currentStageElement = document.getElementById('currentStage');
const stageProgressElement = document.getElementById('stageProgress');
const nextRewardElement = document.getElementById('nextReward');
const progressFillElement = document.getElementById('progressFill');
const transferBtn = document.getElementById('transferBtn');
const topupBtn = document.getElementById('topupBtn');
const mainActionBtn = document.getElementById('mainActionBtn');
const modalOverlay = document.getElementById('modalOverlay');
const rewardModal = document.getElementById('rewardModal');
const transferModal = document.getElementById('transferModal');
const investmentModal = document.getElementById('investmentModal');
const withdrawModal = document.getElementById('withdrawModal');
const cryptoGraphModal = document.getElementById('cryptoGraphModal');
const stockTradeModal = document.getElementById('stockTradeModal');
const prestigeModal = document.getElementById('prestigeModal');
const ventureDetailModal = document.getElementById('ventureDetailModal');

// Apply data-width attributes to elements that need dynamic widths
function applyDataWidths() {
    document.querySelectorAll('[data-width]').forEach(element => {
        const width = element.getAttribute('data-width');
        element.style.setProperty('--dynamic-width', `${width}%`);
    });
}

// Initialize game
function initGame() {
    loadGameState();
    initializePriceHistory(); // Initialize crypto price history
    updateUI();
    applyDataWidths(); // Apply data-width values from HTML
    updatePrestigeDisplay(); // Update prestige display
    startIncomeGeneration();
    setupEventListeners();
    updateTime();
    setInterval(updateTime, 1000);
    setInterval(saveGameState, 10000); // Auto-save every 10 seconds
    setInterval(simulateCryptoPrices, 30000); // Update crypto prices every 30 seconds
    setInterval(simulateStockPrices, 20000); // Update stock prices every 20 seconds
    setInterval(updatePriceHistory, 30000); // Update price history every 30 seconds
    setupMobileBackButton(); // Setup mobile back button handling
}

// Setup mobile back button handling
function setupMobileBackButton() {
    // Track navigation history within the game
    let navigationHistory = ['home']; // Start with home tab
    let maxHistoryLength = 10;
    
    // Add current tab to history when navigating
    function addToHistory(tab) {
        // Remove any future history if we're going back and then navigating forward
        const currentIndex = navigationHistory.indexOf(tab);
        if (currentIndex !== -1) {
            navigationHistory = navigationHistory.slice(0, currentIndex + 1);
        }
        
        // Add new tab to history
        navigationHistory.push(tab);
        
        // Limit history length
        if (navigationHistory.length > maxHistoryLength) {
            navigationHistory.shift();
        }
    }
    
    // Handle back navigation
    function handleBackNavigation() {
        if (navigationHistory.length > 1) {
            // Remove current tab
            navigationHistory.pop();
            
            // Go to previous tab
            const previousTab = navigationHistory[navigationHistory.length - 1];
            navigateToTab(previousTab);
            return true; // Prevent default browser back
        }
        return false; // Allow default browser back (exit game)
    }
    
    // Navigate to specific tab
    function navigateToTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Remove active class from all nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab
        const selectedTab = document.getElementById(`${tabName}-tab`);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
        
        // Add active class to corresponding nav button
        const navBtn = document.querySelector(`[data-page="${tabName}"]`);
        if (navBtn) {
            navBtn.classList.add('active');
        }
    }
    
    // Override navigation event listeners to track history
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const page = btn.dataset.page;
        
        if (page && page !== 'center') {
            // Remove existing listener and add new one
            btn.replaceWith(btn.cloneNode(true));
            const newBtn = document.querySelector(`[data-page="${page}"]`);
            
            newBtn.addEventListener('click', () => {
                addToHistory(page);
                navigateToTab(page);
            });
        }
    });
    
    // Handle browser back button
    window.addEventListener('popstate', (event) => {
        if (handleBackNavigation()) {
            // Push a new state to prevent browser from actually going back
            history.pushState(null, null, location.href);
        }
    });
    
    // Handle Android hardware back button
    if (window.cordova || window.PhoneGap || window.phonegap) {
        document.addEventListener('backbutton', () => {
            if (handleBackNavigation()) {
                // Prevent default back button behavior
                return false;
            }
        }, false);
    }
    
    // Handle swipe gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50;
    const maxVerticalDistance = 100; // Prevent vertical swipes from triggering back
    
    document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
        touchStartY = event.changedTouches[0].screenY;
        
        // Show gesture indicator when starting from left edge
        if (touchStartX < 30) {
            const indicator = document.getElementById('backGestureIndicator');
            if (indicator) {
                indicator.classList.add('active');
            }
            document.body.classList.add('swipe-active');
        }
    }, false);
    
    document.addEventListener('touchmove', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        touchEndY = event.changedTouches[0].screenY;
        
        // Update indicator during swipe
        if (touchStartX < 30) {
            const indicator = document.getElementById('backGestureIndicator');
            if (indicator) {
                const progress = Math.min((touchEndX - touchStartX) / minSwipeDistance, 1);
                indicator.style.opacity = progress * 0.8;
                indicator.style.width = (4 + progress * 4) + 'px';
            }
        }
    }, false);
    
    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        touchEndY = event.changedTouches[0].screenY;
        
        // Hide indicator
        const indicator = document.getElementById('backGestureIndicator');
        if (indicator) {
            indicator.classList.remove('active');
            indicator.style.opacity = '';
            indicator.style.width = '';
        }
        document.body.classList.remove('swipe-active');
        
        handleSwipeGesture();
    }, false);
    
    function handleSwipeGesture() {
        const swipeDistance = touchEndX - touchStartX;
        const verticalDistance = Math.abs(touchEndY - touchStartY);
        
        // Only trigger back if it's a horizontal swipe from the left edge
        // and not too much vertical movement
        if (swipeDistance > minSwipeDistance && 
            touchStartX < 30 && 
            verticalDistance < maxVerticalDistance) {
            handleBackNavigation();
        }
    }
    
    // Initialize history with current active tab
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab) {
        const tabId = activeTab.id.replace('-tab', '');
        navigationHistory = [tabId];
    }
    
    // Push initial state to history
    history.pushState(null, null, location.href);
}

// Load game state from localStorage
function loadGameState() {
    const savedState = localStorage.getItem('businessGameState');
    if (savedState) {
        const parsed = JSON.parse(savedState);
        
        // Merge saved state with default state, preserving nested objects
        gameState.balance = parsed.balance || gameState.balance;
        gameState.totalEarnings = parsed.totalEarnings || gameState.totalEarnings;
        gameState.currentStage = parsed.currentStage || gameState.currentStage;
        gameState.stageProgress = parsed.stageProgress || gameState.stageProgress;
        gameState.stageTarget = parsed.stageTarget || gameState.stageTarget;
        gameState.incomePerSecond = parsed.incomePerSecond || gameState.incomePerSecond;
        gameState.currentCity = parsed.currentCity || gameState.currentCity;
        gameState.unlockedCities = parsed.unlockedCities || gameState.unlockedCities;
        
        // Merge ventures (preserve default structure but update saved values)
        if (parsed.ventures) {
            Object.keys(parsed.ventures).forEach(ventureId => {
                if (gameState.ventures[ventureId]) {
                    gameState.ventures[ventureId] = { ...gameState.ventures[ventureId], ...parsed.ventures[ventureId] };
                }
            });
        }
        
        // Merge assets
        if (parsed.assets) {
            Object.keys(parsed.assets).forEach(assetId => {
                if (gameState.assets[assetId]) {
                    gameState.assets[assetId] = { ...gameState.assets[assetId], ...parsed.assets[assetId] };
                }
            });
        }
        
        // Merge other collections
        gameState.carCollection = parsed.carCollection || gameState.carCollection;
        gameState.planeCollection = parsed.planeCollection || gameState.planeCollection;
        gameState.luxuryCollection = parsed.luxuryCollection || gameState.luxuryCollection;
        gameState.cryptoHoldings = parsed.cryptoHoldings || gameState.cryptoHoldings;
        gameState.cryptoBalance = parsed.cryptoBalance || gameState.cryptoBalance;
        gameState.lifeStats = parsed.lifeStats || gameState.lifeStats;
        gameState.loveLife = parsed.loveLife || gameState.loveLife;
        gameState.lastSave = parsed.lastSave || gameState.lastSave;
        
        // Calculate offline earnings (max 3 hours)
        const now = Date.now();
        const timeDiff = (now - gameState.lastSave) / 1000; // seconds
        const maxIdleTime = 3 * 60 * 60; // 3 hours in seconds
        const cappedTimeDiff = Math.min(timeDiff, maxIdleTime); // Cap at 3 hours
        const offlineEarnings = cappedTimeDiff * gameState.incomePerSecond;
        
        if (offlineEarnings > 0) {
            gameState.balance += offlineEarnings;
            gameState.totalEarnings += offlineEarnings;
            
            // Show different messages based on whether time was capped
            if (timeDiff > maxIdleTime) {
                showNotification(`Welcome back! You earned $${formatNumber(offlineEarnings)} (3 hour limit) while away.`, 'success');
            } else {
                showNotification(`Welcome back! You earned $${formatNumber(offlineEarnings)} while away.`, 'success');
            }
        }
    }
}

// Save game state to localStorage
function saveGameState() {
    gameState.lastSave = Date.now();
    localStorage.setItem('businessGameState', JSON.stringify(gameState));
}

// Simple balance update function (no animation)
function updateBalance(newBalance) {
    const balanceEl = document.getElementById('balance');
    if (balanceEl) {
        balanceEl.textContent = `$${formatNumber(newBalance)}`;
    }
}

// Create floating money animation (function kept for reference but not used)
function createFloatingMoney(element, amount, isIncrease) {
    const floatingMoney = document.createElement('div');
    floatingMoney.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
        font-size: 18px;
        color: ${isIncrease ? '#10b981' : '#ef4444'};
        pointer-events: none;
        z-index: 1000;
        animation: moneyFloat 1.5s ease-out forwards;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    `;
    floatingMoney.textContent = `${isIncrease ? '+' : '-'}$${formatNumber(Math.abs(amount))}`;
    
    element.style.position = 'relative';
    element.appendChild(floatingMoney);
    
    setTimeout(() => {
        floatingMoney.remove();
    }, 1500);
}

// Enhanced purchase success animation
function animatePurchaseSuccess(element, ventureName) {
    // Add success pulse to the element
    element.style.animation = 'successPulse 0.6s ease';
    
    // Create success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        z-index: 3000;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2s forwards;
        font-weight: 600;
        max-width: 250px;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">🎉</span>
            <div>
                <div style="font-size: 14px; opacity: 0.9;">Purchase Successful!</div>
                <div style="font-size: 12px; margin-top: 2px;">${ventureName}</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2500);
    
    // Create confetti effect
    createConfetti(element);
}

// Create confetti particle effect
function createConfetti(element) {
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
    const confettiCount = 15;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 8 + 4;
        const duration = Math.random() * 1 + 0.8;
        const delay = Math.random() * 0.3;
        
        confetti.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            pointer-events: none;
            z-index: 999;
            animation: confettiFall ${duration}s ease-out ${delay}s forwards;
        `;
        
        element.style.position = 'relative';
        element.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// Achievement and milestone particle effects
function createAchievementEffect(type = 'success') {
    const colors = {
        success: ['#10b981', '#059669', '#34d399', '#6ee7b7'],
        level: ['#f59e0b', '#d97706', '#fbbf24', '#fcd34d'],
        prestige: ['#8b5cf6', '#7c3aed', '#a78bfa', '#c4b5fd'],
        milestone: ['#3b82f6', '#2563eb', '#60a5fa', '#93c5fd']
    };
    
    const particleCount = type === 'prestige' ? 50 : 25;
    const selectedColors = colors[type] || colors.success;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createParticle(selectedColors);
        }, i * 30);
    }
}

function createParticle(colors) {
    const particle = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 12 + 6;
    const duration = Math.random() * 2 + 1.5;
    const delay = Math.random() * 0.2;
    
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.5;
    const endX = startX + (Math.random() - 0.5) * 400;
    const endY = startY + Math.random() * 300 + 100;
    
    particle.style.cssText = `
        position: fixed;
        top: ${startY}px;
        left: ${startX}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: particleFall ${duration}s ease-out ${delay}s forwards;
        box-shadow: 0 0 ${size/2}px ${color};
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

// Add particle fall animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFall {
        0% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
        50% {
            opacity: 0.8;
            transform: translate(${(Math.random() - 0.5) * 100}px, 150px) rotate(${Math.random() * 360}deg) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translate(${(Math.random() - 0.5) * 200}px, 400px) rotate(${Math.random() * 720}deg) scale(0.3);
        }
    }
    
    @keyframes sparkle {
        0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
    }
    
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Enhanced milestone notifications
function showMilestoneNotification(title, message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #1e293b, #334155);
        border: 2px solid ${type === 'prestige' ? '#8b5cf6' : type === 'level' ? '#f59e0b' : '#10b981'};
        color: white;
        padding: 30px 40px;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        z-index: 4000;
        text-align: center;
        max-width: 400px;
        animation: milestonePop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    `;
    
    const icons = {
        success: '🎉',
        level: '⭐',
        prestige: '👑',
        milestone: '🏆'
    };
    
    notification.innerHTML = `
        <div style="font-size: 48px; margin-bottom: 15px; animation: bounce 1s ease infinite;">${icons[type] || icons.success}</div>
        <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700;">${title}</h2>
        <p style="margin: 0; opacity: 0.9; font-size: 16px;">${message}</p>
        <div style="margin-top: 20px;">
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: ${type === 'prestige' ? '#8b5cf6' : type === 'level' ? '#f59e0b' : '#10b981'};
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            ">Awesome!</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Create achievement effect
    createAchievementEffect(type);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'fadeOutScale 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add milestone animations
const milestoneStyle = document.createElement('style');
milestoneStyle.textContent = `
    @keyframes milestonePop {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(-180deg);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1) rotate(10deg);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
        }
    }
    
    @keyframes fadeOutScale {
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(milestoneStyle);

// Enhanced stage progression with effects
function checkStageProgression() {
    const currentStageIndex = stages.findIndex(s => s.name === gameState.currentStage);
    const nextStageData = stages[currentStageIndex + 1];
    
    if (nextStageData && gameState.stageProgress >= nextStageData.target) {
        // Stage up animation
        showMilestoneNotification(
            `Stage Complete!`,
            `You've reached ${nextStageData.name}!`,
            'level'
        );
        
        gameState.currentStage = nextStageData.name;
        gameState.stageProgress = 0;
        
        // Award bonus
        const bonus = nextStageData.target * 0.1;
        gameState.balance += bonus;
        updateBalance(gameState.balance);
        
        updateUI();
    }
}

// Enhanced prestige effects
function prestigeWithEffects() {
    if (gameState.balance < 1000000000) {
        showNotification('Need $1B to prestige!', 'error');
        return;
    }
    
    showMilestoneNotification(
        'PRESTIGE UNLOCKED!',
        `You've reached Prestige Level ${gameState.prestige.level + 1}!`,
        'prestige'
    );
    
    // Reset game with prestige bonus
    gameState.prestige.level++;
    gameState.prestige.multiplier = 1 + (gameState.prestige.level * 0.5);
    gameState.balance = 250;
    gameState.stageProgress = 0;
    gameState.currentStage = 'Beginner';
    
    // Reset ventures but keep prestige
    Object.keys(gameState.ventures).forEach(ventureId => {
        const venture = gameState.ventures[ventureId];
        venture.owned = false;
        venture.purchased = false;
        venture.manager = false;
        venture.level = 1;
        venture.quantity = 0;
        venture.income = venture.baseIncome;
        venture.cost = venture.baseCost;
        venture.upgradeCost = venture.baseCost * 2;
    });
    
    updateUI();
    updateVentures();
}

// Update UI elements with animation
function updateUI() {
    const balanceElement = document.getElementById('balance');
    
    if (balanceElement) {
        const currentBalance = parseFloat(balanceElement.textContent.replace(/[$,]/g, ''));
        if (currentBalance !== gameState.balance) {
            updateBalance(gameState.balance);
        }
    }
    
    currentStageElement.textContent = gameState.currentStage;
    
    // Update investment modal balance if it exists
    const investmentBalanceElement = document.getElementById('investmentBalance');
    if (investmentBalanceElement) {
        investmentBalanceElement.textContent = `$${formatNumber(gameState.balance)}`;
    }
    
    const currentStageIndex = stages.findIndex(s => s.name === gameState.currentStage);
    const nextStageData = stages[currentStageIndex + 1];
    
    if (nextStageData) {
        gameState.stageTarget = nextStageData.target;
        nextRewardElement.textContent = `Next: ${nextStageData.reward}`;
    } else {
        gameState.stageTarget = gameState.stageTarget;
        nextRewardElement.textContent = 'Max Level Reached!';
    }
    
    const progress = (gameState.stageProgress / gameState.stageTarget) * 100;
    progressFillElement.style.width = `${Math.min(progress, 100)}%`;
    stageProgressElement.textContent = `$${formatNumber(gameState.stageProgress)} / $${formatNumber(gameState.stageTarget)}`;
    
    updateVentures();
    updateAssets();
    updateChart();
    updateLifeStats();
    updateLoveLife();
    updateCities();
    updateCollections();
    updateCrypto();
    checkCityUnlocks();
}

// Update ventures display
function updateVentures() {
    Object.keys(gameState.ventures).forEach(ventureId => {
        const venture = gameState.ventures[ventureId];
        const card = document.querySelector(`[data-venture="${ventureId}"]`);
        
        if (card) {
            const levelElement = card.querySelector('.level-value');
            const buyBtn = card.querySelector('.buy-btn');
            const upgradeBtn = card.querySelector('.upgrade-btn');
            const managerBtn = card.querySelector('.manager-btn');
            const nameElement = card.querySelector('.venture-name');
            
            // Update level display
            if (levelElement) {
                levelElement.textContent = venture.level;
            }
            
            // Update name with quantity if owned multiple
            if (nameElement && venture.quantity > 1) {
                const baseName = nameElement.textContent.split(' x')[0];
                nameElement.textContent = `${baseName} x${venture.quantity}`;
            } else if (nameElement && venture.quantity <= 1) {
                const baseName = nameElement.textContent.split(' x')[0];
                nameElement.textContent = baseName;
            }
            
            if (venture.owned) {
                card.classList.add('purchased');
                card.querySelector('.venture-cost').textContent = `Next: $${formatNumber(venture.cost)}`;
                card.querySelector('.venture-income').textContent = `+$${formatNumber(venture.income)}/min`;
                
                // Show buy button as "Buy More" for owned ventures
                if (buyBtn) {
                    buyBtn.style.display = 'block';
                    buyBtn.textContent = `Buy More $${formatNumber(venture.cost)}`;
                    buyBtn.disabled = gameState.balance < venture.cost;
                }
                if (upgradeBtn) {
                    upgradeBtn.style.display = 'block';
                    upgradeBtn.textContent = `Upgrade $${formatNumber(venture.upgradeCost)}`;
                    upgradeBtn.disabled = gameState.balance < venture.upgradeCost;
                }
                if (managerBtn) {
                    if (venture.manager) {
                        managerBtn.style.display = 'none';
                    } else {
                        managerBtn.style.display = 'block';
                        managerBtn.textContent = `Manager $${formatNumber(venture.managerCost)}`;
                        managerBtn.disabled = gameState.balance < venture.managerCost;
                    }
                }
            } else {
                card.classList.remove('purchased');
                card.querySelector('.venture-cost').textContent = `$${formatNumber(venture.cost)}`;
                card.querySelector('.venture-income').textContent = `+$${formatNumber(venture.income)}/min`;
                
                // Show only buy button for unpurchased ventures
                if (buyBtn) {
                    buyBtn.style.display = 'block';
                    buyBtn.textContent = `Buy $${formatNumber(venture.cost)}`;
                    buyBtn.disabled = gameState.balance < venture.cost;
                }
                if (upgradeBtn) upgradeBtn.style.display = 'none';
                if (managerBtn) managerBtn.style.display = 'none';
            }
        }
    });
}

// Update assets display
function updateAssets() {
    Object.keys(gameState.assets).forEach(assetId => {
        const asset = gameState.assets[assetId];
        const card = document.getElementById(`${assetId}Asset`);
        
        if (card) {
            const levelDisplay = asset.level === 0 ? 'None' : asset.level === asset.maxLevel ? 'MAX' : `Level ${asset.level}`;
            card.querySelector('.asset-level').textContent = levelDisplay;
            
            if (asset.level >= asset.maxLevel) {
                card.classList.add('maxed');
                card.querySelector('.asset-upgrade').textContent = 'Max Level';
            } else {
                card.classList.remove('maxed');
                const action = asset.level === 0 ? 'Buy' : 'Upgrade';
                card.querySelector('.asset-upgrade').textContent = `${action} $${formatNumber(asset.upgradeCost)}`;
            }
        }
    });
}

// Update earnings chart
function updateChart() {
    const bars = document.querySelectorAll('.bar');
    const maxIncome = Math.max(...Object.values(gameState.ventures).filter(v => v.purchased).map(v => v.income), 100);
    
    bars.forEach((bar, index) => {
        const height = (gameState.totalEarnings / maxIncome) * 100;
        bar.style.height = `${Math.min(height, 100)}%`;
    });
}

// Update life stats display
function updateLifeStats() {
    const stats = gameState.lifeStats;
    document.getElementById('healthValue').textContent = stats.health;
    document.getElementById('happinessValue').textContent = stats.happiness;
    document.getElementById('socialValue').textContent = stats.social;
    document.getElementById('intelligenceValue').textContent = stats.intelligence;
    
    document.querySelector('.health-fill').style.setProperty('--dynamic-width', `${Math.min(stats.health, 100)}%`);
    document.querySelector('.happiness-fill').style.setProperty('--dynamic-width', `${Math.min(stats.happiness, 100)}%`);
    document.querySelector('.social-fill').style.setProperty('--dynamic-width', `${Math.min(stats.social, 100)}%`);
    document.querySelector('.intelligence-fill').style.setProperty('--dynamic-width', `${Math.min(stats.intelligence, 100)}%`);
}

// Update love life display
function updateLoveLife() {
    document.getElementById('relationshipStatus').textContent = gameState.loveLife.relationship;
    document.getElementById('partnerName').textContent = gameState.loveLife.partnerName || 'None';
    document.getElementById('relationshipLevel').textContent = gameState.loveLife.relationshipLevel;
    
    // Show/hide breakup button based on whether player has a partner
    const breakupBtn = document.getElementById('breakupBtn');
    if (breakupBtn) {
        if (gameState.loveLife.partnerName) {
            breakupBtn.style.display = 'block';
            breakupBtn.disabled = false;
        } else {
            breakupBtn.style.display = 'none';
            breakupBtn.disabled = true;
        }
    }
}

// Update cities display
function updateCities() {
    document.getElementById('currentCityName').textContent = gameState.currentCity;
    
    document.querySelectorAll('.city-card').forEach(card => {
        const cityName = card.dataset.city;
        const cityData = cities.find(c => c.name === cityName);
        
        // Skip if city data not found
        if (!cityData) return;
        
        if (gameState.unlockedCities.includes(cityName)) {
            card.classList.remove('locked');
            const cityBonusElement = card.querySelector('.city-bonus');
            if (cityBonusElement) {
                cityBonusElement.textContent = `${cityData.bonus}x Income`;
            }
            if (cityName === gameState.currentCity) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        } else {
            card.classList.add('locked');
            const cityRequirementElement = card.querySelector('.city-requirement');
            if (cityRequirementElement) {
                cityRequirementElement.textContent = `Unlock at ${cityData.unlockStage}`;
            }
        }
    });
}

// Check for city unlocks
function checkCityUnlocks() {
    const currentStageIndex = stages.findIndex(stage => stage.name === gameState.currentStage);
    if (currentStageIndex === -1) return;
    
    cities.forEach(city => {
        const cityStageIndex = stages.findIndex(stage => stage.name === city.unlockStage);
        if (cityStageIndex === -1) return;
        
        if (!gameState.unlockedCities.includes(city.name) && cityStageIndex <= currentStageIndex) {
            gameState.unlockedCities.push(city.name);
            showNotification(`🏙️ ${city.name} unlocked! You can travel there anytime.`, 'success');
        }
    });
}

// Start income generation
function startIncomeGeneration() {
    setInterval(() => {
        let totalIncome = 0;
        Object.values(gameState.ventures).forEach(venture => {
            if (venture.purchased) {
                totalIncome += venture.income / 60; // Convert per minute to per second
            }
        });
        
        // Apply prestige multiplier
        totalIncome *= gameState.prestige.multiplier;
        
        gameState.incomePerSecond = totalIncome;
        gameState.balance += totalIncome;
        gameState.totalEarnings += totalIncome;
        gameState.stageProgress += totalIncome;
        
        updateUI();
        checkStageProgress();
    }, 1000);
}

// Check stage progress and rewards
function checkStageProgress() {
    const currentStageIndex = stages.findIndex(s => s.name === gameState.currentStage);
    const nextStageData = stages[currentStageIndex + 1];
    
    if (nextStageData && gameState.stageProgress >= nextStageData.target) {
        gameState.currentStage = nextStageData.name;
        showRewardModal(nextStageData.reward, nextStageData.rewardIcon);
        showNotification(`Stage Complete! You've reached ${nextStageData.name}!`, 'success');
        
        // Award bonus
        const bonus = nextStageData.target * 0.1; // 10% bonus
        gameState.balance += bonus;
        gameState.stageProgress = nextStageData.target;
    }
}

function ensureVentureUpgradeButtons() {
    document.querySelectorAll('.venture-card').forEach(card => {
        const ventureId = card.dataset.venture;
        const actions = card.querySelector('.venture-actions');
        
        if (!actions || actions.querySelector('.detail-btn')) {
            return;
        }
        
        const detailBtn = document.createElement('button');
        detailBtn.className = 'venture-btn detail-btn';
        detailBtn.type = 'button';
        detailBtn.textContent = 'Upgrades';
        detailBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            openVentureDetail(ventureId);
        });
        
        actions.appendChild(detailBtn);
    });
}

// Setup event listeners
function setupEventListeners() {
    ensureVentureUpgradeButtons();
    // Venture purchases
    document.querySelectorAll('.venture-card').forEach(card => {
        card.addEventListener('click', () => {
            const ventureId = card.dataset.venture;
            purchaseVenture(ventureId);
        });
    });
    
    // Asset upgrades
    document.querySelectorAll('.asset-card').forEach(card => {
        card.addEventListener('click', () => {
            const assetId = card.id.replace('Asset', '');
            upgradeAsset(assetId);
        });
    });
    
    // Collection purchases
    document.querySelectorAll('.collection-item').forEach(item => {
        item.addEventListener('click', () => {
            if (item.dataset.car) {
                purchaseCar(item.dataset.car);
            } else if (item.dataset.plane) {
                purchasePlane(item.dataset.plane);
            } else if (item.dataset.luxury) {
                purchaseLuxury(item.dataset.luxury);
            }
        });
    });
    
    // City selection
    document.querySelectorAll('.city-card').forEach(card => {
        card.addEventListener('click', () => {
            const cityName = card.dataset.city;
            selectCity(cityName);
        });
    });
    
    // Life activities
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', () => {
            const activityName = card.dataset.activity;
            performLifeActivity(activityName);
        });
    });
    
    // Partner meeting
    document.querySelectorAll('.meet-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const partnerCard = btn.closest('.partner-card');
            const partnerName = partnerCard.dataset.partner;
            meetPartner(partnerName);
        });
    });
    
    // Date activities
    document.querySelectorAll('.date-card').forEach(card => {
        card.addEventListener('click', () => {
            const dateName = card.dataset.date;
            goOnDate(dateName);
        });
    });
    

    // Top up button (simulated) with enhanced animation
    topupBtn.addEventListener('click', () => {
        const oldBalance = gameState.balance;
        gameState.balance += 1000;
        updateBalance(gameState.balance);
        animatePurchaseSuccess(topupBtn, '$1,000 Added!');
        showNotification('$1,000 added to your account!', 'success');
    });
    
    // Ads button - gives 3 hours of income (max 3 per day)
    const adsBtn = document.getElementById('adsBtn');
    adsBtn.addEventListener('click', () => {
        // Check if it's a new day and reset counter if needed
        const today = new Date().toDateString();
        if (gameState.adsWatched.today !== today) {
            gameState.adsWatched.today = today;
            gameState.adsWatched.count = 0;
        }
        
        // Check daily limit
        if (gameState.adsWatched.count >= 3) {
            showNotification('Daily ad limit reached! Come back tomorrow for more ads.', 'error');
            return;
        }
        
        // Calculate 3 hours of income (180 minutes * 60 seconds)
        let totalIncome = 0;
        Object.values(gameState.ventures).forEach(venture => {
            if (venture.owned) {
                totalIncome += venture.income;
            }
        });
        
        const threeHourIncome = totalIncome * 180; // 3 hours = 180 minutes
        const oldBalance = gameState.balance;
        gameState.balance += threeHourIncome;
        updateBalance(gameState.balance);
        animatePurchaseSuccess(adsBtn, `+$${formatNumber(threeHourIncome)} from Ads!`);
        
        // Increment ads watched counter
        gameState.adsWatched.count++;
        
        showNotification(`Watched ads! Earned $${formatNumber(threeHourIncome)} (3 hours income) - ${gameState.adsWatched.count}/3 today`, 'success');
    });
    
    // Main action button
    mainActionBtn.addEventListener('click', () => {
        // Remove active class from all nav buttons and tabs
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        
        // Show invest tab
        const investTab = document.getElementById('invest-tab');
        if (investTab) {
            investTab.classList.add('active');
        }
    });
    
    // Modal controls
    modalOverlay.addEventListener('click', () => {
        hideModal('transfer');
        hideModal('reward');
        hideModal('investment');
        hideModal('withdraw');
        hideModal('cryptoGraph');
        hideModal('stockTrade');
        hideModal('prestige');
        hideModal('ventureDetail');
    });
    
    // Crypto transfer button
    const cryptoTransferBtn = document.getElementById('cryptoTransferBtn');
    if (cryptoTransferBtn) {
        cryptoTransferBtn.addEventListener('click', transferToCrypto);
    }
    
    // Investment buy buttons
    document.querySelectorAll('.invest-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.investment-card');
            const investmentId = card.dataset.investment;
            buyCrypto(investmentId);
        });
    });
    
    // Transfer modal input listener
    const transferAmountInput = document.getElementById('transferAmount');
    if (transferAmountInput) {
        transferAmountInput.addEventListener('input', updateTransferConversion);
    }
    
    // Investment modal input listener
    const investmentAmountInput = document.getElementById('investmentAmount');
    if (investmentAmountInput) {
        investmentAmountInput.addEventListener('input', updateInvestmentConversion);
    }
    
    // Withdraw modal input listener
    const withdrawAmountInput = document.getElementById('withdrawAmount');
    if (withdrawAmountInput) {
        withdrawAmountInput.addEventListener('input', updateWithdrawConversion);
    }
    
    // Stock market event listeners
    document.querySelectorAll('.stock-buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.stock-card');
            const stockId = card.dataset.stock;
            buyStock(stockId);
        });
    });
    
    // Add sell buttons to stock cards
    document.querySelectorAll('.stock-card').forEach(card => {
        const stockId = card.dataset.stock;
        const sellBtn = document.createElement('button');
        sellBtn.className = 'stock-sell-btn';
        sellBtn.textContent = 'Sell';
        sellBtn.onclick = () => sellStock(stockId);
        card.appendChild(sellBtn);
    });
    
    // Stock trade modal input listener
    const stockTradeAmountInput = document.getElementById('stockTradeAmount');
    if (stockTradeAmountInput) {
        stockTradeAmountInput.addEventListener('input', updateStockTradeConversion);
    }
}

// Purchase venture
function purchaseVenture(ventureId) {
    // Prevent multiple simultaneous calls
    if (window.purchaseInProgress) {
        return;
    }
    
    window.purchaseInProgress = true;
    
    const venture = gameState.ventures[ventureId];
    
    if (!venture) {
        showNotification('Venture not found!', 'error');
        window.purchaseInProgress = false;
        return;
    }
    
    if (gameState.balance >= venture.cost) {
        const oldBalance = gameState.balance;
        gameState.balance -= venture.cost;
        venture.owned = true;
        venture.purchased = true;
        venture.quantity++;
        
        // Animate the purchase with error handling
        try {
            updateBalance(gameState.balance);
            const ventureCard = document.querySelector(`[data-venture="${ventureId}"]`);
            if (ventureCard) {
                animatePurchaseSuccess(ventureCard, ventureNames[ventureId] || ventureId);
                ventureCard.classList.add('purchased');
            }
        } catch (error) {
            console.error('Animation error:', error);
            // Fallback to basic UI update if animation fails
            updateUI();
        }
        
        // Trigger NPC encounter for venture purchase
        setTimeout(() => {
            createNPCEvent('venture_purchase', { ventureId: ventureId });
        }, 1000);
        
        // Increase income based on quantity
        venture.income = Math.floor(venture.baseIncome * venture.quantity);
        
        // Increase cost for next purchase (15% increase per purchase)
        venture.cost = Math.floor(venture.baseCost * Math.pow(1.15, venture.quantity));
        
        updateUI();
        updateVentures();
        showNotification(`Purchased ${ventureId} x${venture.quantity}! Now earning $${formatNumber(venture.income)}/min`, 'success');
    } else {
        showNotification('Insufficient funds!', 'error');
    }
    
    // Reset the flag after a short delay
    setTimeout(() => {
        window.purchaseInProgress = false;
    }, 500);
}

// Upgrade venture
function upgradeVenture(ventureId) {
    // Prevent multiple simultaneous calls
    if (window.upgradeInProgress) {
        return;
    }
    
    window.upgradeInProgress = true;
    
    const venture = gameState.ventures[ventureId];
    
    if (!venture.owned) {
        showNotification('You must purchase the venture first!', 'error');
        window.upgradeInProgress = false;
        return;
    }
    
    if (gameState.balance < venture.upgradeCost) {
        showNotification('Insufficient funds for upgrade!', 'error');
        window.upgradeInProgress = false;
        return;
    }
    
    // Upgrade the venture with animation
    const oldBalance = gameState.balance;
    gameState.balance -= venture.upgradeCost;
    venture.level++;
    
    // Animate the upgrade
    updateBalance(gameState.balance);
    const ventureCard = document.querySelector(`[data-venture="${ventureId}"]`);
    if (ventureCard) {
        const levelElement = ventureCard.querySelector('.venture-icon');
        if (levelElement) {
            levelElement.style.animation = 'levelUp 0.8s ease';
        }
        animatePurchaseSuccess(ventureCard, `${ventureNames[ventureId] || ventureId} Upgraded!`);
    }
    
    // Increase upgrade cost (doubles each time)
    venture.upgradeCost = Math.floor(venture.upgradeCost * 2);
    
    // Recalculate income (50% increase per level, multiplied by quantity)
    const levelMultiplier = Math.pow(1.5, venture.level - 1);
    venture.income = Math.floor(venture.baseIncome * venture.quantity * levelMultiplier);
    
    updateUI();
    updateVentures();
    showNotification(`${ventureId} upgraded to Level ${venture.level}! Income increased to $${formatNumber(venture.income)}/min`, 'success');
}

// Hire manager for venture
function hireManager(ventureId) {
    const venture = gameState.ventures[ventureId];
    
    if (!venture.owned) {
        showNotification('You must purchase the venture first!', 'error');
        return;
    }
    
    if (venture.manager) {
        showNotification('Manager already hired!', 'warning');
        return;
    }
    
    if (gameState.balance < venture.managerCost) {
        showNotification('Insufficient funds for manager!', 'error');
        return;
    }
    
    // Hire the manager with animation
    const oldBalance = gameState.balance;
    gameState.balance -= venture.managerCost;
    venture.manager = true;
    
    // Animate the manager hire
    updateBalance(gameState.balance);
    const ventureCard = document.querySelector(`[data-venture="${ventureId}"]`);
    if (ventureCard) {
        animatePurchaseSuccess(ventureCard, `Manager Hired for ${ventureNames[ventureId] || ventureId}!`);
    }
    
    // Double the income with manager
    venture.income = venture.income * 2;
    
    updateUI();
    updateVentures();
    showNotification(`Manager hired for ${ventureId}! Income doubled to $${formatNumber(venture.income)}/min`, 'success');
}

// Upgrade asset
function upgradeAsset(assetId) {
    const asset = gameState.assets[assetId];
    
    if (asset.level >= asset.maxLevel) {
        showNotification(`${assetId} is already at max level!`, 'warning');
        return;
    }
    
    if (gameState.balance >= asset.upgradeCost) {
        gameState.balance -= asset.upgradeCost;
        asset.level++;
        
        // Update upgrade cost
        if (asset.level < asset.maxLevel) {
            asset.upgradeCost = Math.floor(asset.upgradeCost * 1.8);
        }
        
        updateUI();
        showNotification(`${assetId} upgraded to ${asset.level === asset.maxLevel ? 'MAX' : 'Level ' + asset.level}!`, 'success');
        
        // Special effects for max level
        if (asset.level >= asset.maxLevel) {
            showNotification(`🎉 ${assetId} reached maximum level! Bonus income unlocked!`, 'success');
            // Add bonus income for max level assets
            Object.values(gameState.ventures).forEach(venture => {
                if (venture.purchased) {
                    venture.income = Math.floor(venture.income * 1.1);
                }
            });
        }
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Transfer functionality
function confirmTransfer() {
    const amount = parseFloat(document.getElementById('transferAmount').value);
    
    if (isNaN(amount) || amount <= 0) {
        showNotification('Please enter a valid amount!', 'error');
        return;
    }
    
    if (amount > gameState.balance) {
        showNotification('Insufficient funds!', 'error');
        return;
    }
    
    gameState.balance -= amount;
    updateUI();
    hideModal('transfer');
    document.getElementById('transferAmount').value = '';
    showNotification(`$${formatNumber(amount)} transferred successfully!`, 'success');
}

// Enhanced page transitions and tab switching
function switchTab(tabName, animate = true) {
    // Remove active class from all tabs and buttons
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to selected tab and button
    const targetTab = document.getElementById(`${tabName}-tab`);
    const targetBtn = document.querySelector(`[data-tab="${tabName}"]`);
    
    if (targetTab && targetBtn) {
        if (animate) {
            // Animate tab content
            targetTab.style.opacity = '0';
            targetTab.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                targetTab.classList.add('active');
                targetTab.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                targetTab.style.opacity = '1';
                targetTab.style.transform = 'translateY(0)';
            }, 50);
        } else {
            targetTab.classList.add('active');
        }
        
        targetBtn.classList.add('active');
        
        // Animate button
        targetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            targetBtn.style.transform = 'scale(1)';
        }, 150);
    }
}

// Enhanced modal functions with smooth transitions
function showModal(type, animate = true) {
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (!modalOverlay) return;
    
    // Show overlay with fade
    modalOverlay.style.display = 'block';
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);
    
    let targetModal;
    
    switch(type) {
        case 'transfer':
            targetModal = document.getElementById('transferModal');
            break;
        case 'reward':
            targetModal = document.getElementById('rewardModal');
            break;
        case 'investment':
            targetModal = document.getElementById('investmentModal');
            break;
        case 'withdraw':
            targetModal = document.getElementById('withdrawModal');
            break;
        case 'cryptoGraph':
            targetModal = document.getElementById('cryptoGraphModal');
            break;
        case 'stockTrade':
            targetModal = document.getElementById('stockTradeModal');
            break;
        case 'prestige':
            targetModal = document.getElementById('prestigeModal');
            break;
        case 'ventureDetail':
            targetModal = document.getElementById('ventureDetailModal');
            break;
        case 'characterCustomize':
            targetModal = document.getElementById('characterCustomizeModal');
            break;
        case 'lifeInitModal':
            targetModal = document.getElementById('lifeInitModal');
            break;
    }
    
    if (targetModal) {
        if (animate) {
            // Stagger animation for modal content
            targetModal.style.display = 'block';
            setTimeout(() => {
                targetModal.classList.add('active');
                
                // Animate modal content children
                const children = targetModal.querySelectorAll('.modal-content > *');
                children.forEach((child, index) => {
                    child.style.opacity = '0';
                    child.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        child.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, 100 + (index * 50));
                });
            }, 50);
        } else {
            targetModal.style.display = 'block';
            targetModal.classList.add('active');
        }
    }
    
    // Handle specific modal initializations
    if (type === 'cryptoGraph') {
        updateCryptoGraph();
    } else if (type === 'prestige') {
        updatePrestigeModal();
    }
}

function hideModal(type, animate = true) {
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (!modalOverlay) return;
    
    let targetModal;
    
    switch(type) {
        case 'transfer':
            targetModal = document.getElementById('transferModal');
            break;
        case 'reward':
            targetModal = document.getElementById('rewardModal');
            break;
        case 'investment':
            targetModal = document.getElementById('investmentModal');
            break;
        case 'withdraw':
            targetModal = document.getElementById('withdrawModal');
            break;
        case 'cryptoGraph':
            targetModal = document.getElementById('cryptoGraphModal');
            break;
        case 'stockTrade':
            targetModal = document.getElementById('stockTradeModal');
            break;
        case 'prestige':
            targetModal = document.getElementById('prestigeModal');
            break;
        case 'ventureDetail':
            targetModal = document.getElementById('ventureDetailModal');
            break;
        case 'characterCustomize':
            targetModal = document.getElementById('characterCustomizeModal');
            break;
        case 'lifeInitModal':
            targetModal = document.getElementById('lifeInitModal');
            break;
    }
    
    if (targetModal && animate) {
        // Animate out
        targetModal.classList.remove('active');
        
        setTimeout(() => {
            targetModal.style.display = 'none';
        }, 300);
    } else if (targetModal) {
        targetModal.style.display = 'none';
        targetModal.classList.remove('active');
    }
    
    // Hide overlay
    modalOverlay.classList.remove('active');
    
    setTimeout(() => {
        modalOverlay.style.display = 'none';
    }, 300);
}

// Enhanced navigation with page transitions
document.addEventListener('DOMContentLoaded', () => {
    // Initialize game with life system
    initializeGame();
    
    // Initialize NPCs tab
    initializeNPCTab();
    
    // Add click handlers to navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = btn.dataset.page;
            if (tabName) {
                switchTab(tabName);
            }
        });
    });
    
    // Add click handler to modal overlay
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                // Find active modal and close it
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    const modalId = activeModal.id;
                    const modalType = modalId.replace('Modal', '');
                    hideModal(modalType);
                }
            }
        });
    }
    
    // Animate page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Animate sections on load
    const sections = document.querySelectorAll('.dashboard, .statistics, .business-ventures, .assets, .stage-progress');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
});

// Add ripple effect to buttons
function addRippleEffect(button) {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Apply ripple effects to all buttons
function initializeRippleEffects() {
    const buttons = document.querySelectorAll('.venture-btn, .action-btn, .nav-btn, .topup-btn, .transfer-btn');
    buttons.forEach(addRippleEffect);
}

// Initialize all animations
function initializeAnimations() {
    initializeRippleEffects();
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.venture-card, .asset-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animate progress bars on scroll/load
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 1s cubic-bezier(0.4, 0, 0.2, 1)';
            bar.style.width = width;
        }, 500);
    });
}

// Call initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnimations);
} else {
    initializeAnimations();
}

// Store current venture for modal operations
let currentVentureDetail = null;

// Open venture detail modal
function openVentureDetail(ventureId) {
    currentVentureDetail = ventureId;
    const venture = gameState.ventures[ventureId];
    
    // Safety check
    if (!venture) {
        console.error('Venture not found:', ventureId);
        return;
    }
    
    const ventureIcons = {
        lemonade: '🍋', kiosk: '🏪', foodtruck: '🚚', smallstore: '🏬',
        boutique: '👗', restaurant: '🍽️', cafe: '☕', bar: '🍺', salon: '💇',
        gym: '🏋️', hotel: '🏨', nightclub: '🎉', mall: '🛍️', casino: '🎰',
        techstartup: '💻', crypto: '₿', realestate: '🏘️',
        stockmarket: '📈', airport: '✈️', spaceline: '🚀', satellite: '🛰️',
        megacorp: '🏢', globalbank: '🏦', spacemining: '⛏️',
        quantumtech: '⚛️', interstellar: '🌌', dysonsphere: '☀️',
        galaxywide: '🌍', universal: '💫', multiverse: '🌀'
    };
    
    // Initialize venture upgrades if not exists
    if (!gameState.ventureUpgrades[ventureId]) {
        gameState.ventureUpgrades[ventureId] = [];
    }
    
    // Display venture name with quantity if more than 1
     const ventureName = ventureNames[ventureId];
    const displayName = venture.quantity > 1 ? `${ventureName} x${venture.quantity}` : ventureName;
    
    const ventureDetailName = document.getElementById('ventureDetailName');
    const ventureDetailIcon = document.getElementById('ventureDetailIcon');
    const ventureDetailLevel = document.getElementById('ventureDetailLevel');
    const ventureDetailIncome = document.getElementById('ventureDetailIncome');
    const ventureDetailUpgrades = document.getElementById('ventureDetailUpgrades');
    
    if (!ventureDetailName || !ventureDetailIcon || !ventureDetailLevel || !ventureDetailIncome || !ventureDetailUpgrades) {
        console.error('Venture detail modal elements not found.');
        return;
    }
    
    ventureDetailName.textContent = displayName;
    ventureDetailIcon.textContent = ventureIcons[ventureId];
    ventureDetailLevel.textContent = venture.level;
    ventureDetailIncome.textContent = `$${formatNumber(venture.income)}/min`;
    ventureDetailUpgrades.textContent = gameState.ventureUpgrades[ventureId].length;
    
    // Manager section
    const managerCost = venture.managerCost;
    const managerBtn = document.getElementById('ventureDetailManagerBtn');
    
    if (!managerBtn) {
        console.error('Venture detail manager button not found.');
        return;
    }
    managerBtn.disabled = venture.manager || gameState.balance < managerCost;
    if (venture.manager) {
        managerBtn.textContent = '✓ Hired';
        managerBtn.style.background = 'rgba(16, 185, 129, 0.3)';
    } else {
        managerBtn.innerHTML = `Hire - <span id="ventureDetailManagerCost">$${formatNumber(managerCost)}</span>`;
        managerBtn.style.background = '';
    }
    
    // Populate upgrades
    const upgradesGrid = document.getElementById('ventureUpgradesGrid');
    if (!upgradesGrid) {
        console.error('Venture upgrades grid not found.');
        return;
    }
    upgradesGrid.innerHTML = '';
    
    const upgrades = ventureUpgrades[ventureId] || [];
    upgrades.forEach(upgrade => {
        const isPurchased = gameState.ventureUpgrades[ventureId].includes(upgrade.id);
        const canAfford = gameState.balance >= upgrade.cost;
        
        const upgradeCard = document.createElement('div');
        upgradeCard.className = `upgrade-card ${isPurchased ? 'purchased' : ''}`;
        upgradeCard.innerHTML = `
            <div class="upgrade-info">
                <div class="upgrade-icon">${upgrade.icon}</div>
                <div class="upgrade-details">
                    <h4>${upgrade.name}</h4>
                    <p>${upgrade.description}</p>
                    <div class="upgrade-benefit">+$${formatNumber(upgrade.incomeBonus)}/min</div>
                </div>
            </div>
            <div class="upgrade-action">
                ${isPurchased ? 
                    '<div class="upgrade-status">Owned</div>' : 
                    `<div class="upgrade-cost">$${formatNumber(upgrade.cost)}</div>
                    <button class="upgrade-btn-small" ${canAfford ? '' : 'disabled'} 
                        onclick="purchaseVentureUpgrade('${ventureId}', '${upgrade.id}')">
                        Buy
                    </button>`
                }
            </div>
        `;
        upgradesGrid.appendChild(upgradeCard);
    });
    
    showModal('ventureDetail');
}

// Purchase venture upgrade
function purchaseVentureUpgrade(ventureId, upgradeId) {
    const upgrades = ventureUpgrades[ventureId];
    const upgrade = upgrades.find(u => u.id === upgradeId);
    
    if (!upgrade) return;
    
    if (gameState.ventureUpgrades[ventureId].includes(upgradeId)) {
        showNotification('Upgrade already purchased!', 'warning');
        return;
    }
    
    if (gameState.balance < upgrade.cost) {
        showNotification('Insufficient funds!', 'error');
        return;
    }
    
    // Purchase upgrade with animation
    const oldBalance = gameState.balance;
    gameState.balance -= upgrade.cost;
    gameState.ventureUpgrades[ventureId].push(upgradeId);
    
    // Apply income bonus
    const venture = gameState.ventures[ventureId];
    venture.income += upgrade.incomeBonus;
    venture.baseIncome += upgrade.incomeBonus;
    
    // Animate the upgrade purchase
    updateBalance(gameState.balance);
    const upgradeCard = document.querySelector(`[data-upgrade-id="${upgrade.id}"]`);
    if (upgradeCard) {
        animatePurchaseSuccess(upgradeCard, `${upgrade.name} Purchased!`);
    }
    
    updateUI();
    updateVentures();
    showNotification(`${upgrade.name} purchased! +$${formatNumber(upgrade.incomeBonus)}/min`, 'success');
    
    // Refresh modal with animation
    setTimeout(() => {
        openVentureDetail(ventureId);
    }, 100);
}

// Upgrade venture from modal
function upgradeVentureFromModal() {
    if (currentVentureDetail) {
        upgradeVenture(currentVentureDetail);
        openVentureDetail(currentVentureDetail); // Refresh modal
    }
}

// Hire manager from modal
function hireManagerFromModal() {
    if (currentVentureDetail) {
        hireManager(currentVentureDetail);
        openVentureDetail(currentVentureDetail); // Refresh modal
    }
}

// Show reward modal
function showRewardModal(reward, icon) {
    document.getElementById('rewardIcon').textContent = icon;
    document.getElementById('rewardTitle').textContent = reward + ' Unlocked!';
    document.getElementById('rewardDescription').textContent = `Congratulations! You've unlocked ${reward} for reaching ${gameState.currentStage}!`;
    showModal('reward');
}

// Claim reward button functionality
document.addEventListener('DOMContentLoaded', () => {
    const claimRewardBtn = document.getElementById('claimReward');
    if (claimRewardBtn) {
        claimRewardBtn.addEventListener('click', () => {
            hideModal('reward');
            showNotification('Reward claimed successfully!', 'success');
        });
    }
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 
                     type === 'error' ? 'linear-gradient(135deg, #ef4444, #dc2626)' :
                     type === 'warning' ? 'linear-gradient(135deg, #f59e0b, #d97706)' :
                     'linear-gradient(135deg, #3b82f6, #2563eb)'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-size: 14px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Format numbers with commas
function formatNumber(num) {
    return Math.floor(num).toLocaleString();
}

// Update time display
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}`;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);

// Remove loading class to show content with fade-in effect
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideModal('transfer');
        hideModal('reward');
    }
    
    // Number keys for quick purchases
    if (e.key >= '1' && e.key <= '4') {
        const ventureIndex = parseInt(e.key) - 1;
        const ventures = Object.keys(gameState.ventures);
        if (ventures[ventureIndex]) {
            purchaseVenture(ventures[ventureIndex]);
        }
    }
});

// Add touch feedback for mobile
document.querySelectorAll('button, .venture-card, .asset-card').forEach(element => {
    element.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    element.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// Select city
function selectCity(cityName) {
    if (!gameState.unlockedCities.includes(cityName)) {
        showNotification('This city is locked! Reach a higher stage to unlock it.', 'warning');
        return;
    }
    
    gameState.currentCity = cityName;
    const cityData = cities.find(c => c.name === cityName);
    showNotification(`Moved to ${cityName}! Income bonus: ${cityData.bonus}x`, 'success');
    updateUI();
}

// Customize character
function customizeCharacter() {
    showModal('characterCustomize');
    updateCharacterPreview();
}

// Randomized Life System Data
const countries = [
    { name: 'Afghanistan', code: 'AF', currency: 'AFN', wealthMultiplier: 0.1, bonus: 'Resilience Training' },
    { name: 'Albania', code: 'AL', currency: 'ALL', wealthMultiplier: 0.3, bonus: 'Mediterranean Trade' },
    { name: 'Algeria', code: 'DZ', currency: 'DZD', wealthMultiplier: 0.4, bonus: 'Oil Resources' },
    { name: 'Andorra', code: 'AD', currency: 'EUR', wealthMultiplier: 0.8, bonus: 'Tax Haven' },
    { name: 'Angola', code: 'AO', currency: 'AOA', wealthMultiplier: 0.3, bonus: 'Diamond Mining' },
    { name: 'Antigua and Barbuda', code: 'AG', currency: 'XCD', wealthMultiplier: 0.5, bonus: 'Tourism Hub' },
    { name: 'Argentina', code: 'AR', currency: 'ARS', wealthMultiplier: 0.4, bonus: 'Agriculture Power' },
    { name: 'Armenia', code: 'AM', currency: 'AMD', wealthMultiplier: 0.2, bonus: 'Tech Skills' },
    { name: 'Australia', code: 'AU', currency: 'AUD', wealthMultiplier: 0.9, bonus: 'Mining Opportunities' },
    { name: 'Austria', code: 'AT', currency: 'EUR', wealthMultiplier: 0.85, bonus: 'Banking Center' },
    { name: 'Azerbaijan', code: 'AZ', currency: 'AZN', wealthMultiplier: 0.5, bonus: 'Oil Wealth' },
    { name: 'Bahamas', code: 'BS', currency: 'BSD', wealthMultiplier: 0.7, bonus: 'Financial Services' },
    { name: 'Bahrain', code: 'BH', currency: 'BHD', wealthMultiplier: 0.8, bonus: 'Banking Hub' },
    { name: 'Bangladesh', code: 'BD', currency: 'BDT', wealthMultiplier: 0.2, bonus: 'Textile Industry' },
    { name: 'Barbados', code: 'BB', currency: 'BBD', wealthMultiplier: 0.6, bonus: 'Tourism Economy' },
    { name: 'Belarus', code: 'BY', currency: 'BYN', wealthMultiplier: 0.3, bonus: 'Manufacturing Base' },
    { name: 'Belgium', code: 'BE', currency: 'EUR', wealthMultiplier: 0.9, bonus: 'EU Headquarters' },
    { name: 'Belize', code: 'BZ', currency: 'BZD', wealthMultiplier: 0.3, bonus: 'Natural Resources' },
    { name: 'Benin', code: 'BJ', currency: 'XOF', wealthMultiplier: 0.1, bonus: 'Agriculture Focus' },
    { name: 'Bhutan', code: 'BT', currency: 'BTN', wealthMultiplier: 0.2, bonus: 'Happiness Index' },
    { name: 'Bolivia', code: 'BO', currency: 'BOB', wealthMultiplier: 0.2, bonus: 'Mining Resources' },
    { name: 'Bosnia and Herzegovina', code: 'BA', currency: 'BAM', wealthMultiplier: 0.3, bonus: 'Recovery Economy' },
    { name: 'Botswana', code: 'BW', currency: 'BWP', wealthMultiplier: 0.4, bonus: 'Diamond Wealth' },
    { name: 'Brazil', code: 'BR', currency: 'BRL', wealthMultiplier: 0.5, bonus: 'Agriculture Start' },
    { name: 'Brunei', code: 'BN', currency: 'BND', wealthMultiplier: 0.9, bonus: 'Oil Riches' },
    { name: 'Bulgaria', code: 'BG', currency: 'BGN', wealthMultiplier: 0.4, bonus: 'Tech Growth' },
    { name: 'Burkina Faso', code: 'BF', currency: 'XOF', wealthMultiplier: 0.1, bonus: 'Gold Mining' },
    { name: 'Burundi', code: 'BI', currency: 'BIF', wealthMultiplier: 0.1, bonus: 'Agriculture Base' },
    { name: 'Cabo Verde', code: 'CV', currency: 'CVE', wealthMultiplier: 0.2, bonus: 'Tourism Potential' },
    { name: 'Cambodia', code: 'KH', currency: 'KHR', wealthMultiplier: 0.2, bonus: 'Textile Industry' },
    { name: 'Cameroon', code: 'CM', currency: 'XAF', wealthMultiplier: 0.2, bonus: 'Natural Resources' },
    { name: 'Canada', code: 'CA', currency: 'CAD', wealthMultiplier: 0.95, bonus: 'Natural Resources' },
    { name: 'Central African Republic', code: 'CF', currency: 'XAF', wealthMultiplier: 0.1, bonus: 'Diamond Mining' },
    { name: 'Chad', code: 'TD', currency: 'XAF', wealthMultiplier: 0.1, bonus: 'Oil Resources' },
    { name: 'Chile', code: 'CL', currency: 'CLP', wealthMultiplier: 0.6, bonus: 'Copper Wealth' },
    { name: 'China', code: 'CN', currency: 'CNY', wealthMultiplier: 0.7, bonus: 'Manufacturing Power' },
    { name: 'Colombia', code: 'CO', currency: 'COP', wealthMultiplier: 0.4, bonus: 'Coffee Empire' },
    { name: 'Comoros', code: 'KM', currency: 'KMF', wealthMultiplier: 0.1, bonus: 'Spice Trade' },
    { name: 'Congo, Democratic Republic of the', code: 'CD', currency: 'CDF', wealthMultiplier: 0.1, bonus: 'Mineral Wealth' },
    { name: 'Congo, Republic of the', code: 'CG', currency: 'XAF', wealthMultiplier: 0.2, bonus: 'Oil Resources' },
    { name: 'Costa Rica', code: 'CR', currency: 'CRC', wealthMultiplier: 0.5, bonus: 'Eco Tourism' },
    { name: 'Croatia', code: 'HR', currency: 'EUR', wealthMultiplier: 0.6, bonus: 'Tourism Hub' },
    { name: 'Cuba', code: 'CU', currency: 'CUP', wealthMultiplier: 0.2, bonus: 'Medical Skills' },
    { name: 'Cyprus', code: 'CY', currency: 'EUR', wealthMultiplier: 0.7, bonus: 'Shipping Hub' },
    { name: 'Czech Republic', code: 'CZ', currency: 'CZK', wealthMultiplier: 0.8, bonus: 'Engineering Skills' },
    { name: 'Denmark', code: 'DK', currency: 'DKK', wealthMultiplier: 0.95, bonus: 'Design Excellence' },
    { name: 'Djibouti', code: 'DJ', currency: 'DJF', wealthMultiplier: 0.2, bonus: 'Strategic Location' },
    { name: 'Dominica', code: 'DM', currency: 'XCD', wealthMultiplier: 0.3, bonus: 'Tourism Economy' },
    { name: 'Dominican Republic', code: 'DO', currency: 'DOP', wealthMultiplier: 0.4, bonus: 'Tourism Industry' },
    { name: 'Ecuador', code: 'EC', currency: 'USD', wealthMultiplier: 0.3, bonus: 'Oil Resources' },
    { name: 'Egypt', code: 'EG', currency: 'EGP', wealthMultiplier: 0.3, bonus: 'Historical Trade' },
    { name: 'El Salvador', code: 'SV', currency: 'USD', wealthMultiplier: 0.3, bonus: 'Dollar Economy' },
    { name: 'Equatorial Guinea', code: 'GQ', currency: 'XAF', wealthMultiplier: 0.4, bonus: 'Oil Wealth' },
    { name: 'Eritrea', code: 'ER', currency: 'ERN', wealthMultiplier: 0.1, bonus: 'Resilience Training' },
    { name: 'Estonia', code: 'EE', currency: 'EUR', wealthMultiplier: 0.8, bonus: 'Digital Economy' },
    { name: 'Eswatini (fmr. "Swaziland")', code: 'SZ', currency: 'SZL', wealthMultiplier: 0.3, bonus: 'Tourism Base' },
    { name: 'Ethiopia', code: 'ET', currency: 'ETB', wealthMultiplier: 0.1, bonus: 'Coffee Empire' },
    { name: 'Fiji', code: 'FJ', currency: 'FJD', wealthMultiplier: 0.4, bonus: 'Tourism Paradise' },
    { name: 'Finland', code: 'FI', currency: 'EUR', wealthMultiplier: 0.9, bonus: 'Education System' },
    { name: 'France', code: 'FR', currency: 'EUR', wealthMultiplier: 0.9, bonus: 'Luxury Goods' },
    { name: 'Gabon', code: 'GA', currency: 'XAF', wealthMultiplier: 0.5, bonus: 'Oil Wealth' },
    { name: 'Gambia', code: 'GM', currency: 'GMD', wealthMultiplier: 0.1, bonus: 'Tourism Base' },
    { name: 'Georgia', code: 'GE', currency: 'GEL', wealthMultiplier: 0.3, bonus: 'Wine Industry' },
    { name: 'Germany', code: 'DE', currency: 'EUR', wealthMultiplier: 0.85, bonus: 'Engineering Skills' },
    { name: 'Ghana', code: 'GH', currency: 'GHS', wealthMultiplier: 0.2, bonus: 'Gold Mining' },
    { name: 'Greece', code: 'GR', currency: 'EUR', wealthMultiplier: 0.6, bonus: 'Shipping Industry' },
    { name: 'Grenada', code: 'GD', currency: 'XCD', wealthMultiplier: 0.4, bonus: 'Spice Economy' },
    { name: 'Guatemala', code: 'GT', currency: 'GTQ', wealthMultiplier: 0.3, bonus: 'Agriculture Base' },
    { name: 'Guinea', code: 'GN', currency: 'GNF', wealthMultiplier: 0.1, bonus: 'Bauxite Mining' },
    { name: 'Guinea-Bissau', code: 'GW', currency: 'XOF', wealthMultiplier: 0.1, bonus: 'Cashew Economy' },
    { name: 'Guyana', code: 'GY', currency: 'GYD', wealthMultiplier: 0.3, bonus: 'Oil Discovery' },
    { name: 'Haiti', code: 'HT', currency: 'HTG', wealthMultiplier: 0.1, bonus: 'Resilience Training' },
    { name: 'Honduras', code: 'HN', currency: 'HNL', wealthMultiplier: 0.2, bonus: 'Agriculture Base' },
    { name: 'Hungary', code: 'HU', currency: 'HUF', wealthMultiplier: 0.7, bonus: 'Engineering Skills' },
    { name: 'Iceland', code: 'IS', currency: 'ISK', wealthMultiplier: 0.9, bonus: 'Renewable Energy' },
    { name: 'India', code: 'IN', currency: 'INR', wealthMultiplier: 0.6, bonus: 'IT Skills Boost' },
    { name: 'Indonesia', code: 'ID', currency: 'IDR', wealthMultiplier: 0.4, bonus: 'Spice Trade' },
    { name: 'Iran', code: 'IR', currency: 'IRR', wealthMultiplier: 0.3, bonus: 'Oil Resources' },
    { name: 'Iraq', code: 'IQ', currency: 'IQD', wealthMultiplier: 0.2, bonus: 'Oil Wealth' },
    { name: 'Ireland', code: 'IE', currency: 'EUR', wealthMultiplier: 0.9, bonus: 'Tech Hub' },
    { name: 'Israel', code: 'IL', currency: 'ILS', wealthMultiplier: 0.8, bonus: 'Innovation Center' },
    { name: 'Italy', code: 'IT', currency: 'EUR', wealthMultiplier: 0.8, bonus: 'Fashion Industry' },
    { name: 'Jamaica', code: 'JM', currency: 'JMD', wealthMultiplier: 0.4, bonus: 'Tourism Economy' },
    { name: 'Japan', code: 'JP', currency: 'JPY', wealthMultiplier: 0.9, bonus: 'Innovation Bonus' },
    { name: 'Jordan', code: 'JO', currency: 'JOD', wealthMultiplier: 0.5, bonus: 'Strategic Location' },
    { name: 'Kazakhstan', code: 'KZ', currency: 'KZT', wealthMultiplier: 0.4, bonus: 'Oil Resources' },
    { name: 'Kenya', code: 'KE', currency: 'KES', wealthMultiplier: 0.2, bonus: 'Tourism Safari' },
    { name: 'Kiribati', code: 'KI', currency: 'AUD', wealthMultiplier: 0.2, bonus: 'Fishing Economy' },
    { name: 'Korea, North', code: 'KP', currency: 'KPW', wealthMultiplier: 0.1, bonus: 'Resilience Training' },
    { name: 'Korea, South', code: 'KR', currency: 'KRW', wealthMultiplier: 0.95, bonus: 'Electronics Expertise' },
    { name: 'Kosovo', code: 'XK', currency: 'EUR', wealthMultiplier: 0.3, bonus: 'Recovery Economy' },
    { name: 'Kuwait', code: 'KW', currency: 'KWD', wealthMultiplier: 1.1, bonus: 'Oil Wealth' },
    { name: 'Kyrgyzstan', code: 'KG', currency: 'KGS', wealthMultiplier: 0.2, bonus: 'Mountain Resources' },
    { name: 'Laos', code: 'LA', currency: 'LAK', wealthMultiplier: 0.2, bonus: 'Natural Resources' },
    { name: 'Latvia', code: 'LV', currency: 'EUR', wealthMultiplier: 0.6, bonus: 'Baltic Trade' },
    { name: 'Lebanon', code: 'LB', currency: 'LBP', wealthMultiplier: 0.3, bonus: 'Banking History' },
    { name: 'Lesotho', code: 'LS', currency: 'LSL', wealthMultiplier: 0.2, bonus: 'Textile Industry' },
    { name: 'Liberia', code: 'LR', currency: 'LRD', wealthMultiplier: 0.1, bonus: 'Natural Resources' },
    { name: 'Libya', code: 'LY', currency: 'LYD', wealthMultiplier: 0.4, bonus: 'Oil Wealth' },
    { name: 'Liechtenstein', code: 'LI', currency: 'CHF', wealthMultiplier: 1.2, bonus: 'Banking Haven' },
    { name: 'Lithuania', code: 'LT', currency: 'EUR', wealthMultiplier: 0.7, bonus: 'Tech Growth' },
    { name: 'Luxembourg', code: 'LU', currency: 'EUR', wealthMultiplier: 1.3, bonus: 'Financial Center' },
    { name: 'Madagascar', code: 'MG', currency: 'MGA', wealthMultiplier: 0.1, bonus: 'Vanilla Economy' },
    { name: 'Malawi', code: 'MW', currency: 'MWK', wealthMultiplier: 0.1, bonus: 'Agriculture Base' },
    { name: 'Malaysia', code: 'MY', currency: 'MYR', wealthMultiplier: 0.7, bonus: 'Electronics Hub' },
    { name: 'Maldives', code: 'MV', currency: 'MVR', wealthMultiplier: 0.6, bonus: 'Tourism Paradise' },
    { name: 'Mali', code: 'ML', currency: 'XOF', wealthMultiplier: 0.1, bonus: 'Gold Mining' },
    { name: 'Malta', code: 'MT', currency: 'EUR', wealthMultiplier: 0.8, bonus: 'Shipping Hub' },
    { name: 'Marshall Islands', code: 'MH', currency: 'USD', wealthMultiplier: 0.3, bonus: 'Fishing Economy' },
    { name: 'Mauritania', code: 'MR', currency: 'MRU', wealthMultiplier: 0.2, bonus: 'Iron Mining' },
    { name: 'Mauritius', code: 'MU', currency: 'MUR', wealthMultiplier: 0.7, bonus: 'Tourism Hub' },
    { name: 'Mexico', code: 'MX', currency: 'MXN', wealthMultiplier: 0.6, bonus: 'Manufacturing Base' },
    { name: 'Micronesia', code: 'FM', currency: 'USD', wealthMultiplier: 0.3, bonus: 'Fishing Economy' },
    { name: 'Moldova', code: 'MD', currency: 'MDL', wealthMultiplier: 0.3, bonus: 'Agriculture Base' },
    { name: 'Monaco', code: 'MC', currency: 'EUR', wealthMultiplier: 1.4, bonus: 'Tax Haven' },
    { name: 'Mongolia', code: 'MN', currency: 'MNT', wealthMultiplier: 0.3, bonus: 'Mining Resources' },
    { name: 'Montenegro', code: 'ME', currency: 'EUR', wealthMultiplier: 0.5, bonus: 'Tourism Economy' },
    { name: 'Morocco', code: 'MA', currency: 'MAD', wealthMultiplier: 0.4, bonus: 'Tourism Industry' },
    { name: 'Mozambique', code: 'MZ', currency: 'MZN', wealthMultiplier: 0.1, bonus: 'Natural Gas' },
    { name: 'Myanmar', code: 'MM', currency: 'MMK', wealthMultiplier: 0.2, bonus: 'Natural Resources' },
    { name: 'Namibia', code: 'NA', currency: 'NAD', wealthMultiplier: 0.4, bonus: 'Diamond Mining' },
    { name: 'Nauru', code: 'NR', currency: 'AUD', wealthMultiplier: 0.3, bonus: 'Phosphate Mining' },
    { name: 'Nepal', code: 'NP', currency: 'NPR', wealthMultiplier: 0.1, bonus: 'Tourism Himalaya' },
    { name: 'Netherlands', code: 'NL', currency: 'EUR', wealthMultiplier: 1.0, bonus: 'Trading Hub' },
    { name: 'New Zealand', code: 'NZ', currency: 'NZD', wealthMultiplier: 0.8, bonus: 'Agriculture Export' },
    { name: 'Nicaragua', code: 'NI', currency: 'NIO', wealthMultiplier: 0.2, bonus: 'Agriculture Base' },
    { name: 'Niger', code: 'NE', currency: 'XOF', wealthMultiplier: 0.1, bonus: 'Uranium Mining' },
    { name: 'Nigeria', code: 'NG', currency: 'NGN', wealthMultiplier: 0.3, bonus: 'Oil Wealth' },
    { name: 'North Macedonia', code: 'MK', currency: 'MKD', wealthMultiplier: 0.3, bonus: 'Agriculture Base' },
    { name: 'Norway', code: 'NO', currency: 'NOK', wealthMultiplier: 1.1, bonus: 'Oil Wealth' },
    { name: 'Oman', code: 'OM', currency: 'OMR', wealthMultiplier: 0.8, bonus: 'Oil Resources' },
    { name: 'Pakistan', code: 'PK', currency: 'PKR', wealthMultiplier: 0.3, bonus: 'Textile Industry' },
    { name: 'Palau', code: 'PW', currency: 'USD', wealthMultiplier: 0.4, bonus: 'Tourism Economy' },
    { name: 'Palestine', code: 'PS', currency: 'ILS', wealthMultiplier: 0.2, bonus: 'Resilience Training' },
    { name: 'Panama', code: 'PA', currency: 'PAB', wealthMultiplier: 0.7, bonus: 'Canal Economy' },
    { name: 'Papua New Guinea', code: 'PG', currency: 'PGK', wealthMultiplier: 0.3, bonus: 'Mining Resources' },
    { name: 'Paraguay', code: 'PY', currency: 'PYG', wealthMultiplier: 0.3, bonus: 'Agriculture Export' },
    { name: 'Peru', code: 'PE', currency: 'PEN', wealthMultiplier: 0.4, bonus: 'Mining Wealth' },
    { name: 'Philippines', code: 'PH', currency: 'PHP', wealthMultiplier: 0.4, bonus: 'BPO Industry' },
    { name: 'Poland', code: 'PL', currency: 'PLN', wealthMultiplier: 0.7, bonus: 'Manufacturing Base' },
    { name: 'Portugal', code: 'PT', currency: 'EUR', wealthMultiplier: 0.7, bonus: 'Tourism Industry' },
    { name: 'Qatar', code: 'QA', currency: 'QAR', wealthMultiplier: 1.2, bonus: 'Gas Wealth' },
    { name: 'Romania', code: 'RO', currency: 'RON', wealthMultiplier: 0.5, bonus: 'Tech Growth' },
    { name: 'Russia', code: 'RU', currency: 'RUB', wealthMultiplier: 0.6, bonus: 'Natural Resources' },
    { name: 'Rwanda', code: 'RW', currency: 'RWF', wealthMultiplier: 0.2, bonus: 'Tech Innovation' },
    { name: 'Saint Kitts and Nevis', code: 'KN', currency: 'XCD', wealthMultiplier: 0.5, bonus: 'Tourism Economy' },
    { name: 'Saint Lucia', code: 'LC', currency: 'XCD', wealthMultiplier: 0.5, bonus: 'Tourism Paradise' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', currency: 'XCD', wealthMultiplier: 0.4, bonus: 'Tourism Base' },
    { name: 'Samoa', code: 'WS', currency: 'WST', wealthMultiplier: 0.3, bonus: 'Tourism Economy' },
    { name: 'San Marino', code: 'SM', currency: 'EUR', wealthMultiplier: 0.9, bonus: 'Banking Haven' },
    { name: 'Sao Tome and Principe', code: 'ST', currency: 'STN', wealthMultiplier: 0.2, bonus: 'Cocoa Economy' },
    { name: 'Saudi Arabia', code: 'SA', currency: 'SAR', wealthMultiplier: 1.0, bonus: 'Oil Wealth' },
    { name: 'Senegal', code: 'SN', currency: 'XOF', wealthMultiplier: 0.2, bonus: 'Fishing Economy' },
    { name: 'Serbia', code: 'RS', currency: 'RSD', wealthMultiplier: 0.4, bonus: 'Agriculture Base' },
    { name: 'Seychelles', code: 'SC', currency: 'SCR', wealthMultiplier: 0.7, bonus: 'Tourism Paradise' },
    { name: 'Sierra Leone', code: 'SL', currency: 'SLL', wealthMultiplier: 0.1, bonus: 'Diamond Mining' },
    { name: 'Singapore', code: 'SG', currency: 'SGD', wealthMultiplier: 1.1, bonus: 'Trading Hub' },
    { name: 'Slovakia', code: 'SK', currency: 'EUR', wealthMultiplier: 0.7, bonus: 'Automotive Industry' },
    { name: 'Slovenia', code: 'SI', currency: 'EUR', wealthMultiplier: 0.8, bonus: 'Tech Innovation' },
    { name: 'Solomon Islands', code: 'SB', currency: 'SBD', wealthMultiplier: 0.2, bonus: 'Fishing Economy' },
    { name: 'Somalia', code: 'SO', currency: 'SOS', wealthMultiplier: 0.1, bonus: 'Resilience Training' },
    { name: 'South Africa', code: 'ZA', currency: 'ZAR', wealthMultiplier: 0.5, bonus: 'Mining Wealth' },
    { name: 'South Sudan', code: 'SS', currency: 'SSP', wealthMultiplier: 0.1, bonus: 'Oil Resources' },
    { name: 'Spain', code: 'ES', currency: 'EUR', wealthMultiplier: 0.8, bonus: 'Tourism Industry' },
    { name: 'Sri Lanka', code: 'LK', currency: 'LKR', wealthMultiplier: 0.3, bonus: 'Tea Economy' },
    { name: 'Sudan', code: 'SD', currency: 'SDG', wealthMultiplier: 0.2, bonus: 'Agriculture Base' },
    { name: 'Suriname', code: 'SR', currency: 'SRD', wealthMultiplier: 0.3, bonus: 'Natural Resources' },
    { name: 'Sweden', code: 'SE', currency: 'SEK', wealthMultiplier: 0.95, bonus: 'Innovation Hub' },
    { name: 'Switzerland', code: 'CH', currency: 'CHF', wealthMultiplier: 1.2, bonus: 'Banking Advantages' },
    { name: 'Syria', code: 'SY', currency: 'SYP', wealthMultiplier: 0.1, bonus: 'Resilience Training' },
    { name: 'Taiwan', code: 'TW', currency: 'TWD', wealthMultiplier: 0.9, bonus: 'Electronics Hub' },
    { name: 'Tajikistan', code: 'TJ', currency: 'TJS', wealthMultiplier: 0.2, bonus: 'Mountain Resources' },
    { name: 'Tanzania', code: 'TZ', currency: 'TZS', wealthMultiplier: 0.2, bonus: 'Tourism Safari' },
    { name: 'Thailand', code: 'TH', currency: 'THB', wealthMultiplier: 0.5, bonus: 'Tourism Industry' },
    { name: 'Togo', code: 'TG', currency: 'XOF', wealthMultiplier: 0.1, bonus: 'Agriculture Base' },
    { name: 'Tonga', code: 'TO', currency: 'TOP', wealthMultiplier: 0.3, bonus: 'Tourism Economy' },
    { name: 'Trinidad and Tobago', code: 'TT', currency: 'TTD', wealthMultiplier: 0.6, bonus: 'Oil Resources' },
    { name: 'Tunisia', code: 'TN', currency: 'TND', wealthMultiplier: 0.4, bonus: 'Tourism Industry' },
    { name: 'Turkey', code: 'TR', currency: 'TRY', wealthMultiplier: 0.6, bonus: 'Strategic Location' },
    { name: 'Turkmenistan', code: 'TM', currency: 'TMT', wealthMultiplier: 0.4, bonus: 'Gas Wealth' },
    { name: 'Tuvalu', code: 'TV', currency: 'AUD', wealthMultiplier: 0.2, bonus: 'Fishing Economy' },
    { name: 'Uganda', code: 'UG', currency: 'UGX', wealthMultiplier: 0.2, bonus: 'Agriculture Base' },
    { name: 'Ukraine', code: 'UA', currency: 'UAH', wealthMultiplier: 0.3, bonus: 'Agriculture Base' },
    { name: 'United Arab Emirates', code: 'AE', currency: 'AED', wealthMultiplier: 1.1, bonus: 'Oil Wealth' },
    { name: 'United Kingdom', code: 'UK', currency: 'GBP', wealthMultiplier: 0.8, bonus: 'Financial District' },
    { name: 'United States', code: 'US', currency: 'USD', wealthMultiplier: 1.0, bonus: 'Tech Hub Access' },
    { name: 'Uruguay', code: 'UY', currency: 'UYU', wealthMultiplier: 0.6, bonus: 'Agriculture Export' },
    { name: 'Uzbekistan', code: 'UZ', currency: 'UZS', wealthMultiplier: 0.3, bonus: 'Cotton Economy' },
    { name: 'Vanuatu', code: 'VU', currency: 'VUV', wealthMultiplier: 0.3, bonus: 'Tourism Paradise' },
    { name: 'Vatican City', code: 'VA', currency: 'EUR', wealthMultiplier: 1.5, bonus: 'Spiritual Wealth' },
    { name: 'Venezuela', code: 'VE', currency: 'VES', wealthMultiplier: 0.1, bonus: 'Oil Resources' },
    { name: 'Vietnam', code: 'VN', currency: 'VND', wealthMultiplier: 0.4, bonus: 'Manufacturing Base' },
    { name: 'Yemen', code: 'YE', currency: 'YER', wealthMultiplier: 0.1, bonus: 'Resilience Training' },
    { name: 'Zambia', code: 'ZM', currency: 'ZMW', wealthMultiplier: 0.2, bonus: 'Copper Mining' },
    { name: 'Zimbabwe', code: 'ZW', currency: 'ZWL', wealthMultiplier: 0.1, bonus: 'Mining Resources' }
];

const familyTypes = [
    { type: 'Wealthy Family', wealthBonus: 10000000, skillBonus: { business: 20, charisma: 15 }, description: 'Born into privilege with business connections' },
    { type: 'Middle Class Family', wealthBonus: 1000000, skillBonus: { education: 15, hardWork: 20 }, description: 'Stable upbringing with good values' },
    { type: 'Working Class Family', wealthBonus: 100000, skillBonus: { hardWork: 25, resilience: 20 }, description: 'Humble beginnings with strong work ethic' },
    { type: 'Struggling Family', wealthBonus: 1000, skillBonus: { resilience: 30, streetSmarts: 25 }, description: 'Tough start builds character and determination' },
    { type: 'Entrepreneurial Family', wealthBonus: 2500000, skillBonus: { business: 25, riskTaking: 20 }, description: 'Family business background with risk tolerance' },
    { type: 'Academic Family', wealthBonus: 75000, skillBonus: { education: 30, intelligence: 20 }, description: 'Scholarly environment with emphasis on learning' }
];

const skills = {
    business: { name: 'Business', max: 100, description: 'Business acumen and entrepreneurship' },
    charisma: { name: 'Charisma', max: 100, description: 'Social skills and leadership ability' },
    education: { name: 'Education', max: 100, description: 'Academic knowledge and learning ability' },
    hardWork: { name: 'Hard Work', max: 100, description: 'Work ethic and determination' },
    intelligence: { name: 'Intelligence', max: 100, description: 'Problem-solving and analytical skills' },
    resilience: { name: 'Resilience', max: 100, description: 'Ability to overcome setbacks' },
    riskTaking: { name: 'Risk Taking', max: 100, description: 'Courage to take calculated risks' },
    streetSmarts: { name: 'Street Smarts', max: 100, description: 'Practical knowledge and survival skills' }
};

// Save/Load System
const SAVE_KEY = 'businessGameSave';

function saveGame() {
    const saveData = {
        gameState: {
            balance: gameState.balance,
            income: gameState.income,
            character: gameState.character,
            ventures: gameState.ventures,
            assets: gameState.assets,
            adsWatched: gameState.adsWatched,
            activeQuests: gameState.activeQuests,
            currentNPCs: gameState.currentNPCs,
            lastSaved: Date.now()
        },
        playerLife: gameState.life
    };
    
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
    console.log('Game saved successfully');
}

function loadGame() {
    const saveData = localStorage.getItem(SAVE_KEY);
    if (saveData) {
        try {
            const parsed = JSON.parse(saveData);
            
            // Check if save is not too old (24 hours)
            const saveAge = Date.now() - parsed.gameState.lastSaved;
            if (saveAge > 24 * 60 * 60 * 1000) {
                console.log('Save is too old, starting new game');
                return false;
            }
            
            // Restore game state
            gameState.balance = parsed.gameState.balance;
            gameState.income = parsed.gameState.income;
            gameState.character = parsed.gameState.character;
            gameState.ventures = parsed.gameState.ventures;
            gameState.assets = parsed.gameState.assets;
            gameState.adsWatched = parsed.gameState.adsWatched;
            gameState.activeQuests = parsed.gameState.activeQuests || [];
            gameState.currentNPCs = parsed.gameState.currentNPCs || [];
            gameState.life = parsed.playerLife;
            
            // Update UI with loaded data
            updateUI();
            updateVentures();
            updateAssets();
            updateQuestsList();
            populateNPCsGrid('all');
            
            console.log('Game loaded successfully');
            return true;
        } catch (error) {
            console.error('Error loading game:', error);
            return false;
        }
    }
    return false;
}

function hasSaveGame() {
    return localStorage.getItem(SAVE_KEY) !== null;
}

function clearSaveGame() {
    localStorage.removeItem(SAVE_KEY);
    console.log('Save game cleared');
}

// Auto-save every 30 seconds
setInterval(() => {
    if (gameState.life) {
        saveGame();
    }
}, 30000);

// Save on important actions
function autoSave() {
    if (gameState.life) {
        saveGame();
    }
}

// Initialize randomized life
function initializeRandomizedLife() {
    // Generate complete player life with family
    const playerLife = generatePlayerLifeWithFamily();
    
    // Set game state with generated life
    gameState.life = playerLife;
    
    // Add family members to current NPCs for immediate interaction
    if (!gameState.currentNPCs) {
        gameState.currentNPCs = [];
    }
    
    // Add family members to NPCs list (parents first)
    playerLife.familyData.members.forEach(member => {
        if (!gameState.currentNPCs.some(npc => npc.name === member.name)) {
            gameState.currentNPCs.push(member);
        }
    });
}

function generateRandomFirstName(countryCode) {
    const firstNames = {
        // North America countries
        'US': ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Emma', 'Olivia', 'Ava', 'Sophia'],
        'CA': ['Liam', 'Noah', 'Ethan', 'Lucas', 'Benjamin', 'Olivia', 'Emma', 'Ava', 'Sophia', 'Charlotte'],
        'MX': ['José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Maria', 'Guadalupe', 'Sofia', 'Camila', 'Isabella'],
        'GT': ['Carlos', 'Juan', 'José', 'Luis', 'Maria', 'Ana', 'Carmen', 'Sofia'],
        'BZ': ['David', 'Michael', 'Jose', 'Carlos', 'Emma', 'Sophia', 'Maria', 'Ashley'],
        'SV': ['José', 'Carlos', 'Juan', 'Luis', 'Maria', 'Ana', 'Sofia', 'Camila'],
        'HN': ['Carlos', 'José', 'Juan', 'Luis', 'Maria', 'Ana', 'Sofia', 'Camila'],
        'NI': ['José', 'Carlos', 'Juan', 'Luis', 'Maria', 'Ana', 'Sofia', 'Camila'],
        'CR': ['José', 'Carlos', 'Juan', 'Luis', 'Maria', 'Ana', 'Sofia', 'Camila'],
        'PA': ['José', 'Carlos', 'Juan', 'Luis', 'Maria', 'Ana', 'Sofia', 'Camila'],
        'CU': ['José', 'Carlos', 'Juan', 'Luis', 'Maria', 'Ana', 'Sofia', 'Camila'],
        'DO': ['José', 'Carlos', 'Juan', 'Luis', 'Maria', 'Ana', 'Sofia', 'Camila'],
        'HT': ['Jean', 'Pierre', 'Joseph', 'Michel', 'Marie', 'Anne', 'Sophia', 'Isabelle'],
        'JM': ['James', 'Michael', 'David', 'Christopher', 'Ashley', 'Sophia', 'Nicole', 'Tanya'],
        'TT': ['Rajesh', 'Michael', 'David', 'Anthony', 'Anita', 'Sophia', 'Maria', 'Camille'],
        'BB': ['David', 'Michael', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'BS': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'GD': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'LC': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'VC': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'AG': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'DM': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'KN': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'GD': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'VC': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'HT': ['Jean', 'Pierre', 'Joseph', 'Michel', 'Marie', 'Anne', 'Sophia', 'Isabelle'],
        'BS': ['Michael', 'David', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],

        // --- South America ---
        'AR': ['Juan', 'Carlos', 'Diego', 'Martín', 'Santiago', 'Maria', 'Sofia', 'Camila', 'Valentina', 'Lucia'],
        'BO': ['Carlos', 'José', 'Juan', 'Luis', 'Miguel', 'Maria', 'Ana', 'Carmen', 'Sofia', 'Camila'],
        'BR': ['João', 'Pedro', 'Carlos', 'Lucas', 'Gabriel', 'Maria', 'Ana', 'Julia', 'Camila', 'Isabella'],
        'CL': ['Carlos', 'José', 'Juan', 'Luis', 'Miguel', 'Maria', 'Ana', 'Sofia', 'Camila', 'Valentina'],
        'CO': ['Juan', 'Carlos', 'José', 'Luis', 'Miguel', 'Maria', 'Ana', 'Sofia', 'Camila', 'Valentina'],
        'EC': ['Carlos', 'José', 'Juan', 'Luis', 'Miguel', 'Maria', 'Ana', 'Sofia', 'Camila', 'Valentina'],
        'GY': ['David', 'Michael', 'Anthony', 'James', 'Sophia', 'Ashley', 'Nicole', 'Maria'],
        'PY': ['Carlos', 'José', 'Juan', 'Luis', 'Miguel', 'Maria', 'Ana', 'Sofia', 'Camila', 'Valentina'],
        'PE': ['José', 'Carlos', 'Juan', 'Luis', 'Miguel', 'Maria', 'Ana', 'Sofia', 'Camila', 'Valentina'],
        'SR': ['Carlos', 'José', 'Juan', 'Luis', 'Miguel', 'Maria', 'Ana', 'Sofia', 'Camila'],
        'UY': ['Juan', 'Carlos', 'José', 'Luis', 'Miguel', 'Maria', 'Ana', 'Sofia', 'Camila', 'Valentina'],
        'VE': ['Carlos', 'José', 'Juan', 'Luis', 'Miguel', 'Maria', 'Ana', 'Sofia', 'Camila', 'Valentina'],
                // --- Asia ---
        'AF': ['Ahmad', 'Fatima', 'Mohammad', 'Aisha'],
        'AM': ['Aram', 'Ani', 'Gevorg', 'Narine'],
        'AZ': ['Ali', 'Leyla', 'Murad', 'Aysel'],
        'BH': ['Hassan', 'Fatima', 'Ali', 'Layla'],
        'BD': ['Rahul', 'Priya', 'Arif', 'Anika'],
        'BT': ['Tashi', 'Pema', 'Sonam', 'Karma'],
        'BN': ['Ahmad', 'Nur', 'Hassan', 'Aisha'],
        'KH': ['Sok', 'Srey', 'Dara', 'Chan'],
        'CN': ['Wei', 'Jian', 'Long', 'Feng', 'Ming', 'Mei', 'Ling', 'Fang', 'Hua', 'Ying'],
        'CY': ['Andreas', 'Maria', 'Nikos', 'Elena'],
        'GE': ['Giorgi', 'Nino', 'Levan', 'Tamar'],
        'IN': ['Rahul', 'Amit', 'Vikram', 'Arjun', 'Rohit', 'Priya', 'Anjali', 'Kavita', 'Sneha', 'Neha'],
        'ID': ['Agus', 'Siti', 'Budi', 'Dewi'],
        'IR': ['Ali', 'Fatemeh', 'Reza', 'Maryam'],
        'IQ': ['Ahmed', 'Amina', 'Ali', 'Layla'],
        'IL': ['David', 'Yael', 'Moshe', 'Leah'],
        'JP': ['Hiroshi', 'Kenji', 'Yuki', 'Takeshi', 'Satoshi', 'Yumi', 'Sakura', 'Hana', 'Mika', 'Rina'],
        'JO': ['Ahmad', 'Amina', 'Omar', 'Layla'],
        'KZ': ['Nurlan', 'Aigerim', 'Yerlan', 'Zarina'],
        'KW': ['Abdullah', 'Fatima', 'Ali', 'Layla'],
        'KG': ['Bakyt', 'Aida', 'Nurlan', 'Gulnara'],
        'LA': ['Somchai', 'Noy', 'Kham', 'Suda'],
        'LB': ['Ahmad', 'Layla', 'Ali', 'Maya'],
        'MY': ['Ahmad', 'Nur', 'Mohd', 'Aisha'],
        'MV': ['Mohamed', 'Aisha', 'Ahmed', 'Fathimath'],
        'MN': ['Bat', 'Naraa', 'Bold', 'Sarnai'],
        'MM': ['Aung', 'Su', 'Min', 'Thandar'],
        'NP': ['Suresh', 'Anita', 'Rajesh', 'Kavita'],
        'KP': ['Chol', 'Sun', 'Jong', 'Mi'],
        'KR': ['Min-jun', 'Seo-joon', 'Do-hyun', 'Ji-hoon', 'Su-ho', 'Seo-yeon', 'Ji-woo', 'Ha-eun', 'Min-seo', 'So-yun'],
        'OM': ['Ahmed', 'Fatima', 'Ali', 'Layla'],
        'PK': ['Ali', 'Ayesha', 'Ahmed', 'Fatima'],
        'PH': ['Juan', 'Jose', 'Maria', 'Ana', 'Miguel', 'Sofia', 'Leonardo', 'Paolo'],
        'QA': ['Mohamed', 'Fatima', 'Ali', 'Layla'],
        'SA': ['Mohamed', 'Fatima', 'Ali', 'Layla'],
        'SG': ['Wei', 'Jun', 'Kai', 'Zhang', 'Lim', 'Mei', 'Ling', 'Hui', 'Ying', 'Jia'],
        'LK': ['Kumar', 'Anjali', 'Ravi', 'Priya'],
        'SY': ['Ahmad', 'Amina', 'Ali', 'Layla'],
        'TW': ['Wei', 'Mei', 'Chen', 'Ling'],
        'TJ': ['Rustam', 'Zarina', 'Farid', 'Dilbar'],
        'TH': ['Somchai', 'Suda', 'Anan', 'Malee'],
        'TR': ['Mehmet', 'Ayşe', 'Ahmet', 'Fatma'],
        'TM': ['Serdar', 'Ayna', 'Begench', 'Gul'],
        'AE': ['Mohamed', 'Fatima', 'Ali', 'Layla'],
        'UZ': ['Aziz', 'Dilshod', 'Nigina', 'Malika'],
        'VN': ['Nguyen', 'Tran', 'Anh', 'Lan'],
        'YE': ['Ali', 'Amina', 'Mohamed', 'Layla'],
                // --- Africa ---
        'DZ': ['Mohamed', 'Fatima', 'Ahmed', 'Amina'], // Algeria
        'AO': ['José', 'Maria', 'Manuel', 'Ana'], // Angola
        'BJ': ['Kofi', 'Ama', 'Jean', 'Marie'], // Benin
        'BW': ['Thabo', 'Naledi', 'Neo', 'Mpho'], // Botswana
        'BF': ['Issa', 'Awa', 'Oumar', 'Mariam'], // Burkina Faso
        'BI': ['Jean', 'Claudine', 'Pierre', 'Amina'], // Burundi
        'CV': ['José', 'Maria', 'Antonio', 'Ana'], // Cape Verde
        'CM': ['Jean', 'Marie', 'Paul', 'Claudine'], // Cameroon
        'CF': ['Jean', 'Marie', 'Paul', 'Claudine'], // Central African Republic
        'TD': ['Mahamat', 'Amina', 'Ali', 'Fatima'], // Chad
        'KM': ['Ali', 'Amina', 'Mohamed', 'Fatima'], // Comoros
        'CG': ['Jean', 'Marie', 'Paul', 'Claudine'], // Republic of the Congo
        'CD': ['Joseph', 'Claudine', 'Jean', 'Marie'], // DR Congo
        'DJ': ['Ahmed', 'Amina', 'Ali', 'Fatima'], // Djibouti
        'EG': ['Ahmed', 'Fatima', 'Mohamed', 'Aisha'], // Egypt
        'GQ': ['Juan', 'Maria', 'Carlos', 'Ana'], // Equatorial Guinea
        'ER': ['Tesfaye', 'Amina', 'Abel', 'Mariam'], // Eritrea
        'ET': ['Abebe', 'Alem', 'Tesfaye', 'Mulu'], // Ethiopia
        'GA': ['Jean', 'Marie', 'Paul', 'Claudine'], // Gabon
        'GM': ['Lamin', 'Fatou', 'Ousman', 'Awa'], // Gambia
        'GH': ['Kwame', 'Ama', 'Kojo', 'Akua'], // Ghana
        'GN': ['Mamadou', 'Aminata', 'Ibrahima', 'Fatoumata'], // Guinea
        'GW': ['José', 'Maria', 'Antonio', 'Ana'], // Guinea-Bissau
        'KE': ['John', 'Mary', 'Peter', 'Grace'], // Kenya
        'LS': ['Thabo', 'Mpho', 'Neo', 'Naledi'], // Lesotho
        'LR': ['Joseph', 'Mary', 'James', 'Grace'], // Liberia
        'LY': ['Mohamed', 'Amina', 'Ali', 'Fatima'], // Libya
        'MG': ['Jean', 'Marie', 'Paul', 'Claudine'], // Madagascar
        'MW': ['Peter', 'Grace', 'John', 'Mary'], // Malawi
        'ML': ['Moussa', 'Awa', 'Oumar', 'Fatou'], // Mali
        'MR': ['Mohamed', 'Aminata', 'Ahmed', 'Fatima'], // Mauritania
        'MU': ['Rajesh', 'Anita', 'Vikash', 'Kavita'], // Mauritius
        'MA': ['Mohamed', 'Fatima', 'Ali', 'Layla'], // Morocco
        'MZ': ['José', 'Maria', 'Antonio', 'Ana'], // Mozambique
        'NA': ['Johannes', 'Anna', 'Peter', 'Maria'], // Namibia
        'NE': ['Issa', 'Amina', 'Ali', 'Fatima'], // Niger
        'NG': ['Chinedu', 'Ngozi', 'Emeka', 'Chioma'], // Nigeria
        'RW': ['Jean', 'Marie', 'Paul', 'Claudine'], // Rwanda
        'ST': ['José', 'Maria', 'Antonio', 'Ana'], // São Tomé and Príncipe
        'SN': ['Mamadou', 'Aminata', 'Ousmane', 'Fatou'], // Senegal
        'SC': ['Jean', 'Marie', 'Paul', 'Claudine'], // Seychelles
        'SL': ['Joseph', 'Mary', 'James', 'Grace'], // Sierra Leone
        'SO': ['Ahmed', 'Amina', 'Ali', 'Fatima'], // Somalia
        'ZA': ['Thabo', 'Naledi', 'Sipho', 'Zanele'], // South Africa
        'SS': ['James', 'Mary', 'John', 'Grace'], // South Sudan
        'SD': ['Mohamed', 'Amina', 'Ali', 'Fatima'], // Sudan
        'TZ': ['John', 'Mary', 'Peter', 'Grace'], // Tanzania
        'TG': ['Koffi', 'Ama', 'Kwame', 'Akua'], // Togo
        'TN': ['Mohamed', 'Fatima', 'Ali', 'Layla'], // Tunisia
        'UG': ['John', 'Mary', 'Peter', 'Grace'], // Uganda
        'ZM': ['Joseph', 'Mary', 'James', 'Grace'], // Zambia
        'ZW': ['Tendai', 'Rudo', 'Tatenda', 'Chipo'], // Zimbabwe
        // --- Europe ---
        'AL': ['Arben', 'Elira', 'Besnik', 'Anila'], // Albania
        'AD': ['Marc', 'Anna', 'Joan', 'Maria'], // Andorra
        'AT': ['Hans', 'Anna', 'Peter', 'Maria'], // Austria
        'BY': ['Ivan', 'Olga', 'Sergei', 'Natalia'], // Belarus
        'BE': ['Jean', 'Marie', 'Luc', 'Sophie'], // Belgium
        'BA': ['Adnan', 'Lejla', 'Emir', 'Amra'], // Bosnia & Herzegovina
        'BG': ['Georgi', 'Elena', 'Ivan', 'Maria'], // Bulgaria
        'HR': ['Ivan', 'Ana', 'Marko', 'Marija'], // Croatia
        'CZ': ['Jan', 'Eva', 'Petr', 'Anna'], // Czechia
        'DK': ['Hans', 'Anna', 'Lars', 'Sofie'], // Denmark
        'EE': ['Jaan', 'Liis', 'Mati', 'Kristi'], // Estonia
        'FI': ['Mikko', 'Anna', 'Jussi', 'Laura'], // Finland
        'FR': ['Jean', 'Marie', 'Pierre', 'Sophie'], // France
        'DE': ['Hans', 'Klaus', 'Walter', 'Greta'], // Germany
        'GR': ['Nikos', 'Maria', 'Giorgos', 'Eleni'], // Greece
        'HU': ['István', 'Anna', 'László', 'Katalin'], // Hungary
        'IS': ['Björn', 'Anna', 'Einar', 'Kristin'], // Iceland
        'IE': ['Patrick', 'Aoife', 'Sean', 'Niamh'], // Ireland
        'IT': ['Giovanni', 'Maria', 'Luca', 'Sofia'], // Italy
        'LV': ['Janis', 'Liga', 'Andris', 'Ilze'], // Latvia
        'LI': ['Hans', 'Anna', 'Markus', 'Eva'], // Liechtenstein
        'LT': ['Jonas', 'Ieva', 'Mantas', 'Agnė'], // Lithuania
        'LU': ['Jean', 'Marie', 'Paul', 'Sophie'], // Luxembourg
        'MT': ['Joseph', 'Maria', 'Paul', 'Claire'], // Malta
        'MD': ['Ion', 'Maria', 'Vasile', 'Ana'], // Moldova
        'MC': ['Jean', 'Marie', 'Pierre', 'Sophie'], // Monaco
        'ME': ['Marko', 'Ana', 'Petar', 'Milena'], // Montenegro
        'NL': ['Jan', 'Anna', 'Pieter', 'Sanne'], // Netherlands
        'MK': ['Aleksandar', 'Ana', 'Goran', 'Marija'], // North Macedonia
        'NO': ['Hans', 'Anna', 'Lars', 'Ingrid'], // Norway
        'PL': ['Piotr', 'Anna', 'Krzysztof', 'Magdalena'], // Poland
        'PT': ['João', 'Maria', 'José', 'Ana'], // Portugal
        'RO': ['Ion', 'Maria', 'Andrei', 'Elena'], // Romania
        'RU': ['Ivan', 'Olga', 'Sergei', 'Natalia'], // Russia
        'SM': ['Giovanni', 'Maria', 'Luca', 'Sofia'], // San Marino
        'RS': ['Marko', 'Ana', 'Nikola', 'Milica'], // Serbia
        'SK': ['Peter', 'Anna', 'Jozef', 'Katarina'], // Slovakia
        'SI': ['Janez', 'Ana', 'Marko', 'Marija'], // Slovenia
        'ES': ['José', 'Maria', 'Antonio', 'Carmen'], // Spain
        'SE': ['Lars', 'Anna', 'Erik', 'Sofia'], // Sweden
        'CH': ['Hans', 'Peter', 'Markus', 'Maria'], // Switzerland
        'UA': ['Oleksandr', 'Olena', 'Andriy', 'Natalia'], // Ukraine
        'GB': ['James', 'Oliver', 'Harry', 'Olivia', 'Amelia', 'Isla'], // United Kingdom
        'VA': ['Giovanni', 'Maria', 'Paolo', 'Sofia'], // Vatican City
        // --- Australia & Oceania ---
        'AU': ['Jack', 'William', 'Lachlan', 'Thomas', 'James', 'Olivia', 'Charlotte', 'Amelia', 'Sophia', 'Isla'], // Australia
        'NZ': ['James', 'Oliver', 'William', 'Lucas', 'George', 'Olivia', 'Isla', 'Charlotte', 'Amelia', 'Sophie'], // New Zealand
        'FJ': ['Jone', 'Litia', 'Peni', 'Mere'], // Fiji
        'PG': ['John', 'Mary', 'Peter', 'Lucy'], // Papua New Guinea
        'SB': ['John', 'Mary', 'Peter', 'Lucy'], // Solomon Islands
        'VU': ['Jean', 'Marie', 'Paul', 'Claudine'], // Vanuatu
        'WS': ['Tui', 'Lina', 'Mata', 'Sina'], // Samoa
        'TO': ['Sione', 'Mele', 'Latu', 'Ana'], // Tonga
        'KI': ['Teka', 'Nei', 'Bata', 'Mara'], // Kiribati
        'TV': ['Fala', 'Lina', 'Tupu', 'Mele'], // Tuvalu
        'NR': ['Jone', 'Lina', 'David', 'Maria'], // Nauru
        'PW': ['Taro', 'Lina', 'Akira', 'Maria'], // Palau
        'MH': ['Jone', 'Lina', 'David', 'Maria'], // Marshall Islands
        'FM': ['Taro', 'Lina', 'David', 'Maria'] // Micronesia (Federated States)

    };
    
    const names = firstNames[countryCode] || firstNames['US'];
    return names[Math.floor(Math.random() * names.length)];
}

function generateRandomLastName(countryCode) {
    const lastNames = {
              // North America
        'US': ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'],
        'CA': ['Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Lee', 'Wilson', 'Anderson'],
        'MX': ['Hernández', 'García', 'Martínez', 'López', 'González', 'Rodríguez', 'Pérez', 'Sánchez'],
        'GT': ['García', 'Hernández', 'López', 'Martínez', 'Pérez', 'Ramírez'],
        'BZ': ['Ramirez', 'Castillo', 'Garcia', 'Lopez', 'Martinez', 'Reyes'],
        'SV': ['Hernández', 'Martínez', 'García', 'López', 'Pérez', 'Ramírez'],
        'HN': ['Hernández', 'Martínez', 'García', 'López', 'Pérez', 'Ramírez'],
        'NI': ['Hernández', 'Martínez', 'García', 'López', 'Pérez', 'Ramírez'],
        'CR': ['Hernández', 'Martínez', 'García', 'López', 'Pérez', 'Ramírez'],
        'PA': ['Hernández', 'Martínez', 'García', 'López', 'Pérez', 'Ramírez'],
        'CU': ['Rodríguez', 'García', 'Martínez', 'López', 'Pérez', 'Fernández'],
        'DO': ['Rodríguez', 'García', 'Martínez', 'López', 'Pérez', 'Sánchez'],
        'HT': ['Jean', 'Pierre', 'Joseph', 'Louis', 'Michel', 'Charles'],
        'JM': ['Brown', 'Williams', 'Johnson', 'Smith', 'Campbell', 'Clarke'],
        'TT': ['Ali', 'Singh', 'Mohammed', 'Persad', 'Ramdhanie', 'Maharaj'],
        'BB': ['Griffith', 'Ward', 'Alleyne', 'Clarke', 'Best', 'Jordan'],
        'BS': ['Smith', 'Johnson', 'Williams', 'Brown', 'Taylor', 'Robinson'],
        'GD': ['Charles', 'Thomas', 'Roberts', 'Alexander', 'Francis', 'Lewis'],
        'LC': ['Joseph', 'James', 'Alexander', 'Charles', 'Francis', 'Louis'],
        'VC': ['Williams', 'Roberts', 'Thomas', 'Charles', 'Joseph', 'Francis'],
        'AG': ['Joseph', 'James', 'Thomas', 'Roberts', 'Alexander', 'Francis'],
        'DM': ['Joseph', 'James', 'Thomas', 'Roberts', 'Alexander', 'Francis'],
        'KN': ['Williams', 'Roberts', 'Thomas', 'Charles', 'Joseph', 'Francis'],
        // South America
        'AR': ['González', 'Rodríguez', 'Fernández', 'López', 'Martínez', 'Pérez'], // Argentina
        'BO': ['Flores', 'García', 'Martínez', 'Rodríguez', 'López', 'Pérez'], // Bolivia
        'BR': ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Almeida'], // Brazil
        'CL': ['González', 'Muñoz', 'Rojas', 'Díaz', 'Pérez', 'Soto'], // Chile
        'CO': ['Rodríguez', 'García', 'Martínez', 'López', 'Sánchez', 'Castro'], // Colombia
        'EC': ['García', 'Martínez', 'Rodríguez', 'López', 'Pérez', 'Ramírez'], // Ecuador
        'GY': ['Singh', 'Persaud', 'Ali', 'Mohammed', 'Chin', 'Roberts'], // Guyana
        'PY': ['González', 'Martínez', 'Rodríguez', 'López', 'Pérez', 'Ramírez'], // Paraguay
        'PE': ['Quispe', 'García', 'Flores', 'Rojas', 'Ramírez', 'Torres'], // Peru
        'SR': ['Jaggernauth', 'Ramdhanie', 'Mohammed', 'Persad', 'Singh', 'Chin'], // Suriname
        'UY': ['González', 'Rodríguez', 'Fernández', 'López', 'Martínez', 'Pérez'], // Uruguay
        'VE': ['Rodríguez', 'González', 'Martínez', 'López', 'Pérez', 'Hernández'], // Venezuela
                // Asia
        'AF': ['Ahmadzai', 'Karzai', 'Rahimi', 'Noori'], // Afghanistan
        'AM': ['Harutyunyan', 'Petrosyan', 'Sargsyan', 'Grigoryan'], // Armenia
        'AZ': ['Aliyev', 'Mammadov', 'Hasanov', 'Huseynov'], // Azerbaijan
        'BH': ['Al Khalifa', 'Al Zayani', 'Al Dossari', 'Al Nuaimi'], // Bahrain
        'BD': ['Rahman', 'Islam', 'Ahmed', 'Hossain'], // Bangladesh
        'BT': ['Dorji', 'Wangchuk', 'Tshering', 'Gyeltshen'], // Bhutan
        'BN': ['Ahmad', 'Yusof', 'Hassan', 'Salleh'], // Brunei
        'KH': ['Sok', 'Chan', 'Chea', 'Phan'], // Cambodia
        'CN': ['Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang'], // China
        'CY': ['Papadopoulos', 'Georgiou', 'Christodoulou', 'Ioannou'], // Cyprus
        'GE': ['Beridze', 'Kapanadze', 'Gelashvili', 'Chkheidze'], // Georgia
        'IN': ['Patel', 'Singh', 'Sharma', 'Kumar', 'Gupta', 'Reddy'], // India
        'ID': ['Santoso', 'Wijaya', 'Saputra', 'Susanto'], // Indonesia
        'IR': ['Hosseini', 'Mohammadi', 'Ahmadi', 'Rezaei'], // Iran
        'IQ': ['Al-Samarrai', 'Al-Tikriti', 'Al-Dulaimi', 'Al-Janabi'], // Iraq
        'IL': ['Cohen', 'Levi', 'Mizrahi', 'Peretz'], // Israel
        'JP': ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito'], // Japan
        'JO': ['Al-Fayez', 'Al-Majali', 'Al-Khatib', 'Al-Rawashdeh'], // Jordan
        'KZ': ['Akhmetov', 'Nazarbayev', 'Tursunov', 'Kadyrov'], // Kazakhstan
        'KW': ['Al-Sabah', 'Al-Mutairi', 'Al-Ajmi', 'Al-Shammari'], // Kuwait
        'KG': ['Abdykalykov', 'Bekov', 'Isakov', 'Toktogulov'], // Kyrgyzstan
        'LA': ['Phommasone', 'Sisavath', 'Souphanouvong', 'Thongloun'], // Laos
        'LB': ['Khoury', 'Haddad', 'Nassar', 'Saad'], // Lebanon
        'MY': ['Tan', 'Lim', 'Ng', 'Lee'], // Malaysia
        'MV': ['Mohamed', 'Ibrahim', 'Ahmed', 'Hassan'], // Maldives
        'MN': ['Batbayar', 'Ganbold', 'Erdenebat', 'Dorj'], // Mongolia
        'MM': ['Aung', 'Hlaing', 'Min', 'Soe'], // Myanmar
        'NP': ['Shrestha', 'Tamang', 'Koirala', 'Gurung'], // Nepal
        'KP': ['Kim', 'Park', 'Ri', 'Choi'], // North Korea
        'KR': ['Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang'], // South Korea
        'OM': ['Al-Harthy', 'Al-Maawali', 'Al-Balushi', 'Al-Lawati'], // Oman
        'PK': ['Khan', 'Malik', 'Ahmed', 'Hussain'], // Pakistan
        'PH': ['Santos', 'Reyes', 'Cruz', 'Bautista', 'Garcia', 'Lopez'], // Philippines
        'QA': ['Al-Thani', 'Al-Kuwari', 'Al-Mannai', 'Al-Sulaiti'], // Qatar
        'SA': ['Al-Saud', 'Al-Harbi', 'Al-Qahtani', 'Al-Shammari'], // Saudi Arabia
        'SG': ['Tan', 'Lim', 'Ng', 'Lee', 'Wong', 'Chong'], // Singapore
        'LK': ['Perera', 'Fernando', 'Silva', 'Jayasinghe'], // Sri Lanka
        'SY': ['Al-Assad', 'Al-Hamwi', 'Al-Khatib', 'Al-Masri'], // Syria
        'TW': ['Chen', 'Lin', 'Huang', 'Wu'], // Taiwan
        'TJ': ['Rahmonov', 'Sharipov', 'Karimov', 'Ismatov'], // Tajikistan
        'TH': ['Suwan', 'Chaiyaporn', 'Kittisak', 'Boonsri'], // Thailand
        'TR': ['Yılmaz', 'Kaya', 'Demir', 'Şahin'], // Turkey
        'TM': ['Atayev', 'Babayev', 'Durdyyev', 'Orazov'], // Turkmenistan
        'AE': ['Al-Nahyan', 'Al-Maktoum', 'Al-Falasi', 'Al-Marri'], // United Arab Emirates
        'UZ': ['Karimov', 'Tashkentov', 'Rakhimov', 'Yusupov'], // Uzbekistan
        'VN': ['Nguyen', 'Tran', 'Le', 'Pham'], // Vietnam
        'YE': ['Al-Hamdani', 'Al-Aghbari', 'Al-Mutawakel', 'Al-Sakkaf'], // Yemen
        // Africa
        'DZ': ['Benali', 'Haddad', 'Bouaziz', 'Cherif'], // Algeria
        'AO': ['Silva', 'Domingos', 'Fernandes', 'Pereira'], // Angola
        'BJ': ['Kouassi', 'Mensah', 'Adjovi', 'Agbo'], // Benin
        'BW': ['Dlamini', 'Mokoena', 'Sebego', 'Kgosi'], // Botswana
        'BF': ['Ouédraogo', 'Zongo', 'Sawadogo', 'Sanou'], // Burkina Faso
        'BI': ['Ndayishimiye', 'Nkurunziza', 'Bigirimana', 'Habonimana'], // Burundi
        'CV': ['Silva', 'Fernandes', 'Pereira', 'Rodrigues'], // Cape Verde
        'CM': ['Ngono', 'Mbarga', 'Njoya', 'Essomba'], // Cameroon
        'CF': ['Yambala', 'Ngoma', 'Bokassa', 'Diko'], // Central African Republic
        'TD': ['Mahamat', 'Abakar', 'Issa', 'Youssouf'], // Chad
        'KM': ['Abdou', 'Ali', 'Mohamed', 'Ahmed'], // Comoros
        'CG': ['Mabiala', 'Ngoma', 'Bokamba', 'Koumba'], // Republic of the Congo
        'CD': ['Kabila', 'Lumumba', 'Tshisekedi', 'Kasongo'], // DR Congo
        'DJ': ['Hassan', 'Ali', 'Mohamed', 'Farah'], // Djibouti
        'EG': ['Hassan', 'Ali', 'Mohamed', 'Youssef'], // Egypt
        'GQ': ['Obiang', 'Nguema', 'Mba', 'Ndong'], // Equatorial Guinea
        'ER': ['Tesfaye', 'Gebremariam', 'Kidane', 'Berhane'], // Eritrea
        'ET': ['Abebe', 'Bekele', 'Tesfaye', 'Gebre'], // Ethiopia
        'GA': ['Mba', 'Ndong', 'Obiang', 'Essono'], // Gabon
        'GM': ['Jallow', 'Ceesay', 'Sanyang', 'Njie'], // Gambia
        'GH': ['Mensah', 'Owusu', 'Boateng', 'Osei'], // Ghana
        'GN': ['Diallo', 'Bah', 'Camara', 'Keita'], // Guinea
        'GW': ['Silva', 'Fernandes', 'Rodrigues', 'Pereira'], // Guinea-Bissau
        'KE': ['Otieno', 'Mwangi', 'Kamau', 'Ochieng'], // Kenya
        'LS': ['Mokoena', 'Molefe', 'Thabane', 'Ntsoko'], // Lesotho
        'LR': ['Johnson', 'Williams', 'Doe', 'Kollie'], // Liberia
        'LY': ['El-Fitouri', 'Ben Ali', 'El-Mansouri', 'El-Kabir'], // Libya
        'MG': ['Rakoto', 'Rasolo', 'Andrianarivo', 'Randrianasolo'], // Madagascar
        'MW': ['Phiri', 'Banda', 'Chirwa', 'Mwale'], // Malawi
        'ML': ['Traoré', 'Keita', 'Coulibaly', 'Konaté'], // Mali
        'MR': ['Ould', 'Ahmed', 'Mohamed', 'Abdallah'], // Mauritania
        'MU': ['Ramdoyal', 'Pillay', 'Naidoo', 'Gopal'], // Mauritius
        'MA': ['El-Fassi', 'Benjelloun', 'El-Mansouri', 'El-Khatib'], // Morocco
        'MZ': ['Mabunda', 'Chissano', 'Macamo', 'Nhaca'], // Mozambique
        'NA': ['Shilongo', 'Nujoma', 'Amadhila', 'Kandjii'], // Namibia
        'NE': ['Issa', 'Abdou', 'Moussa', 'Youssouf'], // Niger
        'NG': ['Okafor', 'Balogun', 'Abiola', 'Eze', 'Olawale', 'Chukwu'], // Nigeria
        'RW': ['Nkurunziza', 'Habimana', 'Uwimana', 'Munyaneza'], // Rwanda
        'ST': ['Da Silva', 'Costa', 'Fernandes', 'Rodrigues'], // São Tomé and Príncipe
        'SN': ['Diop', 'Ndiaye', 'Ba', 'Fall'], // Senegal
        'SC': ['Lafortune', 'Esparon', 'Sophola', 'Henrie'], // Seychelles
        'SL': ['Kamara', 'Koroma', 'Sesay', 'Bangura'], // Sierra Leone
        'SO': ['Hassan', 'Ali', 'Mohamed', 'Farah'], // Somalia
        'ZA': ['Nkosi', 'Dlamini', 'Mokoena', 'Naidoo', 'Van der Merwe'], // South Africa
        'SS': ['Lado', 'Wani', 'Lual', 'Mabior'], // South Sudan
        'SD': ['Hassan', 'Ali', 'Mohamed', 'Abdallah'], // Sudan
        'TZ': ['Moshi', 'Mwakyusa', 'Mrema', 'Ngowi'], // Tanzania
        'TG': ['Koffi', 'Agbo', 'Mensah', 'Adjei'], // Togo
        'TN': ['Ben Ali', 'Trabelsi', 'Mansouri', 'Haddad'], // Tunisia
        'UG': ['Okello', 'Nsubuga', 'Ssemboga', 'Kato'], // Uganda
        'ZM': ['Phiri', 'Zulu', 'Mwale', 'Banda'], // Zambia
        'ZW': ['Moyo', 'Chirwa', 'Ncube', 'Mutasa'], // Zimbabwe
        // Europe
        'AL': ['Hoxha', 'Shehu', 'Krasniqi', 'Berisha'], // Albania
        'AD': ['Casals', 'Martí', 'Serra', 'Pons'], // Andorra
        'AT': ['Gruber', 'Huber', 'Bauer', 'Wagner'], // Austria
        'BY': ['Ivanov', 'Petrov', 'Sidorov', 'Kuznetsov'], // Belarus
        'BE': ['Peeters', 'Janssens', 'Maes', 'Jacobs'], // Belgium
        'BA': ['Hadžić', 'Kovačević', 'Jovanović', 'Petrović'], // Bosnia & Herzegovina
        'BG': ['Ivanov', 'Petrov', 'Georgiev', 'Dimitrov'], // Bulgaria
        'HR': ['Horvat', 'Kovačić', 'Babić', 'Marić'], // Croatia
        'CZ': ['Novák', 'Svoboda', 'Novotný', 'Dvořák'], // Czechia
        'DK': ['Jensen', 'Nielsen', 'Hansen', 'Pedersen'], // Denmark
        'EE': ['Tamm', 'Saar', 'Kask', 'Põld'], // Estonia
        'FI': ['Korhonen', 'Virtanen', 'Mäkinen', 'Nieminen'], // Finland
        'FR': ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Petit'], // France
        'DE': ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer'], // Germany
        'GR': ['Papadopoulos', 'Nikolaidis', 'Georgiou', 'Christodoulou'], // Greece
        'HU': ['Nagy', 'Kovács', 'Tóth', 'Szabó'], // Hungary
        'IS': ['Jónsson', 'Guðmundsdóttir', 'Magnússon', 'Ólafsdóttir'], // Iceland
        'IE': ['Murphy', 'Kelly', 'O\'Sullivan', 'Walsh'], // Ireland
        'IT': ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano'], // Italy
        'LV': ['Kalniņš', 'Ozoliņš', 'Jansons', 'Liepa'], // Latvia
        'LI': ['Beck', 'Büchel', 'Eberle', 'Schädler'], // Liechtenstein
        'LT': ['Kazlauskas', 'Petrauskas', 'Jankauskas', 'Paulauskas'], // Lithuania
        'LU': ['Schmit', 'Muller', 'Weber', 'Wagner'], // Luxembourg
        'MT': ['Camilleri', 'Vella', 'Galea', 'Farrugia'], // Malta
        'MD': ['Popescu', 'Rusu', 'Ciobanu', 'Ceban'], // Moldova
        'MC': ['Durand', 'Bernard', 'Martin', 'Petit'], // Monaco
        'ME': ['Popović', 'Jovanović', 'Nikolić', 'Đorđević'], // Montenegro
        'NL': ['de Jong', 'Jansen', 'de Vries', 'van den Berg'], // Netherlands
        'MK': ['Stojanovski', 'Petrovski', 'Trajkovski', 'Nikoloski'], // North Macedonia
        'NO': ['Hansen', 'Johansen', 'Olsen', 'Larsen'], // Norway
        'PL': ['Nowak', 'Kowalski', 'Wiśniewski', 'Dąbrowski'], // Poland
        'PT': ['Silva', 'Santos', 'Ferreira', 'Pereira'], // Portugal
        'RO': ['Popescu', 'Ionescu', 'Stan', 'Dumitrescu'], // Romania
        'RU': ['Ivanov', 'Petrov', 'Sidorov', 'Smirnov', 'Kuznetsov', 'Popov'], // Russia
        'SM': ['Rossi', 'Bianchi', 'Conti', 'Costa'], // San Marino
        'RS': ['Jovanović', 'Petrović', 'Nikolić', 'Đorđević'], // Serbia
        'SK': ['Horváth', 'Kováč', 'Varga', 'Molnár'], // Slovakia
        'SI': ['Novak', 'Kovač', 'Zupančič', 'Horvat'], // Slovenia
        'ES': ['García', 'Martínez', 'Rodríguez', 'López', 'Sánchez', 'Fernández'], // Spain
        'SE': ['Johansson', 'Andersson', 'Karlsson', 'Nilsson'], // Sweden
        'CH': ['Müller', 'Meier', 'Schmid', 'Keller'], // Switzerland
        'UA': ['Shevchenko', 'Kovalenko', 'Bondarenko', 'Tkachenko'], // Ukraine
        'GB': ['Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson'], // United Kingdom
        'VA': ['Rossi', 'Ferrari', 'Romano', 'Bianchi'], // Vatican City
        // Oceania
        'AU': ['Smith', 'Brown', 'Wilson', 'Taylor', 'Williams', 'Jones'], // Australia
        'NZ': ['Smith', 'Brown', 'Wilson', 'Taylor', 'Williams', 'Ngata'], // New Zealand
        'FJ': ['Reddy', 'Singh', 'Kumar', 'Naidu', 'Prasad', 'Ali'], // Fiji
        'PG': ['Kila', 'Waine', 'Aihi', 'Tau', 'Lohia'], // Papua New Guinea
        'SB': ['Mael', 'Sikua', 'Hou', 'Rarua', 'Kale'], // Solomon Islands
        'VU': ['Tari', 'Kaloris', 'Malau', 'Bani', 'Kaltonga'], // Vanuatu
        'WS': ['Tuala', 'Faumuina', 'Malietoa', 'Anoa\'i', 'Fepulea\'i'], // Samoa
        'TO': ['Fifita', 'Tu\'ivai', 'Kaufusi', 'Latu', 'Pulu'], // Tonga
        'KI': ['Teka', 'Nei', 'Bata', 'Mara', 'Tabuia'], // Kiribati
        'TV': ['Fala', 'Lima', 'Tupu', 'Mele', 'Pule'], // Tuvalu
        'NR': ['Detudamo', 'Adeang', 'Harris', 'Agir', 'Waqa'], // Nauru
        'PW': ['Basilius', 'Tmetuchl', 'Remeliik', 'Ngiraikelau', 'Matsutaro'], // Palau
        'MH': ['Kabua', 'Note', 'Loeak', 'Zedkaia', 'Alik'], // Marshall Islands
        'FM': ['Hadley', 'Nakasone', 'Sigrah', 'Elimo', 'Panuelo'] // Micronesia (Federated States)
    };
    
    const names = lastNames[countryCode] || lastNames['US'];
    return names[Math.floor(Math.random() * names.length)];
}

function generateLifeStory(family, country) {
    const stories = [
        `Born into a ${family.type.toLowerCase()} in ${country.name}. ${family.description}`,
        `Starting your journey in ${country.name} with ${family.type.toLowerCase()} background.`,
        `Life begins in ${country.name} where ${family.description.toLowerCase()}.`
    ];
    return stories[Math.floor(Math.random() * stories.length)];
}

// Life Initialization Functions
function showLifeInitModal() {
    // Check if there's a saved game first
    if (hasSaveGame() && loadGame()) {
        // Game loaded successfully, skip life initialization
        hideModal('lifeInitModal');
        showNotification('Welcome back! Your progress has been restored.', 'success');
        return;
    }
    
    // No save game or load failed, start new game
    initializeRandomizedLife();
    updateLifeInitDisplay();
    showModal('lifeInitModal', false);
}

function updateLifeInitDisplay() {
    const life = gameState.life;
    
    // Update basic info
    document.getElementById('lifeName').textContent = life.name;
    document.getElementById('lifeAge').textContent = life.age;
    document.getElementById('lifeCountry').textContent = life.country.name;
    document.getElementById('lifeFamily').textContent = life.family.type;
    document.getElementById('lifeWealth').textContent = formatNumber(life.wealth);
    document.getElementById('lifeStory').textContent = life.lifeStory;
    
    // Update skills display
    updateSkillsDisplay();
    
    // Populate customization options
    populateCustomizationOptions();
}

function updateSkillsDisplay() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';
    
    Object.keys(skills).forEach(skillKey => {
        const skill = skills[skillKey];
        const skillValue = gameState.life.skills[skillKey];
        
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-fill" style="width: ${skillValue}%"></div>
            </div>
            <div class="skill-value">${skillValue}/${skill.max}</div>
            <div class="skill-desc">${skill.description}</div>
        `;
        skillsGrid.appendChild(skillElement);
    });
}

function populateCustomizationOptions() {
    // Populate countries
    const countrySelect = document.getElementById('customCountry');
    countrySelect.innerHTML = '';
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.name} (${country.currency})`;
        countrySelect.appendChild(option);
    });
    
    // Populate families
    const familySelect = document.getElementById('customFamily');
    familySelect.innerHTML = '';
    familyTypes.forEach(family => {
        const option = document.createElement('option');
        option.value = family.type;
        option.textContent = `${family.type} - $${formatNumber(family.wealthBonus)}`;
        familySelect.appendChild(option);
    });
    
    // Add event listener to update wealth when family changes
    familySelect.addEventListener('change', (e) => {
        const selectedFamily = familyTypes.find(f => f.type === e.target.value);
        if (selectedFamily) {
            const wealthSlider = document.getElementById('customWealth');
            const wealthValue = document.getElementById('wealthValue');
            wealthSlider.value = selectedFamily.wealthBonus;
            wealthValue.textContent = `$${formatNumber(selectedFamily.wealthBonus)}`;
        }
    });
    
    // Populate skill sliders
    const skillsCustomGrid = document.getElementById('skillsCustomGrid');
    skillsCustomGrid.innerHTML = '';
    
    Object.keys(skills).forEach(skillKey => {
        const skill = skills[skillKey];
        const skillValue = gameState.life.skills[skillKey];
        
        const skillSlider = document.createElement('div');
        skillSlider.className = 'skill-slider';
        skillSlider.innerHTML = `
            <label>${skill.name}:</label>
            <input type="range" min="0" max="100" value="${skillValue}" 
                   id="skill-${skillKey}" onchange="updateSkillValue('${skillKey}', this.value)">
            <span id="skill-value-${skillKey}">${skillValue}</span>
        `;
        skillsCustomGrid.appendChild(skillSlider);
    });
    
    // Set current values
    document.getElementById('customName').value = gameState.life.name;
    document.getElementById('customCountry').value = gameState.life.citizenship;
    document.getElementById('customFamily').value = gameState.life.family.type;
    document.getElementById('customWealth').value = gameState.life.wealth;
    document.getElementById('wealthValue').textContent = `$${formatNumber(gameState.life.wealth)}`;
}

function updateSkillValue(skillKey, value) {
    document.getElementById(`skill-value-${skillKey}`).textContent = value;
}

function unlockPremium() {
    // Simulate premium unlock (in real implementation, this would handle payment)
    gameState.life.premiumUnlocked = true;
    
    document.getElementById('premiumLock').style.display = 'none';
    document.getElementById('premiumUnlock').style.display = 'block';
    document.getElementById('customizationSection').style.display = 'block';
    
    showNotification('Premium unlocked! You can now customize your life.', 'success');
}

function startLife() {
    if (gameState.life.premiumUnlocked) {
        // Apply customizations
        const customName = document.getElementById('customName').value;
        const customCountryCode = document.getElementById('customCountry').value;
        const customFamilyType = document.getElementById('customFamily').value;
        const customWealth = parseInt(document.getElementById('customWealth').value);
        
        if (customName) {
            gameState.life.name = customName;
        }
        
        const selectedCountry = countries.find(c => c.code === customCountryCode);
        if (selectedCountry) {
            gameState.life.country = selectedCountry;
            gameState.life.citizenship = selectedCountry.code;
        }
        
        const selectedFamily = familyTypes.find(f => f.type === customFamilyType);
        if (selectedFamily) {
            gameState.life.family = selectedFamily;
            gameState.life.wealth = customWealth;
        }
        
        // Apply custom skill values
        Object.keys(skills).forEach(skillKey => {
            const slider = document.getElementById(`skill-${skillKey}`);
            if (slider) {
                gameState.life.skills[skillKey] = parseInt(slider.value);
            }
        });
    }
    
    // Initialize game with life data
    gameState.balance = gameState.life.wealth;
    gameState.balance *= gameState.life.country.wealthMultiplier;
    
    gameState.character.name = gameState.life.name;
    
    // Update character display
    document.getElementById('characterName').textContent = gameState.life.name;
    document.getElementById('characterTitle').textContent = `${gameState.life.country.name} Native`;
    
    hideModal('lifeInitModal');
    showNotification(`Welcome to your new life, ${gameState.life.name}!`, 'success');
    
    // Update UI
    updateUI();
    
    // Save game after starting life
    autoSave();
}

// Initialize life on game start
function initializeGame() {
    // Check if life has been initialized
    if (!gameState.life) {
        showLifeInitModal();
    } else {
        // Life already initialized, continue normally
        initializeCharacter();
        updateUI();
    }
}

// SVG Avatar definitions
const avatarSVGs = {
    'avatar-male-1': '<img src="charactersvgs/suitm1.svg" alt="Male Suit 1" style="width: 100%; height: 100%; object-fit: contain;">',
    'avatar-female-1': '<img src="charactersvgs/suitf1.svg" alt="Female Suit 1" style="width: 100%; height: 100%; object-fit: contain;">',
    'avatar-male-2': '<img src="charactersvgs/suitm2.svg" alt="Male Suit 2" style="width: 100%; height: 100%; object-fit: contain;">',
    'avatar-female-2': '<img src="charactersvgs/suitf2.svg" alt="Female Suit 2" style="width: 100%; height: 100%; object-fit: contain;">',
    'avatar-male-3': '<img src="charactersvgs/casualm1.svg" alt="Male Casual 1" style="width: 100%; height: 100%; object-fit: contain;">',
    'avatar-female-3': '<img src="charactersvgs/casualf1.svg" alt="Female Casual 1" style="width: 100%; height: 100%; object-fit: contain;">',
    'avatar-male-4': '<img src="charactersvgs/casualm2.svg" alt="Male Casual 2" style="width: 100%; height: 100%; object-fit: contain;">',
    'avatar-female-4': '<img src="charactersvgs/casualf2.svg" alt="Female Casual 2" style="width: 100%; height: 100%; object-fit: contain;">'
};

// Initialize character on load
function initializeCharacter() {
    const avatar = document.getElementById('characterAvatar');
    
    if (gameState.character && gameState.character.avatar) {
        const avatarSVG = avatarSVGs[gameState.character.avatar] || avatarSVGs['avatar-male-1'];
        
        if (avatar) {
            avatar.innerHTML = avatarSVG;
        }
    }
}

// Update character preview in customization modal
function updateCharacterPreview() {
    const preview = document.getElementById('characterPreview');
    const avatar = document.getElementById('characterAvatar');
    
    const avatarSVG = avatarSVGs[gameState.character.avatar] || avatarSVGs['avatar-male-1'];
    
    if (preview) {
        preview.innerHTML = avatarSVG;
    }
    
    if (avatar) {
        avatar.innerHTML = avatarSVG;
    }
    
    // Update name input with current name
    const nameInput = document.getElementById('characterNameInput');
    if (nameInput) {
        nameInput.value = gameState.character.name;
    }
}

// Select character customization option
function selectCustomization(type, value) {
    if (type === 'name') {
        const nameInput = document.getElementById('characterNameInput');
        if (nameInput && nameInput.value.trim()) {
            gameState.character.name = nameInput.value.trim();
            document.getElementById('characterName').textContent = gameState.character.name;
        }
    } else if (type === 'avatar') {
        gameState.character.avatar = value;
        updateCharacterPreview();
    } else if (type === 'accessory') {
        gameState.character.accessory = value;
        updateCharacterPreview();
    }
}

// Save character customization
function saveCharacterCustomization() {
    const nameInput = document.getElementById('characterNameInput');
    if (nameInput && nameInput.value.trim()) {
        gameState.character.name = nameInput.value.trim();
        document.getElementById('characterName').textContent = gameState.character.name;
    }
    
    updateCharacterPreview();
    hideModal('characterCustomize');
    showNotification('Character customized!', 'success');
    saveGameState();
}

// Perform activity (wrapper for performLifeActivity)
function performActivity(activityName) {
    performLifeActivity(activityName);
}

// Perform life activity
function performLifeActivity(activityName) {
    const activity = lifeActivities.find(a => a.name === activityName);
    
    if (!activity) {
        console.error('Activity not found:', activityName);
        showNotification('Activity not found!', 'error');
        return;
    }
    
    if (gameState.balance >= activity.cost) {
        gameState.balance -= activity.cost;
        
        // Apply effects
        Object.keys(activity.effect).forEach(stat => {
            if (gameState.lifeStats[stat] !== undefined) {
                gameState.lifeStats[stat] = Math.min(gameState.lifeStats[stat] + activity.effect[stat], 100);
            }
        });
        
        updateUI();
        showNotification(`Completed ${activityName}!`, 'success');
        
        // Trigger NPC encounter for life activities
        setTimeout(() => {
            createNPCEvent('life_activity', { activityName: activityName });
        }, 1000);
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Meet partner
function meetPartner(partnerName) {
    if (gameState.loveLife.partnerName) {
        showNotification('You already have a partner!', 'warning');
        return;
    }
    
    const partner = partners.find(p => p.name === partnerName);
    gameState.loveLife.partnerName = partnerName;
    gameState.loveLife.relationship = 'Dating';
    gameState.loveLife.relationshipLevel = 10;
    
    showNotification(`Started dating ${partnerName}!`, 'success');
    updateUI();
}

// Go on date
function goOnDate(dateName) {
    if (!gameState.loveLife.partnerName) {
        showNotification('You need a partner first! Meet someone in the Potential Partners section.', 'warning');
        return;
    }
    
    const date = loveActivities.find(d => d.name === dateName);
    
    if (!date) {
        showNotification('Date activity not found!', 'error');
        return;
    }
    
    if (gameState.balance >= date.cost) {
        gameState.balance -= date.cost;
        gameState.loveLife.relationshipLevel += date.effect.relationship;
        gameState.loveLife.dates++;
        
        // Update relationship status based on level
        if (gameState.loveLife.relationshipLevel >= 50) {
            gameState.loveLife.relationship = 'In Love';
        } else if (gameState.loveLife.relationshipLevel >= 25) {
            gameState.loveLife.relationship = 'Serious';
        }
        
        showNotification(`Had a great ${dateName}! Relationship level: ${gameState.loveLife.relationshipLevel}`, 'success');
        updateUI();
        
        // Trigger NPC encounter for dates
        setTimeout(() => {
            createNPCEvent('date', { dateName: dateName });
        }, 1500);
    } else {
        showNotification('Not enough money for this date!', 'error');
    }
}

// Break up with partner
function breakUp() {
    if (!gameState.loveLife.partnerName) {
        showNotification('You don\'t have a partner to break up with!', 'warning');
        return;
    }
    
    const partnerName = gameState.loveLife.partnerName;
    
    // Reset love life
    gameState.loveLife.partnerName = '';
    gameState.loveLife.relationship = 'Single';
    gameState.loveLife.relationshipLevel = 0;
    gameState.loveLife.dates = 0;
    gameState.loveLife.gifts = 0;
    
    showNotification(`You broke up with ${partnerName}. You're now single.`, 'info');
    updateUI();
}

// Purchase car
function purchaseCar(carName) {
    const car = carTypes.find(c => c.name === carName);
    
    if (!car) {
        showNotification('Car not found!', 'error');
        return;
    }
    
    if (gameState.carCollection.includes(carName)) {
        showNotification('You already own this car!', 'warning');
        return;
    }
    
    if (gameState.balance >= car.cost) {
        gameState.balance -= car.cost;
        gameState.carCollection.push(carName);
        gameState.incomePerSecond += car.income / 60;
        
        showNotification(`Purchased ${carName}! +$${car.income}/min`, 'success');
        updateUI();
        updateCollections();
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Purchase plane
function purchasePlane(planeName) {
    const plane = planeTypes.find(p => p.name === planeName);
    
    if (!plane) {
        showNotification('Plane not found!', 'error');
        return;
    }
    
    if (gameState.planeCollection.includes(planeName)) {
        showNotification('You already own this plane!', 'warning');
        return;
    }
    
    if (gameState.balance >= plane.cost) {
        gameState.balance -= plane.cost;
        gameState.planeCollection.push(planeName);
        gameState.incomePerSecond += plane.income / 60;
        
        showNotification(`Purchased ${planeName}! +$${plane.income}/min`, 'success');
        updateUI();
        updateCollections();
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Purchase luxury item
function purchaseLuxury(luxuryName) {
    const luxury = luxuryItems.find(l => l.name === luxuryName);
    
    if (!luxury) {
        showNotification('Luxury item not found!', 'error');
        return;
    }
    
    if (gameState.luxuryCollection.includes(luxuryName)) {
        showNotification('You already own this luxury item!', 'warning');
        return;
    }
    
    if (gameState.balance >= luxury.cost) {
        gameState.balance -= luxury.cost;
        gameState.luxuryCollection.push(luxuryName);
        gameState.incomePerSecond += luxury.income / 60;
        
        showNotification(`Purchased ${luxuryName}! +$${luxury.income}/min`, 'success');
        updateUI();
        updateCollections();
    } else {
        showNotification('Insufficient funds!', 'error');
    }
}

// Update collections display
function updateCollections() {
    // Update car collection
    document.querySelectorAll('#carCollection .collection-item').forEach(item => {
        const carName = item.dataset.car;
        if (gameState.carCollection.includes(carName)) {
            item.classList.add('owned');
            item.classList.remove('locked');
        }
    });
    
    // Update plane collection
    document.querySelectorAll('#planeCollection .collection-item').forEach(item => {
        const planeName = item.dataset.plane;
        if (gameState.planeCollection.includes(planeName)) {
            item.classList.add('owned');
            item.classList.remove('locked');
        }
    });
    
    // Update luxury collection
    document.querySelectorAll('#luxuryCollection .collection-item').forEach(item => {
        const luxuryName = item.dataset.luxury;
        if (gameState.luxuryCollection.includes(luxuryName)) {
            item.classList.add('owned');
            item.classList.remove('locked');
        }
    });
}

// Update crypto display
function updateCrypto() {
    // Update crypto balance display
    const totalCryptoUSD = Object.keys(cryptoInvestments).reduce((total, crypto) => {
        const investment = cryptoInvestments[crypto];
        const holding = gameState.cryptoHoldings[crypto];
        return total + (holding && holding.amount ? holding.amount * investment.price : 0);
    }, 0);
    
    gameState.cryptoBalance = totalCryptoUSD;
    
    // Update UI elements
    const cryptoBalanceElement = document.getElementById('cryptoBalance');
    const cryptoUSDElement = document.getElementById('cryptoUSD');
    const cryptoProfitElement = document.getElementById('cryptoProfit');
    const cryptoProfitChangeElement = document.getElementById('cryptoProfitChange');
    
    if (cryptoBalanceElement) {
        const btcEquivalent = totalCryptoUSD / 45000;
        cryptoBalanceElement.textContent = `${btcEquivalent.toFixed(6)} BTC`;
    }
    
    if (cryptoUSDElement) {
        cryptoUSDElement.textContent = `$${formatNumber(totalCryptoUSD)}`;
    }
    
    // Calculate total profit/loss
    const totalInvested = Object.keys(cryptoInvestments).reduce((total, crypto) => {
        const holding = gameState.cryptoHoldings[crypto];
        return total + (holding && holding.invested ? holding.invested : 0);
    }, 0);
    
    const profit = totalCryptoUSD - totalInvested;
    const profitPercentage = totalInvested > 0 ? (profit / totalInvested) * 100 : 0;
    
    if (cryptoProfitElement) {
        cryptoProfitElement.textContent = `$${formatNumber(profit)}`;
    }
    
    if (cryptoProfitChangeElement) {
        cryptoProfitChangeElement.textContent = `${profitPercentage >= 0 ? '+' : ''}${profitPercentage.toFixed(2)}%`;
        cryptoProfitChangeElement.className = `stat-change ${profitPercentage >= 0 ? 'positive' : 'negative'}`;
    }
    
    // Update investment cards
    Object.keys(cryptoInvestments).forEach(cryptoId => {
        const investment = cryptoInvestments[cryptoId];
        const holding = gameState.cryptoHoldings[cryptoId];
        const card = document.querySelector(`[data-investment="${cryptoId}"]`);
        
        if (card) {
            const priceElement = card.querySelector('.investment-price');
            if (priceElement) {
                priceElement.textContent = `$${formatNumber(investment.price)}`;
            }
            
            const changeElement = card.querySelector('.investmentCryptoChange') || card.querySelector('.investment-change');
            if (changeElement) {
                changeElement.textContent = `${investment.change >= 0 ? '+' : ''}${investment.change.toFixed(2)}%`;
                changeElement.classList.remove('positive', 'negative');
                changeElement.classList.add(investment.change >= 0 ? 'positive' : 'negative');
            }
            
            if (holding) {
                const amountElement = card.querySelector('.investment-amount');
                if (amountElement) {
                    amountElement.textContent = `${holding.amount.toFixed(6)} ${investment.symbol}`;
                }
            }
        }
    });
    
    // Update holdings display
    updateHoldingsDisplay();
}

// Update holdings display
function updateHoldingsDisplay() {
    Object.keys(gameState.cryptoHoldings).forEach(cryptoId => {
        const holding = gameState.cryptoHoldings[cryptoId];
        const investment = cryptoInvestments[cryptoId];
        const holdingItem = document.querySelector(`#holdingsGrid .holding-item:nth-child(${Object.keys(cryptoInvestments).indexOf(cryptoId) + 1})`);
        
        if (holdingItem && holding && investment) {
            const amountElement = holdingItem.querySelector('.holding-amount');
            const valueElement = holdingItem.querySelector('.holding-value');
            
            if (amountElement) {
                amountElement.textContent = `${holding.amount.toFixed(6)} ${investment.symbol}`;
            }
            
            if (valueElement) {
                const currentValue = holding.amount * investment.price;
                valueElement.textContent = `$${formatNumber(currentValue)}`;
            }
        }
    });
}

// Transfer to crypto
function transferToCrypto() {
    showModal('transfer');
    document.getElementById('transferBalance').textContent = `$${formatNumber(gameState.balance)}`;
    document.getElementById('transferAmount').value = '';
    updateTransferConversion();
}

// Confirm transfer
function confirmTransfer() {
    const transferAmount = parseFloat(document.getElementById('transferAmount').value);
    
    if (!transferAmount || isNaN(transferAmount)) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    if (transferAmount <= 0) {
        showNotification('Amount must be greater than 0', 'error');
        return;
    }
    
    if (gameState.balance < transferAmount) {
        showNotification('Insufficient balance!', 'error');
        return;
    }
    
    // Convert to BTC and add to crypto balance
    gameState.balance -= transferAmount;
    const btcAmount = transferAmount / 45000;
    gameState.cryptoHoldings.bitcoin.amount += btcAmount;
    gameState.cryptoHoldings.bitcoin.invested += transferAmount;
    
    showNotification(`Transferred $${formatNumber(transferAmount)} to crypto (${btcAmount.toFixed(6)} BTC)`, 'success');
    hideModal('transfer');
    updateUI();
}

// Buy crypto investment
function buyCrypto(cryptoId) {
    const investment = cryptoInvestments[cryptoId];
    
    // Set modal content
    document.getElementById('investmentCryptoIcon').textContent = investment.icon;
    document.getElementById('investmentCryptoName').textContent = investment.name;
    document.getElementById('investmentCryptoPrice').textContent = `$${formatNumber(investment.price)}`;
    
    const changeElement = document.getElementById('investmentCryptoChange');
    changeElement.textContent = `${investment.change >= 0 ? '+' : ''}${investment.change}%`;
    changeElement.className = `price-change ${investment.change >= 0 ? 'positive' : 'negative'}`;
    
    document.getElementById('investmentBalance').textContent = `$${formatNumber(gameState.balance)}`;
    document.getElementById('investmentAmount').value = '';
    
    // Store current crypto ID for confirmation
    window.currentInvestmentId = cryptoId;
    
    showModal('investment');
    updateInvestmentConversion();
}

// Confirm investment
function confirmInvestment() {
    const buyAmount = parseFloat(document.getElementById('investmentAmount').value);
    const cryptoId = window.currentInvestmentId;
    
    if (!cryptoId) {
        showNotification('No investment selected', 'error');
        return;
    }
    
    if (!buyAmount || isNaN(buyAmount)) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    if (buyAmount <= 0) {
        showNotification('Amount must be greater than 0', 'error');
        return;
    }
    
    if (gameState.balance < buyAmount) {
        showNotification('Insufficient balance!', 'error');
        return;
    }
    
    const investment = cryptoInvestments[cryptoId];
    
    // Initialize holding if it doesn't exist
    if (!gameState.cryptoHoldings[cryptoId]) {
        gameState.cryptoHoldings[cryptoId] = { amount: 0, invested: 0 };
    }
    
    // Buy crypto
    const cryptoAmount = buyAmount / investment.price;
    gameState.cryptoHoldings[cryptoId].amount += cryptoAmount;
    gameState.cryptoHoldings[cryptoId].invested += buyAmount;
    
    // Deduct from main balance
    gameState.balance -= buyAmount;
    
    // Ensure values don't exceed reasonable limits
    if (gameState.cryptoHoldings[cryptoId].amount < 0) {
        gameState.cryptoHoldings[cryptoId].amount = 0;
    }
    if (gameState.cryptoHoldings[cryptoId].invested < 0) {
        gameState.cryptoHoldings[cryptoId].invested = 0;
    }
    
    showNotification(`Bought ${cryptoAmount.toFixed(6)} ${investment.symbol} for $${formatNumber(buyAmount)}`, 'success');
    hideModal('investment');
    updateUI();
}

// Update transfer conversion display
function updateTransferConversion() {
    const amount = parseFloat(document.getElementById('transferAmount').value) || 0;
    const btcAmount = amount / 45000;
    document.getElementById('cryptoConversion').textContent = `${btcAmount.toFixed(6)} BTC`;
}

// Update investment conversion display
function updateInvestmentConversion() {
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    const cryptoId = window.currentInvestmentId;
    
    if (cryptoId) {
        const investment = cryptoInvestments[cryptoId];
        const cryptoAmount = amount / investment.price;
        document.getElementById('investmentConversion').textContent = `${cryptoAmount.toFixed(6)} ${investment.symbol}`;
    }
}

// Withdraw/liquidate crypto investment
function withdrawCrypto(cryptoId) {
    const investment = cryptoInvestments[cryptoId];
    const holding = gameState.cryptoHoldings[cryptoId];
    
    if (holding.amount <= 0) {
        showNotification('No holdings to withdraw!', 'error');
        return;
    }
    
    // Set modal content for withdrawal
    document.getElementById('withdrawCryptoIcon').textContent = investment.icon;
    document.getElementById('withdrawCryptoName').textContent = investment.name;
    document.getElementById('withdrawCryptoPrice').textContent = `$${formatNumber(investment.price)}`;
    
    const changeElement = document.getElementById('withdrawCryptoChange');
    changeElement.textContent = `${investment.change >= 0 ? '+' : ''}${investment.change}%`;
    changeElement.className = `price-change ${investment.change >= 0 ? 'positive' : 'negative'}`;
    
    document.getElementById('withdrawCryptoAmount').textContent = `${holding.amount.toFixed(6)} ${investment.symbol}`;
    document.getElementById('withdrawCryptoValue').textContent = `$${formatNumber(holding.amount * investment.price)}`;
    document.getElementById('withdrawCryptoInvested').textContent = `$${formatNumber(holding.invested)}`;
    
    const profit = (holding.amount * investment.price) - holding.invested;
    const profitElement = document.getElementById('withdrawCryptoProfit');
    profitElement.textContent = `$${formatNumber(profit)}`;
    profitElement.className = profit >= 0 ? 'profit-positive' : 'profit-negative';
    
    document.getElementById('withdrawAmount').value = '';
    document.getElementById('withdrawAmount').max = holding.amount;
    
    // Store current crypto ID for withdrawal
    window.currentWithdrawId = cryptoId;
    
    showModal('withdraw');
    updateWithdrawConversion();
}

// Confirm withdrawal
function confirmWithdrawal() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    const cryptoId = window.currentWithdrawId;
    
    if (!cryptoId) {
        showNotification('No investment selected', 'error');
        return;
    }
    
    if (!withdrawAmount || isNaN(withdrawAmount)) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    if (withdrawAmount <= 0) {
        showNotification('Amount must be greater than 0', 'error');
        return;
    }
    
    // Initialize holding if it doesn't exist
    if (!gameState.cryptoHoldings[cryptoId]) {
        gameState.cryptoHoldings[cryptoId] = { amount: 0, invested: 0 };
    }
    
    const holding = gameState.cryptoHoldings[cryptoId];
    
    if (withdrawAmount > holding.amount) {
        showNotification('Insufficient holdings!', 'error');
        return;
    }
    
    const investment = cryptoInvestments[cryptoId];
    const usdValue = withdrawAmount * investment.price;
    
    // Withdraw crypto
    const proportionOfHolding = withdrawAmount / holding.amount;
    const investedToReduce = proportionOfHolding * holding.invested;
    
    holding.amount = Math.max(0, holding.amount - withdrawAmount);
    holding.invested = Math.max(0, holding.invested - investedToReduce);
    
    // Clear holding if amount is effectively zero
    if (holding.amount < 0.000001) {
        holding.amount = 0;
        holding.invested = 0;
    }
    
    // Add USD to balance
    gameState.balance += usdValue;
    
    showNotification(`Withdrew ${withdrawAmount.toFixed(6)} ${investment.symbol} for $${formatNumber(usdValue)}`, 'success');
    hideModal('withdraw');
    updateUI();
}

// Update withdraw conversion display
function updateWithdrawConversion() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value) || 0;
    const cryptoId = window.currentWithdrawId;
    
    if (cryptoId) {
        const investment = cryptoInvestments[cryptoId];
        const usdValue = amount * investment.price;
        document.getElementById('withdrawConversion').textContent = `$${formatNumber(usdValue)}`;
    }
}

// Withdraw all crypto holdings
function withdrawAllCrypto() {
    let totalValue = 0;
    let totalInvested = 0;
    let hasHoldings = false;
    
    // Calculate total value and check if user has any holdings
    Object.keys(gameState.cryptoHoldings).forEach(cryptoId => {
        const holding = gameState.cryptoHoldings[cryptoId];
        const investment = cryptoInvestments[cryptoId];
        
        if (holding && holding.amount > 0 && investment) {
            hasHoldings = true;
            const currentValue = holding.amount * investment.price;
            totalValue += currentValue;
            totalInvested += holding.invested;
        }
    });
    
    if (!hasHoldings) {
        showNotification('No crypto holdings to withdraw!', 'error');
        return;
    }
    
    // Confirm withdrawal
    const profit = totalValue - totalInvested;
    const profitText = profit >= 0 ? `Profit: $${formatNumber(profit)}` : `Loss: $${formatNumber(Math.abs(profit))}`;
    const profitClass = profit >= 0 ? 'profit-positive' : 'profit-negative';
    
    // Show toast notification with withdrawal details
    showNotification(`Withdrawing all crypto: $${formatNumber(totalValue)} (${profitText})`, 'info');
    
    // Withdraw all holdings
    Object.keys(gameState.cryptoHoldings).forEach(cryptoId => {
        const holding = gameState.cryptoHoldings[cryptoId];
        const investment = cryptoInvestments[cryptoId];
        
        if (holding && holding.amount > 0 && investment) {
            const currentValue = holding.amount * investment.price;
            
            // Add to balance
            gameState.balance += currentValue;
            
            // Reset holdings
            holding.amount = 0;
            holding.invested = 0;
        }
    });
    
    // Update displays
    updateCrypto();
    updateHoldingsDisplay();
    updateUI();
    
    // Show success notification
    showNotification(`Successfully withdrew all crypto for $${formatNumber(totalValue)} (${profitText})`, 'success');
}

// Simulate stock price changes
function simulateStockPrices() {
    Object.keys(stockMarket).forEach(stockId => {
        const stock = stockMarket[stockId];
        
        // Random market event (10% chance)
        if (Math.random() < 0.1) {
            const events = [
                { type: 'scandal', impact: -0.15, message: `${stock.displayName} faces scandal!` },
                { type: 'viral', impact: 0.20, message: `${stock.displayName} goes viral!` },
                { type: 'launch', impact: 0.12, message: `${stock.displayName} launches new product!` },
                { type: 'recession', impact: -0.08, message: `${stock.displayName} affected by market downturn` },
                { type: 'boom', impact: 0.10, message: `${stock.displayName} benefits from industry boom` }
            ];
            
            const event = events[Math.floor(Math.random() * events.length)];
            stock.currentPrice *= (1 + event.impact);
            
            if (Math.random() < 0.3) { // 30% chance to show notification
                showNotification(event.message, event.impact > 0 ? 'success' : 'warning');
            }
        }
        
        // Normal price fluctuation
        const randomChange = (Math.random() - 0.5) * 2 * stock.volatility;
        const growthFactor = stock.growthRate / 100;
        stock.currentPrice *= (1 + randomChange + growthFactor);
        
        // Ensure price doesn't go below 10% of base price
        stock.currentPrice = Math.max(stock.basePrice * 0.1, stock.currentPrice);
    });
    
    updateStockMarket();
}

// Update stock market display
function updateStockMarket() {
    document.querySelectorAll('.stock-card').forEach(card => {
        const stockId = card.dataset.stock;
        const stock = stockMarket[stockId];
        
        // Skip if stock data doesn't exist
        if (!stock) {
            console.warn(`Stock data not found for: ${stockId}`);
            return;
        }
        
        const holding = gameState.stockHoldings[stockId];
        const sharesDisplay = card.querySelector('.stock-shares');
        const priceDisplay = card.querySelector('.stock-price');
        const changeDisplay = card.querySelector('.price-change');
        
        if (sharesDisplay) {
            sharesDisplay.textContent = `${holding ? holding.shares : 0} shares`;
        }
        
        if (priceDisplay) {
            priceDisplay.textContent = `$${stock.currentPrice.toFixed(2)}`;
        }
        
        if (changeDisplay) {
            const changePercent = ((stock.currentPrice - stock.basePrice) / stock.basePrice) * 100;
            changeDisplay.textContent = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
            changeDisplay.className = `price-change ${changePercent >= 0 ? 'positive' : 'negative'}`;
        }
    });
    
    // Update total stock balance
    let totalStockValue = 0;
    Object.keys(gameState.stockHoldings).forEach(stockId => {
        const holding = gameState.stockHoldings[stockId];
        const stock = stockMarket[stockId];
        if (holding && stock) {
            totalStockValue += holding.shares * stock.currentPrice;
        }
    });
    
    gameState.stockBalance = totalStockValue;
}

// Show stock trade modal
function showStockTradeModal(stockId, tradeType) {
    const stock = stockMarket[stockId];
    
    if (!stock) {
        showNotification('Stock not found!', 'error');
        return;
    }
    
    // Store current stock and trade type
    window.currentStockId = stockId;
    window.currentTradeType = tradeType;
    
    // Update modal content
    const title = tradeType === 'buy' ? 'Buy Stock' : 'Sell Stock';
    document.getElementById('stockTradeTitle').textContent = title;
    
    document.getElementById('tradeStockIcon').textContent = stock.icon;
    document.getElementById('tradeStockName').textContent = stock.displayName;
    document.getElementById('tradeStockPrice').textContent = `$${stock.currentPrice.toFixed(2)}`;
    
    const changePercent = ((stock.currentPrice - stock.basePrice) / stock.basePrice) * 100;
    const changeElement = document.getElementById('tradeStockChange');
    changeElement.textContent = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
    changeElement.className = `price-change ${changePercent >= 0 ? 'positive' : 'negative'}`;
    
    // Update balance and shares
    document.getElementById('stockTradeBalance').textContent = `$${formatNumber(gameState.balance)}`;
    
    const holding = gameState.stockHoldings[stockId];
    const shares = holding ? holding.shares : 0;
    document.getElementById('stockTradeShares').textContent = `${shares} shares`;
    
    // Update confirm button
    const confirmBtn = document.getElementById('stockTradeConfirmBtn');
    confirmBtn.textContent = tradeType === 'buy' ? 'Buy' : 'Sell';
    confirmBtn.className = `confirm-btn ${tradeType}`;
    confirmBtn.onclick = () => confirmStockTrade();
    
    // Clear input and update conversion
    document.getElementById('stockTradeAmount').value = '';
    updateStockTradeConversion();
    
    showModal('stockTrade');
}

// Update stock trade conversion
function updateStockTradeConversion() {
    const amount = parseInt(document.getElementById('stockTradeAmount').value) || 0;
    const stockId = window.currentStockId;
    const tradeType = window.currentTradeType;
    
    if (stockId && stockMarket[stockId]) {
        const stock = stockMarket[stockId];
        const totalCost = amount * stock.currentPrice;
        
        const conversionElement = document.getElementById('stockTradeConversion');
        if (tradeType === 'buy') {
            conversionElement.textContent = `$${formatNumber(totalCost)}`;
        } else {
            conversionElement.textContent = `$${formatNumber(totalCost)} (receive)`;
        }
    }
}

// Confirm stock trade
function confirmStockTrade() {
    const amount = parseInt(document.getElementById('stockTradeAmount').value);
    const stockId = window.currentStockId;
    const tradeType = window.currentTradeType;
    
    if (!stockId || !stockMarket[stockId]) {
        showNotification('Stock not found!', 'error');
        return;
    }
    
    if (!amount || isNaN(amount) || amount <= 0) {
        showNotification('Please enter a valid number of shares', 'error');
        return;
    }
    
    const stock = stockMarket[stockId];
    
    if (tradeType === 'buy') {
        // Buy stock
        const totalCost = amount * stock.currentPrice;
        
        if (gameState.balance < totalCost) {
            showNotification('Insufficient funds!', 'error');
            return;
        }
        
        // Initialize holding if it doesn't exist
        if (!gameState.stockHoldings[stockId]) {
            gameState.stockHoldings[stockId] = { shares: 0, invested: 0 };
        }
        
        gameState.balance -= totalCost;
        gameState.stockHoldings[stockId].shares += amount;
        gameState.stockHoldings[stockId].invested += totalCost;
        
        showNotification(`Bought ${amount} shares of ${stock.displayName} for $${formatNumber(totalCost)}`, 'success');
        
    } else {
        // Sell stock
        const holding = gameState.stockHoldings[stockId];
        
        if (!holding || holding.shares < amount) {
            showNotification('Insufficient shares!', 'error');
            return;
        }
        
        const totalValue = amount * stock.currentPrice;
        const investedAmount = (amount / holding.shares) * holding.invested;
        const profit = totalValue - investedAmount;
        
        gameState.balance += totalValue;
        holding.shares -= amount;
        holding.invested -= investedAmount;
        
        // Remove holding if no shares left
        if (holding.shares === 0) {
            delete gameState.stockHoldings[stockId];
        }
        
        showNotification(`Sold ${amount} shares of ${stock.displayName} for $${formatNumber(totalValue)} (Profit: $${formatNumber(profit)})`, 'success');
    }
    
    hideModal('stockTrade');
    updateUI();
    updateStockMarket(); // Update stock market display to show new share count
}

// Buy stock (updated to use modal)
function buyStock(stockId) {
    showStockTradeModal(stockId, 'buy');
}

// Sell stock (updated to use modal)
function sellStock(stockId) {
    showStockTradeModal(stockId, 'sell');
}

// Crypto price history data
const cryptoPriceHistory = {};

// Initialize price history for all cryptocurrencies
function initializePriceHistory() {
    Object.keys(cryptoInvestments).forEach(cryptoId => {
        cryptoPriceHistory[cryptoId] = [];
        
        // Generate 24 hours of historical data (every hour)
        const basePrice = cryptoInvestments[cryptoId].price;
        for (let i = 23; i >= 0; i--) {
            const volatility = cryptoInvestments[cryptoId].volatility;
            const randomChange = (Math.random() - 0.5) * 2 * volatility * 0.3;
            const price = basePrice * (1 + randomChange);
            cryptoPriceHistory[cryptoId].push({
                time: i,
                price: price
            });
        }
        
        // Add current price
        cryptoPriceHistory[cryptoId].push({
            time: 0,
            price: cryptoInvestments[cryptoId].price
        });
    });
}

// Show crypto graph modal
function showCryptoGraph() {
    showModal('cryptoGraph');
}

// Update crypto graph
function updateCryptoGraph() {
    const cryptoId = document.getElementById('cryptoSelect').value;
    const investment = cryptoInvestments[cryptoId];
    
    if (!investment || !cryptoPriceHistory[cryptoId]) {
        return;
    }
    
    // Update stats
    const currentPrice = investment.price;
    const priceHistory = cryptoPriceHistory[cryptoId];
    const prices = priceHistory.map(p => p.price);
    const high = Math.max(...prices);
    const low = Math.min(...prices);
    const change = ((currentPrice - prices[0]) / prices[0]) * 100;
    
    document.getElementById('graphCurrentPrice').textContent = `$${currentPrice.toFixed(2)}`;
    document.getElementById('graphChange').textContent = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
    document.getElementById('graphChange').className = change >= 0 ? 'stat-value positive' : 'stat-value negative';
    document.getElementById('graphHigh').textContent = `$${high.toFixed(2)}`;
    document.getElementById('graphLow').textContent = `$${low.toFixed(2)}`;
    
    // Draw chart
    drawCryptoChart(cryptoId);
}

// Draw crypto chart using canvas
function drawCryptoChart(cryptoId) {
    const canvas = document.getElementById('cryptoChart');
    const ctx = canvas.getContext('2d');
    const priceHistory = cryptoPriceHistory[cryptoId];
    
    if (!priceHistory || priceHistory.length === 0) {
        return;
    }
    
    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const padding = 40;
    const width = canvas.width - padding * 2;
    const height = canvas.height - padding * 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Get price range
    const prices = priceHistory.map(p => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
        const y = padding + (height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
        
        // Price labels
        const price = maxPrice - (priceRange / 5) * i;
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`$${price.toFixed(2)}`, padding - 5, y + 3);
    }
    
    // Vertical grid lines
    for (let i = 0; i <= 6; i++) {
        const x = padding + (width / 6) * i;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, canvas.height - padding);
        ctx.stroke();
        
        // Time labels
        const hours = 24 - (24 / 6) * i;
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${hours}h`, x, canvas.height - padding + 20);
    }
    
    // Draw price line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    priceHistory.forEach((point, index) => {
        const x = padding + (width / (priceHistory.length - 1)) * index;
        const y = padding + height - ((point.price - minPrice) / priceRange) * height;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, padding, 0, canvas.height - padding);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    
    priceHistory.forEach((point, index) => {
        const x = padding + (width / (priceHistory.length - 1)) * index;
        const y = padding + height - ((point.price - minPrice) / priceRange) * height;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.closePath();
    ctx.fill();
    
    // Draw data points
    ctx.fillStyle = '#3b82f6';
    priceHistory.forEach((point, index) => {
        const x = padding + (width / (priceHistory.length - 1)) * index;
        const y = padding + height - ((point.price - minPrice) / priceRange) * height;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Highlight current price point
    const lastPoint = priceHistory[priceHistory.length - 1];
    const lastX = canvas.width - padding;
    const lastY = padding + height - ((lastPoint.price - minPrice) / priceRange) * height;
    
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
    ctx.stroke();
}

// Update price history with new prices
function updatePriceHistory() {
    Object.keys(cryptoInvestments).forEach(cryptoId => {
        if (!cryptoPriceHistory[cryptoId]) {
            cryptoPriceHistory[cryptoId] = [];
        }
        
        // Add current price to history
        cryptoPriceHistory[cryptoId].push({
            time: 0,
            price: cryptoInvestments[cryptoId].price
        });
        
        // Keep only last 24 data points
        if (cryptoPriceHistory[cryptoId].length > 24) {
            cryptoPriceHistory[cryptoId].shift();
        }
        
        // Update time indices
        cryptoPriceHistory[cryptoId].forEach((point, index) => {
            point.time = 24 - index - 1;
        });
    });
}

// Show prestige modal
function showPrestigeModal() {
    showModal('prestige');
}

// Update prestige modal content
function updatePrestigeModal() {
    const canPrestige = gameState.totalEarnings >= 1000000; // $1B required
    
    // Update current progress
    document.getElementById('prestigeTotalEarnings').textContent = `$${formatNumber(gameState.totalEarnings)}`;
    document.getElementById('prestigeIncome').textContent = `$${formatNumber(gameState.incomePerSecond * 60)}/min`;
    document.getElementById('prestigeStage').textContent = gameState.currentStage;
    
    // Calculate prestige rewards
    const newPrestigeLevel = gameState.prestige.level + 1;
    const newMultiplier = getPrestigeMultiplier(newPrestigeLevel);
    const startingBonus = getPrestigeStartingBonus(newPrestigeLevel);
    const badge = getPrestigeBadge(newPrestigeLevel);
    
    // Update benefits
    document.getElementById('prestigePointsGain').textContent = `+1`;
    document.getElementById('prestigeMultiplierGain').textContent = `x${newMultiplier.toFixed(1)}`;
    document.getElementById('prestigeStartingBonus').textContent = `$${formatNumber(startingBonus)}`;
    document.getElementById('prestigeBadge').textContent = badge;
    
    // Update button state
    const confirmBtn = document.getElementById('confirmPrestigeBtn');
    const checkbox = document.getElementById('prestigeConfirm');
    
    if (canPrestige && checkbox.checked) {
        confirmBtn.disabled = false;
    } else {
        confirmBtn.disabled = true;
    }
    
    // Add checkbox event listener
    checkbox.onchange = () => {
        if (canPrestige && checkbox.checked) {
            confirmBtn.disabled = false;
        } else {
            confirmBtn.disabled = true;
        }
    };
}

// Get prestige multiplier based on level
function getPrestigeMultiplier(level) {
    const multipliers = {
        1: 2.0,
        2: 3.0,
        3: 5.0,
        4: 7.0,
        5: 10.0,
        6: 15.0,
        7: 20.0,
        8: 25.0,
        9: 30.0,
        10: 50.0
    };
    return multipliers[level] || (level * 5);
}

// Get prestige starting bonus based on level
function getPrestigeStartingBonus(level) {
    const bonuses = {
        1: 10000,
        2: 1000000,
        3: 5000000,
        4: 10000000,
        5: 50000000,
        6: 100000000,
        7: 500000000,
        8: 1000000000,
        9: 5000000000,
        10: 10000000000
    };
    return bonuses[level] || (level * 1000000000);
}

// Get prestige badge based on level
function getPrestigeBadge(level) {
    const badges = {
        1: 'Bronze',
        2: 'Silver',
        3: 'Gold',
        4: 'Platinum',
        5: 'Diamond',
        6: 'Master',
        7: 'Grandmaster',
        8: 'Legendary',
        9: 'Mythic',
        10: 'Transcendent'
    };
    return badges[level] || 'Prestige Master';
}

// Confirm prestige reset
function confirmPrestige() {
    if (gameState.totalEarnings < 1000000) {
        showNotification('You need $1M total earnings to prestige!', 'error');
        return;
    }
    
    // Calculate new prestige stats
    const newPrestigeLevel = gameState.prestige.level + 1;
    const newMultiplier = getPrestigeMultiplier(newPrestigeLevel);
    const startingBonus = getPrestigeStartingBonus(newPrestigeLevel);
    const badge = getPrestigeBadge(newPrestigeLevel);
    
    // Update prestige stats
    gameState.prestige.level = newPrestigeLevel;
    gameState.prestige.points += 1;
    gameState.prestige.multiplier = newMultiplier;
    gameState.prestige.totalPrestigeEarnings += gameState.totalEarnings;
    
    if (!gameState.prestige.badges.includes(badge)) {
        gameState.prestige.badges.push(badge);
    }
    
    // Reset game progress but keep prestige
    resetGameProgress();
    
    // Apply prestige bonuses
    gameState.balance = startingBonus;
    
    // Show success message
    showNotification(`🎉 Prestige Complete! You are now ${badge} with x${newMultiplier} income multiplier!`, 'success');
    
    hideModal('prestige');
    updateUI();
    updatePrestigeDisplay();
}

// Reset game progress for prestige
function resetGameProgress() {
    // Reset basic stats
    gameState.totalEarnings = 0;
    gameState.currentStage = 'Beginner';
    gameState.stageProgress = 0;
    
    // Reset ventures
    Object.keys(gameState.ventures).forEach(ventureId => {
        gameState.ventures[ventureId].purchased = false;
        gameState.ventures[ventureId].owned = false;
    });
    
    // Reset assets
    Object.keys(gameState.assets).forEach(assetId => {
        gameState.assets[assetId].level = assetId === 'house' || assetId === 'clothes' || assetId === 'watch' ? 1 : 0;
    });
    
    // Reset collections
    gameState.carCollection = [];
    gameState.planeCollection = [];
    gameState.luxuryCollection = [];
    
    // Reset crypto
    Object.keys(gameState.cryptoHoldings).forEach(cryptoId => {
        gameState.cryptoHoldings[cryptoId] = { amount: 0, invested: 0 };
    });
    gameState.cryptoBalance = 0;
    
    // Reset stocks
    gameState.stockHoldings = {};
    gameState.stockBalance = 0;
    
    // Reset life stats to default
    gameState.lifeStats = {
        health: 80,
        happiness: 70,
        social: 60,
        intelligence: 75
    };
    
    // Reset love life
    gameState.loveLife = {
        relationship: 'Single',
        partnerName: '',
        relationshipLevel: 0,
        dateCount: 0,
        happiness: 0
    };
}

// Update prestige display
function updatePrestigeDisplay() {
    document.getElementById('currentPrestige').textContent = gameState.prestige.level;
    document.getElementById('prestigeBonus').textContent = `x${gameState.prestige.multiplier.toFixed(1)}`;
    
    // Calculate next prestige requirement
    const nextRequirement = 1000000 * Math.pow(2, gameState.prestige.level);
    if (gameState.totalEarnings >= nextRequirement) {
        document.getElementById('nextPrestige').textContent = 'Available!';
    } else {
        document.getElementById('nextPrestige').textContent = `Reach $${formatNumber(nextRequirement)}`;
    }
}

// Simulate crypto price changes
function simulateCryptoPrices() {
    Object.keys(cryptoInvestments).forEach(cryptoId => {
        const investment = cryptoInvestments[cryptoId];
        const changePercent = (Math.random() - 0.5) * 2 * investment.volatility * 100;
        investment.price *= (1 + changePercent / 100);
        investment.change = changePercent;
    });
    
    updateCrypto();
}

// Performance optimization - update UI less frequently when tab is not visible
let updateInterval = 1000;
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        updateInterval = 5000; // Update every 5 seconds when tab is hidden
    } else {
        updateInterval = 1000; // Update every second when tab is visible
        updateUI(); // Immediate update when tab becomes visible
    }
});
