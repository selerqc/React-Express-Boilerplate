import { env } from '../config/env'

async function handleResponse(response) {
  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const error = new Error(data.message || 'An error occurred')
    error.status = response.status
    error.data = data
    throw error
  }

  return data
}

export const api = {
  get: async (endpoint, options = {}) => {
    const response = await fetch(`${env.API_URL}${endpoint}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })
    return handleResponse(response)
  },

  post: async (endpoint, data, options = {}) => {
    const response = await fetch(`${env.API_URL}${endpoint}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    })
    return handleResponse(response)
  },

  put: async (endpoint, data, options = {}) => {
    const response = await fetch(`${env.API_URL}${endpoint}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    })
    return handleResponse(response)
  },

  delete: async (endpoint, options = {}) => {
    const response = await fetch(`${env.API_URL}${endpoint}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })
    return handleResponse(response)
  },
}

export default api

