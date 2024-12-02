"use server"

import { notificationApi } from "./config";

export const updateNotification = async (notificationBody, token) => {
  try {
    const response = await notificationApi.post('/add', notificationBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  } catch (error) {
    throw new Error('An unexpected error occurred.')
  }
}

export const getNotification = async (userId, token) => {
  try {
    const response = await notificationApi.post('/user', userId, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    return response.data.data
  } catch (error) {
    throw new Error('An unexpected error occurred.')
  }
}

export const markAsReadNotification = async (messageId, token) => {
  try {
    const response = await notificationApi.post('/mark-as-read', messageId, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    return response.data.data
  } catch (error) {
    throw new Error('An unexpected error occurred.')
  }
}

export const markAsReadAllNotification = async (userId, token) => {
  try {
    const response = await notificationApi.post('/mark-all-as-read', userId, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    return response.data.data
  } catch (error) {
    throw new Error('An unexpected error occurred.')
  }
}