const firstName = 'Thibault';
const lastName = 'Eynard';
const suffix = 'Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
