"use client";

import { useState, useEffect, useCallback } from 'react';

const HISTORY_KEY = 'literaryCompass_browsingHistory';
const MAX_HISTORY_SIZE = 20;

export const useBrowsingHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      const storedHistory = window.localStorage.getItem(HISTORY_KEY);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error('Failed to read browsing history from localStorage', error);
      setHistory([]);
    }
  }, []);

  const addBookToHistory = useCallback((bookId: string) => {
    setHistory(prevHistory => {
      // Remove the book if it already exists to move it to the front.
      const newHistory = prevHistory.filter(id => id !== bookId);
      // Add the new book to the front.
      newHistory.unshift(bookId);
      // Ensure the history does not exceed the maximum size.
      const slicedHistory = newHistory.slice(0, MAX_HISTORY_SIZE);
      
      try {
        window.localStorage.setItem(HISTORY_KEY, JSON.stringify(slicedHistory));
      } catch (error) {
        console.error('Failed to save browsing history to localStorage', error);
      }
      
      return slicedHistory;
    });
  }, []);

  return { history, addBookToHistory };
};
