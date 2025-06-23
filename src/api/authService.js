// Register an user 

/* -------------------------CREATE AN ACCOUNT --------------------------------- */

export default async function registerUser(user) {
  const response = await fetch("https://hifi-api-o08m.onrender.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || "Failed to register");
  }

  return response.json(); // Or response.text(), depending on backend
}

/* -------------------------LOGIN --------------------------------- */


export async function loginUser(credentials) {
  const response = await fetch('https://hifi-api-o08m.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || data.error || 'Login failed');
  }

  return data;
}



/* -------------------------PRODUCTS --------------------------------- */

export async function fetchProducts() {
  const response = await fetch('http://localhost:4000/products', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return await response.json();
}





/* -------------------------USER --------------------------------- */

export async function fetchUserById(id, token) {
  try {
    const response = await fetch(`https://hifi-api-o08m.onrender.com/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}


export function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}



/* -------------------------ABOUT US --------------------------------- */




export async function fetchAboutUs() {
  const response = await fetch('https://hifi-api-o08m.onrender.com/aboutUs', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch about us data');
  }

  return await response.json()
}


/* -------------------------SEARCH --------------------------------- */



 export async function fetchSearch(query) {
    const response = await fetch(`https://hifi-api-o08m.onrender.com/products?q=${query}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
       // console.log(response);
    if (!response.ok) {
        throw new Error('Product not found!');
    }

    return await response.json()
}



/* --------------------------EditUser-------------------------- */
export async function editUser(id, updatedData, token) {
  const response = await fetch(`https://hifi-api-o08m.onrender.com/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  })

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || 'Failed to update user');
  }

  
  return response.json();
}
/* ------------------------------------------------------------ */