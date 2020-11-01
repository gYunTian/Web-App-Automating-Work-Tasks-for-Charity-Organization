// remaining
// on login, it doesnt set to be authenticated
// loading on login
// redirect to front error

import React, { useEffect } from 'react';

// set context
const AuthContext = React.createContext({
	name: null,
	role: null,
	isAuthenticated: false,
	isLoading: true,
	// setAuthenticated: () => {},
});

// wraps around children component and add context
export const AuthProvider = ({ children }) => {
	const [name, setName] = React.useState('Test');
	const [role, setRole] = React.useState('Test');
	const [isAuthenticated, setAuthenticated] = React.useState(false);
	const [isLoading, setLoading] = React.useState(true);
	const setAuth = (value) => setAuthenticated(value);

	// verify cookie against server
	useEffect(() => {
		const initializeAuth = async () => {
			if (isAuthenticated) {
				console.log('already authenticated');
				return;
			}
			
			try {
				// const response = await fetch('http://localhost:8080/mylocalfunction/', {credentials: 'include'});
				const response = await fetch('http://localhost:5000/api/auth/verify', {credentials: 'include'});
				//const response = await fetch('https://67590a5d-49be-4eb3-a302-c90be94feb62-faas-http.tenant.us10.functions.xfs.cloud.sap/mylocalhttptrigger/', {credentials: 'include'});

				if (response.status === 200) {
					console.log('server okay');
					const data = await response.json();
					setAuthenticated(true);
					setLoading(false);
					setName(data.name);
					setRole(data.role);

				} else {
					console.log(response);
					console.log('not authenticated');
					setLoading(false);

				}
			} catch (error) {
				console.log('server might be down');
				setLoading(false);

			}
		};
		initializeAuth();
	}, []);

	return (
		<AuthContext.Provider value={{ isAuthenticated, isLoading, name, role, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error('missing AuthProvider');
	}
	return context;
}

export function useIsAuthenticated() {
	const context = useAuth();
	return context.isAuthenticated;
}

export function getName() {
	const context = useAuth();
	return context.name;
}

export function getRole() {
	const context = useAuth();
	return context.role;
}