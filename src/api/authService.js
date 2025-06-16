// Register an user 



export default async function registerUser(user) {
  const response = await fetch("http://localhost:4000/register", {
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


// Login


export async function loginUser(credentials) {
  const response = await fetch('http://localhost:4000/login', {
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


// Statements

// export async function fetchStatements() {
//   const response = await fetch('http://localhost:4000/statements', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch statements');
//   }

//   return await response.json();
// }


// Products

export async function fetchProducts() {
  const response = await fetch('http://localhost:4000/products', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch statements');
  }

  return await response.json();
}



// Profile 

export async function fetchUserById(id, token) {
  try {
    const response = await fetch(`http://localhost:4000/600/users/${id}`, {
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

// About Us

// About Us

export async function fetchAboutUs() {
  const response = await fetch('http://localhost:4000/aboutUs', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch about us data');
  }

  return await response.json();
}
