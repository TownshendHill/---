/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or
‘systemAnalytics’.
**/

/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this
array and print it out.
**/

// function sortUserName(users: User[]):User[]
function sortUserName(users) {
	return users.sort((a, b) => {
		const userA = `${a.firstName}${a.lastName}${a.customerID}`;
		const userB = `${b.firstName}${b.lastName}${b.customerID}`;

		return userA.localeCompare(userB);
	});
}

// mockData: User[]
const mockData = [
	{
		firstName: 'Max',
		lastName: 'Tsai',
		customerID: 0,
		note: 'vip',
		profession: 'engineer',
	},
	{
		firstName: 'Miffy',
		lastName: '',
		customerID: 2,
		note: '',
		profession: 'student',
	},
	{
		firstName: 'Chloe',
		lastName: 'Pan',
		customerID: 3,
		note: 'music',
		profession: 'freelancer',
	},
	{
		firstName: 'Paul',
		lastName: '',
		customerID: 4,
		note: 'data',
		profession: 'systemAnalytics',
	},
	{
		firstName: 'Kenny',
		lastName: 'Cheng',
		customerID: 0,
		note: '',
		profession: 'productOwner',
	},
];

const q1result = sortUserName(mockData);
console.log('Q1 result: ', q1result);

/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/
function sortByType(users) {
	const professionSort = {
		student: 1,
		freelancer: 2,
		productOwner: 3,
		engineer: 4,
		systemAnalytics: 5,
	};

	// b - a (遞減)
	return users.sort((a, b) => {
		return professionSort[b.profession] - professionSort[a.profession];
	});
}

const q2result = sortByType(mockData);
console.log('Q2 result: ', q2result);
