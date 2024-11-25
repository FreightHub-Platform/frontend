"use server"

import { notificationApi } from "./config";

export const updateNotification = async (id, notificationBody) => {
  try {
    const response = await notificationApi.post('')
  } catch (error) {
    throw new Error('An unexpected error occurred.')
  }
}