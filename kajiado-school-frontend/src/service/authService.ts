interface LoginResponse {
  access: string;
  refresh: string;
  role: string;
  email: string;
}

export async function login(username: string, password: string): Promise<LoginResponse> {
  const res = await fetch('/api/token/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error('Invalid credentials');
  return res.json();
}

export function saveToken(access: string, refresh: string) {
  localStorage.setItem('access', access);
  localStorage.setItem('refresh', refresh);
}

export function getAccessToken() {
  return localStorage.getItem('access');
}

export function logout() {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
}
