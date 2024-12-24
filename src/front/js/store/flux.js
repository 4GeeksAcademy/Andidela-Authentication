const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			login: async (email, password) => {
				console.log(email,password);
				
				try{
					// fetching data from the backend
					const response = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: {
							"Content-type": "application/json" 
						},
						body: JSON.stringify({
							email: email,
							password: password
						})
					})
					if (!response.ok){
						throw new Error ("Failed to Login")
					}
					const data = await response.json()

					localStorage.setItem("accessToken", data.access_token)

					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					console.log("User:", data);
					
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			register: async (email, password, is_active, date_of_birth, name) => {
				console.log(email,password, is_active, date_of_birth, name);
				
				try{
					// fetching data from the backend
					const response = await fetch(process.env.BACKEND_URL + "/api/register", {
						method: "POST",
						headers: {
							"Content-type": "application/json" 
						},
						body: JSON.stringify({
							email: email,
							password: password,
							is_active: true,
							date_of_birth: date_of_birth,
							name: name
						})
					})
					if (!response.ok){
						throw new Error ("Failed to Register")
					}
					const data = await response.json()


					// don't forget to return something, that is how the async resolves
					console.log("User:", data);
					
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			viewProfile: async () => {
			let myToken = localStorage.getItem("accessToken")	
				try{
					// fetching data from the backend
					const response = await fetch(process.env.BACKEND_URL + "/api/profile", {
						method: "GET",
						headers: {
							"Content-type": "application/json",
							"authorization": `Bearer ${myToken}` 
						},
					})
					if (response.ok){
						const data = await response.json()
						console.log(data);
						
						return data
				
					}

					// don't forget to return something, that is how the async resolves
					
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
