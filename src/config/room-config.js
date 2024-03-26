const RoomGridItem = [
	{
		currentOccupancy: '8',
		hostName: 'Alexa',
		roomName: 'Innovative Startups',
		availability: true,
		password: 'Innovate2024',
		image: 'https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'San Francisco, USA',
	},
	{
		currentOccupancy: '5',
		hostName: 'Morgan',
		roomName: 'Next Gen AI Concepts',
		availability: false,
		password: 'DeepLearning',
		image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Toronto, Canada',
	},
	{
		currentOccupancy: '12',
		hostName: 'Jordan',
		roomName: 'Blockchain Breakthroughs',
		availability: true,
		password: 'CryptoKing',
		image: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Vancouver, Canada',
	},
	{
		currentOccupancy: '3',
		hostName: 'Casey',
		roomName: 'Virtual Reality Ventures',
		availability: true,
		password: 'VR2024',
		image: 'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
		location: 'Seattle, USA',
	},
	{
		currentOccupancy: '7',
		hostName: 'Susie',
		roomName: 'Cloud Computing Chronicles',
		availability: false,
		password: 'CloudMaster',
		image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Austin, USA',
	},
	{
		currentOccupancy: '9',
		hostName: 'Taylor',
		roomName: 'Fintech Innovators',
		availability: true,
		password: 'FintechFan',
		image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'New York, USA',
	},
	{
		currentOccupancy: '4',
		hostName: 'Robin',
		roomName: 'Sustainable Tech Solutions',
		availability: true,
		password: 'EcoTech',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Boston, USA',
	},
	{
		currentOccupancy: '11',
		hostName: 'Drew',
		roomName: 'Startup Scaling Strategies',
		availability: true,
		password: 'ScaleUp',
		image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Chicago, USA',
	},
	{
		currentOccupancy: '6',
		hostName: 'Sam',
		roomName: 'Healthcare Tech Horizons',
		availability: false,
		password: 'HealthInnovate',
		image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Miami, USA',
	},
	{
		currentOccupancy: '10',
		hostName: 'Charlie',
		roomName: 'EdTech Evolution',
		availability: true,
		password: 'LearnTech',
		image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF2YXRhciUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
		location: 'Los Angeles, USA',
	},
	{
		currentOccupancy: '8',
		hostName: 'Katie',
		roomName: 'Cybersecurity Frontiers',
		availability: true,
		password: 'SecureNet',
		image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'San Diego, USA',
	},
	{
		currentOccupancy: '2',
		hostName: 'Jordan',
		roomName: 'Mobile App Mavericks',
		availability: true,
		password: 'AppInnovate',
		image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Atlanta, USA',
	},
	{
		currentOccupancy: '5',
		hostName: 'Casey',
		roomName: 'UI/UX Design Dynamics',
		availability: false,
		password: 'DesignThinking',
		image: 'https://images.unsplash.com/photo-1552358155-515e264cb8b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
		location: 'Denver, USA',
	},
	{
		currentOccupancy: '13',
		hostName: 'Taylor',
		roomName: 'E-Commerce Empires',
		availability: true,
		password: 'Ecom2024',
		image: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Dallas, USA',
	},
	{
		currentOccupancy: '7',
		hostName: 'Robin',
		roomName: 'Digital Marketing Minds',
		availability: true,
		password: 'MarketLead',
		image: 'https://images.unsplash.com/photo-1613053341193-2b7f654c155f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
		location: 'Philadelphia, USA',
	},
	{
		currentOccupancy: '9',
		hostName: 'Eddy',
		roomName: 'Software Development Deconstructed',
		availability: true,
		password: 'CodeCraft',
		image: 'https://images.unsplash.com/photo-1600442715817-4d9c8b6c729f?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Portland, USA',
	},
	{
		currentOccupancy: '7',
		hostName: 'Alex Johnson',
		roomName: 'Startup Pitch Arena',
		availability: true,
		password: 'Innovate2024',
		image: 'https://images.unsplash.com/photo-1582095418003-0a379d54d26a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
		location: 'San Francisco, USA',
	},
	{
		currentOccupancy: '5',
		hostName: 'Emily Davis',
		roomName: 'VC Networking Hub',
		availability: false,
		password: 'FundingFuture',
		image: 'https://images.unsplash.com/photo-1554175308-e37121817631?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		location: 'Toronto, Canada',
	},
	{
		currentOccupancy: '9',
		hostName: 'Michael Smith',
		roomName: 'Tech Innovators Roundtable',
		availability: true,
		password: 'Disrupt2024',
		image: 'https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww',
		location: 'New York, USA',
	},
	{
		currentOccupancy: '4',
		hostName: 'Sarah Lee',
		roomName: 'Emerging Markets Discussion',
		availability: false,
		password: 'GlobalGrowth',
		image: 'https://images.unsplash.com/photo-1544984581-05ede8383f4c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
		location: 'Vancouver, Canada',
	},
	{
		currentOccupancy: '8',
		hostName: 'James Kim',
		roomName: 'Entrepreneurial Strategy Session',
		availability: true,
		password: 'StrategicPlan',
		image: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D',
		location: 'Tokyo, Japan',
	},
];

export const RoomConfig = {
	item: RoomGridItem,
};
