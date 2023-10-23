export interface User {
	name: string;
}

export interface AccountInfoProps {
	isAuthenticated: boolean;
	token: string;
	refreshToken: string;
	userInfo: {
		id: string;
		name: string;
		email: string;
		role: string;
	};
}
